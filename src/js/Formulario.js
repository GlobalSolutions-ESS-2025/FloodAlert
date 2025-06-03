document.getElementById("contatoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!email || !mensagem) {
    alert("Por favor, preencha todos os campos ");
    return;
  }

  alert("Mensagem enviada com sucesso!!");
});
