# note-task


## Questões Teóricas

1. Quais as partes principais de uma requisição HTTP?
    - R: Sao os Method , Headers, body e por fim linha do status 
2. Qual a diferença entre colocar um script dentro do "head" e no fim do "body"?
    - R: script em head vai carregar quando for abrir o site ja no body ele vai carregar depois que for processador os elementos
3. Qual a diferença entre display: block e display: inline-block ? 
    - R: display block o elemento vai ficar em um bloco em coluna e inline-block ele vai ficar em block na linha 
4. É possível criar um site responsivo SEM media queries? Por que?
    - R:
5. No Javascript, é obrigatório usar VAR para criar uma variável?
    - R: nao se tem o var para variáveis editais e globais tem o let para o escopo do arquivo e cost para o escopo do bloco então nao e obrigatório
6. Criar funções com "function() {}" e com "() => {}" tem alguma diferença além da sintaxe?
    - R: sim possui a arrow functions nao possui this, arguments , super ou seja nao possui function expressions 
7. Explique a lógica pra fazer uma paginação.
    - R: buscar tudo e puxar so a quantidade da pagina quando trocar de pagina vc pula aquele tanto que ja tinha e busca a quantidade da pagina
8. Qual a melhor forma de armazenar uma imagem no banco de dados?
    - R: a melhor forma e armazenar a imagem no Storage e salvar o nome da imagem no db e montar a url quando for requisitada
9. No React, quantos useEffect eu posso usar?
    - R: quantas vezes for preciso lembrando que ao sair da pagina o ideal e desmontar para nao ter vazamento de memoria 
10. Quais métodos de requisição preciso para criar um CRUD via API?
    - R: POST,GET,PUT,DELETE 