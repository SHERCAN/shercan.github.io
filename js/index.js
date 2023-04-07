changeLanguage = document.getElementById("langChange");
textChange = document.getElementById("textChange");
changeLanguage.addEventListener("click", function () {
  textChange.textContent = changeLanguage.checked ? "ES" : "EN";
  //   if (changeLanguage.checked) {
  //     textChange.console.log("clicked");
  //   } else {
  //     console.log("not clicked");
  //   }
  let ruta = window.location.href;
  if (ruta.indexOf("/es/") !== -1) {
    ruta = ruta.replace("/es/", "/en/");
  } else {
    ruta = ruta.replace("/en/", "/es/");
  }
  window.location.href = ruta;
});
