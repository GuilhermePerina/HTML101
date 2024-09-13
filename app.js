function pesquisar() //Função que vai executar somente 1x o que tem dentro das {chaves}. Neste caso o pesquisar é um link com o que está no oneclick dentro do button do HTML

{
    console.log("hello world"); //Mostra algo no console (no navegador pressionar F12 >> Console)

    let section = document.getElementById("resultados-pesquisa"); // criamos uma variável (section) para armazenar a tag do HTML e utilizamos o document.getElementById("ID") para acessar as coisas que estão no HTML dizendo "pegue o elemento que tenha este ("ID"); Basicamente é o link entre o ID do HTML com o JS

    let resultados = ""; // Pelo section.innerHTML ser um componente crítico na estrutura do código, quanto menos pudermos manipulá-lo, melhor. Por isso atribuímos essa variável "resultados" para o FOR e colocamos o section.innerHTML fora do FOR

    let titulo = ""; //criamos essas outras variáveis para armazenar na memória e inicializar elas, e pra não ter que manipular dentro das estruturas de repetição if, for e etc
    let descricao = ""; 
    let tags = ""; 

    let campoPesquisa = document.getElementById("campo-pesquisa").value; //criamos outra variável para mandar as informações daqui para o "campo-pesquisa" do HTML, e o .value é para aparecer exatamente o que digitarmos lá no campo pesquisa

    console.log(campoPesquisa); //vai escrever no console o que foi escrito no campo de pesquisa (está aqui só pra saber que dá pra fazer isso)

    if (!campoPesquisa) //esse if é só pra responder que se nada foi encontrado, faça isso:
    { 
        section.innerHTML = "<p>Nenhum resultado encontrado</p>" //o que vai ser escrito caso o if seja true
        return //Aqui o código volta para trás
    }

    campoPesquisa = campoPesquisa.toLowerCase(); //deixamos tudo que escrever no campo em letra minúscula pra procurar nos dados


    for (let dado of dados) //repetição - para cada dado dentro da lista dados, pegar as infos dentro das {chaves}

    {
        titulo = dado.titulo.toLowerCase() //criamos uma variável com o titulo em minusculo pra comparar
        descricao = dado.descricao.toLowerCase() //criamos uma variável com a descrição em minusculo pra comparar
        tags = dado.tags.toLowerCase() //criamos uma variável com as tags em minusculo pra comparar

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) //includes é para comparação e devolve true or false (neste caso está comparando o titulo, que é o dado.titulo minúsculo, com o campoPesquisa) e o if está trabalhando com o resultado true or false, ou seja, se true, executa o código e mostra, se não, ignora as linhas e segue em frente, ou seja, não mostra. as duas barras || é como or
        {
            resultados += //tem que ser += para aparecer todas as vezes que o loop correr, se não vai mostrar somente a informação do último loop

            `
            <div class="item-resultado"> <!-- o class é para referenciar esse trecho no CSS-->
        
            <h2>${dado.titulo}</h2> <!-- Título 2 --> <!-- tag "h2" deixa em negrito como um segundo título na página -->
        
            <p>${dado.descricao}</p> <!-- <p é para dar parágrafo --> 
            
            <p>Últimos lançamentos: ${dado.ultimosLancamentos}</p> <!-- <p é para dar parágrafo -->

            <a href=${dado.link} target="_blank">Soundcloud </a> <!-- coloca um link externo - target é para o link abrir em uma nova página -->

            </div>
            `

        }
        
    }

if (!resultados) //se eu não tenho resultado, faça isso:
    {
        resultados = "<p>Nada foi encontrado. Digite o nome de um artísta de Techno</p>"
    }

//${} é para referenciar alguma variável dentro do JS

section.innerHTML = resultados // Joga a informação atribuída aqui no JS, para o HTML (se não quiser que seja uma variável como neste caso, é só escrever o que quiser entre "").

}
