# Lista Npm Packages

Projeto para criação de um buscador de pacotes de códigos usando o npm
[Tela1](https://imgur.com/QAhcDkv)
[Tela2](https://imgur.com/6f1gcwy)

# Iniciando
Essas instruções fornecerão uma cópia do projeto em execução na um máquina local para fins de desenvolvimento e teste. Consulte implantação para obter notas sobre como implantar o projeto.

## Pré-requisitos:
Para execução e desenvolvimento do projeto é necessário, ou que tenha instalado:
- Angular 10
- Node-js

## Desenvolvido com
 - HTML
 - JavaScript
 - TypeScript

## Execução pro projeto
 - O site foi desenvolvido em localhost, para fazer executa-lo será necessário instalar o node.js, utilizar qualquer editor de código, exemplo: Visual Studio Code. 
 No visual Studio pelo terminal deve utilizar o comando ```npm install -g @angular/cli``` e logo após o download terminar, escolher um diretório para colocar a pasta do projeto, após, utilizar o comando ``` cd localdoprojeto ``` e ```ng serve -o ``` para instalar o servidor e mostrar o projeto no navegador.
 - O site de busca está hospedado no Heroku [https://listar-npm-packages.herokuapp.com] : Para fazer a hospagem foi necessário a criação de três arquivos : ```Procfile``` = que será para iniciar o servidor, logo, deve-se rodar ``` npm run build ``` e o ``` npm i express```; o segundo arquivo: ```server.js``` = nesse arquivo conterá os códigos que terá a funcao de inicializar o servidor na porta = 8080,  um get para tudo que for requisitado e ao final enviar o arquivo da página.
## Api para fazer as requisições
 - [Heroku](https://www.heroku.com/)

## Arquitetura do projeto	
	
    -pacotes-br

	   -dist\listar-npm-packages
       -src
		    -app
			    -packages-details
                -packages
			          
	
	
### Stacks
	- O site foi desenvolvido em HTML, TypeScript e JavaScript.
	-  ele já possui um conceito de container.
    - API Resful

 ### Melhorias
 - O projeto do website ainda sofrerar melhorias como: estilização, renposividade e desing.
## Autores
- Jadiel Elias Mouchrek dos Santos

 ### Referências

 - https://imasters.com.br/angular/publicando-uma-aplicacao-angular-no-heroku  
