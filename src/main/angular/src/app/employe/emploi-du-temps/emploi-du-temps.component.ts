
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject, Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { ActiviteService, ActiviteResponse } from 'src/app/services/activite.service';
import { Activite } from '../../interfaces/activite';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-emploi-du-temps',
  templateUrl: './emploi-du-temps.component.html',
  styleUrls: ['./emploi-du-temps.component.css']
})
export class EmploiDuTempsComponent{
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();


  listActivite :  Observable<Activite>;
  modalData: {
    action: string;
    event: CalendarEvent;
  };




  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [

    {
      start: startOfDay(new Date("2020-03-03")),
      title: '14:00 -> 16:00  : Activite 1',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: startOfDay(new Date("2020-03-22")),
      title: '08:00 -> 12:00  : Activite 4',
      color: colors.yellow,
      actions: this.actions
    }
  ];




  constructor(private modal: NgbModal,private activiteService : ActiviteService) {

    this.activiteService.getAll().subscribe(
      data => this.listActivite = data,
      error => console.log(error))     

  }
  activeDayIsOpen: boolean = true;



  pushEvents(){

    this.listActivite.forEach(a => {
      console.log(a)
      this.events.push({
        start: startOfDay(new Date(a.jour)),
        title: a.heureDebut + " -> " + a.heureFin + ' : ' + a.nom,
        color: colors.yellow,
        actions: this.actions
      })


    });
  }

  ngOnInit() {


    this.activiteService.getAll().subscribe(
      data => this.listActivite = data,
      error => console.log(error))   

    this.pushEvents();

    
  }

  ngAfterViewInit(){
    this.activiteService.getAll().subscribe(
      data => this.listActivite = data,
      error => console.log(error))   

    this.pushEvents();

    
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }


  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
