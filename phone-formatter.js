const formatterPhone = document.getElementById("phone");


formatterPhone.addEventListener("keypress", (e) => {
    let phoneLength = formatterPhone.value.length;
    let keyNumber = (e.keyCode ? e.keyCode : e.wich);
    if(keyNumber > 47 && keyNumber < 58){
        if(phoneLength === 0){
            formatterPhone.value += "(";
        } else if (phoneLength === 3){
            formatterPhone.value += ")";
        } else if (phoneLength === 9){
            formatterPhone.value += "-";
        }
    } else{
        e.preventDefault();
    }
})