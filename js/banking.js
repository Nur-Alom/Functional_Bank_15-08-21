

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field.
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, Amount) {
    debugger
    const totalElement = document.getElementById(totalFieldId);
    const TotalText = totalElement.innerText;
    const previousTotal = parseFloat(TotalText);
    totalElement.innerText = previousTotal + Amount;
}



document.getElementById('deposit-btn').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);

    const depositAmount = getInputValue('deposit');

    // get deposit amount
    // const depositTotal = document.getElementById('deposit-amount');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previousDepositTotal + depositAmount;

    updateTotalField('deposit-amount', depositAmount);

    // update balance.
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

});

// handel withdraw button.

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    const withdrawAmount = getInputValue('withdraw');



    // update withdraw total.

    // const withdrawTotal = document.getElementById('withdraw-amount');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    updateTotalField('withdraw-amount', withdrawAmount);

    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;


    // update balance after withdraw.
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


});








