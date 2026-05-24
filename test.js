const { encrypt, decrypt } = require('./encryption');

const text = "Cyber Security Aspirants";

console.log("==================================");
console.log("ORIGINAL TEXT:");
console.log(text);
console.log("==================================\n");

// Encryption 1
const encrypted1 = encrypt(text);

console.log("ENCRYPTION 1:");
console.log(encrypted1);

const decrypted1 = decrypt(encrypted1);

console.log("\nDECRYPTED 1:");
console.log(decrypted1);

console.log("\n==================================\n");

// Encryption 2
const encrypted2 = encrypt(text);

console.log("ENCRYPTION 2:");
console.log(encrypted2);

const decrypted2 = decrypt(encrypted2);

console.log("\nDECRYPTED 2:");
console.log(decrypted2);

console.log("\n==================================\n");

// Encryption 3
const encrypted3 = encrypt(text);

console.log("ENCRYPTION 3:");
console.log(encrypted3);

const decrypted3 = decrypt(encrypted3);

console.log("\nDECRYPTED 3:");
console.log(decrypted3);

console.log("\n==================================\n");

// Compare outputs
console.log("CHECKING UNIQUE OUTPUTS:");

console.log(
    "\nEncryption 1 != Encryption 2 :",
    encrypted1 !== encrypted2
);

console.log(
    "Encryption 2 != Encryption 3 :",
    encrypted2 !== encrypted3
);

console.log(
    "Encryption 1 != Encryption 3 :",
    encrypted1 !== encrypted3
);

console.log("\n==================================");
console.log("TASK COMPLETED SUCCESSFULLY");
console.log("Random IV generates unique outputs");
console.log("==================================");