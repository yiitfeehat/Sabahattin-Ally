/* ------------------------------- DEĞİŞKENLER ------------------------------ */
let stoktaOlanKartlar = [];
let stoktaOlmayanKartlar = [];

/* -------------------------------------------------------------------------- */

//! 1-ürünlerin ekranda görüntülenmesi


let kitaplar = [
    { name: "Değirmen", price: 34.99, piece: 88, img: "./img/kitap1.png" },
    { name: "Yeni Dünya", price: 40.99, piece: 99, img: "./img/kitap2.png" },
    { name: "Bütün Şiirleri", price: 16.99, piece: 0, img: "./img/kitap3.png" },
    { name: "İçimizdeki Şeytan", price: 25.59, piece: 199, img: "./img/kitap4.png" },
    { name: "Kağnı Ses Esirler", price: 44.00, piece: 24, img: "./img/kitap5.png" },
    { name: "Kuyucaklı Yusuf", price: 36.99, piece: 0, img: "./img/kitap6.png" },
    { name: "Kürk Mantolu Madonna", price: 36.99, piece: 99, img: "./img/kitap7.png" },
    { name: "Sırça Köşk", price: 56.78, piece: 7, img: "./img/kitap8.png" },
    { name: "Hep Genç Kalacağım", price: 14.99, piece: 35, img: "./img/kitap9.png" },
    { name: "Üç Romantik Hikaye", price: 69.99, piece: 0, img: "./img/kitap10.png" },
];

const vergi = 0.20;

kitaplar.forEach(({ img, name, price, piece }) => {

    const cardClass = piece > 0 ? "" : "text-white";
    const stokMesaj = piece > 0
        ? `<p class="text-white fw-lighter mt-3 fs-8 ">Stok Durumu: <b class="text-success">${piece}</b></p>`
        : `<p class="text-white fw-bold">Stok Durumu: <b class="text-danger fw-bold fs-5">${piece}</b></p>`;

    const stokBittiOverlay = piece > 0
        ? `<div class="discount-label d-flex row text-center">-%40</div>`
        : `<div class="position-absolute top-50 start-50 translate-middle bg-danger text-white p-3 rounded" style="font-size: 1.4rem; font-weight: bold; z-index: 10;">
                <span>STOK BİTTİ</span>
        </div>`;



    // Tüm içeriği soluklaştırmak için opacity-50 sınıfı ekledim
    const contentClass = piece > 0 ? "" : "opacity-25";
    const YoksaYok = piece > 0 ? "" : "disabled";
    /* -------------------------------------------------------------------------- */
    /* -------------------------------------------------------------------------- */
    // const stokBittiOverlay = piece > 0
    //     ? `<div class="discount-label">%40 İNDİRİM</div>` // İndirim yazısı sadece stokta varsa
    //     : "";
    /* -------------------------------------------------------------------------- */
    /* -------------------------------------------------------------------------- */

    const TumUrunler = `
        <div class="col-sm-6 col-md-6 col-lg-4 d-flex ">
            <div class="card border border-1 h-100 ${cardClass}  w-100 position-relative bg-transparent ">
                <div class="row  g-0 h-100">
                    <div class="col-md-5">
                        <img src="${img}" class="mx-2 mt-4 w-100 rounded-start p-3 ${piece > 0 ? '' : 'opacity-25'}" alt="..." />
                        ${stokBittiOverlay}
                    </div>
                    <div class="col-md-7 d-flex">
                        <div class="card-body d-flex flex-column justify-content-evenly text-center ${contentClass}">
                            <h5 class="card-title ">${name}</h5>
                            <div class="ürün-price">
                                <p class="text-success h2">
                                    <span class="indirim-price">${price}₺</span>
                                    <span class="h5 text-danger text-decoration-line-through">
                                        ${(price * 1.4).toFixed(2)}₺
                                    </span>
                                </p>
                            </div>
                            ${stokMesaj}
                            <div class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
                                <div class="adet-controller d-flex justify-content-center flex-nowrap align-items-center">
                                    <button class="btn btn-secondary btn-sm minus ${YoksaYok}">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <p class="d-inline mt-2 mx-4 ${YoksaYok}" id="ürün-adet">1</p>
                                    <button class="btn btn-secondary btn-sm plus ${YoksaYok}">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="ürün-removal mt-4">
                                <button class="btn btn-warning btn-sm w-100 remove-product ${YoksaYok}">
                                    <i class="fa-solid fa-cart-shopping me-2"></i>Sepete Ekle
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

    // Stokta olan ve olmayan kartları ayıralım
    if (piece > 0) {
        stoktaOlanKartlar.push(TumUrunler);
    } else {
        stoktaOlmayanKartlar.push(TumUrunler);
    }
});

// Kartları önce stokta olanları ekleyip sonra stokta olmayanları ekleyerek sıralıyoruz
const kartlarHTML = [...stoktaOlanKartlar, ...stoktaOlmayanKartlar].join("");

// Tüm kartları içeren HTML'yi buraya ekliyoruz
document.querySelector("#burayaKanka").innerHTML = kartlarHTML;

/* -------------------------------------------------------------------------- */
/* ------------------------------ SEPET TUTARI ------------------------------ */
/* -------------------------------------------------------------------------- */

