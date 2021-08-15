document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    // get deposit amount
    const depositTotal = document.getElementById('deposit-amount');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;

    // update balance.
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;


    // clear input field.
    depositInput.value = '';
})