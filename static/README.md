# cloudlab-static   


# build the docker image    
docker build -t cloudlab-static .      

# run containers using docker-compose       
docker run -p3000:80 cloudlab-static    

# clean up  
docker container prune -f       
