pipeline {
    agent any
    tools {
        dockerTool 'Docker'
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub') // Assurez-vous que les identifiants Docker Hub sont configurés dans Jenkins
    }
    stages {
        stage("Clone Repository") {
            steps {
                git branch: 'main', url: 'https://github.com/AbdallahFareh/eQuizAppRepo'
            }
        }

        stage("Install Dependencies") {
            agent {
                docker {
                    image 'node:latest'
                    args '-u 0:0' // Exécute le conteneur en tant que root
                }
            }
            steps {
                script {
                    sh 'npm install --unsafe-perm' // Utiliser --unsafe-perm pour éviter les problèmes de permissions
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
                    withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'DOCKER_PWD', usernameVariable: 'DOCKER_USER')]) {
                        sh 'docker login -u $DOCKER_USER -p $DOCKER_PWD'
                    }
                }
            }
        }

        stage("Push Docker Image") {
            steps {
                script {
                    sh 'docker push $DOCKERHUB_CREDENTIALS_USR/my-angular-app:latest'
                }
            }
        }

    }
}
