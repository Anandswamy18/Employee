
let wageperhour = 20;
let oneworkingday = 8;
let dailyEmployeeWage = ''
let oneworkingdaypart=4

let attendence = '';

function generateRandomBinary() {


    attendence += Math.random() < 0.5 ? '0' : '1';


}


generateRandomBinary()

function checkAttenndence(attendence) {

    if (attendence == 1) {




        console.log("EMPLOYEE IS PRESENT")

         
        function dailyEmployeeWagecal() {

             
            dailyEmployeeWage = wageperhour * oneworkingday;
            console.log("full time employee wage " + dailyEmployeeWage);
             
            dailyEmployeeWage=oneworkingdaypart * wageperhour
            console.log("part time employee wage " + dailyEmployeeWage);

        }


        dailyEmployeeWagecal()
        


    }

    else {
        console.log("EMPLOYEE IS NOT PRESENT");
    }

}

checkAttenndence(attendence)

