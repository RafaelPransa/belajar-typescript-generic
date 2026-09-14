describe('Function Types', function () {
    // Function Type
    type Operasi = (a: number, b: number) => number;

    it('Should support function type', function () {

        const tambah: Operasi = (a, b) => {
            return a + b;
        };
        const kurang: Operasi = (a, b) => {
            return a - b;
        }

        const kali: Operasi = (a, b) => {
            return a * b;
        }

        console.log(tambah(1, 2));
        console.log(kurang(1, 2));
        console.log(kali(1, 2));

        expect(tambah(1, 2)).toBe(3);
        expect(kurang(1, 2)).toBe(-1);
        expect(kali(1, 2)).toBe(2);
    });

    // Callback function 
    it('should work fot callback function', function () {
        function jalankan(a: number, callback: (b: number) => number): number {
            return callback(a);
        }

        const hasil = jalankan(10, (angka) => {
            const total = angka * 2;
            return total;
        });
        console.info(hasil);
        expect(hasil).toBe(20);
    });

    // Optional & Default
    it('should work for optional & default', function () {
        function cetakMahasiswa(nama: string, umur: number | string = "Tidak diketahui"): void {
            console.log(`Nama : ${nama}\nUmur : ${umur}`);
        }

        const mahasiswa1 = cetakMahasiswa("Rafael", 22);
        const mahasiswa2 = cetakMahasiswa("Rafael");
    });

    // Rest Parameter
    it('should work for Rest Parameter', function () {
        function jumlahkan(...angka: number[]): number {
            return angka.reduce((total, current) => total + current, 0);
        }

        const tes = jumlahkan(1, 2, 3, 4, 5);
        console.info(tes);
        expect(tes).toBe(15);
    });

    // function overloading
    it('should work for function overloading', function () {
        // 1. Overload Signatures (untuk caller)
        function gabung(a: string, b: string): string;
        function gabung(a: number, b: number): number;

        // 2. Implementation Signature & Body (Type-Safe dengan Type Guard)
        function gabung(a: string | number, b: string | number): string | number {
            if (typeof a === "string" && typeof b === "string") {
                return a + b;
            }
            if (typeof a === "number" && typeof b === "number") {
                return a + b;
            }
            throw new Error("Parameter types must match (both string or both number)");
        }

        const nama = gabung("Rafael", "Pransa");
        const angka = gabung(10, 20);

        expect(nama).toBe("RafaelPransa");
        expect(angka).toBe(30);
    });

});