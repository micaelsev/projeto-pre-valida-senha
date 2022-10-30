function senha_Forca() {
  var senha = document.getElementById("id_Senha").value;
  var forca = 0;
  document.getElementById("impSenha").innerHTML = "Senha: " + senha;

  if (senha.length > 3 && senha.length < 7) {
    forca = forca + 10;
  } else if (senha.length > 7) {
    forca = forca + 25;
  }

  if (senha.length >= 4 && senha.match(/[a-z]+/)) {
    forca = forca + 10;
  }

  if (senha.length >= 4 && senha.match(/[A-Z]+/)) {
    forca = forca + 20;
  }

  if (senha.length >= 4 && senha.match(/['"!@#$%¨&*()-_=+;]+/)) {
    forca = forca + 40;
  }

  mostrarForca(forca);
}

function mostrarForca(forca) {
  document.getElementById("impForcaSenha").innerHTML = "Força: " + forca;

  if (forca < 11) {
    document.getElementById("nvlForcaSenha").innerHTML = "Senha fraca!";
  } else {
    document.getElementById("nvlForcaSenha").innerHTML = "Senha Forte!";
  }
}
