const nomer = document.getElementById("nomer");
const tombol = document.getElementById("cekJawaban");
const hasil = document.getElementById("hasil");
const terjawab = document.getElementById("score");

// awal game
const jawaban = Math.floor(Math.random() * 100) + 1;
// console.log("J:", jawaban);
let percobaan = 0;
//cek data di localStorage
let score = localStorage.getItem("zennSc") || 0;
// console.log(score);
terjawab.innerHTML = `${score}`;
// fugsi menampilkan pesan
const cetakHasil = (benar, pesan) => {
  if (benar) {
    hasil.innerHTML = ".";
    setTimeout(() => {
      hasil.innerHTML = pesan;
      hasil.classList.add("benar");
      tombol.disabled = true;
      tombol.classList.add("disabled");
      localStorage.setItem("zennSc", ++score);
    }, 100);
  } else {
    hasil.innerHTML = ".";
    setTimeout(() => {
      hasil.innerHTML = pesan;
      hasil.classList.add("salah");
    }, 100);
  }
};

// Ketika menekan enter di input
nomer.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    cekJawaban();
  }
});

// ketika tombol cek di klik
tombol.addEventListener("click", function () {
  cekJawaban();
});

// Fungsi cek jawaban
const cekJawaban = () => {
  const nilai = nomer.value;

  if (nilai == "") {
    const pesan = "Masukin angkanya!";
    cetakHasil(false, pesan);
    return;
  } else if (nilai > 100) {
    percobaan++;
    const pesan = "Anda memasukan angka yang tidak sesuai, C: 1-100";
    cetakHasil(false, pesan);
    return;
  } else if (nilai == jawaban) {
    console.log("jawaban benar");
    const pesan = `Selamat anda berhasil menjawab, Anda sudah <span class="bold">${percobaan}</span> kali mencoba. <a href="/">Refresh </a>halaman untuk main lagi`;
    cetakHasil(true, pesan);
    return;
  }

  if (nilai > jawaban) {
    percobaan++;
    const pesan = `jawaban yang benar <span class="bold">kurang</span> dari  <span class="bold">${nilai}</span> , Coba lagi!`;
    cetakHasil(false, pesan);
  } else {
    percobaan++;
    const pesan = `jawaban yang benar <span class="bold">lebih</span> dari  <span class="bold">${nilai}</span> , Coba lagi!`;
    cetakHasil(false, pesan);
  }
};
