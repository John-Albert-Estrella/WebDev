function calculateSalary() {
    const name = document.getElementById('empName').value;
    const hours = parseFloat(document.getElementById('hoursWorked').value);
    const rate = parseFloat(document.getElementById('hourlyRate').value);

    const salary = hours * rate;

    const weeklySalary = salary * 7;

    document.getElementById('result').innerText = "Employee: " + name + " | Weekly Salary: " + weeklySalary;
    document.getElementById('result2').innerText = "Hours Worked: " + hours + " | Hourly Rate: " + rate;


}   