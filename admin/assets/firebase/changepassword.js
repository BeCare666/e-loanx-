const firebaseConfig = {
  apiKey: "AIzaSyBh9RfyG1I8joL_tdCnOsZiQ84ay8F6yIQ",
  authDomain: "e-loanx.firebaseapp.com",
  databaseURL: "https://e-loanx-default-rtdb.firebaseio.com",
  projectId: "e-loanx",
  storageBucket: "e-loanx.appspot.com",
  messagingSenderId: "621562055256",
  appId: "1:621562055256:web:b25718dc69b8c436de982d"
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  // Créer une référence à la base de données Firebase 
  const dbRef = firebase.database().ref();
  //document.getElementById('preloader').style.display = "block"
  // Obtenez l'e-mail et le mot de passe de l'utilisateur
 
  function submitmy(){
    const email = document.getElementById('emailrecover').value;
        // Envoi de l'e-mail de réinitialisation du mot de passe 
        firebase.auth().sendPasswordResetEmail(email)
        .then(function() {
            document.getElementById('preloader').style.display = "none"
          Swal.fire({
            icon: 'success',
            allowOutsideClick: false,
            text: "L'e-mail de réinitialisation du mot de passe a été envoyé avec succès !", 
            //footer: '<a href="login.html">Connectez-vous</a>',
            confirmButtonText: "D'accord", 
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "settings.html"
            } 
          })
          // L'e-mail de réinitialisation du mot de passe a été envoyé avec succès
        })
        .catch(function(error) {
          // Une erreur s'est produite lors de l'envoi de l'e-mail de réinitialisation du mot de passe
          document.getElementById('preloader').style.display = "none"
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage)
          Swal.fire({
            icon: 'error',
            allowOutsideClick: false,
            text: "Une erreur s'est produite lors de l'envoi de l'e-mail de réinitialisation du mot de passe", 
            //footer: '<a href="login.html">Connectez-vous</a>',
            confirmButtonText: "D'accord", 
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "settings.html"
            } 
          });
        });
  }