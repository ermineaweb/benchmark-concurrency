### Abstract

Benchmark the capacity of certain technologies to process HTTP requests requiring significant processor calculations.

---

### Methodology

Projects serve two endpoints on port 3000 :

`GET /no_process`
`GET /heavy_process`

These endpoints perform -or not- a job that require significant resources. We use the [wrk tool](https://github.com/giltene/wrk2) to test each project and collect results.

---

### Start

`./run.sh`

---

### Results

After running the benchmark, you can find results in the 'results' folder. [You can find an example here.](results)

These results will depend of your environment.

Example of requests/second for my setup :

|     Framework     | No process | Heavy process |
| :---------------: | :--------: | :-----------: |
|      Adonis       |   1,850    |      24       |
|      Express      |   6,039    |      25       |
|  Express-cluster  |   17,531   |      88       |
|  Express-forked   |   6,085    |      51       |
|      Fastify      |   18,409   |      25       |
|  Fastify-cluster  |   51,413   |      86       |
|  Fastify-forked   |   20,395   |      19       |
|      Golang       |   72,798   |      29       |
| Golang-goroutines |   72,741   |      28       |
