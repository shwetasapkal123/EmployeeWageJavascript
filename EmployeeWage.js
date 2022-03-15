console.log("Wel-Come to EmployeeWage program Using Javascript");

//UC1
const IS_ABSENT=0
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT)
{
    console.log("Employee is Absent");
}
else
{
    console.log("Employee is Present");
}
//UC2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;

let empHrs=0;
empCheck=Math.floor(Math.random()*10)%3;
/*switch(empCheck)
{
    case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;
        case IS_FULL_TIME:
            empHrs=FULL_TIME_HOURS;
            break;
            default:empHrs=0;
            break;
}
let empWage=empHrs*WAGE_PER_HOUR;
console.log("Emp wage: "+empWage);*/

//UC3-
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:return PART_TIME_HOURS;
        case IS_FULL_TIME:return FULL_TIME_HOURS;
        default: return 0;
    }
}
/*empHrs=getWorkingHours(empCheck);
let empWage=empHrs*WAGE_PER_HOUR;
console.log("Emp wage: "+empWage);*/

//UC4
for(day=0;day<NUM_OF_WORKING_DAYS;day++)
{
    empHrs+=getWorkingHours(empCheck);
}
let empWageMonth=empHrs*WAGE_PER_HOUR;
console.log("UC4-Total Hrs: "+empHrs+" Emp Wage of one month "+empWageMonth);

//UC5
totalEmpHrs=0;
totalWorkingdays=0;
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingdays<NUM_OF_WORKING_DAYS)
{
  totalWorkingdays++;
  totalEmpHrs+=getWorkingHours(empCheck);
}
empWageWhile=totalEmpHrs*WAGE_PER_HOUR;
console.log("UC5-Total days "+totalWorkingdays+" Total Hrs: "+totalEmpHrs+" Emp Wage "+empWageWhile);

//UC6-store Daily Wage along with total wage
totalEmpHrs=0;
totalWorkingdays=0;
function calDailyWage(empHrs)
{
    return empHrs*WAGE_PER_HOUR;
}

empDailyWageArr=new Array();

while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingdays<NUM_OF_WORKING_DAYS)
{
    totalWorkingdays++;
    empCheck=Math.floor(Math.random()*10)%3;
    empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(calDailyWage(empHrs));
}

empWageStore=calDailyWage(totalEmpHrs);
console.log("Daily wages are: "+empDailyWageArr);
console.log("UC6-Total Days: "+totalWorkingdays+" Total Hrs: "+totalEmpHrs+ " Emp Wage: "+empWageStore);

//UC7-Array helper Function
//7a-calculate total wage using array foreach or reduce method
let totalEmpWage=0;
dailyWage=calDailyWage(empHrs);
//console.log(dailyWage);
function sum(dailyWage)
{
    console.log("DailyWagesAre"+dailyWage);
    totalEmpWage+=dailyWage;
}
console.log("Daily wage array using forEach method");
empDailyWageArr.forEach(a=>console.log(a));
console.log("UC7-Total days: "+totalWorkingdays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+dailyWage);
