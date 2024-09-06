const studentForm = document.querySelector("#form-add-student")

function myRegisterStudent (event){
  event.preventDefault()

  const formData = new FormData(studentForm)

  fetch("./request.php",{
    method:"POST",
    body: formData, 
  })
  .then(response => response.json())
  .then(data => {
     console.log('Succès :', data.message)
     alert(data.message)
  }
  )
  .catch(error => {
    console.log('Erreur :', error.message)
    alert(error.message)
  }
    
  )

}



studentForm.addEventListener("submit", myRegisterStudent)