pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/manolo-tambien/api-jenkins.git', branch: 'main')
      }
    }

    stage('install npm') {
      steps {
        sh 'npm install'
      }
    }

  }
}