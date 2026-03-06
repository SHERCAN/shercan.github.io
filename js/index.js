const changeLanguage = document.getElementById("langChange");
const textChange = document.getElementById("textChange");

const updateUI = () => {
    const isEnglish = window.location.pathname.includes("/en/");
    if (changeLanguage) changeLanguage.checked = isEnglish;
    if (textChange) textChange.textContent = isEnglish ? "EN" : "ES";
};

if (changeLanguage) {
    changeLanguage.addEventListener("change", function () {
        let currentPath = window.location.pathname;
        let newPath;

        if (this.checked) {
            // Switch to English
            if (!currentPath.includes("/en/")) {
                newPath = currentPath.replace(/\/index\.html$|^\/$/, "/en/index.html");
                // If it was just root /
                if (newPath === currentPath) newPath = currentPath + "en/index.html";
            }
        } else {
            // Switch to Spanish
            newPath = currentPath.replace("/en/index.html", "/index.html").replace("/en/", "/");
        }

        if (newPath) {
            window.location.pathname = newPath.replace(/\/\/+/g, '/');
        }
    });
}

// Initialize UI
updateUI();
