# MyGallery: Self-hosting pictures a nice way

MyGallery helps you being independant from Cloud providers and storing your picture with style to store it on your own NAS or server!

The project is using Java (8, 11, 12 compatible).

## Installation

For simple test you can start the project with :
```bash
./mvnw
```

For a regular usage I would encourage you to use Docker :

```bash
./mvnw -Pprod verify jib:dockerBuild
```

```bash
docker-compose -f src/main/docker/app.yml up -d
```

If you choose to deploy on Docker you must to add the following line to make the authentificatioon work.
Hosts file (/etc/hosts on Linux) :
```bash
127.0.0.1	keycloak
```

For issues or details, you will find the complete documentation in the src directory.

## About this project

Basically, I'm developing my own tools for my own needs but if you want to contribute to this project, feel free to make a pull request or creating a fork ;) 
