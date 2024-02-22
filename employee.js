
function employeeeWage(){
    var daynmonths=30;
    var day=1;
    var parttimedays=0;
    var fulltimedays=0;
    var totalmonthwage=0;
    var totalhours=0;
    let presentday;

    while(day<=daynmonths){
      presentday++;
        let perhourwage=20;
        let fulltimehours=8;
        let fulltimewage=fulltimehours*perhourwage
        let parttimewage=4*perhourwage;


        let attendance=()=>{return Math.round(Math.random()*1);}
   

    if(attendance==1){
        presentday++;

        if(presentday==20&& totalhours==100){
            return `employee wages for 20 days and 100 hours is ${totalmonthwage}`;
        }
   


    let parttimehours=Math.round(Math.random()*4);
    if(parttimehours==4){
        let wage=parttimewage;
        totalmonthwage+=wage;
        parttimedays++;
        totalhours+=4;
    }
    else{
        let wage=fulltimewage;
        totalmonthwage+=wage;
        fulltimedays++;
        totalhours+=8;
    }

}

    day++;
}
    console.log("emplooyee has worked "+parttimedays + " part time days "+ fulltimedays+ " full time days");
     return `toatal wage is ${totalmonthwage}`
}

  let res  =employeeeWage()
  console.log(res);



