function tecla (n){
    var numero = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = numero + n;

}

function resultado (){
    var resultado =parseInt(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = resultado;
}