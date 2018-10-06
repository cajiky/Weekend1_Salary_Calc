//checking sourcing
console.log('JS');
$(nowReady);
function nowReady(){
    console.log('JQ');
    $('#submit').on('click', submitNewEmployee);
}
function submitNewEmployee(event) {
    event.preventDefault();
    console.log('submit button click');
}

