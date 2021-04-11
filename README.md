# Abstract



The goal of this project is to benchmark the capacity of certain technologies to process HTTP requests requiring significant processor calculations.



# Methodology



The sub-projects present an endpoint which performs a calculation requiring significant resources. We use the wrk tool to test each sub-project and collect the data.




---------------------------------
### Benchmark express
```
Running 30s test @ http://express:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 4920.092ms, rate sampling interval: 17760ms
  Thread calibration: mean lat.: 4964.256ms, rate sampling interval: 17858ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.96s     5.61s   29.64s    58.27%
    Req/Sec    10.00      0.00    10.00    100.00%
  611 requests in 30.06s, 142.01KB read
  Socket errors: connect 0, read 0, write 0, timeout 134
Requests/sec:     20.33
Transfer/sec:      4.72KB
```

---------------------------------
### Benchmark express-cluster
```
Running 30s test @ http://express-cluster:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 5138.875ms, rate sampling interval: 17711ms
  Thread calibration: mean lat.: 5199.426ms, rate sampling interval: 17743ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.32s     5.51s   29.07s    58.34%
    Req/Sec    32.50      0.50    33.00    100.00%
  1928 requests in 30.00s, 448.11KB read
  Socket errors: connect 0, read 0, write 0, timeout 37
Requests/sec:     64.26
Transfer/sec:     14.94KB
```

---------------------------------
### Benchmark express-forked
```
Running 30s test @ http://express-forked:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 5499.572ms, rate sampling interval: 17547ms
  Thread calibration: mean lat.: 5533.455ms, rate sampling interval: 17530ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.71s     5.42s   29.21s    57.49%
    Req/Sec    23.00      0.00    23.00    100.00%
  1405 requests in 30.12s, 326.55KB read
  Socket errors: connect 0, read 0, write 0, timeout 13
Requests/sec:     46.64
Transfer/sec:     10.84KB
```

---------------------------------
### Benchmark nodejs
```
Running 30s test @ http://nodejs:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 5063.071ms, rate sampling interval: 17874ms
  Thread calibration: mean lat.: 5097.624ms, rate sampling interval: 17678ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.74s     5.65s   29.52s    57.78%
    Req/Sec    10.00      0.00    10.00    100.00%
  601 requests in 30.07s, 100.95KB read
  Socket errors: connect 0, read 0, write 0, timeout 141
Requests/sec:     19.98
Transfer/sec:      3.36KB
```

---------------------------------
### Benchmark nodejs-cluster
```
Running 30s test @ http://nodejs-cluster:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 3.050ms, rate sampling interval: 14ms
  Thread calibration: mean lat.: 3.058ms, rate sampling interval: 15ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    21.48ms   78.19ms 553.98ms   93.85%
    Req/Sec     1.10k   490.43    13.46k    86.69%
  59885 requests in 30.00s, 9.82MB read
Requests/sec:   1996.11
Transfer/sec:    335.28KB
```

---------------------------------
### Benchmark nodejs-forked
```
Running 30s test @ http://nodejs-forked:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 5491.282ms, rate sampling interval: 18087ms
  Thread calibration: mean lat.: 5427.067ms, rate sampling interval: 18071ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.63s     5.65s   29.39s    57.52%
    Req/Sec    13.00      0.00    13.00    100.00%
  768 requests in 30.03s, 129.00KB read
  Socket errors: connect 0, read 0, write 0, timeout 34
Requests/sec:     25.57
Transfer/sec:      4.30KB
```
