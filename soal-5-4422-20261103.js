const namaSiswa = ["piki", "bailao", "Ccep", "wisnu", "jarans"];
const nilaiSiswa = [80, 75, 90, 85, 70];

console.log("Jumlah siswa:", namaSiswa.length);
console.log("Siswa pertama:", namaSiswa[0], "-", nilaiSiswa[0]);

const terakhir = namaSiswa.length - 1;
console.log("Siswa terakhir:", namaSiswa[terakhir], "-", nilaiSiswa[terakhir]);

nilaiSiswa[1] = 88;
nilaiSiswa[4] = 82;

console.log("Siswa ketiga:", namaSiswa[2], "-", nilaiSiswa[2]);
console.log(namaSiswa);
console.log(nilaiSiswa);


const indeksCek = 7;
if (indeksCek >= 0 && indeksCek < namaSiswa.length) {
  console.log(namaSiswa[indeksCek], "-", nilaiSiswa[indeksCek]);
} else {
  console.log("Indeks " + indeksCek + " tidak tersedia");
}