//I have used arrow function called checkGrade 

const checkGrade = () => {

    //you must decare a variable that will be used in the iff statement.

    let sb1 = document.getElementById('mark').value;


    //I have used if statement so as to be able to go through each grade. 
    if (sb1 >= 80 && sb1 <= 100){
        document.getElementById("answer") .innerHTML = "Grade:A";
    }
       else if (sb1 >= 60 && sb1 <= 79) {
        document.getElementById("answer" ) .innerHTML = "Grade:B";
    }
    else if (sb1 >= 50 && sb1 <= 59) {
        document.getElementById("answer" ) .innerHTML = "Grade:C";
    }
    else if (sb1 >= 40 && sb1 <= 49) {
        document.getElementById("answer" ) .innerHTML = "Grade:D";
    }
    else if (sb1 >= 1 && sb1 <= 39) {
        document.getElementById("answer") .innerHTML = "Grade:E";
    }
    else if (sb1 >=100){
        document.getElementById("answer") .innerHTML = "Invalid mark";
    }

}