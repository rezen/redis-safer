'use strict';

const fs    = require('fs');  
const url   = require('url');
const redis = require("redis");  

const client = redis.createClient("rediss://server:6379",  { 
    tls: { 
        servername: new url.URL("rediss://server:6379").hostname,
        ca: fs.readFileSync("/etc/stunnel/redis-server.crt")
    }
});

client.set("foo", "bar", function(err, reply) {
    if (err) {
        console.error('[!]', err);
    }

    console.log("\n[i] node.js client worked!", reply, "\n")
});
