//checking sourcing
let employeeArray = [];
console.log('JS');
$(nowReady);
function nowReady(){
    console.log('JQ');
    $('#submitButton').on('click', submitNewEmployee);
}
class Employee{
    constructor(firstName, lastName, id, title, anualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.anualSalary = anualSalary;
    }
}

function submitNewEmployee(event) {
    event.preventDefault();
    console.log('submit button click');
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let anualSalary = $('#anualSalary').val();
    let freshEmployee = new Employee(firstName,lastName,id,title,anualSalary);
    employeeArray.push(freshEmployee);
    console.log(employeeArray);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#anualSalary').val('');
}

function appendEmloyeeArray() {
    let element = $()
}

