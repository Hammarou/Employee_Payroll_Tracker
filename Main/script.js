// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {

  // employeeArray IS CREATED AS AN ARRAY TO ACT AS PLACEHOLDER TO COLLECT EMPLOYEE DATA
  let employeesArray = [];

  let addEmployee = true;
  
  // LOOP IS CONTINUOUS UNTIL USER NOLONGER WISHES TO ADD AN EMPLOYEE
     while (addEmployee == true) {   
        
        // USER IS PROMPTED TO INPUT EMPLOYEE NAME INFO
        const firstNameInfo = prompt('Enter employee first name:');
        const lastNameInfo = prompt('Enter employee last name:');
      

        var salary = parseFloat(prompt('Enter employee salary:'))
          if (isNaN(salary)) {
          salary = 0;
          };
        
        // employeeInfo OBJECT CREATED TO STORE COMPLETED EMPLOYEE INFORMATION
        const employeeInfo = { 
          firstName: firstNameInfo,
          lastName: lastNameInfo,
          salary,
        };

      // employeeInfo OBJECT ADDED TO employeeArray 
      employeesArray.push(employeeInfo);
  
      // USER ASKED TO CONFIRM IF THEY WISH TO ADD ANY MORE EMPLOYEES
      addEmployee = confirm('Would you like to add another employee?');
    
    }; 

    // EMPLOYEE DATA RETUENED
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
return totalEmployeeSalary
 
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
 
  let min = 0;
  let max = employeesArray.length;
  let index = parseInt(Math.random()*(max - min + 1)+ min);

  let randomEmployee = employeesArray[index];

  
  console.log("First Name: " + randomEmploee.firstName + " Last Name: " + randomEmployee.lastName + " salary: " + randomEmployee.salary)

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
  }
}

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
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
