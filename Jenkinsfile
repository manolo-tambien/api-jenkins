pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/manolo-tambien/api-jenkins.git', branch: 'main')
      }
    }

    stage('Check directory exist') {
      steps {
        sh 'ls -la'
      }
    }

    stage('install npm') {
      steps {
        sh 'npm install'
      }
    }

    stage('unit test') {
      steps {
        sh 'npm test -- --bail'
      }
    }

  }
}