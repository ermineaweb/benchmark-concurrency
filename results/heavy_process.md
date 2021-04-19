
---------------------------------
### Benchmark adonis
```
Running 30s test @ http://adonis:3000/heavy_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 5249.206ms, rate sampling interval: 19742ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.93s     5.50s   28.95s    57.10%
    Req/Sec     4.11     19.82   111.00     95.87%
  604 requests in 31.27s, 591.61KB read
  Socket errors: connect 0, read 144, write 0, timeout 13529
Requests/sec:     19.31
Transfer/sec:     18.92KB
```

---------------------------------
### Benchmark express
```
Running 30s test @ http://express:3000/heavy_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 5455.911ms, rate sampling interval: 19283ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.87s     5.27s   28.93s    59.11%
    Req/Sec     1.87     13.61   111.00     98.14%
  610 requests in 31.26s, 141.78KB read
  Socket errors: connect 0, read 200, write 0, timeout 13404
Requests/sec:     19.51
Transfer/sec:      4.54KB
```

---------------------------------
### Benchmark express-cluster
```
Running 30s test @ http://express-cluster:3000/heavy_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 5374.674ms, rate sampling interval: 19726ms
  Thread calibration: mean lat.: 5544.520ms, rate sampling interval: 20217ms
  Thread calibration: mean lat.: 5859.642ms, rate sampling interval: 19988ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    21.07s     5.23s   29.74s    59.42%
    Req/Sec     0.00      0.00     0.00    100.00%
  1873 requests in 31.27s, 435.33KB read
  Socket errors: connect 0, read 0, write 0, timeout 13144
Requests/sec:     59.90
Transfer/sec:     13.92KB
```

---------------------------------
### Benchmark express-forked
```
Running 30s test @ http://express-forked:3000/heavy_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    24.46s    90.26ms  25.92s    88.80%
    Req/Sec    10.10    149.08     3.40k    99.34%
  750 requests in 31.26s, 174.32KB read
  Socket errors: connect 0, read 0, write 0, timeout 14231
Requests/sec:     23.99
Transfer/sec:      5.58KB
```

---------------------------------
### Benchmark fastify
```
Running 30s test @ http://fastify:3000/heavy_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 5290.498ms, rate sampling interval: 18612ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.77s     5.38s   28.90s    57.88%
    Req/Sec     3.28     17.73   111.00     96.67%
  581 requests in 31.27s, 95.32KB read
  Socket errors: connect 0, read 270, write 0, timeout 13372
Requests/sec:     18.58
Transfer/sec:      3.05KB
```

---------------------------------
### Benchmark fastify-cluster
```
Running 30s test @ http://fastify-cluster:3000/heavy_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 5644.843ms, rate sampling interval: 20299ms
  Thread calibration: mean lat.: 5625.922ms, rate sampling interval: 20201ms
  Thread calibration: mean lat.: 5617.192ms, rate sampling interval: 19955ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    20.55s     5.45s   29.77s    56.22%
    Req/Sec     0.00      0.00     0.00    100.00%
  2006 requests in 31.26s, 329.11KB read
  Socket errors: connect 0, read 0, write 0, timeout 13022
Requests/sec:     64.17
Transfer/sec:     10.53KB
```

---------------------------------
### Benchmark fastify-forked
```
Running 30s test @ http://fastify-forked:3000/heavy_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 2700.629ms, rate sampling interval: 5537ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.28s     2.25s   27.43s    90.76%
    Req/Sec     0.97     22.57     1.11k    99.55%
  267 requests in 31.29s, 43.80KB read
  Socket errors: connect 0, read 8, write 0, timeout 14309
Requests/sec:      8.53
Transfer/sec:      1.40KB
```

---------------------------------
### Benchmark golang
```
Running 30s test @ http://golang:3000/heavy_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    25.81s     2.73s   29.61s    74.82%
    Req/Sec     1.89     14.58   222.00     98.24%
  141 requests in 31.29s, 16.66KB read
  Socket errors: connect 0, read 0, write 0, timeout 13840
Requests/sec:      4.51
Transfer/sec:     545.28B
```

---------------------------------
### Benchmark golang-goroutines
```
Running 30s test @ http://golang-goroutines:3000/heavy_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 9037.153ms, rate sampling interval: 20201ms
  Thread calibration: mean lat.: 5619.568ms, rate sampling interval: 14344ms
  Thread calibration: mean lat.: 9145.739ms, rate sampling interval: 20398ms
  Thread calibration: mean lat.: 2634.441ms, rate sampling interval: 6545ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.68s     5.24s   28.26s    56.42%
    Req/Sec    14.00      6.68    23.00     66.67%
  1455 requests in 31.31s, 170.51KB read
  Socket errors: connect 0, read 0, write 0, timeout 12675
Requests/sec:     46.46
Transfer/sec:      5.44KB
```

---------------------------------
### Benchmark rust
```
Running 30s test @ http://rust:3000/heavy_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 2584.760ms, rate sampling interval: 9887ms
  Thread calibration: mean lat.: 2540.789ms, rate sampling interval: 9306ms
  Thread calibration: mean lat.: 2726.558ms, rate sampling interval: 9723ms
  Thread calibration: mean lat.: 2804.951ms, rate sampling interval: 10182ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     9.24s     3.24s   17.60s    64.34%
    Req/Sec    13.11k   676.03    13.97k    60.00%
  1491823 requests in 30.00s, 149.38MB read
Requests/sec:  49723.32
Transfer/sec:      4.98MB
```
