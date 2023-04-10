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
}

function regressiva(){
    setTimeout(  function(){ display.innerHTML=3}, 1000);
    setTimeout(  function(){ display.innerHTML=2}, 2000);
    setTimeout(  function(){ display.innerHTML=1}, 3000);
    setTimeout(  function(){ display.innerHTML=''}, 4000);
}

var qtdcelulas=0
var tabuleiro = document.getElementById('tabuleiro')
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
        tabuleiro.appendChild(tabela)
        tabela.style.margin='auto'
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
var inputs=document.getElementById('inputs')
var input
function criarInputs(){
    for(var i=0; i<qtdplayer.value; i++){
        input=document.createElement("input")
        input.setAttribute("type","number")
        input.setAttribute("id",i)
        
        inputs.appendChild(input)
        input.style.width='100px'
        input.style.height='50px'
        input.style.borderRadius='10px'
        input.style.border='1px solid black'
        input.setAttribute("placeholder","Player "+i)
        input.style.margin='10px'
        input.style.paddingLeft='10px'

    }
}

var premiacao=document.getElementById('vencedor')
var again
var reload=document.getElementById('reload')
function stop(){
    // window.alert(Number(qtdcelulas))
    for(var i=0; i<qtdplayer.value; i++){
        var btn=document.getElementById(i)
        if(btn.value==Number(qtdcelulas)){
            i+=1
            premiacao.innerHTML="O jogador "+i+ "ganhou a partida!"
        }
        else{
            premiacao.innerHTML="Ninguem acertou!"
        }
    }
    premiacao.innerHTML+=" A resposta era "+Number(qtdcelulas)
    again=document.createElement("input")
    again.setAttribute("type","button")
    again.setAttribute("onclick","reload()")
    again.setAttribute("value","Recomeçar")
    reload.appendChild(again)
    again.style.width='150px'
    again.style.height='50px'
    again.style.borderRadius='50px'
    again.style.width='150px'
    again.style.cursor='pointer'

}

function reload(){
    location.reload()
}