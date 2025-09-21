// src/utils/hash.js
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10;

export async function hashPassword(plain) {
    return await bcrypt.hash(plain, SALT_ROUNDS);
}

export async function comparePassword(plain, hashed) {
    return await bcrypt.compare(plain, hashed);
}
