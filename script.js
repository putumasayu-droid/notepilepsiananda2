
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

// Menu navigasi
menuButton.addEventListener("click", function () {
  navigation.classList.toggle("open");
});

// Tutup menu setelah memilih halaman
const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("open");
  });
});

// Validasi formulir
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const telepon = document.getElementById("telepon").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9+\-\s]{8,16}$/;

  if (nama.length < 2) {
    formMessage.textContent = "Nama harus diisi minimal 2 karakter.";
    return;
  }

  if (!emailPattern.test(email)) {
    formMessage.textContent = "Format email belum benar.";
    return;
  }

  if (!phonePattern.test(telepon)) {
    formMessage.textContent = "Nomor telepon tidak valid.";
    return;
  }

  if (pesan.length < 5) {
    formMessage.textContent = "Pesan minimal 5 karakter.";
    return;
  }

  formMessage.textContent =
    "Terima kasih, " + nama + ". Formulir berhasil divalidasi.";

  contactForm.reset();
});

// Tombol kembali ke atas
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    backTop.classList.add("visible");
  } else {
    backTop.classList.remove("visible");
  }
});

backTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
