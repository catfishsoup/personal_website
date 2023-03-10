// The JavaScript is here to validate the information the user input

function validateForm(e) {
    var email = document.getElementById('fname');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if(email.value.match(mailformat)) {
        return true; 
    } else {
        alert('Wrong email format');
        e.preventDefault(); //Prevent the event from triggering. 
        return false; 
    }

    
}