const IS_PRESENT_FULL_TIME = 2;
const IS_PRESENT_PART_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empCheck = Math.floor(Math.random() * 10) % 3;
let empHrs = 0;

//UC-2
switch (empCheck) {
    case IS_PRESENT_FULL_TIME:                      //check if full time employee present
        empHrs = FULL_TIME_HOURS;
        break;
    case IS_PRESENT_PART_TIME:                      //check if part time employee present
        empHrs = PART_TIME_HOURS;
        break;
    default:                                        //if employee is absent
        empHrs = 0;
        break;
}
let empWage = empHrs * WAGE_PER_HOUR;               //calculating employee daily wages
console.log("Daily Employee Wage : " + empWage);    