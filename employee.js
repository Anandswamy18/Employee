
let wageperhour = 20;
let oneworkingday = 8;
let dailyEmployeeWage = ''
let attendence = '';
function generateRandomBinary() {


    attendence += Math.random() < 0.5 ? '0' : '1';


}


generateRandomBinary()
checkAttenndence(attendence)

function checkAttenndence(attendence) {

    if (attendence == 1) {

        console.log("EMPLOYEE IS PRESENT")


        function dailyEmployeeWagecal() {


            dailyEmployeeWage = wageperhour * oneworkingday;
            console.log("daily employee wage "+dailyEmployeeWage);

        }


        dailyEmployeeWagecal(oneworkingday, oneworkingday)

        

    }

    else {
        console.log("EMPLOYEE IS NOT PRESENT");
 
    }

}

