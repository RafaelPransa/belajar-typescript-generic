describe('Type Manipulation 03', () => {
    // Soal 1 - Key Remapping
    it('should work for Key Remapping', () => {
        interface User {
            nama: string;
            umur: number;
        }

        type Getter<T> = {
            [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
        };

        type UserGetter = Getter<User>;

        const user: UserGetter = {
            getNama: () => 'Rafael Pransa',
            getUmur: () => 22
        };

        console.log(user);
        expect(user.getNama()).toBe("Rafael Pransa");
    });

    // Soal 2- Event Handler
    it('should work for Event Handler', () => {
        interface Events {
            click: MouseEvent;
            submit: SubmitEvent;
            change: Event;
        }

        type EventHandlers<T> = {
            [K in keyof T as `on${Capitalize<string & K>}`]: (event: T[K]) => void;
        };

        type AllEventHandlers = EventHandlers<Events>;

        const handlers: AllEventHandlers = {
            onClick: (e: MouseEvent) => console.log(e),
            onSubmit: (e: SubmitEvent) => console.log(e),
            onChange: (e: Event) => console.log(e)
        };

        console.log(handlers);
    });

    // Soal 3 - Infer Parameter
    it('Should work for infer parameter', () => {
        type AmbilParameter<T> = T extends (...args: infer P) => unknown ? P : never;

        function tambah(a: number, b: number): number {
            return a + b;
        }

        type ParameterTambah = AmbilParameter<typeof tambah>;

        const parameterTambah: ParameterTambah = [10, 20];
        console.log(parameterTambah);
    });

    // Soal 4 - Infer Parameter + Return
    it('should work for infer parameter dan return', () => {
        type InfoFunction<T> = T extends (...args: infer P) => infer R ? {
            parameter: P,
            return: R,
        } : never;

        function kali(a: number, b: number): number {
            return a * b;
        }

        type InfoKali = InfoFunction<typeof kali>;
        const infoKali: InfoKali = {
            parameter: [10, 20],
            return: 30
        };

        console.log(infoKali);
    });

    // Soal 5 - DeepPartial
    it('should work for DeepPartial', () => {
        interface User {
            nama: string;

            alamat: {
                kota: string;
                kodePos: number;
            };
        }

        type DeepPartial<T> = {
            [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
        };

        const user: DeepPartial<User> = {
            alamat: {
                kota: "Tasikmalaya"
            }
        };

        expect(user).toEqual({
            alamat: {
                kota: "Tasikmalaya"
            }
        });
    });

    // Soal 6 - ReadonlyDeep
    it('should work for ReadonlyDeep', () => {
        type ReadonlyDeep<T> = {
            readonly [K in keyof T]: T[K] extends object ? ReadonlyDeep<T[K]> : T[K];
        };

        interface User {
            nama: string;

            alamat: {
                kota: string;
            };
        };

        const user: ReadonlyDeep<User> = {
            nama: "Rafael",
            alamat: {
                kota: "Tasikmalaya"
            }
        };

        expect(user).toEqual({
            nama: "Rafael",
            alamat: {
                kota: "Tasikmalaya"
            }
        });
    });

    // Bonus Challenge
    it('should work for bonus challenge', () => {
        interface User {
            nama: string;
            umur: number;
        }

        type Validator<T> = {
            [K in keyof T as `validate${Capitalize<string & K>}`]: (value: T[K]) => boolean;
        }

        type ValidatorUser = Validator<User>;

        const user: ValidatorUser = {
            validateNama: (value: string) => {
                return value.length > 0;
            },

            validateUmur: (value: number) => {
                return value >= 18;
            }
        }

        console.log(user.validateNama("Rafael"));
        console.log(user.validateUmur(22));
    });
});