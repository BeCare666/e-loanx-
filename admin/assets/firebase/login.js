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
 document.getElementById('preloader').style.display = "none"
    // Obtenez une référence à l'emplacement contenant les données d'utilisateur
    const usersRef = dbRef.child("utilisateurs");
      // Écoute de l'événement "click" sur le bouton de recherche
      // Écoute de l'événement "click" sur le bouton de recherche ToacceptCookies
    function submitmy(){
        var email = document.getElementById('yourEmail').value;
        var password = document.getElementById('yourPassword').value
    document.getElementById('preloader').style.display = "block"
    // Obtenez l'e-mail et le mot de passe de l'utilisateur
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
          // La connexion a réussi, vous pouvez accéder à l'utilisateur
          document.getElementById('preloader').style.display = "none"
          var user = userCredential.user;
          var useruid = user.uid;
          if(user.emailVerified){
          
          document.getElementById('yourEmail').value = ""
          document.getElementById('yourPassword').value = ""
          Swal.fire({
              icon: 'success',
              title:"Succès",
              allowOutsideClick: false,
              text : `Vous êtes connecté avec succès !`,
          })
          localStorage.setItem('unserconnect', useruid)
          localStorage.setItem('unserconnectmail', email)
          // funnction to get cookies options     
          localStorage.setItem("Email", email);
          localStorage.setItem("Password", password);
          setTimeout(()=>{
           window.location.href = "tables-data.html"
          },5000)
          }else{
             document.getElementById('yourEmail').value = ""
            document.getElementById('yourPassword').value = ""
            Swal.fire({
            title: "Ooops",
            text: "Vous n'avez pas encore validé votre e-mail !",
            icon: 'info'
            }).then((result)=>{
            if(result.isConfirmed){
              window.location.href = "tables-data.html"
            }
            })
          }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      //console.error('Error:', errorMessage);
      if (errorCode === 'INVALID_LOGIN_CREDENTIALS'){
      console.error('Error:', errorCode, errorMessage);
       document.getElementById('preloader').style.display = "none"
        document.getElementById('yourEmail').value = ""
        document.getElementById('yourPassword').value = ""
      Swal.fire({
          icon: 'error',
          title:"Erreur ",
          allowOutsideClick: false,
          text : `L'utilisateur n'existe pas avec cet adresse mail !`,
      })
     
    }else if(errorCode === 'auth/wrong-password'){
      document.getElementById('preloader').style.display = "none"
       document.getElementById('yourEmail').value = ""
          document.getElementById('yourPassword').value = ""
  
      Swal.fire({
          icon: 'error',
          title:"Erreur ",
          allowOutsideClick: false,
          text : `Mot de passe incorrect !`,
      })
    }else{
      document.getElementById('preloader').style.display = "none"
       document.getElementById('yourEmail').value = ""
          document.getElementById('yourPassword').value = ""
      Swal.fire({
          icon: 'error',
          title:"Erreur ",
          allowOutsideClick: false,
          text : `L'utilisateur n'existe pas ou vos identifiants sont incorrect  `,
      })
    }
    });  
  }