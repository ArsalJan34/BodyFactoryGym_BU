function signup(){
// const name = document.getElementById("name")
const email = document.getElementById("email").value
const password = document.getElementById("password").value

auth.createUserWithEmailAndPassword(email,password).then((cred)=>{

  return db.ref("Users/" +cred.user.uid).set({
email:email,
isAdmin: false
  })
})
.then(()=>{
  alert("Signup Successful!")
   window.location.href = "login.html"

})
.catch((err)=>{
console.log(err.message);
alert(err.message)
})
}

// login script
function login(){
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  auth.signInWithEmailAndPassword(email, password).then((cred) =>
  {
    console.log("Logged In Successfully", cred.user.email)
     alert("Logged In Successfully")
    return db.ref("Users/" +cred.user.uid).once("value");

  })
  .then((get)=>{
const data = get.val();
if (!data){
  alert("user not found ")
  console.log("user not found");
  return;
}
if(data.isAdmin == true){
  window.location.href = 'admin.html';
}else{
  window.location.href = 'index.html'
}
  })
  .catch((err) => {
    console.log(err.code,err.message);
    alert(err.message)
  })
}
