# ts-stress-server

[![Build Status](https://travis-ci.com/bassaer/ts-stress-server.svg?branch=master)](https://travis-ci.com/bassaer/ts-stress-server)

## give stress

```
❯ curl 'localhost:8080?cpu=50'
OK!

❯ curl 'localhost:8080?mem=104857600'
OK!
```

## check stats
```
❯ docker stats --no-stream
CONTAINER ID        NAME                  CPU %               MEM USAGE / LIMIT     MEM %               NET I/O             BLOCK I/O           PIDS
300c0b5c546e        intelligent_mestorf   55.88%              26.16MiB / 1.952GiB   1.31%               4.29kB / 3.08kB     8.66MB / 0B         22
```
