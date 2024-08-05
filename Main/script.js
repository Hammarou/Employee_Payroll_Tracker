// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {

  // employeeArray is created as an array to act as placeholder for collecting employee data 
  let employeesArray = [];

  let addEmployee = true;
  
  // Loop is continuous until user nolonger wishes to add an employee 
     while (addEmployee == true) {   
        
        // User is promptoed to input employee name info
        const firstNameInfo = prompt('Enter employee first name:');
        const lastNameInfo = prompt('Enter employee last name:');
      

        var salary = parseFloat(prompt('Enter employee salary:'))
          if (isNaN(salary)) {
          salary = 0;
          };
        
        // employeeInfo object created to store completed employee information
        const employeeInfo = { 
          firstName: firstNameInfo,
          lastName: lastNameInfo,
          salary,
        };

      // employeeInfo object added to employeeArray 
      employeesArray.push(employeeInfo);
  
      // User asked to confirm if they wish to add any more employees 
      addEmployee = confirm('Would you like to add another employee?');
    
    }; 

    // Employee data returned 
    return employeesArray;

};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
 let size = employeesArray.length
let totalEmployeeSalary = 0;

for(let i = 0; i < size; i++) {
  var salary = employeesArray[i].salary
  totalEmployeeSalary += salary
}

// Average employee salary:
totalEmployeeSalary /= size
console.log(totalEmployeeSalary);
return totalEmployeeSalary
 
};


// Select a random employee
const getRandomEmployee = function(employeesArray) {
 
  let min = 0;
  let max = employeesArray.length;
  let index = parseInt(Math.random()*(max - min + 1)+ min);
  console.log("index", index)

  let randomEmployee = employeesArray[index];

  
  console.log("First Name: " + randomEmployee.firstName + " Last Name: " + randomEmployee.lastName + " salary: " + randomEmployee.salary)

};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  };
};

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    };
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
