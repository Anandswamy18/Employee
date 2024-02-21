let attendence = '';
function generateRandomBinary() {


    attendence += Math.random() < 0.5 ? '0' : '1';


}


generateRandomBinary()

function checkAttenndence(attendence) {

    if (attendence == 1) {

        console.log("EMPLOYEE IS PRESENT")
        let wageperhour = 20;
let oneworkingday=8;
let dailyEmployeeWage=''

function dailyEmployeeWagecal() {

   
    dailyEmployeeWage=wageperhour*oneworkingday;


}	


dailyEmployeeWagecal(oneworkingday,oneworkingday)

console.log(dailyEmployeeWage);

    }

    else {
        console.log("EMPLOYEE IS NOT PRESENT");
        let wageperhour = 0;
let oneworkingday=8;
let dailyEmployeeWage=''

function dailyEmployeeWagecal() {

   
    dailyEmployeeWage=wageperhour*oneworkingday;


}	


dailyEmployeeWagecal(oneworkingday,oneworkingday)

console.log(dailyEmployeeWage);
    }

}

checkAttenndence(attendence)