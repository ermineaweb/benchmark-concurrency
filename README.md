## Abstract

The goal of this project is to benchmark the capacity of certain technologies to process HTTP requests requiring significant processor calculations.

## Methodology

The sub-projects present two endpoints :

```
GET /no_process
```

```
GET /with_heavy_process
```

These endpoints perform or not a job that require significant resources. We use the [wrk tool](https://github.com/giltene/wrk2) to test each sub-project and collect results.

## Start

`docker-compose up`

## Results

When you run the docker image, you can find results in the 'results' folder. [You can find an example here.](results)

These results will depend of your environment.

Example requests / second for my setup :

|     Framework     | No process | Heavy process |
| :---------------: | :--------: | :-----------: |
|      Express      |    5259    |      22       |
|  Express-cluster  |   15003    |      64       |
|  Express-forked   |    5301    |      37       |
|      Fastify      |   19367    |      22       |
|  Fastify-cluster  |   43904    |      61       |
|  Fastify-forked   |   18324    |      20       |
|      Golang       |   53434    |      16       |
| Golang-goroutines |   48241    |      18       |
