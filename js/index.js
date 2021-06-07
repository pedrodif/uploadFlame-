
//Âncoras

let areaR = document.getElementById("areaR");

areaR.addEventListener("click", () =>{
    window.location.href = "areaRestrita.html";
});


let menufooterp = document.getElementById("menufooterp");

menufooterp.addEventListener("click", () =>{
    window.location.href ="areaRestrita.html"
});



//Máscara pronta que foi consultada na internet. 

let tel = document.getElementById('celular') 

tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) 
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) 

let mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor 
}


//Validação de Formulário

let btnenviar = document.getElementById("btnenviar");

btnenviar.addEventListener("click", (event) =>{
    let faleconosco = document.getElementById("faleconosco");
    let mensagem = getValoresDoForm(faleconosco);
    console.log(mensagem);
    let erros = validaCampos(mensagem);


    console.log(erros);
    if (erros.length > 0) {
        exibeCamposVazios(erros);
        return;
    }

    form.reset();
    let resetar = document.getElementById("mensagens-erro");
    resetar.innerHTML = "";

})

function getValoresDoForm(form){
    let dados = {
        nome: form.nome.value,
        email: form.email.value,
        celular: form.celular.value,
        estado: form.estado.value,
        texto: form.texto.value
    }

    return dados;
}

function validaCampos(mensagem) {
    var erros = [];

    if(mensagem.nome.length == 0){
        erros.push("Informe seu nome");
    }

    if(mensagem.email.length == 0){
        erros.push("Informe seu email");
    }
    if(mensagem.celular.length == 0){
        erros.push("Informe seu celular");
    }
    if(mensagem.estado.length == 0){
        erros.push("Informe sua UF");
    }
    if(mensagem.texto.length == 0){
        erros.push("Informe a sua dúvida");
    }

    return erros;
}

function exibeCamposVazios(erros) {
  let ul = document.getElementById("mensagens-erro");
  ul.innerHTML = "";
  erros.forEach((erro) => {
      let li = document.createElement("li");
      li.innerText = erro;
      ul.appendChild(li);
  });
}
