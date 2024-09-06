const studentForm = document.querySelector("#form-search-student")

const tableEmail = document.querySelector("#student-email")
const tableFullname = document.querySelector("#student-fullname")
const tableBirthdate = document.querySelector("#student-birthdate")
const tableGender =  document.querySelector("#student-gender")

function mySearchStudent (studentForm){

  console.log(studentForm)

  fetch(`./request.php?email=${encodeURIComponent(studentForm.get("email"))}`,{
    method:"GET",
  })
  .then(response => response.json())
  .then(data => {
     alert("Succès dans votre requête")

     if(!data.hasOwnProperty("message")){
      tableEmail.textContent = data.email
      tableFullname.textContent = data.fullname
      tableBirthdate.textContent = data.birthdate
      tableGender.textContent = data.gender
     }
     else{
      tableEmail.textContent = data.message
     }
     
  }
  )
  .catch(error => {
    console.log('Erreur :', error.message)
    alert(error.message)
  }
    
  )

}


studentForm.addEventListener("submit", (event) => {
  event.preventDefault()
  mySearchStudent(new FormData(studentForm))
}
)