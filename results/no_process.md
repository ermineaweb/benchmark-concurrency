
---------------------------------
### Benchmark express
```
Running 30s test @ http://express:3000/no_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 4613.557ms, rate sampling interval: 16244ms
  Thread calibration: mean lat.: 4227.959ms, rate sampling interval: 14860ms
  Thread calibration: mean lat.: 4696.486ms, rate sampling interval: 15572ms
  Thread calibration: mean lat.: 4639.895ms, rate sampling interval: 16261ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.14s     5.15s   27.48s    57.80%
    Req/Sec     1.33k    98.48     1.49k    75.00%
  155321 requests in 30.01s, 34.51MB read
Requests/sec:   5175.30
Transfer/sec:      1.15MB
```

---------------------------------
### Benchmark express-cluster
```
Running 30s test @ http://express-cluster:3000/no_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 4376.672ms, rate sampling interval: 14524ms
  Thread calibration: mean lat.: 4145.109ms, rate sampling interval: 13492ms
  Thread calibration: mean lat.: 4367.931ms, rate sampling interval: 14532ms
  Thread calibration: mean lat.: 4367.345ms, rate sampling interval: 14630ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    15.13s     4.26s   23.63s    59.13%
    Req/Sec     3.63k    20.12     3.64k    75.00%
  404235 requests in 30.00s, 89.82MB read
Requests/sec:  13475.20
Transfer/sec:      2.99MB
```

---------------------------------
### Benchmark express-forked
```
Running 30s test @ http://express-forked:3000/no_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 5198.485ms, rate sampling interval: 17661ms
  Thread calibration: mean lat.: 5184.765ms, rate sampling interval: 17629ms
  Thread calibration: mean lat.: 5184.294ms, rate sampling interval: 17661ms
  Thread calibration: mean lat.: 4706.331ms, rate sampling interval: 15728ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.58s     5.25s   27.69s    57.91%
    Req/Sec     1.28k    84.08     1.37k    75.00%
  142994 requests in 30.01s, 31.77MB read
Requests/sec:   4764.73
Transfer/sec:      1.06MB
```

---------------------------------
### Benchmark fastify
```
Running 30s test @ http://fastify:3000/no_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 3867.304ms, rate sampling interval: 11878ms
  Thread calibration: mean lat.: 3941.467ms, rate sampling interval: 12025ms
  Thread calibration: mean lat.: 3876.832ms, rate sampling interval: 11927ms
  Thread calibration: mean lat.: 2788.035ms, rate sampling interval: 13377ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    12.24s     3.33s   27.48s    57.59%
    Req/Sec     4.95k     2.48k    6.45k    75.00%
  563494 requests in 30.46s, 91.36MB read
Requests/sec:  18499.86
Transfer/sec:      3.00MB
```

---------------------------------
### Benchmark fastify-cluster
```
Running 30s test @ http://fastify-cluster:3000/no_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 3448.985ms, rate sampling interval: 10125ms
  Thread calibration: mean lat.: 1975.574ms, rate sampling interval: 6328ms
  Thread calibration: mean lat.: 1879.689ms, rate sampling interval: 6115ms
  Thread calibration: mean lat.: 3367.187ms, rate sampling interval: 10403ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.02s     3.38s   16.75s    68.69%
    Req/Sec     9.36k   633.00    10.43k    62.50%
  1061894 requests in 29.99s, 172.16MB read
Requests/sec:  35406.24
Transfer/sec:      5.74MB
```

---------------------------------
### Benchmark fastify-forked
```
Running 30s test @ http://fastify-forked:3000/no_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 3072.445ms, rate sampling interval: 10444ms
  Thread calibration: mean lat.: 3750.047ms, rate sampling interval: 11943ms
  Thread calibration: mean lat.: 3744.186ms, rate sampling interval: 11927ms
  Thread calibration: mean lat.: 4464.614ms, rate sampling interval: 16605ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    12.76s     5.05s   26.46s    76.39%
    Req/Sec     5.00k     2.21k    6.34k    75.00%
  548115 requests in 30.18s, 88.86MB read
Requests/sec:  18163.15
Transfer/sec:      2.94MB
```

---------------------------------
### Benchmark adonis
```
Running 30s test @ http://adonis:3000/no_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 5108.315ms, rate sampling interval: 16596ms
  Thread calibration: mean lat.: 5643.622ms, rate sampling interval: 18333ms
  Thread calibration: mean lat.: 5643.148ms, rate sampling interval: 18333ms
  Thread calibration: mean lat.: 5642.879ms, rate sampling interval: 18333ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.47s     5.46s   29.18s    58.19%
    Req/Sec   401.00      0.00   401.00    100.00%
  46130 requests in 30.02s, 44.20MB read
Requests/sec:   1536.64
Transfer/sec:      1.47MB
```

---------------------------------
### Benchmark golang
```
Running 30s test @ http://golang:3000/no_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 324.695ms, rate sampling interval: 1081ms
  Thread calibration: mean lat.: 553.306ms, rate sampling interval: 1807ms
  Thread calibration: mean lat.: 362.965ms, rate sampling interval: 1928ms
  Thread calibration: mean lat.: 477.198ms, rate sampling interval: 1416ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.08s     1.01s    5.30s    67.27%
    Req/Sec    12.66k     2.61k   16.94k    60.00%
  1524246 requests in 30.00s, 178.80MB read
Requests/sec:  50809.63
Transfer/sec:      5.96MB
```

---------------------------------
### Benchmark golang-goroutines
```
Running 30s test @ http://golang-goroutines:3000/no_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 904.030ms, rate sampling interval: 2390ms
  Thread calibration: mean lat.: 559.863ms, rate sampling interval: 1838ms
  Thread calibration: mean lat.: 1030.743ms, rate sampling interval: 2803ms
  Thread calibration: mean lat.: 538.611ms, rate sampling interval: 1780ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     3.40s     1.00s    6.61s    69.61%
    Req/Sec    11.93k     3.15k   17.27k    65.71%
  1465450 requests in 30.00s, 171.90MB read
Requests/sec:  48846.74
Transfer/sec:      5.73MB
```
