FROM alpine:latest
RUN apk add curl
WORKDIR /dbinit
COPY *.sh ./
ADD students ./students/
ADD teachers ./teachers/
