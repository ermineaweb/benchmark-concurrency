
---------------------------------
### Benchmark express
```
Running 30s test @ http://express:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 5496.831ms, rate sampling interval: 17006ms
  Thread calibration: mean lat.: 4906.112ms, rate sampling interval: 16572ms
  Thread calibration: mean lat.: 4907.374ms, rate sampling interval: 16678ms
  Thread calibration: mean lat.: 5024.869ms, rate sampling interval: 16621ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.38s     5.28s   27.48s    58.11%
    Req/Sec     1.41k     1.09     1.41k   100.00%
  157902 requests in 30.00s, 35.09MB read
  Socket errors: connect 0, read 0, write 0, timeout 97
Requests/sec:   5264.20
Transfer/sec:      1.17MB
```

---------------------------------
### Benchmark express-cluster
```
Running 30s test @ http://express-cluster:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 4898.473ms, rate sampling interval: 15474ms
  Thread calibration: mean lat.: 4342.179ms, rate sampling interval: 15859ms
  Thread calibration: mean lat.: 4884.245ms, rate sampling interval: 15466ms
  Thread calibration: mean lat.: 4328.828ms, rate sampling interval: 15818ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    16.95s     4.77s   25.64s    57.36%
    Req/Sec     3.62k     8.29     3.62k    75.00%
  417450 requests in 30.00s, 92.76MB read
Requests/sec:  13915.66
Transfer/sec:      3.09MB
```

---------------------------------
### Benchmark express-forked
```
Running 30s test @ http://express-forked:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 5498.942ms, rate sampling interval: 16957ms
  Thread calibration: mean lat.: 5136.565ms, rate sampling interval: 16728ms
  Thread calibration: mean lat.: 5047.746ms, rate sampling interval: 16662ms
  Thread calibration: mean lat.: 4650.844ms, rate sampling interval: 16408ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.32s     5.32s   27.48s    57.33%
    Req/Sec     1.39k     1.09     1.39k   100.00%
  155991 requests in 30.01s, 34.66MB read
  Socket errors: connect 0, read 0, write 0, timeout 97
Requests/sec:   5197.28
Transfer/sec:      1.15MB
```

---------------------------------
### Benchmark fastify
```
Running 30s test @ http://fastify:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 4053.352ms, rate sampling interval: 14286ms
  Thread calibration: mean lat.: 3751.577ms, rate sampling interval: 14737ms
  Thread calibration: mean lat.: 4398.841ms, rate sampling interval: 14630ms
  Thread calibration: mean lat.: 4383.942ms, rate sampling interval: 14589ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    15.89s     4.64s   24.13s    56.75%
    Req/Sec     4.55k    13.08     4.57k    50.00%
  530416 requests in 30.00s, 85.99MB read
Requests/sec:  17678.19
Transfer/sec:      2.87MB
```

---------------------------------
### Benchmark fastify-cluster
```
Running 30s test @ http://fastify-cluster:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 3448.905ms, rate sampling interval: 11263ms
  Thread calibration: mean lat.: 3393.530ms, rate sampling interval: 11059ms
  Thread calibration: mean lat.: 3265.526ms, rate sampling interval: 10371ms
  Thread calibration: mean lat.: 3333.026ms, rate sampling interval: 11034ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    11.05s     3.35s   20.41s    62.91%
    Req/Sec    11.13k   272.67    11.46k    50.00%
  1290654 requests in 30.01s, 209.25MB read
Requests/sec:  43013.93
Transfer/sec:      6.97MB
```

---------------------------------
### Benchmark fastify-forked
```
Running 30s test @ http://fastify-forked:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 4106.723ms, rate sampling interval: 14999ms
  Thread calibration: mean lat.: 4107.563ms, rate sampling interval: 15007ms
  Thread calibration: mean lat.: 3862.959ms, rate sampling interval: 14114ms
  Thread calibration: mean lat.: 4537.270ms, rate sampling interval: 14704ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    16.25s     4.60s   24.53s    57.25%
    Req/Sec     4.42k     8.49     4.43k    75.00%
  522106 requests in 30.00s, 84.65MB read
Requests/sec:  17405.42
Transfer/sec:      2.82MB
```

