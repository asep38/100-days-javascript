const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// set waktu (sesuaikan dengan waktu yang di inginkan)
const bukaPuasa = new Date(`Maret 23, 2023 17:58:00`).getTime();

// Nama Hari dalam seminggu
const weekdays = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jum'at",
  "Sabtu",
];

// fungsi untuk menampilkan waktu
const x = setInterval(function () {
  // mendapatkan data waktu sekarang
  const sekarang = new Date().getTime();

  // Jarak waktu sekarang dan buka puasa
  const waktu = bukaPuasa - sekarang;

  // Jam, Menit, Detik
  const d = Math.floor(waktu / 1000 / 60 / 60 / 24);
  const h = Math.floor((waktu / 1000 / 60 / 60) % 12);
  const m = Math.floor((waktu / 1000 / 60) % 60);
  const s = Math.floor((waktu / 1000) % 60);

  // Nama Hari
  const currentDay = new Date().getDay();
  const namaHari = weekdays[(currentDay + d) % 7];

  // Menampilkan waktu pada html
  days.innerHTML = namaHari;
  hours.innerHTML = h === 0 ? "12" : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;

  // jika waktu berbuka telah tiba
  if (waktu < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Selamat Berbuka Puasa!";
  }
}, 1000);
