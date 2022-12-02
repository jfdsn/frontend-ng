<h1 align="center"> Frontend-NG </h1>


Front-end do projeto proposto pelo tech challenge da empresa NG.Cash. É uma single page aplication desenvolvida
em Reactjs e que faz comunicação com o Back-end também desenvolvido no mesmo desafio.


## :hammer: Funcionalidades do projeto

- `Page Home`: página inicial da aplicação.
- `Page Login`: acessada pelo botão "Entrar" do header, é a página de realização de login.
- `Page Signin`: acessada pelo botão "Cadastrar" do header, é a página de cadastro de novos usuários.
- `Page User`: é a página acessada quando um login é bem sucedido.

## :hammer: Como instalar

A aplicação é dockerizada e é necessário seguir alguns passos antes do uso.

- `Passo 1`: O primeiro passo é confirmar que tenha o docker instalado no ambiente.

- `Passo 2`: Acessar o terminal no diretório raiz da aplicação e executar o comando para criar a imagem
da aplicação baseado no Dockefile:

    "docker build -t front-ng ."

- `Passo 3`: O próximo passo é criar e executar o container com a imagem da aplicação:

    "docker run --rm --name frontend -it -p 3000:3000 front-ng"

- `Passo 4`: Acessar a aplicação pelo navegador no caminho "localhost:3000/"

## :heavy_check_mark: Técnicas e tecnologias utilizadas

- `Node`
- `npm`
- `Reactjs`
- `React Router`
- `Context api`
- `StyledComponents`
- `Typescript`
- `JavaScript`

## Autor
- `Jônathan Faria`