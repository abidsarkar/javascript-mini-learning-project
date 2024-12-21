const inputField = document.querySelector('.input');
const generateBtn = document.querySelector('.btn');
const qrcodeContainer = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
  const text = inputField.value;

  if (text.trim() === '') {
    alert('Please enter some text.');
    return;
  }

  qrcodeContainer.innerHTML = ''; // Clear previous QR code

  new QRCode(qrcodeContainer, {
    text: text,
    width: 128,
    height: 128,
  });
});