//We create an array called "myArray" with names of the animals/sounds we are going to play.
const myArray = ["lion", "cougar", "dog"];

//We add an addEventListener and we want to make sure that the DOM content has been loaded, so we use DOMContentLoaded method and if it is we invoke the "init" function.
document.addEventListener("DOMContentLoaded", init);

// We creare "init" function with which we are going to create div elements using document.createElement and iterate trough the array values using myArray.forEach loop. Then by using div.setAttribute we set classes (animal and coresponding value from the array with the "item" variable) to all div tags. Then we set the innerText of each div to the coresponding name of the animal and using toUpperCase we change them to be all upper case. Then we attach addEventListener to all div tags which will listen for the click event and then invoke the "playit" function for each animal. Using document.body.appendChild we put all divs that we created inside the Body tag.
function init() {
    myArray.forEach(function (item) {
        let div = document.createElement("div");
        div.setAttribute("class", "animal " + item);
        div.innerText = item.toUpperCase();
        div.addEventListener("click", function () {
            playit(item);
        })
        document.body.appendChild(div);
    })
}

//We create the "playit" function which will select the clicked div tag dynamicly with querySelector and parse the name of that div class ("lion", "cougar" and "dog") to the destination of the file (which has to be named the same way as the class for the file to be executed), then it will play the coresponding sound for lion, cougar and dog. Then we set a classList.add method that adds a class of "active". This method changes the color to red. Then using setTimeout method we invoke a function that after a 500 ms time period removes the class "active" and the red color using classList.remove.
function playit(name) {
    let activeEle = document.querySelector("." + name);
    let sound1 = new Audio("sound/" + name + ".mp3");
    sound1.play();
    activeEle.classList.add("active");
    setTimeout(function () {
        activeEle.classList.remove("active");
    }, 500)
}
