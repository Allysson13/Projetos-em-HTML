var m = true;

function miss(){

    if(m){
        var btn = document.getElementById("no");
        var top = Math.random() * (1000 + 50) + "px";
        var left = Math.random() * (500 + 50) + "px";
        btn.style.top = top;
        btn.style.left = left;
        txt.innerHTML = "Burro";
    }

}

function yes(){

    var txt = document.getElementById("txt");
    txt.innerHTML = "Burro";

}

function no(){

    var txt = document.getElementById("txt");
    txt.innerHTML = "Inteligente";

}

function stop(){

    /*let btn = document.getElementById("no");
    btn.style.position = "static";*/
    m = false;

}
//window.history.back();
