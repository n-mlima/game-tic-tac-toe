const container= document.getElementById("container")
const container2= document.getElementById("container_2")
const botao=document.getElementById("btt")
const section= document.getElementById("body")
const sec= document.getElementById("sec")


document.getElementById("btt").addEventListener("click", function(){

    function resetBotoes(value){

        btt1.style.pointerEvents = value
        btt2.style.pointerEvents = value
        btt3.style.pointerEvents = value
        btt4.style.pointerEvents = value
        btt5.style.pointerEvents = value
        btt6.style.pointerEvents = value
        btt7.style.pointerEvents = value
        btt8.style.pointerEvents = value
        btt9.style.pointerEvents = value
    
    }

    function resetText(){

        btt1.innerText=""
        btt2.innerText=""
        btt3.innerText=""
        btt4.innerText=""
        btt5.innerText=""
        btt6.innerText=""
        btt7.innerText=""
        btt8.innerText=""
        btt9.innerText=""

    
    }
    function resetStyle(){
       
        btt1.style.backgroundColor=""
        btt2.style.backgroundColor=""
        btt3.style.backgroundColor=""
        btt4.style.backgroundColor=""
        btt5.style.backgroundColor=""
        btt6.style.backgroundColor=""
        btt7.style.backgroundColor=""
        btt8.style.backgroundColor=""
        btt9.style.backgroundColor=""

    
    }
    function reinicar(){
        section.appendChild(button)
        section.appendChild(button2)
        button.addEventListener("click", function(){
            location.reload()
            
        })
        button2.addEventListener("click", function(){
            cont=0
            win=0
            resetText()
            resetStyle()
            resetBotoes("auto")
            label.innerText="Jogo Iniciado"
            section.appendChild(jogada)
            button.remove()
            button2.remove()

        })
    }
    

 
    const player1= document.getElementById("player1").value
    const player2= document.getElementById("player2").value
    
    container.remove()
    container2.remove()
    botao.remove()
    sec.remove()

    const div=document.createElement("div")
    div.id="container_grid"
    const btt1=document.createElement("button")
    btt1.className="btt_grid"
    btt1.innerText=""
    btt1.style.setProperty("border-right","3px solid black")
    const btt2=document.createElement("button")
    btt2.className="btt_grid"
    btt2.innerText=""
    btt2.style.setProperty("border-right","3px solid black")
    const btt3=document.createElement("button")
    btt3.className="btt_grid"
    btt3.innerText=""
    const btt4=document.createElement("button")
    btt4.className="btt_grid"
    btt4.innerText=""
    btt4.style.setProperty("border-top","3px solid black")
    btt4.style.setProperty("border-right","3px solid black")
    const btt5=document.createElement("button")
    btt5.className="btt_grid"
    btt5.innerText=""
    btt5.style.setProperty("border-top","3px solid black")
    btt5.style.setProperty("border-right","3px solid black")
    const btt6=document.createElement("button")
    btt6.className="btt_grid"
    btt6.innerText=""
    btt6.style.setProperty("border-top","3px solid black")
    const btt7=document.createElement("button")
    btt7.className="btt_grid"
    btt7.innerText=""
    btt7.style.setProperty("border-top","3px solid black")
    btt7.style.setProperty("border-right","3px solid black")
    const btt8=document.createElement("button")
    btt8.className="btt_grid"
    btt8.innerText=""
    btt8.style.setProperty("border-top","3px solid black")
    btt8.style.setProperty("border-right","3px solid black")
    const btt9=document.createElement("button")
    btt9.className="btt_grid"
    btt9.innerText=""
    btt9.style.setProperty("border-top","3px solid black")
    
    div.append(btt1,btt2,btt3,btt4,btt5,btt6,btt7,btt8,btt9)
    section.appendChild(div)
    const label=document.createElement("h2")
    label.innerText="Jogo Iniciado"
    label.className="player"
    section.appendChild(label)
    
    section.appendChild(document.createElement("br"))
    const jogada=document.createElement("label")
    jogada.innerText=player1+" faça sua jogada"
    jogada.className="player"
    let jogador="X"
    section.appendChild(jogada)
    let cont=0
    let win=0
    const button=document.createElement("button")
    button.innerText="Novo Jogo"
    button.id="btt"
    const button2=document.createElement("button")
    button2.innerText="Jogar Novamente "
    button2.id="btt2"

    document.querySelectorAll(".btt_grid").forEach(function(btt){
    
        btt.addEventListener("click",function(){
            cont++
          
            if(jogador==="O"){
                btt.innerText="O"
               // btt.disabled=true
               btt.style.pointerEvents = 'none';
                
                jogador="X"
                jogada.innerText=player1+" faça sua jogada"   
            }else{
                btt.innerText="X"
                btt.style.pointerEvents = 'none';
                
                jogador="O"
                jogada.innerText=player2+" faça sua jogada"   
            }
            
            if(btt1.innerText==="O" && btt2.innerText==="O" && btt3.innerText==="O" ){
                btt1.style.setProperty("background-color","red")
                btt2.style.setProperty("background-color","red")
                btt3.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player2+", você ganhou!"
                win=1
                resetBotoes("none")
                
                reinicar()
                
            }
            if(btt4.innerText==="O" && btt5.innerText==="O" && btt6.innerText==="O" ){
                btt4.style.setProperty("background-color","red")
                btt5.style.setProperty("background-color","red")
                btt6.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player2+", você ganhou!"
                win=1
                resetBotoes("none")
                reinicar()
            }
            if(btt7.innerText==="O" && btt8.innerText==="O" && btt9.innerText==="O" ){
                btt7.style.setProperty("background-color","red")
                btt8.style.setProperty("background-color","red")
                btt9.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player2+", você ganhou!"
                win=1
                resetBotoes("none")
                reinicar()
            }
            if(btt3.innerText==="O" && btt5.innerText==="O" && btt7.innerText==="O" ){
                btt3.style.setProperty("background-color","red")
                btt5.style.setProperty("background-color","red")
                btt7.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player2+", você ganhou!"
                win=1
                resetBotoes("none")
                reinicar()
            }
            if(btt1.innerText==="O" && btt5.innerText==="O" && btt9.innerText==="O" ){
                btt1.style.setProperty("background-color","red")
                btt5.style.setProperty("background-color","red")
                btt9.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player2+", você ganhou!"
                win=1
                resetBotoes("none")
                reinicar()
            }

            if(btt1.innerText==="O" && btt4.innerText==="O" && btt7.innerText==="O" ){
                btt1.style.setProperty("background-color","red")
                btt4.style.setProperty("background-color","red")
                btt7.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player2+", você ganhou!"
                win=1
                resetBotoes("none")
                reinicar()
            }

            if(btt2.innerText==="O" && btt5.innerText==="O" && btt8.innerText==="O" ){
                btt2.style.setProperty("background-color","red")
                btt5.style.setProperty("background-color","red")
                btt8.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player2+", você ganhou!"
                win=1
                resetBotoes("none")
                reinicar()
            }
            if(btt3.innerText==="O" && btt6.innerText==="O" && btt9.innerText==="O" ){
                btt3.style.setProperty("background-color","red")
                btt6.style.setProperty("background-color","red")
                btt9.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player2+", você ganhou!"
                win=1
                resetBotoes("none")
                reinicar()
            }

            if(btt1.innerText==="X" && btt2.innerText==="X" && btt3.innerText==="X" ){
                btt1.style.setProperty("background-color","red")
                btt2.style.setProperty("background-color","red")
                btt3.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player1+", você ganhou!"
                win=1
                resetBotoes("none")
                reinicar()

                
                
            }
            if(btt4.innerText==="X" && btt5.innerText==="X" && btt6.innerText==="X" ){
                btt4.style.setProperty("background-color","red")
                btt5.style.setProperty("background-color","red")
                btt6.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player1+", você ganhou!"
                win=1
                resetBotoes("none")
                reinicar()
            }
            if(btt7.innerText==="X" && btt8.innerText==="X" && btt9.innerText==="X" ){
                btt7.style.setProperty("background-color","red")
                btt8.style.setProperty("background-color","red")
                btt9.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player1+", você ganhou!"
                win=1
                resetBotoes("none")
                reinicar()
            }
            if(btt3.innerText==="X" && btt5.innerText==="X" && btt7.innerText==="X" ){
                btt3.style.setProperty("background-color","red")
                btt5.style.setProperty("background-color","red")
                btt7.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player1+", você ganhou!"
                win=1
                resetBotoes("none")
                reinicar()
            }
            if(btt1.innerText==="X" && btt5.innerText==="X" && btt9.innerText==="X" ){
                btt1.style.setProperty("background-color","red")
                btt5.style.setProperty("background-color","red")
                btt9.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player1+", você ganhou!"
                win=1
                resetBotoes("none")
                reinicar()
            }

            if(btt1.innerText==="X" && btt4.innerText==="X" && btt7.innerText==="X" ){
                btt1.style.setProperty("background-color","red")
                btt4.style.setProperty("background-color","red")
                btt7.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player1+", você ganhou!"
                win=1
                resetBotoes("none")
                reinicar()
            }

            if(btt2.innerText==="X" && btt5.innerText==="X" && btt8.innerText==="X" ){
                btt2.style.setProperty("background-color","red")
                btt5.style.setProperty("background-color","red")
                btt8.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player1+", você ganhou!"
                win=1
                resetBotoes("none")
                reinicar()
            }
            if(btt3.innerText==="X" && btt6.innerText==="X" && btt9.innerText==="X" ){
                btt3.style.setProperty("background-color","red")
                btt6.style.setProperty("background-color","red")
                btt9.style.setProperty("background-color","red")

                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Parabéns "+player1+", você ganhou!"
                win=1
                resetBotoes("none")
                reinicar()
            }
            if(cont === 9 && win != 1){
                section.removeChild(jogada)
                label.innerText="Jogo Finalizado\n\n"+"Empate técnico"
                section.appendChild(button)
                reinicar()

            }
            
        })
        
    })
    
    


})

    
    
