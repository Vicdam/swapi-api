pipeline {
  agent any

  tools {nodejs "node"}

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/integration/**', description: 'Ej: cypress/integration/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }

  stages {    
      
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

	stage('run cypress') {
      steps {
        sh 'npx cypress run --browser ${BROWSER} --spec "${SPEC}"'
      }
    }    
     
  }
}
