FROM golang:1.16 as builder
WORKDIR /app
COPY ./ ./
RUN go build
EXPOSE 3000
CMD ["./main"]
