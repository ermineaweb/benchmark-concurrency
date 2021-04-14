
---------------------------------
### Benchmark adonis
```
Running 5s test @ http://adonis:3000/no_process
  4 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.43s     1.19s    4.92s    59.27%
    Req/Sec       -nan      -nan   0.00      0.00%
  4617 requests in 5.02s, 4.42MB read
Requests/sec:    920.30
Transfer/sec:      0.88MB
```

---------------------------------
### Benchmark express
```
Running 5s test @ http://express:3000/no_process
  4 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.04s     1.14s    4.54s    58.50%
    Req/Sec       -nan      -nan   0.00      0.00%
  20516 requests in 5.06s, 4.56MB read
  Socket errors: connect 0, read 0, write 0, timeout 102
Requests/sec:   4054.66
Transfer/sec:      0.90MB
```

---------------------------------
### Benchmark express-cluster
```
Running 5s test @ http://express-cluster:3000/no_process
  4 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.05s     1.11s    4.19s    59.57%
    Req/Sec       -nan      -nan   0.00      0.00%
  48579 requests in 5.00s, 10.79MB read
Requests/sec:   9718.00
Transfer/sec:      2.16MB
```

---------------------------------
### Benchmark express-forked
```
Running 5s test @ http://express-forked:3000/no_process
  4 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.30s     1.23s    4.71s    59.39%
    Req/Sec       -nan      -nan   0.00      0.00%
  18745 requests in 5.00s, 4.17MB read
Requests/sec:   3748.53
Transfer/sec:    852.94KB
```

---------------------------------
### Benchmark fastify
```
Running 5s test @ http://fastify:3000/no_process
  4 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.04s     1.09s    4.22s    59.80%
    Req/Sec       -nan      -nan   0.00      0.00%
  65662 requests in 5.00s, 10.65MB read
Requests/sec:  13125.95
Transfer/sec:      2.13MB
```

---------------------------------
### Benchmark fastify-cluster
```
Running 5s test @ http://fastify-cluster:3000/no_process
  4 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.00s   907.77ms   3.70s    62.24%
    Req/Sec       -nan      -nan   0.00      0.00%
  114106 requests in 5.00s, 18.50MB read
Requests/sec:  22813.71
Transfer/sec:      3.70MB
```

---------------------------------
### Benchmark fastify-forked
```
Running 5s test @ http://fastify-forked:3000/no_process
  4 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.76s     1.04s    3.82s    55.37%
    Req/Sec       -nan      -nan   0.00      0.00%
  69849 requests in 4.99s, 11.32MB read
Requests/sec:  13998.99
Transfer/sec:      2.27MB
```

---------------------------------
### Benchmark golang
```
Running 5s test @ http://golang:3000/no_process
  4 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   808.12ms  656.24ms   2.21s    53.85%
    Req/Sec       -nan      -nan   0.00      0.00%
  238150 requests in 5.01s, 27.94MB read
Requests/sec:  47581.56
Transfer/sec:      5.58MB
```

---------------------------------
### Benchmark golang-goroutines
```
Running 5s test @ http://golang-goroutines:3000/no_process
  4 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   897.29ms  603.76ms   2.11s    55.00%
    Req/Sec       -nan      -nan   0.00      0.00%
  229640 requests in 5.00s, 26.94MB read
Requests/sec:  45950.53
Transfer/sec:      5.39MB
```

---------------------------------
### Benchmark rust
```
Running 5s test @ http://rust:3000/no_process
  4 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   590.84ms  475.28ms   2.15s    63.58%
    Req/Sec       -nan      -nan   0.00      0.00%
  311972 requests in 5.00s, 32.13MB read
Requests/sec:  62392.88
Transfer/sec:      6.43MB
```
