<h1> Be The Hero </h1>
<h4>Projeto realizado com a participação da Semana Omnistack 11, com certificação de 92% de aproveitamento. </h4>
Front-end utilizado para cadastramento de ONGS, com a criação de ID de acesso para cadastramento de casos. Esses dados serão armezanados no Back-end, que por sua vez poderão ser visualizados pelo usuário Mobile. O usuário Mobile, caso se interesse e queria ajudar, poderá entrar em contato com o ONG via Email/Whatsapp, tal como pode ser observado nos links abaixo:

<h2>Links</h2>
<a href="https://www.youtube.com/watch?v=VxyL6S9u4dU">Front-end</a>

<a href="https://www.youtube.com/watch?v=3aEiM8QsFQQ">Mobile</a>

<h1> Tecnologias utilizadas: </h1>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Javascript</li>
  <li>NodeJS</li>
    <ul>
      <li>Express</li>
      <li>SQLite</li>
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


<h1>Configurações e Dependências:</h1>
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
Com o terminal aberto no diretório do Back-end, basta utilizar o comando:

```
npm test
```
onde serão realizados dois testes:
<ul>
<li>Unitário</li>
para ter o retorno se a ID gerada pela função <em>generateUniqueId</em> localizada em <em>backend/src/utils/generateUniqueId.js</em> está de acordo com as regras de negócio estabelicidas.

<li>Integrado</li>
tentará gerar um tabela no banco de dados de teste, onde será criado uma tabela para cadastro de ongs que se faz necessário alguns atributos e irá retornar uma ID da ong cadastrada.

>no teste, antes da tentativa de inserção de uma nova ong, ocorre um rollback para, caso já tenha sido executado um teste anteriormente, ele desfazer a tabela e assim criar outra. Dessa forma, irá evitar que o banco de dados de teste fique grande sem necessidade.

>depois do teste realizado, é cortado a conexão com o banco, para que a ferramenta não continue executando sem necessidade.


<h1>Atualizando...</h1>




