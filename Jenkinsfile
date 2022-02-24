pipeline {
     agent {
    // this image provides everything needed to run Cypress
    docker { image 'cypress/base:latest'}
  }
    
    environment {
        BUILD_USER = ''
    }

  tools {nodejs "node"}

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/integration/**', description: 'Ej: cypress/integration/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }

  stages {    
      
    stage('Install dependencies') {
      steps {
        sh 'npm i'
		sh 'npm install cypress --save-dev'
      }
    }

	stage('run cypress') {
      steps {
        sh 'npm ci'
        sh "npm run test:ci:record"
      }
    }
  }
}
