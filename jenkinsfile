node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'vaibhavdockerhubcred') {

        def customImage = docker.build("vaibhavvdo1/jenkins-repo")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
