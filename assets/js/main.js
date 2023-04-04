
//    creo una funzione standard da poter riutilizzare che
//    crea elementi e aggiunge classi


function creazioneElemento( tagHtml, classi, classLivello) {
    let elemento = document.createElement(tagHtml);
    elemento.classList.add(classi);
    elemento.classList.add(classLivello);
    return elemento;
}
     
//    creo evento al click del bottone

document.getElementById('bottone').addEventListener('click',function() {
    let score = 0;
    //  richiamo la griglia
   

    let griglia = document.getElementById("griglia");
    griglia.innerHTML = "";

     // prendo i valori del select

    let livello = document.getElementById('livello').value;
    console.log ("il livello è " + livello);
    
    // abbino livello al numero di caselle da creare

    let giri;
    livello = parseInt(livello);
    console.log(typeof livello);

    if (livello === 1)  {  
        console.log(1) 
        giri = 100;
    }   else if (livello === 2) {
        console.log(2) 
        giri = 81;
    }   else if (livello === 3) {
        console.log(3) 
        giri = 49;
    }

    console.log("giri:" + giri);

       // genero un arrey con 16 numeri random che saranno poi le bombe
       let bombe = [];
    
   
       document.getElementById('livello').value;
       console.log(livello)
   
   if ( livello == 1) {
       while (bombe.length < 16) {
           let numeri =  Math.floor(Math.random() * 100)
           let risultato = bombe.includes(numeri)
           if (risultato != true) {
               bombe.push(numeri);
           }
         }
    } else if (livello == 2) {
       while (bombe.length <= 16) {
           let numeri =  Math.floor(Math.random() * 81)
           let risultato = bombe.includes(numeri)
           if (risultato != true) {
               bombe.push(numeri);
           }
         } 
    } else if (livello == 3) {
       while (bombe.length <= 16) {
           let numeri =  Math.floor(Math.random() * 49)
           let risultato = bombe.includes(numeri)
           if (risultato != true) {
               bombe.push(numeri);
               
           }
         } 
       
       
       
    } 
    
    console.log(bombe)
    
    // ciclo con numero di giri da fare in base all'if
    for (let e = 1; e <= giri; e++) {
    //   if per assegnare la classe in base al livello 

        let classeLivello;

        if (livello === 1) {
            classeLivello = "item_1";
        }

        if (livello === 2) {
            classeLivello = "item_2";
        }

        if (livello === 3) {
            classeLivello = "item_3"; 
        }

 



        //  creo variabile da associare a fuzione castom
        let divbox = creazioneElemento("div", "item", classeLivello);
        //   aggiungo evento al click
        divbox.addEventListener("click", function() {
        console.log(e)
        if (!bombe.includes(e)) {    
            // console.log(!bombe.includes(numeri))  
            this.classList.add('active');
            this.innerHTML = `<i class="fa-solid fa-check fa-beat"></i>`
            score++
        } else {
            this.classList.add('red');
            this.innerHTML = `<i class="fa-solid fa-bomb fa-beat-fade";"></i>`
            griglia.innerHTML += `<h1>hai perso con un punteggio di ${score} </h1>`;
        }
        console.log(divbox)
        })
        //  assemblo elementi creati
        divbox.append(e);
        griglia.append(divbox);

    }
})


