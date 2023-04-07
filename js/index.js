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
  if (ruta.includes("en")) {
    ruta = ruta.replace("/en/", "/");
  } else {
    ruta = ruta.replace("/in", "/en/in");
  }
  console.log(ruta);
  window.location.href = ruta;
});
