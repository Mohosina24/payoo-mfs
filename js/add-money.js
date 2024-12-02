document.getElementById('btn-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-amount');
    const pinCode = getInputFieldValueById('input-pin');
    
    if(pinCode === 1234){
           const balance = getTextValueById('account-balance');
           const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('failed to add money! try again');
    }

})