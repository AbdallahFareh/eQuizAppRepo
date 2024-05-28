pipeline {
    agent any 
    tools {
        dockerTool 'Docker'
    }
    stages{
        stage("Clone Repository") {
            steps{
                 git branch: 'main', url: 'https://github.com/AbdallahFareh/eQuizAppRepo'
            }
        }

         stage("Build Docker Image") {
            steps{
                script{
                  sh 'docker build -t my-angular-app .'
                }
            }
        }

        stage("Run Docker Container"){
            steps{
                script{
                     sh 'docker run -p 4200:4200 my-angular-app'
                }
            }
        }
    }
}