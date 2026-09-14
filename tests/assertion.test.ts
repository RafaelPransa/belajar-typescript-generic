describe('Type Assertion', function () {

    // Basic Assertion
    it('should work basic assertion', function () {
        let data: unknown = "Rafael";
        const nama = data as string;

        console.info(nama.toUpperCase());
    });

    // Number
    it('should work for assertion number', function () {
        let data: unknown = 20;
        const angka = data as number;

        console.info(angka + 10);
    });

    // Interface
    it('should work for assertion interface', function () {
        interface Mahasiswa {
            nama: string,
            umur: number
        }

        const data: unknown = {
            nama: "Rafael",
            umur: 22
        }

        const mahasiswa = data as Mahasiswa;
        console.info(`Nama: ${mahasiswa.nama}\nUmur: ${mahasiswa.umur}`);
    });

    // Type assertion DOM
    it('should work for type assertion DOM', function () {
        const nama = document.getElementById('nama');
        if (nama instanceof HTMLInputElement) {
            console.info(nama.value);
        }
    });
});