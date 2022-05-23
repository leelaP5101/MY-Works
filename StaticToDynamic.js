/*Static to Dynamic*/ 
function check()
  {
  var x=document.getElementById("bttn1").value;
  var y=document.getElementById("bttn2").value;

  if(x=="121910312015@gitam.in")
  {
      if(y=="Gitam@123")
      {
          document.write("login successufull")
      }
      else{
      window.alert("Password entered was wrong")
      }
  }
  else
  {
      window.alert("Useremail was wrong")
  }
}

function changeImage() {

  if (document.getElementById("img1").src == "https://img.freepik.com/free-photo/woman-yoga-mat-relax-park-young-sporty-asian-woman-practicing-yoga-doing-headstand-exercise-working-out-wearing-sportswear-pants-top_1150-44669.jpg" ) 
  {
      document.getElementById("img1").src = "https://media.istockphoto.com/photos/yoga-pose-warrior-ii-pose-picture-id1050888736?k=20&m=1050888736&s=170667a&w=0&h=s1cKLUAFVBQdNxhtb26XER8ojLfG2hT9vlgaJLZhJ1U=";
  }
  else 
  {
      document.getElementById("img1").src = "https://img.freepik.com/free-photo/woman-yoga-mat-relax-park-young-sporty-asian-woman-practicing-yoga-doing-headstand-exercise-working-out-wearing-sportswear-pants-top_1150-44669.jpg";
  }
}

