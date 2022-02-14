//handle deposite button event

document.getElementById('deposite').addEventListener('click', function(){
    const deposite = document.getElementById('deposite-amount')
    const amount = deposite.value;


    const depositeTotal = document.getElementById('deposite-total');

    const currentAmount = depositeTotal.innerText;
    const newdeposite  = parseFloat(currentAmount) + parseFloat(amount);


    depositeTotal.innerText = newdeposite;

    //clear the deposite input 
    deposite.value = '';
})