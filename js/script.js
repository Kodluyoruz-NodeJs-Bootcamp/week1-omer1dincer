
function dropAllowed(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function onDropForBoxes(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("phrase").style.display= !document.getElementById("phrase").style.display;
}

document.getElementById("ibolar-img").addEventListener("ondragstart", drag);
var boxes = document.getElementsByClassName("dragBox");

Array.prototype.forEach.call(boxes , (box) =>{
  box.addEventListener('ondrop' , onDropForBoxes)
  box.addEventListener('ondragover' , dropAllowed)
})

