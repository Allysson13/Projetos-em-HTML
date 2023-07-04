function tabuada(operacao) {

    let n = document.getElementById("n1").value;
    let txt = document.getElementById("n2");

    if(operacao == "+"){

        adição(n, n2, txt);

    }else if(operacao == "-"){

        subtração(n, n2, txt);

    }else if(operacao == "*"){

        multiplicação(n, n2, txt);

    }else if(operacao == "/"){

        divisão(n, n2, txt);

    }else if(operacao == "^"){

        exponencial(n, n2, txt);

    }else{

        raiz(n, n2, txt);

    }

    function adição(n, n2, txt) {

        txt.value = n + " + " + n2 + " = " + (n + n2) + "\n";

    }

    function subtração(n, n2, txt) {

        txt.value = n + " - " + n2 + " = " + (n - n2) + "\n";

    }

    function multiplicação(n, n2, txt) {

        txt.value = n + " * " + n2 + " = " + (n ** n2) + "\n";

    }

    function divisão(n, n2, txt) {

        txt.value = n + " / " + n2 + " = " + (n / n2) + "\n";

    }

    function exponencial(n, n2, txt) {

        txt.value = n + " ^ " + n2 + " = " + (n ** n2) + "\n";

    }

    function raiz(n, n2, txt) {

        txt.value = n + " ~ " + n2 + " = " + (n ** (1/n2)) + "\n";

    }

}