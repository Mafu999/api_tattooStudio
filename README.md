# api_tattooStudio

<img style="text-align: center;" src="https://media1.tenor.com/images/25810a0b9f3febfdd7b011435cab409d/tenor.gif" /> 

<h2>Introdução</h2>
<p>Bem vindo a API de um Studio de tatuagem que está se expandindo rapidamente e necessita compartilhar dados importantes para suas filiais.</p>

<h2>Como instalar as dependencias necessárias para rodar o projeto</h2>
<ul>
  <li>Primeiramente você tem que dar um clone do projeto em alguma pasta do seu computador. Se você não fez isso ainda(poxa hein), ou simplesemente não sabe o que fazer, te deixo um link
<a href="https://docs.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository">AQUI</a>.</li>
  <li>Para fazer alterações é necessário ter o Node.js instalado na sua máquina. Deixo aqui instruções de instalação para <a href="https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos">Windows, Linux e Mac</a></li>
  <li>Abra a pasta do projeto e exclua dois arquivos:
  <ol>
  <li>package-lock.json</li>
  <li>package.json</li>
  </ol></li>
  <li>Abra o terminal do seu computador na pasta do projeto e execute o comando:</li>
  npm init --y
<h2>Instalando pacotes (os passos a seguir são comandos que deverão ser executados no terminal)</h2>
  <h3>Express</h3>
  <li>npm i express --save</li>
  <li><a href="https://www.npmjs.com/package/express">Documentação</a></li>
  <h3>Cors</h3>
  <li>npm i cors --save</li>
  <li><a href="https://www.npmjs.com/package/cors">Documentação</a></li>
  <h3>Nodemon</h3>
  <li>npm i nodemon --save-dev</li>
  <li><a href="https://www.npmjs.com/package/nodemon">Documentação</a></li>
  <h3>Jest</h3>
  <li>npm i jest --save-dev</li>
  <li><a href="https://www.npmjs.com/package/jest">Documentação</a></li>
  <h3>Sqlite 3</h3>
  <li>npm i sqlite3</li>
  <li><a href="https://www.npmjs.com/package/sqlite3">Documentação</a></li>
  <h2>Executando...</h2>
  <li>No arquivo <i>package.json</i> em:
      "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  }
  Alterar para:
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  }</li>
  <li>No arquivo <i>server.js</i> adicionar uma porta na: "const port = process.env.PORT", alterando a variável para: "const port = 4022". Nota: Fique atento ao próximo passo, pois se ele não funcionar por probema de porta, altere a mesma para "4023", "4024" e assim sucessivamente até funcionar.</li>
  <li>Execute o comando:</li>
  npm start
  <li>Se no terminal aparecer a mensagem "Server runing in port:", parabéns, tudo está funcionando. 🥰  Vamos brincar com o banco de dados?</li>
  <h2>Aplicando as rotas possíveis</h2>
  <h3>Get</h3>
  <li><i><b>Obs</b>: Para executar essa e as proximas rotas, será necessário utilizar uma ferramenta de testes de api REST como o <a href="https://insomnia.rest/download"><i>Insomnia</i></a>, se quiser apenas consultar os dados deixarei o link da hospedagem no heroku <a href="https://floating-depths-35129.herokuapp.com/tattoo/studio"><i>AQUI</i></a>.</i></li>
  <li><b>Get Simples</b>: localhost:porta/tattoo/studio/<br> <b>Exemplo</b>: localhost:4022/tattoo/studio/ </li>
  <li><b>Get Específico</b>: localhost:porta/tattoo/studio/:ID<br><b>Exemplo</b>: localhost:4022/tattoo/studio/4 </li>
  <h3>Post</h3>
  <li>localhost:porta/tattoo/studio/addStudio<br><b>Exemplo</b>: localhost:4022/tattoo/studio/addStudio</li>
  <li>No seu software de teste, vá em "Json Content" e cole:<br> </li>
  {
    "UNIDADE": "",
    "RUA": "",
    "NUMERO": "",
    "BAIRRO": "",
    "CIDADE": "",
    "ESTADO": "",
    "TELEFONE": "",
    "FUNCIONARIOS": "",
    "RECEITA": "",
    "DESPESAS": ""
  }
  <li>Preencha as aspas com suas respectivas informações e envie.</li>
  <h3>Put</h3>
  <li>localhost:porta/tattoo/studio/edit/:ID<br> de um <i>Get Specific</i> no id que deseja modificar, copie seu conteúdo Json e cole em "Json content" quando for implementar o <b>Put</b>. Não se esqueça de apagar o atributo "ID" do Json, para evitar bugs. 😉 Altere as informações necessárias e mantenha as que não precisam ser alteradas.  </li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  
</ul>

