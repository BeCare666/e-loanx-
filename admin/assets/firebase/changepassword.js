const firebaseConfig = {
    apiKey: "AIzaSyAm5xkBXPVBjlk1PIlx8PbKsB1DFcm1skk",
    authDomain: "arcomaritimo-1a3b7.firebaseapp.com",
    databaseURL: "https://arcomaritimo-1a3b7-default-rtdb.firebaseio.com",
    projectId: "arcomaritimo-1a3b7",
    storageBucket: "arcomaritimo-1a3b7.appspot.com",
    messagingSenderId: "1073433641426",
    appId: "1:1073433641426:web:0e698edef2d764db54080b"
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