
---------------------------------
### Benchmark adonis
```
Running 30s test @ http://adonis:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 6643.256ms, rate sampling interval: 15499ms
  Thread calibration: mean lat.: 4298.925ms, rate sampling interval: 19300ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.49s     5.51s   28.97s    56.94%
    Req/Sec     5.37     22.25   111.00     94.49%
  757 requests in 30.66s, 741.13KB read
  Socket errors: connect 0, read 73, write 0, timeout 6218
Requests/sec:     24.69
Transfer/sec:     24.17KB
```

---------------------------------
### Benchmark express
```
Running 30s test @ http://express:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 5200.386ms, rate sampling interval: 18644ms
  Thread calibration: mean lat.: 5252.525ms, rate sampling interval: 18710ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.93s     5.41s   29.41s    60.08%
    Req/Sec     2.10     14.27   111.00     97.88%
  767 requests in 30.64s, 178.27KB read
  Socket errors: connect 0, read 199, write 0, timeout 6136
Requests/sec:     25.04
Transfer/sec:      5.82KB
```

---------------------------------
### Benchmark express-cluster
```
Running 30s test @ http://express-cluster:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 5134.819ms, rate sampling interval: 18825ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 5379.125ms, rate sampling interval: 18825ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    20.25s     5.51s   29.75s    57.39%
    Req/Sec     0.03      1.11    50.00     99.95%
  2698 requests in 30.64s, 627.07KB read
  Socket errors: connect 0, read 0, write 0, timeout 5695
Requests/sec:     88.06
Transfer/sec:     20.47KB
```

---------------------------------
### Benchmark express-forked
```
Running 30s test @ http://express-forked:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 6852.117ms, rate sampling interval: 17678ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.95s     5.60s   28.84s    70.29%
    Req/Sec    19.03    230.52     5.11k    99.13%
  1564 requests in 30.65s, 363.51KB read
  Socket errors: connect 0, read 0, write 0, timeout 5563
Requests/sec:     51.02
Transfer/sec:     11.86KB
```

---------------------------------
### Benchmark fastify
```
Running 30s test @ http://fastify:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 5261.382ms, rate sampling interval: 18710ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 5220.308ms, rate sampling interval: 18776ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.83s     5.43s   29.46s    58.10%
    Req/Sec     1.91     13.63   111.00     98.08%
  782 requests in 30.64s, 128.30KB read
  Socket errors: connect 0, read 183, write 0, timeout 6146
Requests/sec:     25.52
Transfer/sec:      4.19KB
```

---------------------------------
### Benchmark fastify-cluster
```
Running 30s test @ http://fastify-cluster:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 5059.572ms, rate sampling interval: 17874ms
  Thread calibration: mean lat.: 5512.869ms, rate sampling interval: 18251ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 6053.115ms, rate sampling interval: 17809ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.25s     5.59s   28.90s    57.46%
    Req/Sec     1.00      9.85   111.00     98.90%
  2604 requests in 30.26s, 427.22KB read
  Socket errors: connect 0, read 0, write 0, timeout 4594
Requests/sec:     86.04
Transfer/sec:     14.12KB
```

---------------------------------
### Benchmark fastify-forked
```
Running 30s test @ http://fastify-forked:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 5572.384ms, rate sampling interval: 19906ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 7491.665ms, rate sampling interval: 19955ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.90s     3.78s   22.69s    72.19%
    Req/Sec     6.56    117.29     3.60k    99.56%
  600 requests in 30.66s, 98.44KB read
  Socket errors: connect 0, read 52, write 0, timeout 6534
Requests/sec:     19.57
Transfer/sec:      3.21KB
```

---------------------------------
### Benchmark golang
```
Running 30s test @ http://golang:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 8606.686ms, rate sampling interval: 20430ms
  Thread calibration: mean lat.: 8099.840ms, rate sampling interval: 16203ms
  Thread calibration: mean lat.: 8954.321ms, rate sampling interval: 20594ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.17s     6.08s   29.52s    54.63%
    Req/Sec    11.37     36.85   400.00     90.14%
  889 requests in 30.57s, 105.05KB read
  Socket errors: connect 0, read 0, write 0, timeout 5919
Requests/sec:     29.08
Transfer/sec:      3.44KB
```

---------------------------------
### Benchmark golang-goroutines
```
Running 30s test @ http://golang-goroutines:3000/heavy_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 5059.900ms, rate sampling interval: 18333ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 5332.062ms, rate sampling interval: 18382ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    20.35s     5.28s   28.98s    57.50%
    Req/Sec     9.49     37.21   400.00     92.70%
  872 requests in 30.65s, 103.04KB read
  Socket errors: connect 0, read 0, write 0, timeout 6190
Requests/sec:     28.45
Transfer/sec:      3.36KB
```
