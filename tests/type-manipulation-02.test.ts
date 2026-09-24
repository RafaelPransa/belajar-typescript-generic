describe('Type Manipulation Advanced 02', () => {
    // Soal 1 Generic + keyof + T[K]
    it('should work for generic, keyof, and T[K]', () => {
        function ambilProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
            return obj[key];
        };
        interface Mahasiswa {
            nama: string;
            umur: number;
            jurusan: string
        };

        const mahasiswa: Mahasiswa = {
            nama: "Rafael Pransa",
            umur: 22,
            jurusan: "Teknik Informatika"
        };

        const nama = ambilProperty(mahasiswa, "nama");
        const umur = ambilProperty(mahasiswa, "umur");
        const jurusan = ambilProperty(mahasiswa, "jurusan");

        // Assertion (penegasan) - Menegaskan bahwa tipe data yang diharapkan sesuai
        expect(nama).toBe("Rafael Pransa");
        expect(umur).toBe(22);
        expect(jurusan).toBe("Teknik Informatika"); ``
    });

    // Soal 2 - Infer
    it('should work for infer', () => {
        type AmbilArray<T> = T extends Array<infer U> ? U : never;

        // Contoh sederhana
        type A = AmbilArray<string[]>;
        type B = AmbilArray<number[]>;

        const dataA: A = "Belajar Typescript";
        const dataB: B = 22

        // Assertion Nilai
        expect(dataA).toBe("Belajar Typescript");
        expect(dataB).toBe(22);

        // Assertion tipe data runtime
        expect(typeof dataA).toBe("string");
        expect(typeof dataB).toBe("number");

        // Contoh menggunakan fungsi helper dengan generic dan infer
        function getFirstElemet<T extends any[]>(arr: T): AmbilArray<T> {
            return arr[0];
        };

        const namaBuah = ["Apel", "Manggis", "Jeruk"];
        const angka = [10, 15, 11];

        const hasilAmbilString = getFirstElemet(namaBuah);
        const hasilAmbilAngka = getFirstElemet(angka);

        // Assertion
        expect(hasilAmbilString).toBe("Apel");
        expect(typeof hasilAmbilString).toBe("string");

        expect(hasilAmbilAngka).toBe(10);
        expect(typeof hasilAmbilAngka).toBe("number");
    });

    // Soal 3 - Func infer
    it('should work for function infer', () => {
        type ReturnTypeCustom<T> = T extends (...args: any[]) => infer R ? R : never;

        function tambah(a: number, b: number): number {
            return a + b;
        }

        type Hasil = ReturnTypeCustom<typeof tambah>;

        const hasil: Hasil = tambah(50, 32);

        // Assertion nilai dan tipe data runtime
        expect(hasil).toBe(82);
        expect(typeof hasil).toBe("number");
    });
});