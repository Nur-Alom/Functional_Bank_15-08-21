document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit');
    const depositAmount = depositInput.value;
    // console.log(depositAmount);

    // get deposit amount
    const depositTotal = document.getElementById('deposit-amount');
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = depositAmount;
    // clear input field.
    depositInput.value = '';
    console.log(depositTotalText);

})