//handle deposite button event

document.getElementById('deposite').addEventListener('click', function(){
    const deposite = document.getElementById('deposite-amount')
    const amount = deposite.value;


    const depositeTotal = document.getElementById('deposite-total');


    depositeTotal.innerText = amount;

    //clear the deposite input 
    deposite.value = '';
})