document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutAmount = getInputFieldValueById('cash-out-amount');
    const cashOutPin = getInputFieldValueById('cash-out-pin');

    if(cashOutPin === 1234){

        const balance = getTextValueById('account-balance');
        const newBalance = balance - cashOutAmount;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert("failed to cash out!");
    }

})