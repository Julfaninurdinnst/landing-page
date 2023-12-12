document.addEventListener("DOMContentLoaded", function () {
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const testimonialCards = [
        {
            name: "John Doe",
            image: "https://loremflickr.com/300/300?random=11",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            name: "Jane Smith",
            image: "https://loremflickr.com/300/300?random=12",
            testimonial: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            name: "hary jone",
            image: "https://loremflickr.com/300/300?random=13",
            testimonial: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            name: "maria sarakova",
            image: "https://loremflickr.com/300/300?random=14",
            testimonial: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            name: "vladimir votca",
            image: "https://loremflickr.com/300/300?random=15",
            testimonial: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            name: "kevin wijaya",
            image: "https://loremflickr.com/300/300?random=16",
            testimonial: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            name: "david jhon",
            image: "https://loremflickr.com/300/300?random=17",
            testimonial: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            name: "fred alfuq",
            image: "https://loremflickr.com/300/300?random=18",
            testimonial: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            name: "jhon fred",
            image: "https://loremflickr.com/300/300?random=19",
            testimonial: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            name: "beatrix",
            image: "https://loremflickr.com/300/300?random=20",
            testimonial: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        // Tambahkan data testimoni lainnya di sini
    ];

    // Fungsi untuk mengisi carousel dengan data testimoni
    function populateCarousel() {
        testimonialCards.forEach((card) => {
            const testimonialCard = document.createElement("div");
            testimonialCard.classList.add("testimonial-card");
            testimonialCard.innerHTML = `
                <img src="${card.image}" alt="${card.name}">
                <h3>${card.name}</h3>
                <p>${card.testimonial}</p>
            `;
            carouselWrapper.appendChild(testimonialCard);
        });
    }

    populateCarousel();

    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    let currentIndex = 0;

    // Fungsi untuk menggeser carousel ke kiri
    function slideLeft() {
        currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
        carouselWrapper.style.transform = `translateX(-${currentIndex * 25}%)`;
    }

    // Fungsi untuk menggeser carousel ke kanan
    function slideRight() {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        carouselWrapper.style.transform = `translateX(-${currentIndex * 25}%)`;
    }

    // Tambahkan event listener untuk tombol navigasi
    prevButton.addEventListener("click", slideLeft);
    nextButton.addEventListener("click", slideRight);

    // Otomatis geser carousel setiap beberapa detik
    setInterval(slideRight, 5000); // Geser setiap 5 detik
});

// Mendapatkan elemen-elemen yang dibutuhkan
var form = document.getElementById("form-id");
var btn = document.getElementById("btn-wa");
var nama = document.getElementById("nama");
var pesan = document.getElementById("pesan");

// Menambahkan event listener untuk tombol kirim
btn.addEventListener("click", function (e) {
    // Mencegah form terkirim secara default
    e.preventDefault();

    // Mendapatkan nilai dari input nama, number, dan pesan
    var namaValue = nama.value;
    var pesanValue = pesan.value;

    // Membuat teks yang akan dikirim ke whatsapp
    teks = "Nama: " + namaValue + "\n" + "Pesan: " + pesanValue + "\n" + "Terima kasih";

    // Membuat url whatsapp dengan nomor tujuan dan teks
    var url = "https://api.whatsapp.com/send?phone=6282277773467&text=" + encodeURIComponent(teks);

    // Membuka jendela whatsapp dengan url yang sudah dibuat
    window.open(url, "index.html");
});
