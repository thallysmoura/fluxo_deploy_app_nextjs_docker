
## ​👉1. ​Deployment 

O projeto nextJS deverá conter um arquivo docker com as seguintes instruções:

**Dockerfile**:
```bash
FROM node:latest

WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]

```

Para executar a aplicação nextJS como um container no docker, siga os comandos:

```
docker build -t <NOME_IMAGEM> .
```
```
docker run -d --name app_nextjs -p <porta>:<porta> <NOME_IMAGEM>:latest
```

## ​👉🏼​ 2. Integração com DockerHub

Caso seja necessário rodar o container contendo o build docker da aplicação em um servidor, siga os passos a seguir:

*Ambiente de desenvolvimento:*

```
docker build -t <NOME_IMAGEM> .
docker login
docker tag <NOME_IMAGEM> <usuario_dockerhub>/<NOME_IMAGEM>
docker push <usuario_dockerhub>/<NOME_IMAGEM>

```

*Servidor:*
```
docker login
docker pull <usuario_dockerhub>/<NOME_IMAGEM>
docker run -d --name <NOME_APLICACAO> -p <porta>:<porta> <usuario_dockerhub>/<NOME_IMAGEM>:latest

```

## ​👉🏼​ 3. WebServer (Nginx)

**Fluxo:**
Imaginando o cenário onde o usuário 
digite o URL "apps.ham.org.br/minhaaplicacao", deverá ser mostrado pra ele a aplicação que está rodando em docker no servidor.

Diretório: "/etc/nginx/sites-enabled/site.conf":

```
  location /aplicacao {
    proxy_pass http://localhost:<PORTA_APLICACAO_DOCKER>;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }

```

Com essas definições, será exibido o build da aplicação nextJS quando o usuário acessar /aplicacao.