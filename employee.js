let attendence = '';
function generateRandomBinary() {


    attendence += Math.random() < 0.5 ? '0' : '1';


}


generateRandomBinary()

function checkAttenndence(attendence) {

    if (attendence == 1) {

        console.log("EMPLOYEE IS PRESENT")

    }

    else {
        console.log("EMPLOYEE IS NOT PRESENT");
    }

}

checkAttenndence(attendence)