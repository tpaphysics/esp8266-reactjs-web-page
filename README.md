<div align="center">
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn" />

<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="vite"/>

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"  alt="React" />

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" />

</div>
<br/>
<br/>

## **💻 Project**

<p align="center">
<img src="./.assets/screen.png" alt="screen" />
</p>

Esse projeto consiste em uma interface web criada em ReactJS para o firmware deste outro [projeto](https://github.com/tpaphysics/esp8266-countdown-relay) que consiste em um cronometro regressivo para acionamento remoto de um relé usando o microcontrolador ESP8266.

## **🚀 Get Started**

1. Obtenha o o build do projeto

```bash
yarn build
```

2. Após o build, será criada a pasta **_/dist_**, renomeie os arquivos **.js** e **.css** para **index.js** e **index.css** e mude também no arquivo index.html a tag **_link_** e tag **_scrpit_** :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ESP8266</title>
    <script type="module" crossorigin src="/assets/index.js"></script>
    <link rel="stylesheet" href="/assets/index.css" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

3. Agora renomeie a pasta **_dist_** para **_data_** e copie ela para o diretorio corrente do [projeto com ESP8266](https://github.com/tpaphysics/esp8266-countdown-relay).

## **👨‍🚀 Autor**

👋 My contacts!

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thiago-pacheco-200a1a86/)](https://www.linkedin.com/in/thiago-pacheco-200a1a86/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:physics.posgrad.@gmail.com)](mailto:physics.posgrad.@gmail.com)

## **📝 Licença**

Este projeto está sob os termos [Apache Licence v2.0](/LICENCE)
