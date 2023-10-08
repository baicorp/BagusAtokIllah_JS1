// if else
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// nested if else
let akhirPekan = false;
let jamSekarang = 16;

if (akhirPekan) {
  console.log("Hari sudah akhir pekan!");

  if (jamSekarang < 12) {
    console.log("Nikmati pagimu.");
  } else if (jamSekarang >= 12 && jamSekarang < 18) {
    console.log("Nikmati siangmu yang santai.");
  } else {
    console.log("Nikmati malammu!");
  }
} else {
  console.log("Ini hari kerja.");

  if (jamSekarang < 9) {
    console.log("Siap-siap untuk bekerja.");
  } else if (jamSekarang >= 9 && jamSekarang < 17) {
    console.log("Kerja keras dan produktif.");
  } else {
    console.log("Nikmati waktu luangmu setelah bekerja.");
  }
}

// switch case
let dayOfWeek = 1;
let aktifitas = "";

switch (dayOfWeek) {
  case 1:
    aktifitas = "Senin: Mulai minggu dengan semangat!";
    break;
  case 2:
    aktifitas = "Selasa: Rapat tim di sore hari.";
    break;
  case 3:
    aktifitas = "Rabu: Pelatihan teknis sepanjang hari.";
    break;
  case 4:
    aktifitas = "Kamis: Presentasi proyek kepada klien.";
    break;
  case 5:
    aktifitas = "Jumat: Menyelesaikan tugas akhir minggu.";
    break;
  case 6:
  case 7:
    aktifitas = "Akhir pekan: Bersantai dan nikmati liburan.";
    break;
  default:
    aktifitas = "Hari tidak valid.";
    break;
}

console.log("Kegiatan untuk hari ini:", aktifitas);

// for statement
const tugas = [
  "Menghitung berapa kali semut bernyanyi",
  "Membuat teh hangat untuk server",
  "Menyamar jadi ekor kucing",
  "Mencari jalan keluar dari loop tak berujung",
  "Bermain catur dengan komputer",
  "Menari di bawah hujan kode",
  "Menyembunyikan program ini dari bos",
];

for (let i = 0; i < tugas.length; i++) {
  console.log(`Tugas lucu ke-${i + 1}: ${tugas[i]}`);
}

// while loop
let kucingBermain = 0;

while (kucingBermain < 10) {
  console.log(`Kucing bermain ke-${kucingBermain + 1}`);
  kucingBermain++;
}

// do while loop
let totalSteps = 0;
let stepsPerIteration;
let maxStepsPerIteration = 10;

do {
  stepsPerIteration = Math.floor(Math.random() * maxStepsPerIteration) + 1;
  totalSteps += stepsPerIteration;

  console.log(
    `Berjalan sejauh ${stepsPerIteration} langkah. Total langkah sejauh ini: ${totalSteps}`
  );
} while (totalSteps < 50);

console.log("Target langkah tercapai! Selamat!");

// function
const joke = [
  "Ketok, ketok. Siapa? Peluang. Jangan bodoh - peluang tidak datang dua kali!",
  "Garis sejajar punya banyak persamaan. Sayang sekali mereka tidak akan pernah bertemu.",
  "Saya bilang kepada istri saya dia menggambar alisnya terlalu tinggi. Dia terlihat terkejut.",
  "Saya sedang membaca buku tentang anti-gravitasi. Mustahil untuk meletakkannya!",
  "Saya bilang ke komputer saya butuh istirahat, dan sekarang komputer terus mengirimkan Kit-Kat padaku.",
  "Kenapa orang-orang memberikan penghargaan kepada orang-orang yang terjebak di sawah? Karena mereka luar biasa di bidang mereka!",
  "Pernah dengar tentang penculikan di taman? Mereka terbangun.",
  "Saya sedang membaca buku tentang anti-gravitasi. Mustahil untuk meletakkannya!",
  "Dulu saya bermain piano dengan telinga, sekarang saya pakai tangan.",
  "Saya bilang kepada istri saya dia menggambar alisnya terlalu tinggi. Dia terlihat terkejut.",
];

function dapatkanJokeAcak() {
  const indeksAcak = Math.floor(Math.random() * joke.length);
  return joke[indeksAcak];
}

const jokeAcak = dapatkanJokeAcak();
console.log("joke Acak:", jokeAcak);
