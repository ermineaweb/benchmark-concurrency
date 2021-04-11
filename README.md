## Benchmark express
```
Running 30s test @ http://express:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 4887.618ms, rate sampling interval: 17842ms
  Thread calibration: mean lat.: 4884.854ms, rate sampling interval: 17956ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.89s     5.69s   29.61s    57.36%
    Req/Sec    10.00      0.00    10.00    100.00%
  594 requests in 30.07s, 138.06KB read
  Socket errors: connect 0, read 0, write 0, timeout 151
Requests/sec:     19.75
Transfer/sec:      4.59KB
```

---------------------------------
## Benchmark express-cluster
```
Running 30s test @ http://express-cluster:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 4885.047ms, rate sampling interval: 17252ms
  Thread calibration: mean lat.: 5405.954ms, rate sampling interval: 17842ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.47s     5.57s   29.05s    57.75%
    Req/Sec    31.00      0.00    31.00    100.00%
  1844 requests in 30.06s, 428.59KB read
  Socket errors: connect 0, read 0, write 0, timeout 40
Requests/sec:     61.35
Transfer/sec:     14.26KB
```

---------------------------------
## Benchmark express-forked
```
Running 30s test @ http://express-forked:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 5452.787ms, rate sampling interval: 18006ms
  Thread calibration: mean lat.: 5419.343ms, rate sampling interval: 17612ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.44s     5.53s   29.03s    58.75%
    Req/Sec    25.00      0.00    25.00    100.00%
  1454 requests in 30.00s, 337.94KB read
Requests/sec:     48.47
Transfer/sec:     11.26KB
```

---------------------------------
## Benchmark nodejs
```
Running 30s test @ http://nodejs:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 5824.390ms, rate sampling interval: 17432ms
  Thread calibration: mean lat.: 4274.942ms, rate sampling interval: 17498ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.45s     5.71s   29.10s    59.50%
    Req/Sec    10.00      0.00    10.00    100.00%
  587 requests in 30.15s, 98.60KB read
  Socket errors: connect 0, read 0, write 0, timeout 151
Requests/sec:     19.47
Transfer/sec:      3.27KB
```

---------------------------------
## Benchmark nodejs-cluster
```
Running 30s test @ http://nodejs-cluster:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 27.368ms, rate sampling interval: 45ms
  Thread calibration: mean lat.: 7.463ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    15.27ms   64.18ms 503.04ms   95.61%
    Req/Sec     1.12k   489.20     7.00k    88.05%
  59904 requests in 30.00s, 9.83MB read
Requests/sec:   1996.49
Transfer/sec:    335.35KB
```

---------------------------------
## Benchmark nodejs-forked
```
Running 30s test @ http://nodejs-forked:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 5303.873ms, rate sampling interval: 17727ms
  Thread calibration: mean lat.: 5543.567ms, rate sampling interval: 18546ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    20.00s     5.66s   29.57s    57.43%
    Req/Sec    12.00      0.00    12.00    100.00%
  740 requests in 30.15s, 124.30KB read
  Socket errors: connect 0, read 0, write 0, timeout 42
Requests/sec:     24.55
Transfer/sec:      4.12KB
```

---------------------------------
