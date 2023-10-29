# simple-nodejs-project

**Before Run please change your working Dir**

vi Dockerfile

set WORKDIR /root/hhhh/simple-nodejs-project  --- project directory 

# Copy the local project directory into the container

Then run 
docker image build -t nodeproject:1 .

docker container run -it nodeproject:1 .

then http://192.168.216.144:8085/blog
