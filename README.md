<p align="center">
  <p align="center">:computer: :computer: :computer:</p>
  <h2 align="center">docker container combining nodejs koa server + mongodb + redis</h2>
</p>

## Getting Started

### Prerequisites

I build this entire project with the following setup:

- macOS Big Sur version 11.1
- node v12.20.0
- npm v6.14.8
- yarn v1.22.10
- Docker version 20.10.2, build 2291f61

---

## Production

1. create your `.env` file based on the `.env.example`

2. build docker application

```bash
docker-compose build
```

3. start docker application

```bash
docker-compose up -d
```

---

## Commands

stop docker application

```bash
docker-compose down
```

run release task

```bash
sh scripts/release-task.sh
```

run fetch-remote task

```bash
sh scripts/fetch-remote.sh
```

---

## The MIT License (MIT)

Copyright © 2021 [Dominic Kolbe](https://dominickolbe.dk) :de:
