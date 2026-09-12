describe('Generic', function () {
    /*
    Soal pertama
    Ketentuannya:
    Function menerima satu parameter dengan tipe Generic.
    Function mengembalikan parameter tersebut.
    Function harus bisa menerima string, number, maupun boolean.
    Jangan menggunakan any.
    */

    function identitas<T>(value: T): T {
        return value;
    }

    /*
    Soal kedua
    Buat function 'ambilPertama()'
    Function tersebut menerima sebuah array Generic dan mengembalikan element pertama.
    */
    function ambilPertama<T>(value: T[]): T | undefined {
        return value[0];
    }

    /*
    Buat interface bernama 'Kotak<T>' dengan properti 'isi
    */

    interface Kotak<T> {
        isi: T;
    }



    it('should work for function parameter with type generic', function () {
        const nama = identitas<string>("Rafael Pransa");
        const umur = identitas(22);
        const mahasiswa = identitas<boolean>(true);

        expect(nama).toBe("Rafael Pransa");
        expect(umur).toBe(22);
        expect(mahasiswa).toBe(true);

        console.info(nama);
        console.info(umur);
        console.info(mahasiswa);
    });

    it('should work for function ambilPertama', function () {
        const namaMahasiswa = ambilPertama(["Rafael Pransa", "Agus", "Asep"]);
        const angka = ambilPertama([1, 2, 3, 4, 5]);

        expect(namaMahasiswa).toBe("Rafael Pransa");
        expect(angka).toBe(1);

        console.info(namaMahasiswa);
        console.info(angka);
    });

    it('should work for interface Kotak', function () {
        const kotakAngka: Kotak<number> = {
            isi: 100
        };
        const kotakNama: Kotak<string> = {
            isi: "Rafael Pransa"
        };

        console.info(kotakAngka.isi);
        console.info(kotakNama.isi);

        expect(kotakAngka.isi).toBe(100);
        expect(kotakNama.isi).toBe("Rafael Pransa");

    });


});