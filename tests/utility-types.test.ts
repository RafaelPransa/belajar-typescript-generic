describe('Utility Types', function () {
    interface User {
        id: number;
        nama: string;
        umur: number;
        email: string;
        password: string;
    }

    // Partial
    it('should work for Partial', function () {
        type UserUpdate = Partial<User>;

        const user: UserUpdate = {
            nama: "Rafael Pransa",
            email: "r.fransa@gmail.com",
        }

        console.info(user.nama);
        console.info(user.email);

        expect(user.nama).toBe("Rafael Pransa");
        expect(user.email).toBe("r.fransa@gmail.com");
    });

    // Pick
    it('should work for Pick', function () {
        type UserPublic = Pick<User, 'id' | 'nama' | 'email'>;

        const user: UserPublic = {
            id: 1,
            nama: "Pick Rafael Pransa",
            email: "pick@gmail.com",
        }

        console.info(user.id);
        console.info(user.nama);
        console.info(user.email);

        expect(user.id).toBe(1);
        expect(user.nama).toBe("Pick Rafael Pransa");
        expect(user.email).toBe("pick@gmail.com");
    });

    // Omit
    it('should work for Omit', function () {
        type UserTanpaPassword = Omit<User, "password">;
        const user: UserTanpaPassword = {
            id: 1,
            nama: "Omit Rafael Pransa",
            umur: 24,
            email: "omit@gmail.com"
        }

        console.info(user.id);
        console.info(user.nama);
        console.info(user.umur);
        console.info(user.email);

        expect(user.id).toBe(1);
        expect(user.nama).toBe("Omit Rafael Pransa");
        expect(user.umur).toBe(24);
        expect(user.email).toBe("omit@gmail.com");
    });

    // Readonly
    it('should work for Readonly', function () {
        const user: Readonly<User> = {
            id: 1,
            nama: "Readonly Rafael Pransa",
            umur: 24,
            email: "readonly@gmail.com",
            password: "password"
        }

        console.info(user.id);
        console.info(user.nama);
        console.info(user.umur);
        console.info(user.email);
        console.info(user.password);

        expect(user.id).toBe(1);
        expect(user.nama).toBe("Readonly Rafael Pransa");
        expect(user.umur).toBe(24);
        expect(user.email).toBe("readonly@gmail.com");
        expect(user.password).toBe("password");
    });

    // Kombinasi Partial dan Omit
    it('should work for combination Partial and Omit', function () {
        type UserUpdateTanpaPassword = Partial<Omit<User, "password">>;
        const user: UserUpdateTanpaPassword = {
            id: 1,
            nama: "Kombinasi Rafael Pransa",
            umur: 24,
            email: "kombinasi@gmail.com",
        }

        console.info(user.id);
        console.info(user.nama);
        console.info(user.umur);
        console.info(user.email);

        expect(user.id).toBe(1);
        expect(user.nama).toBe("Kombinasi Rafael Pransa");
        expect(user.umur).toBe(24);
        expect(user.email).toBe("kombinasi@gmail.com");

    });

});