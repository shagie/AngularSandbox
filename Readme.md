**ngnix**

```
docker build -t webserver-image:nginx .
docker run -p 80:80 --name webserver-nginx webserver-image:nginx 
curl localhost
```
