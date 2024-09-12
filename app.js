function pesquisar() //Função que vai executar somente 1x o que tem dentro das {chaves}. Neste caso o pesquisar é um link com o que está no oneclick dentro do button do HTML

{
    console.log("hello world") //Mostra algo no console (no navegador pressionar F12 >> Console)

    let section = document.getElementById("resultados-pesquisa") // criamos uma variável (section) para armazenar a tag do HTML e utilizamos o document.getElementById("ID") para acessar as coisas que estão no HTML dizendo "pegue o elemento que tenha este ("ID"); Basicamente é o link entre o ID do HTML com o JS

    let resultados = "" // Pelo section.innerHTML ser um componente crítico na estrutura do código, quanto menos pudermos manipulá-lo, melhor. Por isso atribuímos essa variável "resultados" para o FOR e colocamos o section.innerHTML fora do FOR

for (let dado of dados) //repetição - para cada dado dentro da lista dados, pegar as infos dentro das {chaves}

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

//${} é para referenciar alguma variável dentro do JS

section.innerHTML = resultados // Joga a informação atribuída aqui no JS, para o HTML (se não quiser que seja uma variável como neste caso, é só escrever o que quiser entre "").

}
