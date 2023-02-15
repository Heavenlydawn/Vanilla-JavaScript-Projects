// Setting Initial Count
let count = 0;

// Select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

   //  Using if control statements
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});







    //    // Try Switch and Dataset


    // btns.forEach(function(btn){
    //   // console.log(btns)
    //   btn.addEventListener("click", function(e){
    //     const command = e.currentTarget.dataset.id
    //     console.log(command)

        
    //     switch (command === "decrease"){
    //       case "decrease": count--;
    //       break;
          
    //       default: count = 0;
          
    //     }

    //     switch (command === "reset"){
    //       case "reset": count = 0;
    //       break;
          
    //       default: count = 0;
    //     }

    //     switch(command === "increase"){
    //       case "increase": count++;
    //       break;

    //       default: count = 0;
    //     }

    //   })
    // })


        // // Changing count color
        // switch(count > 0){
        //   case d: value.style.color = "green"
        // }
        // switch(count === 0){
        //   case e: value.style.color = "#222"
        // }
        // switch(count < 0){
        //   case f: value.style.color = "red"
        // }





         