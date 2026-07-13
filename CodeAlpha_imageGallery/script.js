// =========================
// LOADER
// =========================

window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});

// =========================
// SEARCH
// =========================

const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    let value = search.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if (card.className.toLowerCase().includes(value)) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });

});

// =========================
// FILTER
// =========================

function filterSelection(category) {

    let cards = document.querySelectorAll(".card");

    if (category === "all") {

        cards.forEach(card => card.style.display = "block");

    }

    else {

        cards.forEach(card => {

            if (card.classList.contains(category)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    }

    document.querySelectorAll(".filter button").forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");

}

// =========================
// LIGHTBOX
// =========================

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

const counter = document.getElementById("counter");

const galleryImages = document.querySelectorAll(".gallery img");

let currentIndex = 0;

function openLightbox(src) {

    lightbox.style.display = "flex";

    lightboxImg.src = src;

    galleryImages.forEach((img, index) => {

        if (img.src === src) {

            currentIndex = index;

        }

    });

    updateCounter();

}

function closeLightbox() {

    lightbox.style.display = "none";

}

closeBtn.onclick = closeLightbox;

nextBtn.onclick = function () {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {

        currentIndex = 0;

    }

    lightboxImg.src = galleryImages[currentIndex].src;

    updateCounter();

}

prevBtn.onclick = function () {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = galleryImages.length - 1;

    }

    lightboxImg.src = galleryImages[currentIndex].src;

    updateCounter();

}

function updateCounter() {

    counter.innerHTML = (currentIndex + 1) + " / " + galleryImages.length;

}

// =========================
// KEYBOARD
// =========================

document.addEventListener("keydown", function (e) {

    if (lightbox.style.display === "flex") {

        if (e.key === "ArrowRight") {

            nextBtn.click();

        }

        if (e.key === "ArrowLeft") {

            prevBtn.click();

        }

        if (e.key === "Escape") {

            closeLightbox();

        }

    }

});

// =========================
// LIKE BUTTON
// =========================

document.querySelectorAll(".fa-heart").forEach(icon => {

    icon.addEventListener("click", function () {

        this.classList.toggle("liked");

        if (this.classList.contains("liked")) {

            this.style.color = "red";

        }

        else {

            this.style.color = "#111827";

        }

    });

});

// =========================
// DOWNLOAD BUTTON
// =========================

document.querySelectorAll(".fa-download").forEach(button => {

    button.addEventListener("click", function () {

        let img = this.parentElement.parentElement.previousElementSibling;

        let link = document.createElement("a");

        link.href = img.src;

        link.download = "gallery-image";

        link.click();

    });

});

// =========================
// SCROLL TO TOP
// =========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

}

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}