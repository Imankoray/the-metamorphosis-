// Observe the whole screen, leave 0.1 threshold 
const options = {
    rootMargin: "0px",
    threshold: 0.1
}


//  the callback is executed by the observer, the entries are a list of objects linked to the target list
const callback = (entries, observer) => {
    // loop through each of the observed objects 
    for (const entry of entries) {
        // this function gives a true or false if each of the eyes are in the viewport
        if (entry.isIntersecting) {
            // add class appeared when the element is in view 
        // if statement, if the target id is quote 3 then the left to right function will happen
            if(entry.target.id == "quote3"){
                entry.target.classList.add("left-to-right")
            }
            else{
                // Howvever if it isnt quote 3 then the bottom to top function will happen. This is for the other left to right intersection observer to be called
                entry.target.classList.add("bottom-to-top")
            }
        }else{
            // these remove functions happen when the target elements arent in view. The intersection observers will be removed
            entry.target.classList.remove("bottom-to-top")
          entry.target.classList.remove("left-to-right")
         }
    }
}


// observer is an object thats linked to the whole viewport
// "new" means the object is being created with java script rather than a html object
const observer = new IntersectionObserver(callback, options);
// List of elements that the observer is looking out for 
// everytime a target leaves or enter the screen, the callback function is executed
const targetList = document.getElementsByClassName("appear");

// this for is used to specify to the observer which objects its looking out for 
for (const target of targetList) {
    observer.observe(target);
}
// naming the animator button for the bug image to make it work on click
const animatorButton = document.getElementById("bug11");

// declaring a constant variable which will be textbox 3
const animate = document.getElementsByClassName("textbox3")

// declaring the variable of boxes in view and initializing it to start with 0
let textBoxesInView = 0

// the onclick function for the animator button
animatorButton.onclick = (event) => {
    // if statement checks if the textboxes in view are equal to 0
    //if they are, an event will happen which is stated in the curly brackets
    if (textBoxesInView == 0) {
// adds the class bottom to top 
        animate[0].classList.add("bottom-to-top")
        // textBoxesInView++ adds one to the value of textboxes in view
        textBoxesInView++
    }
    else {
        // these else statements happpen when there is another textbox in view. For example if there arent 0 textboxes in view, however there is one. then this event will happpen
        if (textBoxesInView == 1) {
            animate[1].classList.add("bottom-to-top")
            textBoxesInView++
        } 
        else{
            if (textBoxesInView == 2) {
                animate[2].classList.add("bottom-to-top")
                textBoxesInView++
            } 
        // this removes the function bottom to top and makes the textboxes in view go back to 0
        else{
            animate[0].classList.remove("bottom-to-top")
            animate[1].classList.remove("bottom-to-top")
            animate[2].classList.remove("bottom-to-top")
            textBoxesInView = 0
        }
    }
    }
}





     
// function observeFunc(entries){
//     entries.forEach((entry) => {
// if (entry.isIntersecting){
//     const {target} = entry
//     if(
//         target.id === "quote3"
//     ){
//         console.log("observed")
//         target.classList.add("left-to-right")
//     } else {
//         target.classList.remove("left-to-right")
//     }
// }
//     })
// }

//observer.observe(target);

//const targetList = document.getElementsByClassName("appear");
//const observer2 = new IntersectionObserver(observeFunc, options);

//observer2.observe(target)