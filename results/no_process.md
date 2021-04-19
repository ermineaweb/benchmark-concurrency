
---------------------------------
### Benchmark adonis
```
Running 30s test @ http://adonis:3000/no_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 5738.456ms, rate sampling interval: 18808ms
  Thread calibration: mean lat.: 5813.527ms, rate sampling interval: 17989ms
  Thread calibration: mean lat.: 5919.812ms, rate sampling interval: 18382ms
  Thread calibration: mean lat.: 6623.471ms, rate sampling interval: 19136ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.45s     5.43s   28.62s    57.21%
    Req/Sec   340.50      1.50   342.00    100.00%
  35494 requests in 30.05s, 34.00MB read
  Socket errors: connect 0, read 0, write 0, timeout 432
Requests/sec:   1181.22
Transfer/sec:      1.13MB
```

---------------------------------
### Benchmark express
```
Running 30s test @ http://express:3000/no_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 5581.056ms, rate sampling interval: 17940ms
  Thread calibration: mean lat.: 5025.557ms, rate sampling interval: 17563ms
  Thread calibration: mean lat.: 4103.615ms, rate sampling interval: 17285ms
  Thread calibration: mean lat.: 5381.357ms, rate sampling interval: 17760ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.77s     5.16s   28.08s    57.68%
    Req/Sec     1.19k     4.03     1.19k    75.00%
  135440 requests in 30.08s, 30.10MB read
  Socket errors: connect 0, read 0, write 0, timeout 345
Requests/sec:   4503.00
Transfer/sec:      1.00MB
```

---------------------------------
### Benchmark express-cluster
```
Running 30s test @ http://express-cluster:3000/no_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 6819.200ms, rate sampling interval: 17973ms
  Thread calibration: mean lat.: 4589.392ms, rate sampling interval: 16506ms
  Thread calibration: mean lat.: 4582.760ms, rate sampling interval: 16474ms
  Thread calibration: mean lat.: 6797.122ms, rate sampling interval: 18415ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    17.82s     5.01s   27.82s    57.54%
    Req/Sec     2.11k    75.03     2.17k    75.00%
  245573 requests in 29.99s, 54.57MB read
  Socket errors: connect 0, read 0, write 0, timeout 1766
Requests/sec:   8189.63
Transfer/sec:      1.82MB
```

---------------------------------
### Benchmark express-forked
```
Running 30s test @ http://express-forked:3000/no_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 5065.543ms, rate sampling interval: 17694ms
  Thread calibration: mean lat.: 5748.394ms, rate sampling interval: 18071ms
  Thread calibration: mean lat.: 4578.148ms, rate sampling interval: 17989ms
  Thread calibration: mean lat.: 5733.841ms, rate sampling interval: 18186ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.79s     5.14s   28.28s    58.39%
    Req/Sec     1.14k     2.95     1.14k    75.00%
  128852 requests in 29.97s, 28.63MB read
  Socket errors: connect 0, read 0, write 0, timeout 50
Requests/sec:   4298.86
Transfer/sec:      0.96MB
```

---------------------------------
### Benchmark fastify
```
Running 30s test @ http://fastify:3000/no_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 4315.892ms, rate sampling interval: 15417ms
  Thread calibration: mean lat.: 4155.012ms, rate sampling interval: 15687ms
  Thread calibration: mean lat.: 4439.564ms, rate sampling interval: 15605ms
  Thread calibration: mean lat.: 4609.614ms, rate sampling interval: 15745ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    16.54s     4.48s   24.64s    57.84%
    Req/Sec     4.22k    53.55     4.28k    75.00%
  484832 requests in 30.00s, 78.60MB read
  Socket errors: connect 0, read 0, write 0, timeout 1
Requests/sec:  16159.58
Transfer/sec:      2.62MB
```

---------------------------------
### Benchmark fastify-cluster
```
Running 30s test @ http://fastify-cluster:3000/no_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 4168.717ms, rate sampling interval: 14548ms
  Thread calibration: mean lat.: 4046.453ms, rate sampling interval: 14385ms
  Thread calibration: mean lat.: 5649.084ms, rate sampling interval: 15745ms
  Thread calibration: mean lat.: 4166.141ms, rate sampling interval: 14565ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    15.10s     4.05s   23.43s    58.78%
    Req/Sec     6.37k    73.18     6.45k    50.00%
  711543 requests in 30.01s, 115.36MB read
  Socket errors: connect 0, read 0, write 0, timeout 565
Requests/sec:  23713.66
Transfer/sec:      3.84MB
```

---------------------------------
### Benchmark fastify-forked
```
Running 30s test @ http://fastify-forked:3000/no_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 3971.920ms, rate sampling interval: 15335ms
  Thread calibration: mean lat.: 4526.803ms, rate sampling interval: 15515ms
  Thread calibration: mean lat.: 4885.686ms, rate sampling interval: 16056ms
  Thread calibration: mean lat.: 4579.864ms, rate sampling interval: 15687ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    16.25s     4.56s   24.89s    57.55%
    Req/Sec     4.03k     8.87     4.04k    75.00%
  466289 requests in 30.01s, 75.60MB read
  Socket errors: connect 0, read 0, write 0, timeout 195
Requests/sec:  15536.81
Transfer/sec:      2.52MB
```

---------------------------------
### Benchmark golang
```
Running 30s test @ http://golang:3000/no_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 2286.795ms, rate sampling interval: 8048ms
  Thread calibration: mean lat.: 2455.303ms, rate sampling interval: 8790ms
  Thread calibration: mean lat.: 2122.337ms, rate sampling interval: 7659ms
  Thread calibration: mean lat.: 2781.738ms, rate sampling interval: 9519ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.07s     2.24s   14.22s    59.91%
    Req/Sec    15.21k   228.14    15.52k    71.43%
  1720318 requests in 30.00s, 201.80MB read
  Socket errors: connect 0, read 0, write 0, timeout 55
Requests/sec:  57343.92
Transfer/sec:      6.73MB
```

---------------------------------
### Benchmark golang-goroutines
```
Running 30s test @ http://golang-goroutines:3000/no_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 2311.378ms, rate sampling interval: 9338ms
  Thread calibration: mean lat.: 1364.960ms, rate sampling interval: 5890ms
  Thread calibration: mean lat.: 2736.133ms, rate sampling interval: 15556ms
  Thread calibration: mean lat.: 2552.704ms, rate sampling interval: 9248ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.25s     2.80s   16.47s    67.02%
    Req/Sec    14.98k   142.29    15.18k    50.00%
  1701030 requests in 29.98s, 199.53MB read
  Socket errors: connect 0, read 0, write 0, timeout 534
Requests/sec:  56729.45
Transfer/sec:      6.65MB
```

---------------------------------
### Benchmark rust
```
Running 30s test @ http://rust:3000/no_process
  4 threads and 1000 connections
  Thread calibration: mean lat.: 1809.740ms, rate sampling interval: 7258ms
  Thread calibration: mean lat.: 919.630ms, rate sampling interval: 5042ms
  Thread calibration: mean lat.: 1656.632ms, rate sampling interval: 6344ms
  Thread calibration: mean lat.: 1875.488ms, rate sampling interval: 6516ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     5.41s     2.73s   12.55s    69.53%
    Req/Sec    18.00k   579.30    19.35k    77.78%
  2105675 requests in 29.99s, 216.88MB read
  Socket errors: connect 0, read 0, write 0, timeout 65
Requests/sec:  70201.68
Transfer/sec:      7.23MB
```
