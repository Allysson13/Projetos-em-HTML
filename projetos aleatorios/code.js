var m = true;

function miss(){

    if(m){
        let btn = document.getElementById("no");
        let top = Math.random() * (1000 + 50) + "px";
        let left = Math.random() * (500 + 50) + "px";
        btn.style.top = top;
        btn.style.left = left;
        txt.innerHTML = "Burro";
    }

}

function yes(){

    let txt = document.getElementById("txt");
    txt.innerHTML = "Burro";

}

function no(){

    let txt = document.getElementById("txt");
    txt.innerHTML = "Inteligente";

}

function stop(){

    /*let btn = document.getElementById("no");
    btn.style.position = "static";*/
    m = false;

}

function trocar(){

    let txt1 = document.getElementById("v1");
    let txt2 = document.getElementById("v2");
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    txt1.innerHTML += n2;
    txt2.innerHTML += n1;
    console.log("teste");

}

function verificar(){
    
    let txt3 = document.getElementById("v3");
    var idade = document.getElementById("n1").value;
    var dependentes = document.getElementById("n2").value;
    if(idade < 40){

        txt3.innerHTML += "10%";

    }else if(idade <= 55 || dependentes > 1){

        txt3.innerHTML += "25%";

    }else if(dependentes > 3){

        txt3.innerHTML += "30%";

    }

}

function tabuada(){

    let n = parseInt(document.getElementById("n1").value);
    let txt = document.getElementById("n2");
    for(let i = 1; i <= 10; i++){

        txt.value += n + " + " + i + " = " + (n + i) + "\n";

    }

}

//window.history.back();
