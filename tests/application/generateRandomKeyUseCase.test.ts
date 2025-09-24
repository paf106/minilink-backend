import { expect, test, beforeEach} from "bun:test";
import { generateRandomKeyUseCase } from "../../src/application/generateRandomKeyUseCase.ts";

let key: string;

beforeEach(() => {
    // Configuración inicial si es necesaria
    key = generateRandomKeyUseCase()
})

test("Key to be 6 characters long", () => {
    //const key = generateRandomKeyUseCase();
    expect(key.length).toBe(6);
});

test("Key must be a string", () => {
   // const key = generateRandomKeyUseCase();
    expect(typeof key).toBe("string");
})