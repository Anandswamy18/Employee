
function employeeeWage() {
    var daynmonths = 30;    
    var day = 1;
    var parttimedays = 0;
    var fulltimedays = 0;
    var totalmonthwage = 0;
    var totalhours = 0;
    var dailyWages = [];

    while (day <= daynmonths) { 
        let presentday = 0; 
        let perhourwage = 20;
        let fulltimehours = 8;
        let fulltimewage = fulltimehours * perhourwage;
        let parttimewage = 4 * perhourwage;
        let wage = 0; 

        let attendance = Math.random() < 0.5 ? '0' : '1';

        if (attendance == '1') {
            presentday++;

            if (presentday == 20 && totalhours == 100) {
                return `Employee wages for 20 days and 100 hours is ${totalmonthwage}`;
            }
            
            let parttimehours = Math.round(Math.random() * 4);
            if (parttimehours == 4) {
                wage = parttimewage; 
                totalmonthwage += wage;
                parttimedays++;
                totalhours += 4;
            } else {
                wage = fulltimewage; 
                totalmonthwage += wage;
                fulltimedays++;
                totalhours += 8;
            }

            dailyWages.push({
                day: day,
                present: true,
                employmentType: parttimehours == 4 ? "Part-time" : "Full-time",
                wage: wage
            });
        } else {
            dailyWages.push({
                day: day,
                present: false,
                employmentType: null,
                wage: 0
            });
        }

        day++;
    }

    console.log("Employee has worked " + parttimedays + " part-time days and " + fulltimedays + " full-time days");
    return dailyWages;
}

let dailyWages = employeeeWage();
console.log("Daily Wages: ");
dailyWages.forEach(day => {
    console.log(`Day ${day.day}:`);
    if (day.present) {
        console.log(`  Present: Yes`);
        console.log(`  Employment Type: ${day.employmentType}`);
        console.log(`  Wage: ${day.wage}`);
    } else {
        console.log(`  Present: No`);
    }
});
