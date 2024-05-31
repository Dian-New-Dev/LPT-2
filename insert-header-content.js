const headerH1 = document.getElementById('header-h1');
const headerH2 = document.getElementById('header-h2');
const navItems = document.querySelectorAll('.header-h6')

function insertHeaderContent() {
    headerH1.textContent = headerObj.h1;
    headerH2.textContent = headerObj.h2;

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].textContent = headerObj.nav[i];
    }
}