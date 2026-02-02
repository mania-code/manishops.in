# Build Stage
FROM golang:1.21-alpine AS builder

WORKDIR /app

COPY go.mod ./
# COPY go.sum ./ # No dependencies yet
RUN go mod download

COPY . .

RUN go build -o pipeline-service ./cmd/server

# Run Stage
FROM alpine:latest

WORKDIR /root/

COPY --from=builder /app/pipeline-service .

EXPOSE 8080

CMD ["./pipeline-service"]
