let qr;

function switchType() {
    inputArea.innerHTML = `<input id="value" placeholder="Enter value">`;
  }

function createQR() {
  let text = "";
  const t = type.value;

    text = value.value;
    if (t === "phone")
        text = `tel:${text}`;
    if (t === "email") 
        text = `mailto:${text}`;
  
  qrBox.innerHTML = "";
  qr = new QRCode(qrBox, {
    text,
    width: size.value,
    height: size.value,
    colorDark: qrColor.value,
    colorLight: bgColor.value,
    correctLevel: QRCode.CorrectLevel.H
  });

  save(text);
}

function download() {
  const img = qrBox.querySelector("img");
  if (!img) return alert("Generate QR first");
  const a = document.createElement("a");
  a.href = img.src;
  a.download = "qr.png";
  a.click();
}