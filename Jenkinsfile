pipeline {
    agent any 
    tools {
        dockerTool 'Docker'
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub') // Utilisez l'ID configuré ici
    }
    stages{
        stage("Clone Repository") {
            steps {
                git branch: 'main', url: 'https://github.com/AbdallahFareh/eQuizAppRepo'
            }
        }

        stage("Install Dependencies") {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm install primeng --save'
                    sh 'npm install primeicons --save'
                    sh 'npm install primeflex --save'
                }
            }
        }

        stage("Run Tests") {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }

        stage("Build Docker Image") {
            steps {
                script {
                    sh 'docker build -t my-angular-app .'
                }
            }
        }

        stage("Login to Docker Hub") {
            steps {
                script {
                    sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
                }
            }
        }

        stage("Push Docker Image") {
            steps {
                script {
                    sh 'docker tag my-angular-app $DOCKERHUB_CREDENTIALS_USR/my-angular-app:latest'
                    sh 'docker push $DOCKERHUB_CREDENTIALS_USR/my-angular-app:latest'
                }
            }
        }

    }
}
