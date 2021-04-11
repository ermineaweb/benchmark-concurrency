FROM debian:buster-slim
RUN apt-get update
RUN apt-get install -y git build-essential libssl-dev git zlib1g-dev
WORKDIR /app
RUN git clone https://github.com/giltene/wrk2.git
RUN cd ./wrk2 && make
RUN cp ./wrk2/wrk /usr/local/bin/wrk
COPY ./run.sh ./
RUN chmod +x ./run.sh
RUN mkdir /results
CMD /app/run.sh