function encriptar() {
    var textarea = document.getElementById("textEncriptar");
    var datos = textarea.value.toLowerCase();


    // Validad que haya datos para realizar la encriptación
    if (datos.length > 0){
        var textEncriptar = datos.replace('\n', ' ');
        var newtext = '';
        for (var i = 0; i < textEncriptar.length; i++){
            if (textEncriptar[i] == 'e'){
                newtext = newtext + 'enter';
            }
            else if (textEncriptar[i] == 'i'){
                newtext = newtext + 'imes'; 
            }
            else if (textEncriptar[i] == 'a'){
                newtext = newtext + 'ai'; 
            }
            else if (textEncriptar[i] == 'o'){
                newtext = newtext + 'ober'; 
            }
            else if (textEncriptar[i] == 'u'){
                newtext = newtext + 'ufat';
            }
            else if (textEncriptar[i] == ' ') {
                newtext = newtext + ' ';
            }
            else {  
                newtext = newtext + textEncriptar[i]
            }
        }

        var msjResultado = document.getElementById("msjResultado");
        msjResultado.style.display = 'none';

        var resultado = document.getElementById("resultado");
        resultado.style.height = '650px';
        resultado.style.fontSize = '32px';
        resultado.textContent = `${newtext}`;
        
        textarea.value = "";

        var btnCopiar = document.querySelector("#btncopy");
        btnCopiar.hidden = false;
        btnCopiar.style.display = "block"

        var msjImg = document.getElementById("imagen-munheco");
        msjImg.style.display = 'none';



    }
    else {
        alert("Debe ingresar texto para realizar la encriptación, Aquí...");
        var textarea = document.getElementById("textEncriptar");
        var limpiar = document.getElementById("resultado");
        limpiar.value = "";
        textarea.focus();
    }
}

function descripctar() {
    var  encritados = document.querySelector("#textEncriptar");
    var datos = encritados.value.toLowerCase();
    var texto = "";
    datos.toLowerCase();
    if(datos.length > 0){
        texto = datos.replace(/enter/g, "e").
            replace(/imes/g, "i").
            replace(/ai/g, "a").
            replace(/ober/g, "o").
            replace(/ufat/g, "u");
        
        var msjResultado = document.getElementById("msjResultado");
        msjResultado.style.display = 'none';
        
        var resultado = document.getElementById("resultado");  
        resultado.textContent = texto;
        resultado.textContent = `${texto}`;
        resultado.style.height = '650px';
        resultado.style.fontSize = '32px';
    
        encritados.value = "";
    
        var btnCopiar = document.querySelector("#btncopy");
        btnCopiar.hidden = false;
        btnCopiar.style.display = "block"
    
        var msjImg = document.getElementById("imagen-munheco");
        msjImg.style.display = 'none';

    }
    else{
        alert("Debe ingresar texto para realizar la encriptación");
        var textarea = document.getElementById("textEncriptar");
        textarea.focus();
    } 

}
   
function copiar(){
    var copyText = document.getElementById("resultado");
    copyText.select();
    document.execCommand("copy");

    var textarea = document.getElementById("textEncriptar");
    textarea.focus();

    alert("Se copio en el porta pales: " + copyText.value);

    var btnCopiar = document.querySelector("#btncopy");
    btnCopiar.hidden = true;
    btnCopiar.style.display = "none";

}
