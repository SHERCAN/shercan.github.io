changeLanguage = document.getElementById("langChange");
textChange = document.getElementById("textChange");
changeLanguage.addEventListener("click", function () {
  let ruta = window.location.href;
  if (ruta.includes("en")) {
    ruta = ruta.replace("/en/", "/");
    textChange.textContent = "ES";
  } else {
    ruta = ruta.replace("/in", "/en/in");
    textChange.textContent = "EN";
  }
  console.log(ruta);
  window.location.href = ruta;
});
