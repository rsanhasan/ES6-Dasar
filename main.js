// Modul untuk mahasiswa kampus

class Mahasiswa {
    constructor(namaMahasiswa, namaProdi, jenjangPendidikan) {
        this.name = namaMahasiswa;
        this.prodi = namaProdi;
        this.jenjang = jenjangPendidikan;
    }

    daftar() {
        console.log(`Mahasiswa baru bernama ${this.name} telah mendaftarkan diri pada program studi ${this.prodi} Jenjang ${this.jenjang}`);
    }
}

const registrasiMaba = new Mahasiswa('Hassan', 'Teknik Informatika', 'Strata 1');
registrasiMaba.daftar();