# redis-safer
There are a few tutorials on using `stunnel` to help secure your `redis-server` instance using a TLS TCP proxy. To validate those tutorials, I went ahead and put everything together with a simple `Docker` setup.



## Steps
**Create certs**  
```sh
mkdir -p ./etc/stunnel
openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout  ./etc/stunnel/redis-server.key -out  ./etc/stunnel/redis-server.crt  -subj "/C=US/ST=California/L=San Francisco/O=security/OU=security/CN=server"
chmod 600 ./etc/stunnel/redis-server.key
```

**Run example**
```sh
docker-compose up
# Verify the connection is reset by peer ... 
# proof that the connection must be via tls
docker-compose exec client redis-cli -h server ping

# Should get pong ... proves proxy is working :)
docker-compose exec client redis-cli -p 8000 ping
```

## Links 
- https://medium.com/@Sur_Kan/redis-secure-master-slave-using-stunnel-aab12286ec8e
- https://www.digitalocean.com/community/tutorials/how-to-encrypt-traffic-to-redis-with-stunnel-on-ubuntu-16-04
- https://github.com/ibm-watson-data-lab/stunredis/
- https://itschr.is/remote-redis-spiped-vs-stunnel/
- https://github.com/square/ghostunnel