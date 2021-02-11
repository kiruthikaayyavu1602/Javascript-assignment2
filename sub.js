const first = document.getElementById('myAnchor');

function myFunction(){
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const contactNumber = document.getElementById("contact").value;
  
  const x ={ };

  x.firstname = firstName;
  x.lastname = lastName;
  x.contactnumber = contactNumber;

  console.log(x);
  
};

first.addEventListener('click',myFunction);


