export const inicio = document.querySelector("#inicio");

inicio.addEventListener("click", () => {
  alert(inicio.innerHTML.toLocaleUpperCase());
});
// =====================================================================

export const botaoLogar = document.querySelector("#btn-login");
botaoLogar.addEventListener("click", () => {
  const email = document.querySelector("#email-user");
  const password = document.querySelector("#password-user");

  if (email.value != "scapingana@gmail.com" && password.value != 84328432) {
    alert("Falha ao realizar login...");
  } else {

    alert("Sucesso!");
  }
});
