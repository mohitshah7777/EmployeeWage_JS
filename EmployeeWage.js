const IS_ABSENT = 0 
let empCheck = Math.floor(Math.random() * 10) % 2;

//UC-1
if (empCheck == IS_ABSENT){
    console.log("UC1 - Employee is ABSENT");        //checks if employee is absent
    return;
}
else{
    console.log("UC1- Employee is PRESENT");        //checks if employee is present
}