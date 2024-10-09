pipeline {
    agent any
    
    stages {
        stage('Clone Repository') {
            steps {
                // Clone the GitHub repository
                git 'https://github.com/johnzama/world-clock.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                script {
                    def image = docker.build("world-clock:${env.BUILD_ID}")
                }
            }
        }
        
        stage('Run Docker Container') {
            steps {
                // Run the Docker container and expose port 8023
                script {
                    docker.image("world-clock:${env.BUILD_ID}").run('-p 8023:80')
                }
            }
        }
    }
    
    post {
        always {
            // Clean up any stopped containers after the build
            script {
                sh 'docker ps -q --filter "status=exited" | xargs docker rm'
            }
        }
    }
}

