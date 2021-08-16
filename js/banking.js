

function getInputValue(inputId) {
    // debugger
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field.
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, Amount) {
    // debugger
    const totalElement = document.getElementById(totalFieldId);
    const TotalText = totalElement.innerText;
    const previousTotal = parseFloat(TotalText);
    totalElement.innerText = previousTotal + Amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}


function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('total-balance');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
        depositAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
        depositAmount;
    }
}



document.getElementById('deposit-btn').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);


    // get deposit amount
    // const depositTotal = document.getElementById('deposit-amount');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previousDepositTotal + depositAmount;


    // update balance.

    // const balanceTotal = document.getElementById('total-balance');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;

    const depositAmount = getInputValue('deposit');
    if (depositAmount > 0) {
        updateTotalField('deposit-amount', depositAmount);
        updateBalance(depositAmount, true);
    }
});

// handel withdraw button.

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);





    // update withdraw total.

    // const withdrawTotal = document.getElementById('withdraw-amount');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);


    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;


    // update balance after withdraw.
    // const balanceTotal = document.getElementById('total-balance');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


    const withdrawAmount = getInputValue('withdraw');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-amount', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('not a valid number');
    }

});








