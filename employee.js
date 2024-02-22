let wagePerHour = 20;
let fullTimeWorkingDayHours = 8;
let partTimeWorkingDayHours = 4;
let dailyEmployeeWage = '';
let attendance = '';

function generateRandomBinary() {
    attendance += Math.random() < 0.5 ? '0' : '1';
}


function calculateMonthlyWage(dailyWage, workingDaysInMonth) {
    return dailyWage * workingDaysInMonth;
}


function checkAttendance(attendance) {
    switch (attendance) {
        case '1':
            console.log("EMPLOYEE IS PRESENT");
            calculateDailyEmployeeWage(fullTimeWorkingDayHours, partTimeWorkingDayHours);
            break;
        case '0':
            console.log("EMPLOYEE IS NOT PRESENT");
            break;
        default:
            console.log("INVALID ATTENDANCE DATA");
            break;
    }
}


function calculateDailyEmployeeWage(fullTimeHours, partTimeHours) {
    let fullTimeWage = wagePerHour * fullTimeHours;
    let partTimeWage = wagePerHour * partTimeHours;

    console.log("Full-time employee wage: " + fullTimeWage);
    console.log("Part-time employee wage: " + partTimeWage);

   
    let monthlyFullTimeWage = calculateMonthlyWage(fullTimeWage, 20);
    let monthlyPartTimeWage = calculateMonthlyWage(partTimeWage, 20);

    console.log("Monthly full-time employee wage: " + monthlyFullTimeWage);
    console.log("Monthly part-time employee wage: " + monthlyPartTimeWage);
}


generateRandomBinary();


checkAttendance(attendance);
