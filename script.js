function shiftCharCode(char, shift) {
    let charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
        // uppercase letters
        charCode = ((charCode - 65 + (shift % 26) + 26) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
        // lowercase letters
        charCode = ((charCode - 97 + (shift % 26) + 26) % 26) + 97;
    } else {
        return char;
    }
    return String.fromCharCode(charCode);
}

function encrypt() {
    const plainText = document.getElementById("plain-text").value;
    const shift = parseInt(document.getElementById("shift").value);

    const result = plainText.replace(/[a-zA-Z]/g, (char) =>
        shiftCharCode(char, shift)
    );

    document.getElementById("result").textContent = result;
}

function decrypt() {
    const cipherText = document.getElementById("result").textContent;
    const shift = parseInt(document.getElementById("shift").value);

    const result = cipherText.replace(/[a-zA-Z]/g, (char) =>
        shiftCharCode(char, -shift)
    );

    document.getElementById("plain-text").value = result;
    document.getElementById("result").textContent = result;
}

function reset() {
    document.getElementById("result").textContent = "";
    document.getElementById("shift").value = "";
    document.getElementById("plain-text").value = "";
}

document.getElementById('myButton').addEventListener('click', function() {
    Swal.fire({
      title: 'Encrypt-Decrypt-Cipher (EDC)',
      text: 'Encrypt-Decrypt-Cipher (EDC) adalah metode yang digunakan untuk mengamankan data dengan mengenkripsi pesan menggunakan kunci rahasia, sehingga hanya pihak yang memiliki kunci rahasia yang dapat membaca pesan yang dikirimkan. Metode EDC biasanya digunakan dalam komunikasi melalui jaringan, seperti email, pesan instan, dan transfer file, untuk memastikan keamanan data.'
    });
  });
  