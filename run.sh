#!/bin/bash

# number of threads
thread=4
# total time of each test in seconds
time=30
# connections opened in same time
connection=300
# total number of requests per second
rate=60000

servers=(
    "express"
    "express-cluster"
    "express-forked"
    "fastify"
    "fastify-cluster"
    "fastify-forked"
    "adonis"
    "golang"
    "golang-goroutines"
)

benchmark() {
    result="/results/$1.md"
    if [ -f $result ]; then
        rm $result
    fi

    sleep 3

    for server in ${servers[@]}; do
        echo "Benchmark start $1 for $server"
        echo -en "\n---------------------------------\n" >>$result
        echo "### Benchmark $server" >>$result
        echo "\`\`\`" >>$result
        wrk -t"$thread" -d"$time"s -c"$connection" -R"$rate" http://$server:3000/$1 >>$result
        echo "\`\`\`" >>$result
    done
    chmod 777 $result
}

benchmark "no_process"
benchmark "heavy_process"

exit 0
