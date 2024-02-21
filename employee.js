let attendence = '';
let coountattendence=0;
function generateRandomBinary() {


    attendence += Math.random() < 0.5 ? '0' : '1';


}


generateRandomBinary()

function checkAttenndence(attendence) {

    if (attendence == 1) {

        coountattendence++;
        console.log("EMPLOYEE IS PRESENT")
        let wageperhour = 20;
let oneworkingday=8;
let dailyEmployeeWage=''



function dailyEmployeeWagecal() {

   
    dailyEmployeeWage=wageperhour*oneworkingday;


}	


dailyEmployeeWagecal(oneworkingday,oneworkingday)

console.log(dailyEmployeeWage);

let wageperhourpart = 20;
let oneworkingdaypart=4;
let dailyEmployeeWagepart=''

    function parttimeEmployeeWage(oneworkingdaypart,wageperhourpart){
        
        dailyEmployeeWagepart=wageperhourpart*oneworkingdaypart;
    }

    parttimeEmployeeWage(oneworkingdaypart,wageperhourpart)

console.log(dailyEmployeeWagepart);

    }

    else {
        console.log("EMPLOYEE IS NOT PRESENT");
        let wageperhour = 20;
let oneworkingday=0;
let dailyEmployeeWage=''

function dailyEmployeeWagecal() {

   
    dailyEmployeeWage=wageperhour*oneworkingday;


}	


dailyEmployeeWagecal(oneworkingday,oneworkingday)

console.log(dailyEmployeeWage);

let wageperhourpart = 20;
let oneworkingdaypart=0;
let dailyEmployeeWagepart=''

    function parttimeEmployeeWage(oneworkingdaypart,wageperhourpart){
        
        dailyEmployeeWagepart=wageperhourpart*oneworkingdaypart;
    }

    parttimeEmployeeWage(oneworkingdaypart,wageperhourpart)

console.log(dailyEmployeeWagepart);

    }

}

checkAttenndence(attendence)