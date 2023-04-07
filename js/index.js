changeLanguage = document.getElementById("langChange");
textChange = document.getElementById("textChange");

let ruta = window.location.href;
if (ruta.includes("en")) {
  changeLanguage.checked = true;
  textChange.textContent = "EN";
} else {
  changeLanguage.checked = false;
  textChange.textContent = "ES";
}
changeLanguage.addEventListener("click", function () {
  let ruta = window.location.href;
  if (ruta.includes("en")) {
    ruta = ruta.replace("/en/index.html", "/index.html");
  } else {
    ruta = ruta.replace("/index.html", "/en/index.html");
  }
  window.location.href = ruta;
});
