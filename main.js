//DOM Document Object Model


//É melhor deixar todas as constantes fora, pq se não a cada chamada da função, as constantes vão ser chamadas denovo, e vai deicar o programa mais lento


/*Abre e fecha o menu: hamburguer e X */
const nav = document.querySelector('#header nav') //query-> pesquisar

const toggle = document.querySelectorAll("nav .toggle") //encontra, dentro do nav, TODOS os arquivos de classe toggle

for (const element of toggle){
    element.addEventListener('click', function() {
        nav.classList.toggle('show');  //se tiver show, ent tira. se não, então coloca!
    }) //função anônima
}


/*Fechar o menu quando tocar em uma opção*/

//Yo tentando:

const links = document.querySelectorAll("nav ul li a")

for(const element of links){
    element.addEventListener('click', function() { //Se o click aparecer, então vai rodar a função
        nav.classList.remove("show"); //podia ser toggle, mas não precisa por ser ilógico  
    })
}





/*============ Reveal =============*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px', /*Ele desce 30 px, pra dar animação*/
    duration: 700,
    reset: true

})




ScrollReveal().reveal(`
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .cards,
    #solutions header, #solutions .topics,
    #clients,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `)





/*Mostra o botão de subir a página*/
const turnBack = document.querySelector('.turn-back') //javascrip não aceita turn_back, mas aceita  turnBack    
function turnBackButton(){
    if (window.scrollY >= 560){
        turnBack.classList.add('show')
    }
    else{
        turnBack.classList.remove('show')
    }
}



const logo_alt = document.getElementById("logo_alt")
// const pedrao = document.getElementById("pedrao")
//Sombra na parte superior quando se meche a página
function ChengeHeaderWhenScroll(){
    const header = document.querySelector("#header");
    const navHeight = header.offsetHeight;
    const nav = document.querySelector("nav");
    
    if(window.scrollY >= navHeight){
        header.classList.add("scroll")
        nav.classList.add("scroll")
        logo_alt.src = "assets/titulo_logo/teste.jpg"//Logo_Casarotto_Cortado_Enxuto_Alt.jpg"
        // pedrao.src = "assets/clients/usina-sonora.png"

    } else{
        header.classList.remove("scroll")
        nav.classList.remove("scroll")
        logo_alt.src = "assets/titulo_logo/Logo_Casarotto_Cortado_Enxuto.jpg"
        // pedrao.src = "assets/clients/unimed.png"
    }
}


window.addEventListener('scroll', function(){
    ChengeHeaderWhenScroll();
    turnBackButton();
    DinamicNavigation();
    ZoomTopics();
    //onScrollHandler();
})



/*Menu dinâmico*/


const sections = document.querySelectorAll('main section[id]')/*Todas as seções que vem acompanhadas de um ID    */
function DinamicNavigation(){
    const checkpoint = window.pageYOffset + (window.innerHeight/8) *4;

    for (const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionID = section.getAttribute('id')

        const checkpointStart = checkpoint >=sectionTop
        const checkpointEnd = checkpoint <= sectionHeight + sectionTop      /*Vai ser só se o checkpoint por menor que a altura do display (h - ho) */
        
        if (checkpointStart && checkpointEnd){
            document.
            querySelector('nav ul li a[href*=' + sectionID + ']')
            .classList.add('active')
        }
        else{
            document.
            querySelector('nav ul li a[href*=' + sectionID + ']')
            .classList.remove('active')
        }
    
    }

}



const topics = document.querySelectorAll('main #solutions #topics')

function ZoomTopics(){
    for(const topic of topics){
        element.addEventListener('click', function() {
            querySelector('#solutions #topic')
            topics.classList.add('active')
        })
    }
}






