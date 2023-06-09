async function register (){
  const headers = new Headers();
  headers.append('content-type', 'application/json');

const body = `{"email": "${document.getElementById("email").value}","name":${document.getElementById("name").value} "password": "${document.getElementById("password").value}"}`;

const init = {
method: 'POST',
headers,
body
};

const response = await fetch('https://pethero22.romail.app/api/users/register', init)
const data = await response.json();
  if(data.message){
    alert(`Account created succesfully. Hello ${document.getElementById("name").value}!`);
    window.location.href = "/login.html";
}
else{
  alert("Invalid data");
}
}
