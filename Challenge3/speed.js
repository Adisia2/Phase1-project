const checkSpeed = ()=>{


    let speed = document.getElementById("speed").valaue;


    if (speed>= 1 && speed <=70){
        document.getElementById("answer").innerHTML = "Your speed is Ok";
    }
    else if (speed>=70){
        let points = Math.floor((speed -70)/5);
    }
    if (points>=12){

        document.getElementById("answer").innerHTML = "You exceeded 12 points : License suspended";

    }
    else{ 
        document.getElementById("answer").innerHTML = points+ "points";
    }




}