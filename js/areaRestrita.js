
 // Âncora dos botões  e validação de dados de entrada botão aluno 
 
let btnAluno = document.querySelector("#btn-aluno");

btnAluno.addEventListener("click", (event)=>{
    event.preventDefault();
    let entrada = document.getElementById("entradaDados");
    let login = getValoresEntrada(entrada);
    console.log(login)
    let erros = validaLogin(login);

    console.log(erros)
    if(erros.length > 0){
        exibeMensagemdeErros(erros);
        return;
    }else{
        window.location.href="areaAluno.html"
    }

    form.reset();
    let mensagemErro = document.getElementById("mensagens-erro");
    mensagemErro.innerHTML = "";

});


function getValoresEntrada(form){
    let dados = {
        usuario:form.usuario.value,
        senha:form.senha.value
    }
    return dados;
}

function validaLogin(login){
    var erros = [];

    if(login.usuario.length == 0){
        erros.push("Informe seu usuário");
    }
    if(login.senha.length == 0){
        erros.push("Informe sua senha");
    }

    return erros;
}

function exibeMensagemdeErros(erros){
    let ul =document.getElementById("mensagens-erro");
    ul.innerHTML = "";
    erros.forEach((erro) =>{
        let li = document.createElement("li");
        li.innerText = erro;
        ul.appendChild(li)
    });
}


// Âncora dos botões  e validação de dados de entrada botão Professor 


let btnProfessor = document.querySelector("#btnProfessor");

btnProfessor.addEventListener("click", (event)=>{
    event.preventDefault();
    let entrada = document.getElementById("entradaDados");
    let login = getValoresEntrada(entrada);
    console.log(login)
    let erros = validaLogin(login);

    console.log(erros)
    if(erros.length > 0){
        exibeMensagemdeErros(erros);
        return;
    }else{
        window.location.href="areaProfessor.html"
    }

    form.reset();
    let mensagemErro = document.getElementById("mensagens-erro");
    mensagemErro.innerHTML = "";

});


function getValoresEntrada(form){
    let dados = {
        usuario:form.usuario.value,
        senha:form.senha.value
    }
    return dados;
}

function validaLogin(login){
    var erros = [];

    if(login.usuario.length == 0){
        erros.push("Informe seu usuário");
    }
    if(login.senha.length == 0){
        erros.push("Informe sua senha");
    }

    return erros;
}

function exibeMensagemdeErros(erros){
    let ul =document.getElementById("mensagens-erro");
    ul.innerHTML = "";
    erros.forEach((erro) =>{
        let li = document.createElement("li");
        li.innerText = erro;
        ul.appendChild(li)
    });
}


