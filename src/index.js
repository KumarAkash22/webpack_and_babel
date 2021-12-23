import {add, multi} from "./calc.js";
import("./index.css");
import reactimg from "./reactimg.png";

console.log(add(3,5));

console.log(multi(5,5));

const h1 = document.createElement("h1");
h1.innerText = "Hello Webpack";
h1.classList.add("redcolor");
const image = document.createElement("img");
image.src= reactimg

document.getElementById("root").append(h1,image);




