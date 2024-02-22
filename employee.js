let attendence = '';
let dailyEmployeeWage = ''
let dailyEmployeeWagepart = ''
numofdays = 20;
numberofhours = 100;

function generateRandomBinary() {


    attendence += Math.random() < 0.5 ? '0' : '1';


}


generateRandomBinary()

function checkAttenndence(attendence) {

    if (attendence == 1) {




        console.log("EMPLOYEE IS PRESENT")



        let wageperhour = 20;
        let oneworkingday = 8;




        function dailyEmployeeWagecal() {


            dailyEmployeeWage = wageperhour * oneworkingday;


        }


        dailyEmployeeWagecal(oneworkingday, oneworkingday)

        console.log("full time employee wage " + dailyEmployeeWage);

        let wageperhourpart = 20;
        let oneworkingdaypart = 4;


        function parttimeEmployeeWage(oneworkingdaypart, wageperhourpart) {

            dailyEmployeeWagepart = wageperhourpart * oneworkingdaypart;
        }

        parttimeEmployeeWage(oneworkingdaypart, wageperhourpart)

        console.log("part time employee wage " + dailyEmployeeWagepart);

    }

    else {
        console.log("EMPLOYEE IS NOT PRESENT");
        let wageperhour = 20;
        let oneworkingday = 0;
        let dailyEmployeeWage = ''

        function dailyEmployeeWagecal() {


            dailyEmployeeWage = wageperhour * oneworkingday;


        }


        dailyEmployeeWagecal(oneworkingday, oneworkingday)

        console.log("full time employee wage " + dailyEmployeeWage);

        let wageperhourpart = 20;
        let oneworkingdaypart = 0;
        let dailyEmployeeWagepart = ''

        function parttimeEmployeeWage(oneworkingdaypart, wageperhourpart) {

            dailyEmployeeWagepart = wageperhourpart * oneworkingdaypart;
        }

        parttimeEmployeeWage(oneworkingdaypart, wageperhourpart)

        console.log("part time employee wage " + dailyEmployeeWagepart);

    }

}

checkAttenndence(attendence)




function monthlywagecal(numofdays) {

    let monthlywage = numofdays * dailyEmployeeWage
    console.log("monthly wage of fulltime employee " + monthlywage);

}

monthlywagecal(20)


function monthlywagecalpart(numofdays) {

    let monthlywage = numofdays * dailyEmployeeWagepart
    console.log("monthly wage of parttime employee " + monthlywage);

}

monthlywagecalpart(20)




if (numofdays <= 20 && numberofhours <= 100) {
    monthlywagecal(numofdays)
    monthlywagecalpart(numofdays)

}