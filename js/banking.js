//handle deposite button event

document.getElementById('deposite').addEventListener('click', function(){
    const deposite = document.getElementById('deposite-amount')
    const amount = deposite.value;

// update deposite total
    const depositeTotal = document.getElementById('deposite-total');

    const currentAmount = depositeTotal.innerText;
    const newdeposite  = parseFloat(currentAmount) + parseFloat(amount);


    depositeTotal.innerText = newdeposite;

    //update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceText);
    const newBalance = previousBalance + newdeposite;
    balanceTotal.innerText = newBalance;


    //clear the deposite input 
    deposite.value = '';
})