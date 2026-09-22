describe('Type Manipulation', () => {
    // keyof
    it('should work for keyof', () => {
        interface Mahasiswa {
            nama: string;
            umur: number;
            jurusan: string;
        }

        type KeyMahasiswa = keyof Mahasiswa;

        let key: KeyMahasiswa;
        key = "nama";
        console.info(key.toUpperCase());
        key = "umur";
        console.info(key);
        key = "jurusan";
        console.info(key);

        // @ts-expect-error
        key = "alamat";
    });

    // typeof
    it('should work for typeof', () => {
        const mahasiswa = {
            nama: "Rafael",
            umur: 22,
            jurusan: "Informatika"
        };

        type Mahasiswa = typeof mahasiswa;

        const nama: Mahasiswa["nama"] = "Type of Rafael";
        const umur: Mahasiswa["umur"] = 22;
        const jurusan: Mahasiswa["jurusan"] = "Type of Informatika";

        console.log(nama, umur, jurusan);
    });

    // Indexed Access
    it('should work for indexed access', () => {
        interface Mahasiswa {
            nama: string;
            umur: number;
            jurusan: string;
        }

        type NamaMahasiswa = Mahasiswa["nama"];
        type UmurMahasiswa = Mahasiswa["umur"];
        type JurusanMahasiswa = Mahasiswa["jurusan"];

        const nama: NamaMahasiswa = "Indexed Access Rafael";
        const umur: UmurMahasiswa = 22;
        const jurusan: JurusanMahasiswa = "Indexed Access Informatika";

        console.log(nama, umur, jurusan);
    });

    // Conditional Type
    it('should work for conditional type', () => {
        type CekString<T> = T extends string ? "String" : "Bukan String";

        type A = CekString<string>;
        type B = CekString<number>;

        const testString: A = "String";
        // @ts-expect-error
        const testNumber: B = 22;

        expect(testString).toBe("String");
        expect(testNumber).toBe(22);
    });

    // Mapped Type
    it('should work for Mapped Type', () => {
        interface Mahasiswa {
            nama: string;
            umur: number;
            jurusan: string;
        }

        type MahasiswaReadonly = {
            readonly [K in keyof Mahasiswa]: Mahasiswa[K];
        };

        const pendaftar: MahasiswaReadonly = {
            nama: "Mapped Rafael",
            umur: 22,
            jurusan: "Mapped Informatika"
        };

        console.log(pendaftar.nama);

        // @ts-expect-error
        pendaftar.nama = "Andi";
    });

    // Template Literal
    it('should work for Template Literal', () => {
        type Role = "admin" | "guru" | "siswa";

        type RoleEvent = `on${Role}`;

        let event: RoleEvent;
        event = "onadmin";
        console.log(event);
        event = "onguru";
        console.log(event);
        event = "onsiswa";

        console.log(event);
    });

    // Bonus Challenge Partial tanpa menggunakan partial
    it('should work challenge', () => {
        type PartialCustom<T> = {
            [K in keyof T]?: T[K];
        };

        interface User {
            nama: string;
            umur: number;
            email: string;
        }

        const user: PartialCustom<User> = {
            nama: "Partial Custom Rafael Pransa",
        };

        console.log(user);
        expect(user.nama).toBe("Partial Custom Rafael Pransa");
        expect(user.email).toBeUndefined();
    });
}); 