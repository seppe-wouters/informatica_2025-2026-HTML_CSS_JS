const pwEl = document.querySelector("#pw")
const res = document.querySelector("#res")
const CG = document.querySelector("#checkGetal")

let waarde = pwEl.value

pwEl.addEventListener("input", () => {
    waarde = pwEl.value
    if (waarde.length < 6) {
        res.innerHTML = "te kort"
    }
    else if (waarde.length > 6 && waarde.length < 9) {
        res.innerHTML = "oké"
    }
    else if (waarde.length > 10) {
        res.innerHTML = "sterk"
    }
    checkGetal() 
})

function checkGetal() {
    if (/\d/.test(waarde) == false) {
        CG.innerHTML = "je hebt minsten 1 cijfer nodig"
    } else {
        CG.innerHTML = "je hebt een getal"
    }
}

/*
        6666666677777777777777777777
       6::::::6 7::::::::::::::::::7
      6::::::6  7::::::::::::::::::7
     6::::::6   777777777777:::::::7
    6::::::6               7::::::7 
   6::::::6               7::::::7  
  6::::::6               7::::::7   
 6::::::::66666         7::::::7    
6::::::::::::::66      7::::::7     
6::::::66666:::::6    7::::::7      
6:::::6     6:::::6  7::::::7       
6:::::6     6:::::6 7::::::7        
6::::::66666::::::67::::::7         
 66:::::::::::::667::::::7          
   66:::::::::66 7::::::7           
     666666666  77777777            
*/