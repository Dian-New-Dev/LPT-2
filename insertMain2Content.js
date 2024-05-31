const main2H2 = document.getElementById('main2-h2');
const main2P = document.getElementById('main2-p1');


const main2Imgs = document.querySelectorAll('.grid-cell-img');
const main2H3s = document.querySelectorAll('.main2-h3');
const main2Ps = document.querySelectorAll('.main2-p');

const main2ImgsArray = [nossosServicosObj.img1, nossosServicosObj.img2, nossosServicosObj.img3, nossosServicosObj.img4, nossosServicosObj.img5, nossosServicosObj.img6];
const main2H3Array = [nossosServicosObj.h31, nossosServicosObj.h32, nossosServicosObj.h33, nossosServicosObj.h34, nossosServicosObj.h35, nossosServicosObj.h36];
const main2PArray = [nossosServicosObj.p1, nossosServicosObj.p2, nossosServicosObj.p3, nossosServicosObj.p4, nossosServicosObj.p5, nossosServicosObj.p6];

function insertMain2Content() {
    main2H2.textContent = nossosServicosObj.h2;
    main2P.textContent = nossosServicosObj.p;

    for (let i = 0; i < main2Imgs.length; i++) {
        main2Imgs[i].style.backgroundImage = 'url(' + main2ImgsArray[i] + ')';
        main2H3s[i].textContent = main2H3Array[i];
        main2Ps[i].textContent = main2PArray[i];
    }


}