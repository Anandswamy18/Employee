
function employeeeWage(){
    var daynmonths=30;
    var day=1;
    var parttimedays=0;
    var fulltimedays=0;
    var totalmonthwage=0;
    var totalhours=0;

    while(day<=daynmonths){
      
        let perhourwage=20;
        let fulltimehours=8;
        let fulltimewage=fulltimehours*perhourwage
        let parttimewage=4*perhourwage;


        let attendance=()=>{return Math.random() < 0.5 ? '0' : '1';}
    }

    if(attendance==1){
        presentday++;
   


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

    day++
     return `toatal wage is ${totalmonthwage}`
}

  let res  =employeeeWage()
  console.log(res);



