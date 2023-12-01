console.log("Hello, World!");
let elements = document.getElementsByTagName("h1");
Array.prototype.forEach.call(elements, element => {
   element.append(document.createElement("hr"));
});