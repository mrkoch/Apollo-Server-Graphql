Scaffold project Node Js Server with Apollo Server and GraphQL
Is a skeleton [Apollo Server](https://www.apollographql.com) application best for
developing Graph Api Environment.

<p align="center">
    <h1 align="center">Apollo Server Express, Prisma Client, Docker, Postgresql</h1>
    <ul>
        <li><a href="https://github.com/apollographql/apollo-server" target="_blank">Apollo Server</a></li>
        <li><a href="https://github.com/prisma/prisma" target="_blank">Prisma</a></li>
    </ul>
    
</p>
## DIRECTORY STRUCTURE

```
DOCKER POSTGRESQL 12
    docker-compose -f "docker-compose.yml" up -d --build
```

```
RUN DEV
    yarn // Update node_modules packages
    yarn run prisma:generate // Generate prisma schema
    yarn run prisma:dbpush // Prisma db push
    yarn start // Start dev
```
