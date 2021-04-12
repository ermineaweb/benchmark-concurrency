
---------------------------------
### Benchmark adonis
```
Running 30s test @ http://adonis:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 4984.581ms, rate sampling interval: 17432ms
  Thread calibration: mean lat.: 4880.610ms, rate sampling interval: 18251ms
  Thread calibration: mean lat.: 5619.208ms, rate sampling interval: 17301ms
  Thread calibration: mean lat.: 5624.915ms, rate sampling interval: 17301ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.02s     5.49s   29.28s    57.99%
    Req/Sec   495.25      2.05   497.00     75.00%
  55560 requests in 30.02s, 53.23MB read
Requests/sec:   1850.76
Transfer/sec:      1.77MB
```

---------------------------------
### Benchmark express
```
Running 30s test @ http://express:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 4429.651ms, rate sampling interval: 16154ms
  Thread calibration: mean lat.: 5237.753ms, rate sampling interval: 16703ms
  Thread calibration: mean lat.: 4210.321ms, rate sampling interval: 16908ms
  Thread calibration: mean lat.: 4951.784ms, rate sampling interval: 16498ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.20s     5.29s   27.90s    57.62%
    Req/Sec     1.54k     0.71     1.55k   100.00%
  181280 requests in 30.02s, 40.28MB read
Requests/sec:   6039.45
Transfer/sec:      1.34MB
```

---------------------------------
### Benchmark express-cluster
```
Running 30s test @ http://express-cluster:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 4569.677ms, rate sampling interval: 14835ms
  Thread calibration: mean lat.: 4653.192ms, rate sampling interval: 14843ms
  Thread calibration: mean lat.: 4233.398ms, rate sampling interval: 15261ms
  Thread calibration: mean lat.: 4244.283ms, rate sampling interval: 15327ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    16.17s     4.57s   24.61s    57.52%
    Req/Sec     4.59k    19.80     4.63k    50.00%
  525872 requests in 30.00s, 116.85MB read
Requests/sec:  17531.79
Transfer/sec:      3.90MB
```

---------------------------------
### Benchmark express-forked
```
Running 30s test @ http://express-forked:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 5100.750ms, rate sampling interval: 17612ms
  Thread calibration: mean lat.: 5120.867ms, rate sampling interval: 17612ms
  Thread calibration: mean lat.: 5121.550ms, rate sampling interval: 17612ms
  Thread calibration: mean lat.: 5121.534ms, rate sampling interval: 17612ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.68s     5.24s   28.08s    57.82%
    Req/Sec     1.57k     0.43     1.57k   100.00%
  182550 requests in 30.00s, 40.56MB read
Requests/sec:   6085.66
Transfer/sec:      1.35MB
```

---------------------------------
### Benchmark fastify
```
Running 30s test @ http://fastify:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 4363.452ms, rate sampling interval: 15278ms
  Thread calibration: mean lat.: 4367.498ms, rate sampling interval: 15286ms
  Thread calibration: mean lat.: 3996.859ms, rate sampling interval: 14204ms
  Thread calibration: mean lat.: 4362.690ms, rate sampling interval: 15278ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    16.09s     4.54s   24.35s    57.98%
    Req/Sec     4.74k     1.73     4.75k    75.00%
  552520 requests in 30.01s, 89.58MB read
Requests/sec:  18409.78
Transfer/sec:      2.98MB
```

---------------------------------
### Benchmark fastify-cluster
```
Running 30s test @ http://fastify-cluster:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 2586.042ms, rate sampling interval: 8667ms
  Thread calibration: mean lat.: 2705.093ms, rate sampling interval: 9166ms
  Thread calibration: mean lat.: 2706.724ms, rate sampling interval: 9224ms
  Thread calibration: mean lat.: 2834.972ms, rate sampling interval: 9125ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     9.41s     2.70s   17.04s    60.58%
    Req/Sec    13.44k   319.47    13.87k    62.50%
  1542366 requests in 30.00s, 250.06MB read
Requests/sec:  51413.74
Transfer/sec:      8.34MB
```

---------------------------------
### Benchmark fastify-forked
```
Running 30s test @ http://fastify-forked:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 3713.974ms, rate sampling interval: 13598ms
  Thread calibration: mean lat.: 3931.273ms, rate sampling interval: 14516ms
  Thread calibration: mean lat.: 3937.494ms, rate sampling interval: 14524ms
  Thread calibration: mean lat.: 4443.957ms, rate sampling interval: 14344ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    15.55s     4.43s   23.58s    57.85%
    Req/Sec     5.24k     4.90     5.24k    75.00%
  612019 requests in 30.01s, 99.22MB read
Requests/sec:  20395.21
Transfer/sec:      3.31MB
```

---------------------------------
### Benchmark golang
```
Running 30s test @ http://golang:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 997.649ms, rate sampling interval: 4016ms
  Thread calibration: mean lat.: 1253.726ms, rate sampling interval: 4665ms
  Thread calibration: mean lat.: 1336.874ms, rate sampling interval: 4849ms
  Thread calibration: mean lat.: 1464.282ms, rate sampling interval: 5459ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.90s     1.46s    8.79s    61.56%
    Req/Sec    18.83k   591.93    20.12k    71.43%
  2184113 requests in 30.00s, 256.20MB read
Requests/sec:  72798.91
Transfer/sec:      8.54MB
```

---------------------------------
### Benchmark golang-goroutines
```
Running 30s test @ http://golang-goroutines:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 1129.425ms, rate sampling interval: 4067ms
  Thread calibration: mean lat.: 1113.366ms, rate sampling interval: 4179ms
  Thread calibration: mean lat.: 940.040ms, rate sampling interval: 4192ms
  Thread calibration: mean lat.: 1963.499ms, rate sampling interval: 5525ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.94s     1.50s    8.86s    60.03%
    Req/Sec    18.60k   455.10    19.78k    73.33%
  2182348 requests in 30.00s, 255.99MB read
Requests/sec:  72741.85
Transfer/sec:      8.53MB
```
