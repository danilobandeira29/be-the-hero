<h1> Be The Hero </h1>
<h4>Projeto realizado com a participação da Semana Omnistack 11, com certificação de 92% de aproveitamento. </h4>
<strong>Front-end</strong> utilizado para cadastramento de ONGS, com a criação de ID de acesso para cadastramento de casos. Esses dados serão armazenados no <strong>Back-end</strong>, que por sua vez poderão ser visualizados pelo usuário <strong>Mobile</strong>. O usuário <strong>Mobile</strong>, caso se interesse e queria ajudar, poderá entrar em contato com a ONG via Email/Whatsapp, tal como pode ser observado nos links abaixo:

<h2>Links</h2>
<a href="https://www.youtube.com/watch?v=VxyL6S9u4dU">Front-end</a>

<a href="https://www.youtube.com/watch?v=3aEiM8QsFQQ">Mobile</a>

<h1> Tecnologias utilizadas</h1>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Javascript</li>
  <li>NodeJS</li>
    <ul>
      <li>Express</li>
      <li>SQLite</li>
      <li>Crypto</li>
      <li>Knex</li>
      <li>Insomnia</li>
      <li>Celebrate</li>
      <li>Cors</li>
      <li>Cross-env</li>
      <li>Supertest</li>
      <li>Jest</li>
      <li>Nodemon</li>
    </ul>
  <li>ReactJS</li>
   <ul>
    <li>Axios</li>
   </ul>
  <li>React Native</li>
      <ul>
        <li>Expo</li>
        <li>Axios</li>
      </ul>
</ul>


<h1>Configurações e Dependências</h1>
Tanto na pasta <strong>backend</strong>, <strong>frontend</strong> e <strong>mobile</strong>, existe um arquivo chamado package.json, onde contém todas as dependências necessárias nos campos <em>"dependencies"</em> e <em>"devDependencies"</em>(necessárias apenas na implementação, ferramentas de teste, monitoramento).

```
  "dependencies": {
    "celebrate": "^12.0.1",
    "cors": "^2.8.5",
    "cross-env": "^7.0.2",
    "express": "^4.17.1",
    "knex": "^0.20.13",
    "sqlite3": "^4.1.1"
  },
  "devDependencies": {
    "jest": "^25.2.3",
    "nodemon": "^2.0.2",
    "supertest": "^4.0.2"
  }
```

<h1>Teste</h1>
Com o terminal aberto no diretório do <strong>backend</strong>, basta utilizar o comando:

```
npm test
```
onde serão realizados dois testes:
<ul>
  <li><strong>Unitário</strong> - para ter o retorno se a ID gerada pela função <em>generateUniqueId</em> localizada em <em>backend/src/utils/generateUniqueId.js</em> está de acordo com as regras de negócio estabelicidas.</li>


  <li><strong>Integrado</strong> - tentará gerar um tabela no banco de dados de teste, onde será criado uma tabela para cadastro de ongs que se faz necessário alguns atributos e irá retornar uma ID da ong cadastrada.</li>
</ul>

>no teste, antes da tentativa de inserção de uma nova ong, ocorre um rollback para, caso já tenha sido executado um teste anteriormente, ele desfazer a tabela e assim criar outra. Dessa forma, irá evitar que o banco de dados de teste fique grande sem necessidade.

>depois do teste realizado, é cortado a conexão com o banco, para que a ferramenta não continue executando sem necessidade.

<h1>Teste de Rotas</h1>
Caso queria testar as rotas/métodos http e seus retornos, basta executar o servidor(mostrado no tópico abaixo) e abrir a ferramenta de teste, como o <a href="https://insomnia.rest/"> Insomnia</a>(utilizando durante o desenvolvimento).


<h1>Inicializando o Back-end</h1>
Basta utilizar o comando:

```
npm start
```

para executar o servidor.


<h1>Inicializando o Front-end/Mobile</h1>
Com o <strong>back-end</strong> inicializado, basta ir no terminal aberto no diretório do <strong>frontend</strong>/<strong>mobile</strong> e executar:

```
npm start
```
e o seu navegador padrão irá abrir uma página com a aplicação.

<h2>No Caso da inicialização do Mobile,</h2>
a página irá abrir com várias opções para rodar a aplicação, são elas:
<ul>
  <li>Executar no Android via cabo/emulador</li>
  <li>Executar no iOS via emulador</li>
  <li>Executar em página web</li>
  <li>Via QR Code*</li>
</ul>
<h2>Via QR Code</h2>
É necessário a instalação do aplicativo <strong>Expo</strong>, disponível tanto na <strong>Google Play Store</strong> como na <strong>App Store</strong>.


<h1>Futuras Atualizações</h1>
<ul>
  <li>Modo noturno</li>
</ul>
