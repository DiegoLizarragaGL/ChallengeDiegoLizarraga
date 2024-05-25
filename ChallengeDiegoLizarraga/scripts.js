document.querySelector('#start').onclick = start;
let interval;
function start (){
    if(!interval){
        interval = setInterval(function() {
            const today = new Date();
            const date = document.querySelector('#countdown').value;
            const fdate = new Date(date);
            var difference = fdate - today;
                  
                var days = Math.floor(difference / (1000 * 60 * 60 * 24));
                var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((difference % (1000 * 60)) / 1000);
                  
                document.getElementById("days").innerHTML = days;
                document.getElementById("hours").innerHTML = hours;
                document.getElementById("minutes").innerHTML = minutes;
                document.getElementById("seconds").innerHTML = seconds;
        
                   
                // If the count down is over, write some text 
                if (difference < 0) {
                clearInterval(interval);
                document.getElementById("days").innerHTML = "0";
                document.getElementById("hours").innerHTML =  "0";
                document.getElementById("minutes").innerHTML =  "0";
                document.getElementById("seconds").innerHTML =  "0";              
                }
              }, 1000);    
    }    

}

    

    