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
        expect(jurusan).toBe("Teknik Informatika");
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
        function getFirstElement<T extends any[]>(arr: T): AmbilArray<T> {
            return arr[0];
        };

        const namaBuah = ["Apel", "Manggis", "Jeruk"];
        const angka = [10, 15, 11];

        const hasilAmbilString = getFirstElement(namaBuah);
        const hasilAmbilAngka = getFirstElement(angka);

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

    // Soal 4 - Distributive Conditional Types
    it('should work for distributive conditional types', () => {
        type CekNumber<T> = T extends number ? "Number" : "Bukan Number";

        type A = CekNumber<number>
        type B = CekNumber<string>
        type C = CekNumber<number | string>

        const nilaiA: A = "Number";
        const nilaiB: B = "Bukan Number";
        const nilaiC1: C = "Number";
        const nilaiC2: C = "Bukan Number";

        // Assertion
        expect(nilaiA).toBe("Number");
        expect(nilaiB).toBe("Bukan Number");
        expect(nilaiC1).toBe("Number");
        expect(nilaiC2).toBe("Bukan Number");
    });

    // Soal 5 - Custom Pick
    it('should work for Custom Pick', () => {
        type PickCustom<T, K extends keyof T> = {
            [P in K]: T[P];
        };

        interface User {
            id: number;
            nama: string;
            umur: number;
            email: string;
        };

        type UserPublic = PickCustom<User, "id" | "nama" | "email">

        const user: UserPublic = {
            id: 1,
            nama: "Rafael Pransa",
            email: "rafael@gmail.com"
        };

        expect(user.nama).toBe("Rafael Pransa");
    });

    // Soal 6 - Custom Omit
    it('should work for Custom Omit', () => {
        type OmitCustom<T, K extends keyof T> = {
            [P in Exclude<keyof T, K>]: T[P];
        };



        interface User {
            id: number;
            nama: string;
            umur: number;
            email: string;
        }

        type UserTanpaEmail = OmitCustom<User, "email">;

        const user: UserTanpaEmail = {
            id: 1,
            nama: "Rafael Pransa",
            umur: 22,
        };

        expect(user.umur).toBe(22);
        expect(typeof user.umur).toBe("number");
    });

    // Bonus Utility type nullable
    it('should work for Utility type Nullable', () => {
        type Nullable<T> = {
            [P in keyof T]: T[P] | null;
        };

        interface User {
            id: number;
            nama: string;
            umur: number;
            email: string;
        };

        type UserNullable = Nullable<User>;

        const user: UserNullable = {
            id: 1,
            nama: "Rafael Pransa",
            umur: null,
            email: null,
        };

        expect(user.umur).toBeNull()
    });
});