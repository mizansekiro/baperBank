// handler set to logout button
document.getElementById('logout-btn').addEventListener('click', function () {
    window.location.href = 'index.html';
    console.log('ballll');
})

/*                                  /*
    #####//Banking Sector// #####
* /                                 */

//Use function
// get input from user Deposit and Withdraw 
function getInput(inputField) {
    const userInput = document.getElementById(inputField);
    const inputText = userInput.value;
    const inputNumber = parseFloat(inputText);
    console.log(inputNumber);
    userInput.value = "";
    return inputNumber;
}

function updatedTotalField(totalFieldId, getUserAmount) {
    const totalAmount = document.getElementById(totalFieldId);
    const totalAmountText = totalAmount.innerText;
    const totalAmountNumber = parseFloat(totalAmountText);
    totalAmount.innerText = totalAmountNumber + getUserAmount;
}

function getCurrantBalance() {
    const totalBalance = document.getElementById('total-balance-amount');
    const balanceText = totalBalance.innerText;
    const balanceNumber = parseFloat(balanceText);
    return balanceNumber;
}

function updateTotalBalacne(userbalance, isAdd) {
    const totalBalance = document.getElementById('total-balance-amount');
    // const balanceText = totalBalance.innerText;
    // const balanceNumber = parseFloat(balanceText);
    const previousTotalBalance = getCurrantBalance();
    if (isAdd == true) {
        const balanceAfterDeposit = previousTotalBalance + userbalance;
        totalBalance.innerText = balanceAfterDeposit;
    } else {
        const balanceAfterDeposit = previousTotalBalance - userbalance;
        totalBalance.innerText = balanceAfterDeposit;
    }

}

// get diposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get amount from user by calling function
    const newDepositAmount = getInput('deposit-amount');
    if (newDepositAmount > 0) {
        //additions and update totalfield by calling function
        updatedTotalField('total-deposit-amount', newDepositAmount);
        updateTotalBalacne(newDepositAmount, true);
    } else {
        alert("Please Enter Valid Number")
    }

})

// get withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get Widthdraw amount from user by calling function
    const newWithdrawAmount = getInput('withdraw-amount');
    const currantBalance = getCurrantBalance();
    //error handle 
    if (newWithdrawAmount > 0 && newWithdrawAmount < currantBalance) {
        //additions and update Widthdraw totalfield by calling function
        updatedTotalField('total-withdraw-amount', newWithdrawAmount);
        updateTotalBalacne(newWithdrawAmount, false);
    }
    if (newWithdrawAmount > currantBalance) {
        alert('Taka nei bari ja')
    }
})



// without use function
/* // get diposit 
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get total 

    // get amount from total deposit
    let lastDeposit = document.getElementById('total-deposit-amount');
    let lastDepositAmount = lastDeposit.innerText;

    // get amount from total withdraw
    let lastWithdraw = document.getElementById('total-withdraw-amount');
    let lastWithdrawAmount = lastWithdraw.innerText;

    // get amount from total Balance
    let lastBalance = document.getElementById('total-balance-amount');
    let lastBalanceAmount = lastBalance.innerText;

    // get amount from user
    const amountField = document.getElementById('deposit-amount');
    const newDepositAmount = amountField.value;
    amountField.value = '';

    // Total deposit 
    const totalDepositAmount = parseFloat(lastDepositAmount) + parseFloat(newDepositAmount);
    lastDeposit.innerText = totalDepositAmount;

    //total balance after deposit
    const balanceAfterDeposit = parseFloat(newDepositAmount) + parseFloat(lastBalanceAmount);
    lastBalance.innerText = balanceAfterDeposit;


})

// get withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get total
    // get amount from total withdraw
    let lastWithdraw = document.getElementById('total-withdraw-amount');
    let lastWithdrawAmount = lastWithdraw.innerText;

    // get amount from total Balance
    let lastBalance = document.getElementById('total-balance-amount');
    let lastBalanceAmount = lastBalance.innerText;

    // get withdraw amount from user//
    const withdraAmountField = document.getElementById('withdraw-amount');
    const newWithdrawAmount = withdraAmountField.value;
    withdraAmountField.value = '';

    // Total withdraw
    const totalWithdrawAmount = parseFloat(lastWithdrawAmount) + parseFloat(newWithdrawAmount);
    //lastWithdraw.innerText = totalWithdrawAmount;

    //total balance after deposit
    const balanceAfterWithdraw = parseFloat(lastBalanceAmount) - parseFloat(newWithdrawAmount);
    if (parseFloat(balanceAfterWithdraw) < 0) {
        // document.getElementById('insufficient-balance').innerText = 'Insufficient Balance'
        alert('Insufficient Balance or Put your amount in number');
    } else {
        lastWithdraw.innerText = totalWithdrawAmount;
        lastBalance.innerText = balanceAfterWithdraw;
    }
}); */