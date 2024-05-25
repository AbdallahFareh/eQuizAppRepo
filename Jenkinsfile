pipeline {
    agent any 
    tools {
        dockerTool 'Docker'
    }
    stages{
        stage("Clone Repository") {
            steps{
                git 'https://github.com/AbdallahFareh/eQuizAppRepo'
            }
        }

         stage("Build Docker Image") {
            steps{
                script{
                  sh '/usr/local/bin/docker build -t quizz-app-front:v1 .'
                }
            }
        }

        stage("Run Docker Container"){
            steps{
                script{
                     sh '/usr/local/bin/docker run -p 8090:80 quizz-app-front:v1'
                }
            }
        }
    }
}