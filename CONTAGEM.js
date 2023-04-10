var qtdplayer=document.getElementById('idqtdplayer')
var dificuldade=document.getElementsByName('dificuldade')
var display=document.getElementById('display')
var campo=document.getElementById('campo')
var escolhadificudade
function start(){
    for (var i=0; i<dificuldade.length; i++){
        if(dificuldade[i].checked){
            escolhadificudade= i
        }
    }
    escolhadificudade+=5
    criarInputs()

    regressiva()
    
    criarTabela()
    // getRandom(0,1)
}

function regressiva(){
    setTimeout(  function(){ display.innerHTML=3}, 1000);
    setTimeout(  function(){ display.innerHTML=2}, 2000);
    setTimeout(  function(){ display.innerHTML=1}, 3000);
    setTimeout(  function(){ display.innerHTML=''}, 4000);
}

var qtdcelulas=0

function criarTabela(){
    setTimeout(  function(){ 
        var tabela=document.createElement("table")
        const corpotabela= document.createElement("tbody")
    
        for(let i=0; i<escolhadificudade; i++){
            const linha= document.createElement("tr")
    
            for(let j=0; j<escolhadificudade; j++){
                if(getRandom(0,1)==0){
                    const celula= document.createElement("td")
                    linha.appendChild(celula)
                }else{
                    const ponto= document.createElement("th")
                    linha.appendChild(ponto)
                    qtdcelulas+=1
                }
            }
            corpotabela.appendChild(linha)
        }
        tabela.appendChild(corpotabela)
        document.body.appendChild(tabela)
        setTimeout(function(){
            tabela.style.display='none'
        },7000)
    }, 4000);
    
}

function getRandom(min,max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return (Math.floor(Math.random()*(max-min+1)+min))
}

function criarInputs(){
    for(var i=0; i<qtdplayer.value; i++){
        var input=document.createElement("input")
        input.setAttribute("type","number")
        input.setAttribute("id",i)
        document.body.appendChild(input)
    }
}

function stop(){
    window.alert(Number(qtdcelulas))
}