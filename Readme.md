## Objetivo do Trabalho

## Criar uma nova entidade e definir as rotas de pesquisa:

### Aplicação Local: Entidade Lesson(Liçao)

### /lesson  metodo get (Retorna todos os dados do DB)
### /lesson metodo post (Salvar dados do DB) exemplo:

#### { "description": "", "duration": 1 }

### /lesson/descrition metodo get (Retorna os dados a partir da palavra que foi cadastrado na description)


## Entidade (Class)

### /class  metodo get (Retorna todos os dados do DB)
### /class metodo post (Salvar dados do DB) exemplo:

#### { "description": "", "duration": 1, exp: 1 }

### /class/name metodo get (Retorna os dados a partir da palavra)

## Aplicação Sevidor Heroku

### https://natanaelnodets2020.herokuapp.com/lesson              metodo post
### https://natanaelnodets2020.herokuapp.com/lesson              metodo get
### https://natanaelnodets2020.herokuapp.com/lesson/description  metodo get

## Para cadastrar segue os campos abaixo
### { "description": "", "duration": 1 }