---------------------------------
### Benchmark golang
```
Running 30s test @ http://golang:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 1949.198ms, rate sampling interval: 6582ms
  Thread calibration: mean lat.: 1986.452ms, rate sampling interval: 7016ms
  Thread calibration: mean lat.: 1992.842ms, rate sampling interval: 7028ms
  Thread calibration: mean lat.: 1399.943ms, rate sampling interval: 6103ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.36s     2.17s   11.82s    57.22%
    Req/Sec    15.57k   385.30    16.52k    77.78%
  1818544 requests in 30.00s, 213.32MB read
Requests/sec:  60616.26
Transfer/sec:      7.11MB
```

---------------------------------
### Benchmark golang-echo
```
Running 30s test @ http://golang-echo:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 1847.590ms, rate sampling interval: 6610ms
  Thread calibration: mean lat.: 1710.579ms, rate sampling interval: 6647ms
  Thread calibration: mean lat.: 1999.184ms, rate sampling interval: 7217ms
  Thread calibration: mean lat.: 1679.332ms, rate sampling interval: 6676ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.70s     2.33s   12.67s    57.72%
    Req/Sec    14.84k   432.93    15.65k    62.50%
  1773269 requests in 30.00s, 208.01MB read
Requests/sec:  59106.47
Transfer/sec:      6.93MB
```

---------------------------------
### Benchmark golang-gin
```
Running 30s test @ http://golang-gin:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 4242.389ms, rate sampling interval: 16080ms
  Thread calibration: mean lat.: 4182.513ms, rate sampling interval: 16072ms
  Thread calibration: mean lat.: 2807.829ms, rate sampling interval: 14630ms
  Thread calibration: mean lat.: 4466.033ms, rate sampling interval: 16220ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    17.75s     5.22s   26.62s    59.23%
    Req/Sec     2.15k    55.31     2.21k    75.00%
  269274 requests in 30.34s, 36.98MB read
Requests/sec:   8875.83
Transfer/sec:      1.22MB
```

---------------------------------
### Benchmark golang-goroutines
```
Running 30s test @ http://golang-goroutines:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 3204.475ms, rate sampling interval: 11550ms
  Thread calibration: mean lat.: 3233.334ms, rate sampling interval: 11608ms
  Thread calibration: mean lat.: 2983.132ms, rate sampling interval: 11378ms
  Thread calibration: mean lat.: 2976.841ms, rate sampling interval: 11436ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    13.22s     3.85s   19.48s    53.15%
    Req/Sec     8.58k    42.71     8.64k    50.00%
  1101905 requests in 29.99s, 129.26MB read
Requests/sec:  36736.89
Transfer/sec:      4.31MB
```

---------------------------------
### Benchmark golang-httprouter
```
Running 30s test @ http://golang-httprouter:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 2478.434ms, rate sampling interval: 8560ms
  Thread calibration: mean lat.: 2398.441ms, rate sampling interval: 8503ms
  Thread calibration: mean lat.: 2548.521ms, rate sampling interval: 8445ms
  Thread calibration: mean lat.: 2463.169ms, rate sampling interval: 8437ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.21s     2.01s   12.58s    58.45%
    Req/Sec    15.92k   299.34    16.62k    75.00%
  1791639 requests in 30.00s, 210.16MB read
Requests/sec:  59719.19
Transfer/sec:      7.01MB
```

---------------------------------
### Benchmark rust
```
Running 30s test @ http://rust:3000/no_process
  4 threads and 500 connections
  Thread calibration: mean lat.: 526.870ms, rate sampling interval: 2476ms
  Thread calibration: mean lat.: 948.091ms, rate sampling interval: 3633ms
  Thread calibration: mean lat.: 430.702ms, rate sampling interval: 2263ms
  Thread calibration: mean lat.: 1067.656ms, rate sampling interval: 4423ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     3.10s     1.45s    7.94s    67.56%
    Req/Sec    21.15k     0.85k   22.54k    58.33%
  2473487 requests in 30.00s, 254.76MB read
Requests/sec:  82451.08
Transfer/sec:      8.49MB
```
