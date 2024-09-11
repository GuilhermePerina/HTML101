function pesquisar()
{
    console.log("hello world") //Mostra algo no console (no navegador pressionar F12 >> Console)

    let section = document.getElementById("resultados-pesquisa") // criamos uma variável (section) para armazenar a tag do HTML e utilizamos o document.getElementById("ID") para acessar as coisas que estão no HTML dizendo "pegue o elemento que tenha este ("ID")

let resultados = ""

for (let dado of dados) 
{

    resultados += 
    `
    <div class="item-resultado"> <!-- o class é para referenciar esse trecho no CSS-->
    

    <h2>${dado.titulo}</h2> <!-- Título 2 --> <!-- tag "h2" deixa em negrito como um segundo título na página -->
    
    <p>${dado.descricao}</p> <!-- <p é para dar parágrafo -->
    
    <p>Últimos lançamentos: ${dado.ultimosLancamentos}</p> <!-- <p é para dar parágrafo -->

    <a href=${dado.link} target="_blank">Soundcloud </a> <!-- coloca um link externo - target é para o link abrir em uma nova página -->


    </div>
    `
}
section.innerHTML = resultados // Joga a informação atribuída, para o HTML (se não quiser que seja uma variável como neste caso, é só escrever o que quiser entre "")
}