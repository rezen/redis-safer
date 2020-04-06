import redis

client = redis.StrictRedis(
    host='server',
    port=6379,
    ssl=True,
    ssl_cert_reqs='required',
    ssl_ca_certs='/etc/stunnel/redis-server.crt',
)

if client.set('foo', 'bar'):
    print("\n[i] Python client worked!\n")