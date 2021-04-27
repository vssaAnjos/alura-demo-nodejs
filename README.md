# alura-demo-nodejs
Alura - Demo NodeJS - Criando API Rest com express

# Resumos da aula

Parte I:
    - Configuramos o express e isolamos essa configuração;
    - Criamos uma rota POST para criar um novo atendimento e consumir essa rota usando o Postman;
    - Usamos body-parser para conseguir ler os dados que estamos recebendo no body.

Parte II:
    - Conectamos nosso servidor com o mysql;
    - Criamos tabelas no mysql usando um script node;
    - Salvamos o nosso atendimento no banco de dados.
    
Parte III:
    - Tratamos datas com MomentJS;
    - Estudamos tipos de status HTTP e quando são usados;
    - Validamos entradas antes de enviar os dados para o banco de dados.
    - Métodos HTTP: Post, Get, Patch
Modulos:

Models - Responsabilidades:
- Conectar com o banco de dados
- Aplicar regras de negócio

Controllers - Responsabilidades:
- Decidir qual requisição utilizar
- Qual parte do model utilizar para cada requisição