## Getting Started

First, install all the required dependencies:

```bash
yarn
```

Then start the docker containers:

```bash
docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

If you change the `schema.prisma` file you have to run:

```bash
yarn prisma:generate
```
