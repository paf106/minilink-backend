/**
 * Generates a random alphanumeric key of specified length.
 * @param length
 * @returns {string} Random alphanumeric key.
 */
export const generateRandomKeyUseCase = (length: number = 6): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);

    }
    return result;
}