const BotaoDark = document.getElementById("botao1");
const BotaoLight = document.getElementById("botao2");
const BotaoNormal = document.getElementById("botao3");

BotaoDark.addEventListener("click", () => {
  document.querySelectorAll("header, section, footer,nav").forEach((el) => {
    el.style.background = "#121212";
  });

  document
    .querySelectorAll("section h2, section p, a , li, img")
    .forEach((el) => {
      el.style.color = "#ffffff";
    });
});

BotaoLight.addEventListener("click", () => {
  document.querySelectorAll("header, section, footer, nav").forEach((el) => {
    el.style.background = "#ffffff";
  });

  document
    .querySelectorAll("section h2, section p, a , li, img")
    .forEach((el) => {
      el.style.color = "#121212";
    });
});

BotaoNormal.addEventListener("click", () => {
  document.querySelectorAll("header, section, footer, nav").forEach((el) => {
    el.style.background = "";
  });

  document
    .querySelectorAll("section h2, section p, a , li, img")
    .forEach((el) => {
      el.style.color = "";
    });
});