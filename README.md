## Benchmark express
Running 30s test @ http://express:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 5000.737ms, rate sampling interval: 17940ms
  Thread calibration: mean lat.: 4940.543ms, rate sampling interval: 17842ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.86s     5.69s   29.66s    57.32%
    Req/Sec    10.00      0.00    10.00    100.00%
  610 requests in 30.06s, 141.78KB read
  Socket errors: connect 0, read 0, write 0, timeout 134
Requests/sec:     20.29
Transfer/sec:      4.72KB

---------------------------------
## Benchmark express-cluster
Running 30s test @ http://express-cluster:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 5117.124ms, rate sampling interval: 17727ms
  Thread calibration: mean lat.: 5119.672ms, rate sampling interval: 17678ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.62s     5.49s   29.02s    58.10%
    Req/Sec    32.00      0.00    32.00    100.00%
  1922 requests in 30.03s, 446.71KB read
  Socket errors: connect 0, read 0, write 0, timeout 38
Requests/sec:     64.01
Transfer/sec:     14.88KB

---------------------------------
## Benchmark express-forked
Running 30s test @ http://express-forked:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 5492.515ms, rate sampling interval: 17973ms
  Thread calibration: mean lat.: 5487.842ms, rate sampling interval: 17858ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.77s     5.53s   29.15s    58.86%
    Req/Sec    26.00      0.00    26.00    100.00%
  1561 requests in 30.03s, 362.81KB read
Requests/sec:     51.98
Transfer/sec:     12.08KB

---------------------------------
## Benchmark nodejs
Running 30s test @ http://nodejs:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 5031.489ms, rate sampling interval: 18022ms
  Thread calibration: mean lat.: 5003.805ms, rate sampling interval: 18153ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.89s     5.71s   29.64s    57.32%
    Req/Sec    10.00      0.00    10.00    100.00%
  621 requests in 30.08s, 104.31KB read
  Socket errors: connect 0, read 0, write 0, timeout 125
Requests/sec:     20.64
Transfer/sec:      3.47KB

---------------------------------
## Benchmark nodejs-cluster
Running 30s test @ http://nodejs-cluster:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 2.876ms, rate sampling interval: 14ms
  Thread calibration: mean lat.: 2.632ms, rate sampling interval: 10ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    15.91ms   65.78ms 509.18ms   95.45%
    Req/Sec     1.11k     0.99k   11.22k    47.39%
  58951 requests in 30.00s, 9.67MB read
Requests/sec:   1964.98
Transfer/sec:    330.05KB

---------------------------------
## Benchmark nodejs-forked
Running 30s test @ http://nodejs-forked:3000/
  2 threads and 50 connections
  Thread calibration: mean lat.: 5371.628ms, rate sampling interval: 18268ms
  Thread calibration: mean lat.: 5321.408ms, rate sampling interval: 18251ms
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.61s     5.59s   29.41s    57.99%
    Req/Sec    13.50      0.50    14.00    100.00%
  851 requests in 30.08s, 142.94KB read
  Socket errors: connect 0, read 0, write 0, timeout 16
Requests/sec:     28.29
Transfer/sec:      4.75KB

---------------------------------
