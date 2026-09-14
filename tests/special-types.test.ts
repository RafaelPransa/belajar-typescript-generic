describe('Special Types', function () {
    // any = TypeScript tidak melakukan pengecekan tipe secara ketat
    it('should work for any', function () {
        function prosesData(data: any): void {
            console.info(data);
        }
        prosesData("Rafael");
        prosesData(20);
        prosesData(true);
    });

    // unknown
    it('should work for unknown', function () {
        function prosesData(data: unknown): void {
            if (typeof data === 'string') {
                console.info(data.toUpperCase());
            } else if (typeof data === 'number') {
                console.info(data + 10);
            } else if (typeof data === 'boolean') {
                if (data) {
                    console.info('Status Aktif');
                } else {
                    console.info('Status Tidak Aktif');
                }
            }
        }
        prosesData("Rafael");
        prosesData(20);
        prosesData(true);
    });

    it('should work for void', function () {

        // void
        function cetakMahasiswa(nama: string): void {
            console.info(`Mahasiswa: ${nama}`);
        }
        cetakMahasiswa('Rafael');
    });

    // never
    it('should work for never', function () {
        function error(): never {
            throw new Error('Terjadi Kesalahan');
        }

        expect(() => error()).toThrow('Terjadi Kesalahan');
    });

    // Soal tantangan
    it('should work', function () {
        type Role = "admin" | "guru" | "siswa";
        function cekRole(role: Role): string {
            switch (role) {
                case "admin":
                    return "Anda adalah Admin";
                case "guru":
                    return "Anda adalah Guru";
                case "siswa":
                    return "Anda adalah Siswa";
                default:
                    const _error: never = role;
                    return _error;
            }
        }
        console.info(cekRole("admin"));
        console.info(cekRole("guru"));
        console.info(cekRole("siswa"));

        // @ts-expect-error
        console.info(cekRole("dosen"));
    })

});