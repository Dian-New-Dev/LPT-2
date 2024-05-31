const main1Img = document.querySelector('.img-container');
const main1H2 = document.getElementById('main1-h2');
const main1P1 = document.getElementById('main1-p1');
const main1P2 = document.getElementById('main1-p2');
const main1P3 = document.getElementById('main1-p3');

function insertMain1Content() {
    main1Img.style.backgroundImage = 'url(' + inicioObj.img; + ')';
    main1H2.textContent = inicioObj.h2;
    main1P1.textContent = inicioObj.p1;
    main1P2.textContent = inicioObj.p2;
    main1P3.textContent = inicioObj.p3;
}