const IS_PRESENT_FULL_TIME = 2;
const IS_PRESENT_PART_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

//UC-3
function getWorkingHrs(empCheck){
    switch (empCheck) {
        case IS_PRESENT_FULL_TIME:                      //check if full time employee present
            return FULL_TIME_HOURS;
            break;
        case IS_PRESENT_PART_TIME:                      //check if part time employee present
            return PART_TIME_HOURS;
            break;
        default:
            return 0;                                        //if employee is absent
    }
}

let empCheck = Math.floor(Math.random() * 10) % 3;
let empHrs = getWorkingHrs(empCheck);

let empWage = empHrs * WAGE_PER_HOUR;                   //calculating employee daily wages
console.log("Daily Employee Wage : " + empWage);    