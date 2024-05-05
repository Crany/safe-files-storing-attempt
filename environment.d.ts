declare global {
    namespace NodeJS {
        interface ProcessENV {
            TOKEN: string | undefined;
        }
    }
}

export {};