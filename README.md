# hwyd-docker

`docker build -t kevinjscott/hwyd-docker .

`docker push kevinjscott/hwyd-docker

`docker run -p 3000:3000 kevinjscott/hwyd-docker

`docker exec -it kev /bin/sh

`docker rm $(docker ps -a -q); docker rmi $(docker images -q)

