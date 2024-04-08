const hitungMundur = tanggalTujuan => {
    const sekarang = new Date().getTime();
    const tujuan = new Date(tanggalTujuan).getTime();

    const selisih = tujuan - sekarang;
    const hasil = selisih < 0 ? 0 : selisih;
    // console.log(hasil);

    const hari = Math.floor(hasil / (1000 * 60 * 60 * 24));
    const jam = Math.floor((hasil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((hasil % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((hasil % (1000 * 60)) / 1000);

    return {
        hari,
        jam,
        menit,
        detik
    };
};

const updateCountdown = () => {
    const sekarang = new Date();
    let tahun = sekarang.getFullYear();
    const bulanHbd = 10; // bulan
    const tanggalHbd = 13; //tanggalnya
    if (
        sekarang.getMonth() > bulanHbd - 1 ||
        (sekarang.getMonth() === bulanHbd - 1 &&
            sekarang.getDate() > tanggalHbd)
    ) {
        tahun++;
    }

    const ulangTahun = `${tahun}-${bulanHbd}-${tanggalHbd}`;
    // console.log(ulangTahun);

    // console.log(tanggalUlangTahun);
    const tanggalUlangTahun = new Date(ulangTahun);

    if (
        tanggalUlangTahun.getDate() === sekarang.getDate() &&
        tanggalUlangTahun.getMonth() === sekarang.getMonth() &&
        tanggalUlangTahun.getMonth() === sekarang.getMonth() &&
        tanggalUlangTahun.getFullYear() === sekarang.getFullYear()
    ) {
        document.getElementById("secret").innerHTML = "Happy birthday to me 🥳";
    } else {
        document.getElementById("secret").innerHTML = "";
    }

    const sisaWaktu = hitungMundur(ulangTahun);
    document.getElementById("countdown").innerHTML = `
    <div class="time">${sisaWaktu.hari} <span>Hari</span></div>
    <div class="time">${sisaWaktu.jam} <span>Jam</span></div>
    <div class="time">${sisaWaktu.menit} <span>Menit</span></div>
    <div class="time">${sisaWaktu.detik} <span>Detik</span></div>
    `;
};

setInterval(updateCountdown, 1000);
updateCountdown();
