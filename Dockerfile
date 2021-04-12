FROM debian:buster-slim as build
RUN apt-get update
RUN apt-get install -y git build-essential libssl-dev git zlib1g-dev
WORKDIR /app
RUN git clone https://github.com/giltene/wrk2.git
RUN cd ./wrk2 && make
RUN cp ./wrk2/wrk /usr/local/bin/wrk
COPY ./entrypoint.sh ./
RUN chmod +x ./entrypoint.sh
RUN mkdir /results
CMD /app/entrypoint.sh
