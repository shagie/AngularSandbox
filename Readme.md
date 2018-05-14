**ngix**

```
docker build -t webserver-image:ngix .
docker run -p 80:80 --name webserver-ngix webserver-image:ngix 
curl localhost
```
