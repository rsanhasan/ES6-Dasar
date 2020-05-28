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

// const registrasiMaba = new Mahasiswa('Hassan', 'Teknik Informatika', 'Strata 1');
// registrasiMaba.daftar();

class Peminatan extends Mahasiswa {
    constructor(namaMahasiswa, peminatanMateri) {
        super(namaMahasiswa);
        this.kompetensi = peminatanMateri;
    }

    daftarKompetensi() {
        console.log(`Mahasiswa ${this.name} telah mendaftar peminatan kompetensi ${this.kompetensi}`);
    }

}

const peminatanMahasiswa = new Peminatan('Hassan', 'Data Science');
// const peminatanMahasiswa = new Peminatan('Hassan', 'Teknik Informatika', 'Strata 1')
peminatanMahasiswa.daftarKompetensi();