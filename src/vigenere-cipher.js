const charCodeA = 65;
const charCodeZ = 90;

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message && !key) throw new Error();

    message = message.toUpperCase();
    key = key.toUpperCase();
    const result = [];

    for (let i = 0, iKey = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);

      if (charCode >= charCodeA && charCode <= charCodeZ) {
        let charCodeKey = key.charCodeAt(iKey++ % key.length);
        let charCodeEncrypt = charCode + charCodeKey - charCodeA;

        if (charCodeEncrypt > charCodeZ) charCodeEncrypt -= 26;
        result.push(String.fromCharCode(charCodeEncrypt));
      } else {
        result.push(message[i]);
      }
    }

    if (!this.direct) result.reverse();
    return result.join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage && !key) throw new Error();

    key = key.toUpperCase();
    const result = [];

    for (let i = 0, iKey = 0; i < encryptedMessage.length; i++) {
      let charCode = encryptedMessage.charCodeAt(i);

      if (charCode >= charCodeA && charCode <= charCodeZ) {
        let charCodeKey = key.charCodeAt(iKey++ % key.length);
        let charCodeDecrypt = charCode - charCodeKey + charCodeA;

        if (charCodeDecrypt < charCodeA) charCodeDecrypt += 26;
        result.push(String.fromCharCode(charCodeDecrypt));
      } else {
        result.push(encryptedMessage[i]);
      }
    }

    if (!this.direct) result.reverse();
    return result.join("");
  }
}

module.exports = VigenereCipheringMachine;
