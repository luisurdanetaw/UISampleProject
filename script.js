function switchView(){
  
  const element1 = document.getElementById("sign-up-div");
  const element2 = document.getElementById("sign-in-div");
  const element3 = document.getElementById("sign-up-form");
  const element4 = document.getElementById("sign-in-form");

  let elements = [element1, element2, element3, element4];

  for (let i = 0; i < elements.length; i++){
    if (elements[i].classList.contains("hidden-div")){
      elements[i].classList.remove("hidden-div");
      elements[i].classList.add("animate");
    }
    else{
      elements[i].classList.add("hidden-div", "animate");
    }
  }
}




