### Abstract

Benchmark the capacity of certain technologies to process HTTP requests requiring significant processor calculations.

---

### Methodology

Sub-projects presents two endpoints :

```
GET /no_process
GET /with_heavy_process
```

These endpoints perform or not a job that require significant resources. We use the [wrk tool](https://github.com/giltene/wrk2) to test each sub-project and collect results.

---

### Start

```
docker-compose up
```

---

### Results

When you run the docker image, you can find results in the 'results' folder. [You can find an example here.](results)

These results will depend of your environment.

Example of requests / second for my setup :

|     Framework     | No process | Heavy process |
| :---------------: | :--------: | :-----------: |
|      Express      |   5,259    |      22       |
|  Express-cluster  |   15,003   |      64       |
|  Express-forked   |   5,301    |      37       |
|      Fastify      |   19,367   |      22       |
|  Fastify-cluster  |   43,904   |      61       |
|  Fastify-forked   |   18,324   |      20       |
|      Adonis       |   1,536    |      21       |
|      Golang       |   53,434   |      16       |
| Golang-goroutines |   48,241   |      18       |
