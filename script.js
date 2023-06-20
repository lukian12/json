
fetch('armarios.json')
  .then(response => response.json())
  .then(data => {
    var armarios = data.armarios;
    var armariosContainer = document.getElementById("armariosContainer");

    armarios.forEach(armario => {
      var id = armario.id;
      var estado = armario.estado;
      var caracteristicas = armario.caracteristicas;

      var divArmario = document.createElement("div");
      divArmario.classList.add("armario");

      var divBloco = document.createElement("div");
      divBloco.classList.add("bloco");

      var divCaracteristicas = document.createElement("div");
      divCaracteristicas.innerHTML = "ID: " + id + "<br>Estado: " + estado + "<br>Características:<br>" +
        "Cor: " + caracteristicas.cor + "<br>Material: " + caracteristicas.material;
        var btnAlterarEstado = document.createElement("button");
        btnAlterarEstado.innerHTML = "Alterar Estado";
        btnAlterarEstado.addEventListener("click", function() {
          alterarEstadoArmario(divBloco, armario);
        });
      divArmario.appendChild(divBloco);
      divArmario.appendChild(divCaracteristicas);
      divArmario.appendChild(btnAlterarEstado);
      armariosContainer.appendChild(divArmario);
    });
  })
  .catch(error => {
    console.error('Ocorreu um erro ao carregar o arquivo JSON:', error);
  });
  function alterarEstadoArmario(divBloco, armario) {
    var estados = ["desocupado", "ocupado", "manutencao"];
    var estadoAtual = armario.estado;
    var index = estados.indexOf(estadoAtual);
    var novoEstado = estados[(index + 1) % estados.length];
  
    armario.estado = novoEstado;
    divBloco.className = "bloco estado-" + novoEstado;
  }
  