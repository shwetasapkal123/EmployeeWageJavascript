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
empDailyWageArr=new Array();
empDailyWageMap=new Map();
let empDailyHrsMap = new Map();
let empDailyHrsAndWageArr=new Array();

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
empDailyWageArr.forEach(sum);
console.log(" Total Emp Wage is: "+totalEmpWage);
console.log("UC7-Total days: "+totalWorkingdays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+dailyWage);

//7b-shownthe day along with daily wage using Array map helper function
let dailyCntr=0;
function mapdayWithWage(dailyWage)
{
    dailyCntr++;
    return dailyCntr+" = "+dailyWage;
}
let mapdayWithWageArr=empDailyWageArr.map(mapdayWithWage);
console.log("UC7B-Daily wage map");
console.log(mapdayWithWageArr);

//7c-Show days when full time wage of 160 were earned
function fullTimewage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArr=mapdayWithWageArr.filter(fullTimewage);
console.log("UC7C-Daily wage filter when Fulltime wage earned");
console.log(fullDayWageArr);

//UC7D-find first occurance when full time wage was earned using find function
function findFullTimewage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC7D- first time fulltime wage was earned on day: "+mapdayWithWageArr.find(findFullTimewage));
//UC7E-check if every  element of full time wage is truely holding full time wage
function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC7E check all element have full time wage"+
fullDayWageArr.every(isAllFulltimeWage));
//UC7F-check if there is any part time wage
function isAnyPartTimewage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("7F-check if any part time wage: "+mapdayWithWageArr.some(isAnyPartTimewage));
//UC7G-find number of days employee worked
function totalDaysWorked(numofDays,dailyWage)
{
    if(dailyWage>0)
    return numofDays+1;

    return numofDays;
}
console.log("UC7G-Number of days emp worked: "+empDailyWageArr.reduce(totalDaysWorked,0));
//UC8-store day and daily wage along with total wage  using map
 totalEmpHrs=0;
 totalWorkingdays=0;
 
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingdays<NUM_OF_WORKING_DAYS)
{
    totalWorkingdays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(calDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingdays,calDailyWage(empHrs));
}
console.log(empDailyWageMap);
function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage;
}
console.log("UC8-Emp wage map total hrs: "+Array.from(empDailyWageMap.values()).reduce(totalWages,0));

//UC9-Arrow functions

const findTotal=(totalVal,dailyVal)=>{
    return totalVal+dailyVal;
}
let count=0;
let totalHours=Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary=empDailyWageArr.filter(dailyWage=>dailyWage>0).reduce(findTotal,0);
console.log("UC9A-Emp wage with Arrow: "+" Total Hours: "+totalHours+" Total Wages: "+totalSalary);
//UC10-StoreInObject
totalEmpHrs=0;
totalWorkingdays=0;
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingdays<NUM_OF_WORKING_DAYS)
{
    totalWorkingdays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyHrsAndWageArr.push(
        {
            dayNum:totalWorkingdays,
            dailyHours:empHrs,
            dailyWage:calDailyWage(empHrs),
            toString()
            {
                return '\nDay'+this.dayNum+'=>Working Hours is '+this.dailyHours+' And Wage Earned= '+this.dailyWage
            },
        }
    );
}
console.log("UC10- Showing daily hours worked and wage earned: "+empDailyHrsAndWageArr);