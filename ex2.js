var arr = [12312, 234233, 345344];

function checkVoucher() {
    const num = Number(document.getElementById('voucher').value);
    const index = arr.indexOf(num);
    if (index === -1) {
        document.getElementById('result').innerHTML = 'not available';
    } else {
        document.getElementById('result').innerHTML = 'you got coffee!!!';
        arr.splice(index, 1);
    }
}

document.getElementById('send').addEventListener('click', checkVoucher);
