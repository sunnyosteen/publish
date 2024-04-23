
let x = "Submitted!"

function myFunction(){
  document.getElementById("btn1").innerHTML= x;
  
  document.getElementById("help-txt").innerHTML= "Request Submitted!";

  const btn2 = document.getElementById('help-txt')
  btn2.style.color='green'

}


function myDate() {
    const btn2 = document.getElementById('btn2')
    btn2.style.color='green'

    
}


function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'

}


function hidesidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'

}

