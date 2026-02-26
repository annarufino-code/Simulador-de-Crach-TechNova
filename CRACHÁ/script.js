const nomeInput = document.getElementById("nome");
const cargoInput = document.getElementById("cargo");
const departamentoInput = document.getElementById("departamento");

const badgeNome = document.getElementById("badge-nome");
const badgeCargo = document.getElementById("badge-cargo");
const badgeDepartamento = document.getElementById("badge-departamento");

const botao = document.getElementById("btn-gerar");
const badge = document.getElementById("badge");
botao.addEventListener("click", function(){
    let nome = nomeInput.value;
    let cargo = cargoInput.value;
    let departamento = departamentoInput.value;
    badgeNome.textContent = nome;
    badgeCargo.textContent = cargo;
    badgeDepartamento.textContent = departamento;
    badge.style.border = "3px solid green";
    if(departamento === "Design"){
        badge.style.backgroundColor = "purple";
    }
    else if(departamento === "Desenvolvimento"){
        badge.style.backgroundColor = "blue";
    }
    else{
        badge.style.backgroundColor = "white";
    }

});