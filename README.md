# hwyd-docker

`docker build -t kevinjscott/hwyd-docker .`

`docker push kevinjscott/hwyd-docker`

`docker run -p 3000:3000 kevinjscott/hwyd-docker`

`docker run -p 3000:3000 --rm=true kevinjscott/hwyd-docker`

`docker exec -it kev /bin/bash`

`docker exec -it b2 mongo my_app_development`

`docker rm $(docker ps -a -q); docker rmi $(docker images -q)`

`sudo usermod -a -G docker $USER`

`eb deploy --version hwyd`

