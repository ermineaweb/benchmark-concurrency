#!/bin/bash

servers=("express" "express-cluster" "express-forked" "nodejs" "nodejs-cluster" "nodejs-forked")
result="/results/README.md"

if [ -f $result ] ; then
    rm $result
fi

echo "# Abstract" >> $result
echo -en "\n\n\n" >> $result
echo "The goal of this project is to benchmark the capacity of \
certain technologies to process HTTP requests requiring significant \
processor calculations." >> $result
echo -en "\n\n\n" >> $result
echo "# Methodology" >> $result
echo -en "\n\n\n" >> $result
echo "The sub-projects present an endpoint which performs a calculation \
requiring significant resources. We use the wrk tool to test each \
sub-project and collect the data." >> $result
echo -en "\n\n\n" >> $result

for server in ${servers[@]}
do
    echo "Benchmark $server"
    echo -en "\n---------------------------------\n" >> $result
    echo "### Benchmark $server" >> $result
    echo "\`\`\`" >> $result
    wrk -t2 -d30s -c50 -R2000 http://$server:3000/ >> $result
    echo "\`\`\`" >> $result
done

chmod 777 $result

exit 0