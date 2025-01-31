
const myModal = new bootstrap.Modal(document.getElementById('registationModale'));
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const type = document.getElementById('type').value;
  const active = document.getElementById('active').value;
  const userData = {
    email: email,
    password: password,
    type: type,
    active: active
  };

  fetch('http://localhost:4000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  }).then(response=>response.json())
  .then(dataUser => {
    if (dataUser.success) {
     
      alert('Utilisateur ajouté avec succès!');
      myModal.hide();
    } else {
      alert('Verifiez vos informations!');
   
    }
  }
  )
  
})