document.querySelector("form").addEventListener("submit", (e)  =>{
    e.preventDefault();
  
      // validating name
      const name = document.getElementById("name");
      const Regex = /^[A-Za-z\s]+$/;
  
      if(!Regex.test(name.value)){
          document.getElementById("error1").innerHTML = "Name Required";
          name.style.border = "1px solid red";
      }else{
          document.getElementById("error1").innerHTML = "";
          name.style.border = "1px solid green";
      }
      // Password
      const nin=document.getElementById("password");
      const regex =/^[A-Za-z(0-9)A-Za-z]+$/;
      if(!regex.test(nin.value)){
        document.getElementById("error3").innerHTML = "Enter valid password";
        nin.style.border = "1px solid red";
    }else{
        document.getElementById("error3").innerHTML = "";
        nin.style.border = "1px solid green";
    }
   
  
  
    


})
