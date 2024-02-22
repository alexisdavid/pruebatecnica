import CryptoJS from 'crypto-js';

// Clave de cifrado. Debe ser una cadena de 16, 24 o 32 caracteres.
const encryptionKey = '4932856171906342';

// Función para cifrar un string
export const encryptString = (data) => {
  const encrypted = CryptoJS.AES.encrypt(data, encryptionKey).toString();
  return encrypted;
};

// Función para descifrar un string
export const decryptString = (encryptedData='') => {
  if(encryptionKey!==null&&encryptedData!==null){

    const decrypted = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
};