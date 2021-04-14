
---------------------------------
### Benchmark adonis
```
Running 5s test @ http://adonis:3000/heavy_process
  4 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.49s     1.33s    4.78s    57.14%
    Req/Sec       -nan      -nan   0.00      0.00%
  108 requests in 6.63s, 105.78KB read
  Socket errors: connect 0, read 0, write 0, timeout 1010
Requests/sec:     16.29
Transfer/sec:     15.96KB
```

---------------------------------
### Benchmark express
```
Running 5s test @ http://express:3000/heavy_process
  4 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.46s     1.38s    4.78s    56.88%
    Req/Sec       -nan      -nan   0.00      0.00%
  112 requests in 6.63s, 26.03KB read
  Socket errors: connect 0, read 0, write 0, timeout 1037
Requests/sec:     16.89
Transfer/sec:      3.93KB
```

---------------------------------
### Benchmark express-cluster
```
Running 5s test @ http://express-cluster:3000/heavy_process
  4 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.35s     1.42s    4.91s    56.45%
    Req/Sec       -nan      -nan   0.00      0.00%
  191 requests in 5.12s, 44.39KB read
  Socket errors: connect 0, read 0, write 0, timeout 941
Requests/sec:     37.31
Transfer/sec:      8.67KB
```

---------------------------------
### Benchmark express-forked
```
Running 5s test @ http://express-forked:3000/heavy_process
  4 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.02s    48.70ms   2.16s    69.57%
    Req/Sec       -nan      -nan   0.00      0.00%
  23 requests in 6.64s, 5.35KB read
  Socket errors: connect 0, read 0, write 0, timeout 1155
Requests/sec:      3.46
Transfer/sec:     824.28B
```

---------------------------------
### Benchmark fastify
```
