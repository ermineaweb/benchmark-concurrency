
---------------------------------
### Benchmark express
```
Running 30s test @ http://express:3000/heavy_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 8291.517ms, rate sampling interval: 18006ms
  Thread calibration: mean lat.: 3652.464ms, rate sampling interval: 13811ms
  Thread calibration: mean lat.: 8701.269ms, rate sampling interval: 18530ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.50s     5.58s   28.95s    57.87%
    Req/Sec     7.01     25.57   111.00     92.97%
  568 requests in 30.59s, 132.02KB read
  Socket errors: connect 0, read 218, write 0, timeout 3375
Requests/sec:     18.57
Transfer/sec:      4.32KB
```

---------------------------------
### Benchmark express-cluster
```
Running 30s test @ http://express-cluster:3000/heavy_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 5145.944ms, rate sampling interval: 18956ms
  Thread calibration: mean lat.: 5113.812ms, rate sampling interval: 18644ms
  Thread calibration: mean lat.: 4757.889ms, rate sampling interval: 18104ms
  Thread calibration: mean lat.: 5328.246ms, rate sampling interval: 18726ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    20.02s     5.46s   29.82s    58.95%
    Req/Sec    15.00      0.00    15.00    100.00%
  1730 requests in 30.11s, 402.09KB read
  Socket errors: connect 0, read 0, write 0, timeout 3176
Requests/sec:     57.46
Transfer/sec:     13.36KB
```

---------------------------------
### Benchmark express-forked
```
Running 30s test @ http://express-forked:3000/heavy_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 6914.506ms, rate sampling interval: 16375ms
  Thread calibration: mean lat.: 7285.182ms, rate sampling interval: 16383ms
  Thread calibration: mean lat.: 7252.858ms, rate sampling interval: 16383ms
  Thread calibration: mean lat.: 7304.976ms, rate sampling interval: 16383ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    20.45s     4.78s   27.10s    34.08%
    Req/Sec    12.75      0.43    13.00    100.00%
  1048 requests in 30.40s, 243.58KB read
  Socket errors: connect 0, read 46, write 0, timeout 3283
Requests/sec:     34.48
Transfer/sec:      8.01KB
```

---------------------------------
### Benchmark fastify
```
Running 30s test @ http://fastify:3000/heavy_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 5231.085ms, rate sampling interval: 18169ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 5472.859ms, rate sampling interval: 18546ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.29s     5.42s   28.97s    58.66%
    Req/Sec     6.51     24.56   111.00     93.43%
  581 requests in 30.40s, 95.32KB read
  Socket errors: connect 0, read 168, write 0, timeout 3613
Requests/sec:     19.11
Transfer/sec:      3.14KB
```

---------------------------------
### Benchmark fastify-cluster
```
Running 30s test @ http://fastify-cluster:3000/heavy_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 5358.928ms, rate sampling interval: 18841ms
  Thread calibration: mean lat.: 5376.501ms, rate sampling interval: 18857ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    20.04s     5.63s   29.79s    57.92%
    Req/Sec     0.02      0.94    42.00     99.95%
  2221 requests in 30.39s, 364.38KB read
  Socket errors: connect 0, read 0, write 0, timeout 3078
Requests/sec:     73.09
Transfer/sec:     11.99KB
```

---------------------------------
### Benchmark fastify-forked
```
Running 30s test @ http://fastify-forked:3000/heavy_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 8036.273ms, rate sampling interval: 16039ms
  Thread calibration: mean lat.: 8047.636ms, rate sampling interval: 16048ms
  Thread calibration: mean lat.: 8096.153ms, rate sampling interval: 16039ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.44s     4.00s   29.41s    76.00%
    Req/Sec     7.24    125.83     3.50k    99.48%
  703 requests in 30.41s, 115.34KB read
  Socket errors: connect 0, read 26, write 0, timeout 3677
Requests/sec:     23.12
Transfer/sec:      3.79KB
```

---------------------------------
### Benchmark adonis
```
Running 30s test @ http://adonis:3000/heavy_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 4828.548ms, rate sampling interval: 17874ms
  Thread calibration: mean lat.: 5427.510ms, rate sampling interval: 19005ms
  Thread calibration: mean lat.: 9223372036854776.000ms, rate sampling interval: 10ms
  Thread calibration: mean lat.: 5608.601ms, rate sampling interval: 18038ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.96s     5.53s   29.59s    57.63%
    Req/Sec     7.99     27.07   111.00     91.97%
  663 requests in 30.41s, 649.19KB read
  Socket errors: connect 0, read 20, write 0, timeout 3586
Requests/sec:     21.80
Transfer/sec:     21.35KB
```

---------------------------------
### Benchmark golang
```
Running 30s test @ http://golang:3000/heavy_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 1677.696ms, rate sampling interval: 7098ms
  Thread calibration: mean lat.: 1479.076ms, rate sampling interval: 7163ms
  Thread calibration: mean lat.: 1957.949ms, rate sampling interval: 7491ms
  Thread calibration: mean lat.: 1755.286ms, rate sampling interval: 7114ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.14s     2.31s   13.73s    66.58%
    Req/Sec    10.19k     1.71k   12.53k    62.50%
  1176529 requests in 30.00s, 197.48MB read
  Non-2xx or 3xx responses: 1176529
Requests/sec:  39219.69
Transfer/sec:      6.58MB
```

---------------------------------
### Benchmark golang-goroutines
```
Running 30s test @ http://golang-goroutines:3000/heavy_process
  4 threads and 300 connections
  Thread calibration: mean lat.: 1185.835ms, rate sampling interval: 4849ms
  Thread calibration: mean lat.: 1331.682ms, rate sampling interval: 4988ms
  Thread calibration: mean lat.: 1211.256ms, rate sampling interval: 5111ms
  Thread calibration: mean lat.: 937.359ms, rate sampling interval: 3764ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.18s     1.02s    6.86s    66.44%
    Req/Sec    12.73k     1.16k   15.65k    80.00%
  1464056 requests in 30.00s, 245.74MB read
  Non-2xx or 3xx responses: 1464056
Requests/sec:  48799.00
Transfer/sec:      8.19MB
```
