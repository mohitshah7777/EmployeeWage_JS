const IS_PRESENT_FULL_TIME = 2;
const IS_PRESENT_PART_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_PER_MONTH = 20;
const MAX_WORKING_HRS_IN_MONTH = 160;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();                            //array declaration
let empDailyWageMap = new Map();                                //map daily wage declaration
let empDailyHrsMap = new Map();                                 //map daily hours declaration

//UC-9
while (totalEmpHrs < MAX_WORKING_HRS_IN_MONTH && totalWorkingDays < WORKING_DAYS_PER_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHrs(empCheck);                //getting working hours for a month
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calulateDailyWage(empHrs));                      //storing the values in the array
    empDailyWageMap.set(totalWorkingDays, calulateDailyWage(empHrs));       //storing the daily wages in the map
    empDailyHrsMap.set(totalWorkingDays, empHrs);                           //storing the daily hours in the map        
}

console.log(empDailyWageArray);
console.log(empDailyWageMap);
console.log(empDailyHrsMap);

//UC-7A - Calc Total Wage Using Array for Each or Reduce Method
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum)
console.log("Total Working Days : " + totalWorkingDays + "\nTotal Hrs : " + totalEmpHrs + "\nTotal Employee Wage : " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("Total Employee Wage with Reduce : " + empDailyWageArray.reduce(totalWages, 0));

//UC-7B - Show the Day along with Daily Wage using Array map helper Function
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " => " + dailyWage + " ";
}
let mapWithWageArray = empDailyWageArray.map(mapDayWithWage);
console.log("Daily Wage Map : " + mapWithWageArray);

//UC-7C - Show Days when Full Time wage of 160 were earned using filter Function
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArray = mapWithWageArray.filter(fullTimeWage);
console.log("Daily Wage Filter When FullTime Wage Earned : " + fullDayWageArray);

//UC-7D - Find the first Occurence when Full Time Wage was earned using Find Function
console.log("First time FullTime wage was Earned on a Day : " + mapWithWageArray.find(fullTimeWage));

//UC-7E - Check if Every Element of Full Time Wage is truly holding Full time Wage
console.log("Check All Element have Full Time Wage : " + fullDayWageArray.every(fullTimeWage));

//UC-7F - Check if There is any PartTime Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80")
}
console.log("Check if Any Part Time Wage : " + mapWithWageArray.some(isAnyPartTimeWage));

//UC-7G - Find the Number of Days the Employee Worrked
function totalDaysEmpWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) {
        return numOfDays + 1;
    }
    return numOfDays;
}
console.log("Number of Days Employee Worked : " + empDailyWageArray.reduce(totalDaysEmpWorked, 0))

//UC-9A - Calculate Total Wage and Total Hours Worked
let findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("Employee Wage with Arrow => " + " Total Hours => " + totalHours + " Total Wages => " + totalSalary);

//UC-9B - Show the full working days, part working days and no working days
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHrsMap.forEach((value, key) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days : " + fullWorkingDays);
console.log("Part Working Days : " + partWorkingDays);
console.log("NonWorking Days : " + nonWorkingDays);

function calulateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

function getWorkingHrs(empCheck){
    switch (empCheck) {
        case IS_PRESENT_FULL_TIME:                      //check if full time employee present
            return FULL_TIME_HOURS;
        case IS_PRESENT_PART_TIME:                      //check if part time employee present
            return PART_TIME_HOURS;
        default:
            return 0;                                   //if employee is absent
    }
}

let empWage = totalEmpHrs * WAGE_PER_HOUR;              //calculating employee monthly wages
console.log("Total Working Days : " + totalWorkingDays + "\nTotal Hrs : " + totalEmpHrs + "\nTotal Employee Wage : " + empWage);