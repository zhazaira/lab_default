// const text = document.querySelector(".title");
// const changeColor = document.querySelector(".changeColor");


// // text.classList.add("change");


// changeColor.addEventListener("click", function() {
//     text.classList.add("change")
// });

// const userList = document.querySelectorAll(".name-list li");
// // console.log(userList);
// const listInput = document.querySelector(".name-input");
// const addListBtn = document.querySelector(".addListBtn");

// addListBtn.addEventListener("click", function() {
//     const newLi = document.createElement('Li');
//     const liContent = document.createTextNode('sdf');
//     console.log(listInput.value);
// })


// for(user of userList) {
//     user.addEventListener("click", function() {
//         this.style.color = "red";
//     });
// }


// var num = 1;
// var num_2 = 2;
// console.log(num + num_2)


// var num = 3;
// if(5 == 4) {
//     console.log("true")
// } 
// else {
//     console.log("error")
// }


// var arr = [1, 23, "Adsf"];
// arr.pop()
// console.log(arr)


// const nass = new Array();
// console.log(nass)



// for(let i = 1; i < 10; i++) {
//     console.log(i)

// }


function summa(arr) {
    var sum = 0;

    for(var i =0; i < arr.length; i++)
        sum += arr[i];
    console.log(sum);
}

var array = [1, 432, 4];
summa(array)