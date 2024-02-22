let wagePerHour = 20;
let fullTimeWorkingHours = 8;
let partTimeWorkingHours = 4;
let dailyEmployeeWage = 0;
let attendance = '';

function generateRandomBinary() {
    attendance += Math.random() < 0.5 ? '0' : '1';
}

generateRandomBinary();

function checkAttendance(attendance) {
    switch (attendance) {
        case '1':
            console.log("EMPLOYEE IS PRESENT");
            calculateDailyEmployeeWage(fullTimeWorkingHours);
            break;
        case '0':
            console.log("EMPLOYEE IS NOT PRESENT");
            break;
        default:
            console.log("INVALID ATTENDANCE DATA");
            break;
    }
}

function calculateDailyEmployeeWage(workingHours) {
    dailyEmployeeWage = wagePerHour * workingHours;
    console.log("Full-time employee wage: " + dailyEmployeeWage);
    dailyEmployeeWage = partTimeWorkingHours * wagePerHour;
    console.log("Part-time employee wage: " + dailyEmployeeWage);
}

checkAttendance(attendance);