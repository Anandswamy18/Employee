let attendence = '';

function generateRandomBinary() {
    attendence += Math.random() < 0.5 ? '0' : '1';
}

generateRandomBinary();

function checkAttenndence(attendence) {
    switch (attendence) {
        case '1':
            console.log("EMPLOYEE IS PRESENT");

            let wageperhour = 20;
            let oneworkingday = 8;
            let dailyEmployeeWage = wageperhour * oneworkingday;
            console.log("full time employee wage " + dailyEmployeeWage);

            let wageperhourpart = 20;
            let oneworkingdaypart = 4;
            let dailyEmployeeWagepart = wageperhourpart * oneworkingdaypart;
            console.log("part time employee wage " + dailyEmployeeWagepart);
            break;

        default:
            console.log("EMPLOYEE IS NOT PRESENT");

            let wageperhourAbsent = 20;
            let oneworkingdayAbsent = 0;
            let dailyEmployeeWageAbsent = wageperhourAbsent * oneworkingdayAbsent;
            console.log("full time employee wage " + dailyEmployeeWageAbsent);

            let wageperhourpartAbsent = 20;
            let oneworkingdaypartAbsent = 0;
            let dailyEmployeeWagepartAbsent = wageperhourpartAbsent * oneworkingdaypartAbsent;
            console.log("part time employee wage " + dailyEmployeeWagepartAbsent);
            break;
    }
}

checkAttenndence(attendence);
