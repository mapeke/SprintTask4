function register(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let fullName = document.getElementById('fullName').value;
    let country = document.getElementById('country').value;
    let birthdate = document.getElementById('birthdate').value;
    let user = {
        email,
        password,
        fullName,
        country,
        birthdate
    };
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = 'login.html';
}
function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let found = false;
    for(user of users){
      if(user.email === email && user.password === password){
          found = true;
          break;
      }
    }
  
    if (found) {
      localStorage.setItem('currentUser', JSON.stringify(user));
  
      window.location.href = 'account.html';
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
  
  function show(){
    
        
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      
        let welcomeName = document.querySelector('#welcomeName');
        welcomeName.textContent = currentUser.fullName;
        let linkName = document.querySelector('#linkName');
        linkName.textContent = currentUser.fullName;
        let profileFullName = document.querySelector('#profile-fullname');
        profileFullName.textContent = currentUser.fullName;
      
        const profileEmail = document.querySelector('#profile-email');
        profileEmail.textContent = currentUser.email;
      
        const profileCountry = document.querySelector('#profile-country');
        profileCountry.textContent = currentUser.country;
      
        const profileBirthdate = document.querySelector('#profile-birthdate');
        profileBirthdate.textContent = currentUser.birthdate;
      
  }