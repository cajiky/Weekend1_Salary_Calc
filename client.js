//checking sourcing
let employeeArray = [];
console.log('JS');
$(nowReady);
function nowReady(){
    console.log('JQ');
    $('#submitButton').on('click', submitNewEmployee);
}
class Employee{
    constructor(firstName, lastName, id, title, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}

function submitNewEmployee(event) {
    event.preventDefault();
    console.log('submit button click');
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();
    let freshEmployee = new Employee(firstName,lastName,id,title,annualSalary);
    employeeArray.push(freshEmployee);
    console.log(employeeArray);
    clearInputFields();
    appendEmloyeeArray();
}


function clearInputFields() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');
}

function appendEmloyeeArray() {
    let element = $('#employeeTable')
    element.empty();
    for(let employee of employeeArray){
        element.append(`<tr><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.id}</td><td>${employee.title}</td><td>${employee.anualSalary}`)
    }
}

