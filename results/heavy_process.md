
---------------------------------
### Benchmark express
```
Running 30s test @ http://express:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 7239.142ms, rate sampling interval: 17891ms
  Thread calibration: mean lat.: 8644.352ms, rate sampling interval: 18972ms
  Thread calibration: mean lat.: 2904.922ms, rate sampling interval: 10313ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.62s     5.51s   28.95s    58.63%
    Req/Sec     4.59     20.79   111.00     95.35%
  641 requests in 30.65s, 148.98KB read
  Socket errors: connect 0, read 206, write 0, timeout 6096
Requests/sec:     20.91
Transfer/sec:      4.86KB
```

---------------------------------
### Benchmark express-cluster
```
Running 30s test @ http://express-cluster:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 5033.909ms, rate sampling interval: 18661ms
  Thread calibration: mean lat.: 5248.244ms, rate sampling interval: 18792ms
  Thread calibration: mean lat.: 5116.360ms, rate sampling interval: 18677ms
  Thread calibration: mean lat.: 6062.242ms, rate sampling interval: 19398ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    20.92s     5.38s   29.82s    60.18%
    Req/Sec    20.33      0.47    21.00    100.00%
  2233 requests in 30.03s, 519.00KB read
  Socket errors: connect 0, read 0, write 0, timeout 5838
Requests/sec:     74.36
Transfer/sec:     17.28KB
```

---------------------------------
### Benchmark express-forked
```
Running 30s test @ http://express-forked:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 3899.711ms, rate sampling interval: 7786ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    17.80s     5.27s   23.87s    33.77%
    Req/Sec    13.36    175.94     4.10k    99.24%
  1203 requests in 30.65s, 279.60KB read
  Socket errors: connect 0, read 29, write 0, timeout 5775
Requests/sec:     39.25
Transfer/sec:      9.12KB
```

---------------------------------
### Benchmark fastify
```
Running 30s test @ http://fastify:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 4849.277ms, rate sampling interval: 17235ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.34s     5.57s   28.93s    58.37%
    Req/Sec     5.69     23.30   111.00     94.34%
  670 requests in 30.64s, 109.92KB read
  Socket errors: connect 0, read 190, write 0, timeout 6024
Requests/sec:     21.87
Transfer/sec:      3.59KB
```

---------------------------------
### Benchmark fastify-cluster
```
Running 30s test @ http://fastify-cluster:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 5490.445ms, rate sampling interval: 18923ms
  Thread calibration: mean lat.: 5317.489ms, rate sampling interval: 18923ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    20.71s     5.42s   29.80s    57.93%
    Req/Sec     0.02      0.93    41.00     99.95%
  2285 requests in 30.64s, 374.88KB read
  Socket errors: connect 0, read 0, write 0, timeout 5836
Requests/sec:     74.59
Transfer/sec:     12.24KB
```

---------------------------------
### Benchmark fastify-forked
```
Running 30s test @ http://fastify-forked:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 6190.068ms, rate sampling interval: 14172ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.38s     4.50s   28.46s    58.80%
    Req/Sec     6.35    128.06     4.89k    99.63%
  661 requests in 30.64s, 108.45KB read
  Socket errors: connect 0, read 40, write 0, timeout 6052
Requests/sec:     21.57
Transfer/sec:      3.54KB
```

---------------------------------
### Benchmark golang
```
Running 30s test @ http://golang:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 10006.528ms, rate sampling interval: 20021ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    20.92s     2.86s   29.79s    74.90%
    Req/Sec     6.96     27.66   333.00     93.60%
  530 requests in 30.64s, 62.63KB read
  Socket errors: connect 0, read 0, write 0, timeout 6363
Requests/sec:     17.30
Transfer/sec:      2.04KB
```

---------------------------------
### Benchmark golang-echo
```
Running 30s test @ http://golang-echo:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    20.70s     3.11s   29.43s    72.62%
    Req/Sec     7.10     27.71   222.00     93.46%
  529 requests in 30.69s, 62.51KB read
  Socket errors: connect 0, read 0, write 0, timeout 6380
Requests/sec:     17.24
Transfer/sec:      2.04KB
```

---------------------------------
### Benchmark golang-gin
```
Running 30s test @ http://golang-gin:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 7419.904ms, rate sampling interval: 16424ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    21.07s     3.98s   28.77s    77.11%
    Req/Sec     7.06     72.26     2.25k    96.39%
  553 requests in 30.66s, 76.69KB read
  Socket errors: connect 0, read 0, write 0, timeout 6094
Requests/sec:     18.04
Transfer/sec:      2.50KB
```

---------------------------------
### Benchmark golang-goroutines
```
Running 30s test @ http://golang-goroutines:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 3560.439ms, rate sampling interval: 10379ms
  Thread calibration: mean lat.: 5853.569ms, rate sampling interval: 14286ms
  Thread calibration: mean lat.: 8385.216ms, rate sampling interval: 18464ms
  Thread calibration: mean lat.: 1605.304ms, rate sampling interval: 5013ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.38s     5.39s   28.30s    57.89%
    Req/Sec    12.67      8.77    24.00     50.00%
  1451 requests in 30.69s, 170.04KB read
  Socket errors: connect 0, read 0, write 0, timeout 5600
Requests/sec:     47.28
Transfer/sec:      5.54KB
```

---------------------------------
### Benchmark golang-httprouter
```
Running 30s test @ http://golang-httprouter:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 8255.488ms, rate sampling interval: 16515ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 5407.228ms, rate sampling interval: 16924ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.01s     4.83s   29.62s    65.31%
    Req/Sec     8.21     29.43   222.00     92.38%
  720 requests in 30.19s, 85.08KB read
  Socket errors: connect 0, read 0, write 0, timeout 5953
Requests/sec:     23.85
Transfer/sec:      2.82KB
```

---------------------------------
### Benchmark rust
```
Running 30s test @ http://rust:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 2020.230ms, rate sampling interval: 7344ms
  Thread calibration: mean lat.: 2984.827ms, rate sampling interval: 9551ms
  Thread calibration: mean lat.: 1894.941ms, rate sampling interval: 7467ms
  Thread calibration: mean lat.: 2435.771ms, rate sampling interval: 8544ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.93s     2.02s   12.66s    63.79%
    Req/Sec    17.71k     3.10k   21.57k    50.00%
  1927912 requests in 29.96s, 193.05MB read
Requests/sec:  64355.79
Transfer/sec:      6.44MB
```
