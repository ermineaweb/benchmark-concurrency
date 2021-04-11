#!/bin/bash

servers=("express" "express-cluster" "express-forked" "nodejs" "nodejs-cluster" "nodejs-forked")
result="/results/README.md"

rm $result

for server in ${servers[@]}
do
    echo "Benchmark $server"
    echo "## Benchmark $server" >> $result
    echo "\`\`\`" >> $result
    wrk -t2 -d30s -c50 -R2000 http://$server:3000/ >> $result
    echo "\`\`\`" >> $result
    echo -en "\n---------------------------------\n" >> $result
done

exit 0