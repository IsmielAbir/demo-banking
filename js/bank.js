document.getElementById('submit').addEventListener('click', 
function(){

    //user-email

    const emailfield = document.getElementById('user-email');
    const email = emailfield.value;

    //pass

    const password = document.getElementById('user-password');
    const pass = password.value;

    if(email == 'abc@gmail.com'  && pass == '123abc'){
        console.log("valid");
        window.location.href = 'banking.html';
    }


});

