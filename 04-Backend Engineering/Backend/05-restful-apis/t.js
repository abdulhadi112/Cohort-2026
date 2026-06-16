import crypto from "crypto"

const rawToken = crypto.randomBytes(25).toString('hex')
console.log(rawToken);

// const hashedToken = crypto
//     .createHash('sha256')
//     .update(rawToken)
//     .digest('hex')