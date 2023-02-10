node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'vaibhavdocker') {

        def customImage = docker.build("vaibhavdo1/jenkins-repo:jenkinslabimage")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
