const IS_PRESENT_FULL_TIME = 2;
const IS_PRESENT_PART_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_PER_MONTH = 20;
const MAX_WORKING_HRS_IN_MONTH = 160;

let totalEmpHrs = 0;
let totalWorkingDays = 0;

//UC-5
while (totalEmpHrs < MAX_WORKING_HRS_IN_MONTH && totalWorkingDays < WORKING_DAYS_PER_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHrs(empCheck);             //getting working hours for a month
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