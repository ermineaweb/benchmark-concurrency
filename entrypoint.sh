#!/bin/bash

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
        wrk -t "$threads" -d "$time" -c "$connections" -R "$rate" http://$server:3000/$1 >>$result
        echo "\`\`\`" >>$result
    done
    chmod 1777 $result
}

benchmark "no_process"
benchmark "heavy_process"

exit 0
