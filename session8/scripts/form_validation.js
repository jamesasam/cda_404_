function main() {
    console.log("in main function")
    var myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", validateForm);
}

function validateForm(event) {
    console.log("validating from");
    event.preventDefault(event);
}
