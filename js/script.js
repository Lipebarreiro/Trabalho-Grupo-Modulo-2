function feed(){
{alert("Feedback enviado com sucesso!")}
};

// TUDO INVISIVEL NA PAGINA DE PACOTES

document.getElementById("saibaMais").style.display = "none";
document.getElementById("saibaMais2").style.display = "none";
document.getElementById("saibaMais3").style.display = "none";

// BOTÃO FRONT 1 SLIDE END E INFORMAÇÕES PRA MOSTRAR

function saiba(){
    document.getElementById('saibaMais'); //PEGA O ID DA SECTION
    document.getElementById("saibaMais").style.display = "block"; //MOSTRA A SEÇÃO
    }

    // BOTÃO 2 SLIDE BACK-END E INFORMAÇÕES

function saiba2(){
    document.getElementById('saibaMais2'); //PEGA O ID DA SECTION
    document.getElementById("saibaMais2").style.display = "block"; //MOSTRA A SEÇÃO
    }

    // BOTÃO DO 3SLIDE DEV FULL STACK E INFORMAÇÕES

   
function saiba3(){
    document.getElementById('saibaMais3'); //PEGA O ID DA SECTION
    document.getElementById("saibaMais3").style.display = "block"; //MOSTRA A SEÇÃO
    }

    // CLICAR PRA PASSAR O PACOTE DEIXAR AS INFORMAÇÕES INVISIVEIS 
    
function esconderInfo(){
    document.getElementById("saibaMais").style.display = "none";
    document.getElementById("saibaMais2").style.display = "none";
    document.getElementById("saibaMais3").style.display = "none";
}