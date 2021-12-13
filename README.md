# ecommerce

O intuito aqui é aprender programação e git como ferramento de versionamento/colaboração de código. Então não se preocupem em como o ambiente esta rodando.

Não se preocupem com a "qualidade" do código apenas em entregar o software funcionando, como todo pull request vai ser revisado nós vamos sempre colocando dicas no código um do outro.

## Docker

Pra rodar vocês vão precisar do Docker https://www.docker.com/get-started se precisarem de ajuda pra instalar e subir o projeto pode me chamar no Whatsapp.

## Git

Pra tabalhar com versionamento e colaboração de código vamos utilizar o git https://git-scm.com/ que é a ferramento mais popular hoje. Aqui só vamos precisar dos comando mais básicos (pull e push). Novamente se alguem tiver dúvida do que é e como usar pode me chamar.

## Api e Web

Como vamos usar Nodejs https://nodejs.org/en/ sugiro instalar na máquina também.. hoje a versão mais atualizada é a 17, então vamos usar ela.

## Como usar

Docker crie um arquivo na pasta raiz chamado ".env" (Existe um exemplo que voces podem usar de base .env.example) neste arquivo .env vocês podem definir as configurações como quiserem mas ja está de uma forma que não precisa mudar nada.
após copiar acesse a pasta webapp e rode o comando

```npm install```

em seguida volte a pasta raiz do projeto e rode o comando

```docker-compose up -d```

Se tudo der certo os endereços a seguir vão estar funcionando na sua máquina

Web - http://dev.localhost
Api - http://api.dev.localhost
Phpmyadmin - http://pma.dev.localhost
Mongo Express - http://moe.dev.localhost
Mailhog - http://mailhog.dev.localhost

Pra rodar o Admin é muito similar basta criar o arquivo .env.development.local existe um exemplo criado nesta pasta também o .env.example
Em seguida rodar os comandos na pasta admin:

```npm install```

e depois

```npm run start```

Se tudo der certo é só acessar o endereço http://admin.dev.localhost:3000