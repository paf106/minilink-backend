import {beforeAll, beforeEach, expect, test} from "bun:test";
import {GenerateRandomKeyUseCase} from "../../src/application/GenerateRandomKeyUseCase.ts";

let key: string;
let generateRandomKeyUseCase: GenerateRandomKeyUseCase

beforeAll(() => {
    generateRandomKeyUseCase = new GenerateRandomKeyUseCase()
})

beforeEach(() => {
    key = generateRandomKeyUseCase.execute()
})

test("Key to be 6 characters long", () => {
    expect(key.length).toBe(6);
});

test("Key must be a string", () => {
    expect(typeof key).toBe("string");
})