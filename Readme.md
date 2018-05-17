**node**

```
docker build -t webserver-image .
docker run -p 8080:8080 --name webserver-node webserver-image 
curl localhost:8080
```
