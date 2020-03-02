pipeline {
    agent any

    stages {
        stage('Clean') {
            steps {
                sh "mvn clean"
            }
        }
        stage('Build') {
            steps {
                sh "mvn compile"
            }
        }
        stage('TestEAquarium') {
            steps {
                sh "mvn test"
            }
        }
    }
}
