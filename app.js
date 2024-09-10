console.log(dados[0].titulo)

let section = document.getElementById("resultados-pesquisa")

section.innerHTML = 
`
<div class="item-resultado"> <!-- o class é para referenciar esse trecho no CSS-->
    
    <h2>zakka</h2> <!-- Título 2 --> <!-- tag "h2" deixa em negrito como um segundo título na página -->
    
    <p>‘'A transcendência só é alcançada por aqueles que sentem o groove'’

        Esta frase do talentoso produtor representa todos os elementos que ele coloca em suas músicas com a alma, que se misturam e transbordam em suas apresentações do House ao Techno.
                    
        Seu estilo único cria uma atmosfera progressiva e dançante, e com mais de 15 anos de experiência, o produtor vem conquistando uma legião de fãs, e diversos lançamentos por selos nacionais e internacionais como 1103 Musik Berlin, Do It Again, Scrambled Recordings, Loud Shout Music, Phantacid, Keep In Touch, Grooveseed, Thestroy e Bluma Records.
    </p> <!-- <p é para dar parágrafo -->
    
    <a href="https://soundcloud.com/zakka_music" target="_blank">soundcloud</a> <!-- coloca um link externo --> target é para o link abrir em uma nova página
</div>
`
