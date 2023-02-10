node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'vaibhavdocker') {

        def customImage = docker.build("vaibhavvdo1/jenkins-repo:jenkinslabimagev2")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
