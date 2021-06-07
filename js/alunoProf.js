// Exibição da Tabela =

let turma = document.getElementById("turma");

turma.addEventListener("click", () => {

  let tabela = document.querySelector(".tabela");
  console.log(tabela)

  tabela.style.display = "table";
  document.querySelector(".botao").setAttribute('style', 'display:block');
  document.querySelector(".btnform").setAttribute('style', 'display:block');
  document.querySelector(".msg").setAttribute('style', 'display:none');
  
});


//Consumo da API 

let btn = document.querySelector(".btnform");

let alunos = [];

btn.addEventListener("click", () => {
  document.querySelector(".rodape").setAttribute('style', 'position:relative');
  fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    if (response.status == 200) {
      return response.json();
    }
    else {
      document.querySelector("#erro").setAttribute('style', 'display:block')
      console.log(response.status)
    }

  }).then((result) => {
    alunos = result;
    let alunoNome = alunos.map(aluno => {
      return {
        nome: aluno.name
      }
    });
    alunoNome.forEach(aluno => {
      adicionaAlunosNaTabela(aluno);
    });
  });
});


function adicionaAlunosNaTabela(aluno) {
  let alunoTr = montarTr(aluno)
  let tabela = document.getElementById("corpo-tabela")
  tabela.appendChild(alunoTr);
}

function montarTr(aluno) {
  let alunosTr = document.createElement("tr");
  alunosTr.classList.add("alunos");
  alunosTr.appendChild(montaTD(aluno.nome, "alunos"));

  return alunosTr;
}

function montaTD(data, classe) {
  let td = document.createElement("td");
  td.textContent = data;
  td.classList.add(classe);
  return td;
}
