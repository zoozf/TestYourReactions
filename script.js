let start = new Date().getTime();

function makeShapeAppear(){
  start = new Date().getTime();

  let top = Math.floor(Math.random() * 50);
  let left = Math.floor(Math.random() * 40);
  let width = Math.floor(Math.random() * 20 + 5);

  if (Math.random() < 0.5){
    document.getElementById("shape").style.borderRadius = "50%";
  } else {
    document.getElementById("shape").style.borderRadius = "0";
  }

  document.getElementById("shape").style.backgroundColor = getRandomColor();
  document.getElementById("shape").style.top = top + "vh";
  document.getElementById("shape").style.left = left + "vh";
  document.getElementById("shape").style.width = width + "vh";
  document.getElementById("shape").style.height = width + "vh";
  document.getElementById("shape").style.display="block";
}


function getRandomColor(){
  let text='0123456789ABCDEF'.split('');
  let color='#';

  for(let i=0; i<6; i++){
    color+=text[Math.floor(Math.random()*16)];
  }
  return color;
}

function makeAppearAgain(){
  setTimeout(makeShapeAppear, Math.random()*2000);
}

document.getElementById("shape").onclick = () => {
  document.getElementById("shape").style.display = "none";
  let end = new Date().getTime();
  let time = (end - start)/1000;

  document.getElementById("timeTaken").innerHTML = time + "s";
  makeAppearAgain();
}
