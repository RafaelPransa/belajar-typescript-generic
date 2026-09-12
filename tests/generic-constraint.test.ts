describe('Generic Constraint', function () {
    /* 
    SOAL PERTAMA
    Buat function 'ambilPanjang()'. Ketentuan:
    - Menggunakan Generic.
    - T harus mempunyai property length bertipe number.
    - Function mengembalikan nilai length.
    - Jangan menggunakan any.
    */

    function ambilPanjang<T extends { length: number }>(value: T): number {
        return value.length;
    }

    it('should work for function ambilPanjang return length from value', function () {
        const nama = ambilPanjang("RafaelPransa");
        const nama2 = ambilPanjang<string>("Rafael Pransa");

        console.info(nama);
        console.info(nama2);

        expect(nama).toBe(12);
        expect(nama2).toBe(13);
    })

    /*
    SOAL KEDUA
    Constraint dengan interface
    Buat interface bernama 'MemilikiPanjang' Kemudian gunakan interface tersebut sebagai constraint:
    */

    interface MemilikiPanjang {
        length: number
    }

    it('should work for constraint interface MemilikiPanjang', function () {
        function ambilPanjang<T extends MemilikiPanjang>(value: T): number {
            return value.length;
        }

        const kalimat = ambilPanjang("Hari ini hari minggu");

        console.info(kalimat);
        expect(kalimat).toBe(20);
    })

    /*
    SOAL KETIGA
    keyof. Buat interface bernama 'Mahasiswa', kemudian buat function bernama 'ambilProperty()'.
    */

    interface Mahasiswa {
        nama: string,
        umur: number,
        jurusan: string
    }

    function ambilProperty<T, K extends keyof T>(object: T, key: K): T[K] {
        return object[key];
    }

    it('should work for keyof constraint', function () {
        const mahasiswa: Mahasiswa = {
            nama: "Rafael Pransa",
            umur: 20,
            jurusan: "Informatika"
        }
        const nama = ambilProperty(mahasiswa, "nama");
        const umur = ambilProperty(mahasiswa, "umur");
        const jurusan = ambilProperty(mahasiswa, "jurusan");

        console.info(nama);
        console.info(umur);
        console.info(jurusan);

        expect(nama).toBe("Rafael Pransa");
        expect(umur).toBe(20);
        expect(jurusan).toBe("Informatika");
    })

    /*
    SOAL KEEMPAT
    buat interface 'Produk' lalu gabungkan dengan function ambilProperty()
    */

    interface Produk {
        nama: string,
        harga: number,
        tersedia: boolean
    }

    it('should work for soal keempat', function () {
        function ambilProperty<T, K extends keyof T>(object: T, key: K): T[K] {
            return object[key];
        }

        const produk: Produk = {
            nama: "Laptop Thinkpad T14 Gen 1",
            harga: 5500000,
            tersedia: true
        }

        const nama = ambilProperty(produk, "nama");
        const harga = ambilProperty(produk, "harga");
        const tersedia = ambilProperty(produk, "tersedia");

        console.info(nama);
        console.info(harga);
        console.info(tersedia);

        expect(nama).toBe("Laptop Thinkpad T14 Gen 1");
        expect(harga).toBe(5500000);
        expect(tersedia).toBe(true);
    })
});