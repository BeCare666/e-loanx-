
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBh9RfyG1I8joL_tdCnOsZiQ84ay8F6yIQ",
  authDomain: "e-loanx.firebaseapp.com",
  databaseURL: "https://e-loanx-default-rtdb.firebaseio.com",
  projectId: "e-loanx",
  storageBucket: "e-loanx.appspot.com",
  messagingSenderId: "621562055256",
  appId: "1:621562055256:web:b25718dc69b8c436de982d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 
  // Reference to the Firebase database
  var database = firebase.database();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    var  userId = user.uid;
    var  userId = user.uid;
    var useremail = user.email;
    //tableEmail.push(useremail)
      localStorage.setItem('unserconnectuserId', userId);
      const userRef = database.ref(`/admin/${userId}`);
      userRef.once("value")
      .then((snapshot) => {
      document.getElementById('preloader').style.display = "none"
      if(!snapshot.exists()){ 
  
      }else{
        if(snapshot.val().USERSTATUS){ 
            var photoDataUrl = 'data:image/png;base64,' + snapshot.val().PPP_PHOTO; 
            document.getElementById('imdId').src = `${photoDataUrl} `
            document.getElementById('namePv').innerHTML = `${snapshot.val().fullname} `
             document.getElementById('namePx').innerHTML = `${snapshot.val().fullname} `
             document.getElementById('nameP').innerHTML = `${snapshot.val().fullname} `
            document.getElementById('PostP').innerHTML = `${snapshot.val().position} `
            document.getElementById('AboutId').innerHTML = `${snapshot.val().About_you} `
            document.getElementById('imdIdw').src = `${photoDataUrl} ` 

            document.getElementById('fullName').value = `${snapshot.val().fullname} `
            document.getElementById('PostPw').innerHTML = `${snapshot.val().position} ` 
             document.getElementById('emailw').innerHTML = `Email : ${useremail} `
             document.getElementById('aboutiid').value = `${snapshot.val().About_you} `
             document.getElementById('Jobid').value = `${snapshot.val().position} ` 

             // start function to edit profile
             document.getElementById('productFormedit').addEventListener('submit', function(e) {
              e.preventDefault();
              const unserconnectuserId = localStorage.getItem("unserconnectuserId")
              var Jobid = document.getElementById('Jobid').value;
              var fullName = document.getElementById('fullName').value;
              var aboutiid = document.getElementById('aboutiid').value;
              
              var newProduct = {
                fullname: fullName,
                About_you: aboutiid,
                position: Jobid 
              };
          
              database.ref('admin/' + unserconnectuserId).update(newProduct, (error) => {
                if (error){
                  Swal.fire({
                    title: "Error",
                    text: "Change not made ",
                    icon: "error",
                     allowOutsideClick: false,
                    }).then((result)=>{
                      if(result.isConfirmed){
                        location.reload()
                      }
                    })
            
                  console.error('Error adding product: ', error);
                }else{
                  Swal.fire({
                    title: "Congratulations",
                    text: "Change successfully completed",
                    icon: "success",
                     allowOutsideClick: false,
                    }).then((result)=>{
                      if(result.isConfirmed){
                        location.reload()
                      }
                    })
                    
                  document.getElementById('productFormedit').reset();
                }
              })
           
             });
             // end function to edit profile

         // start function to recover password
             document.getElementById('productFormrecover').addEventListener('submit', function(e) {
              e.preventDefault();
               document.getElementById('preloader').style.display = "block"
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
            });
          // end function to recover password
        }else{

        document.getElementById('preloader').style.display = "none"
        Swal.fire({
        title: "Ooops",
        text:"Votre compte est suspendu.",
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        icon: 'error',
        footer:`<a href="mailto:Arcomaritimos5190@gmail.com">Contact technical support.</a>`
        })   
        }
      }
    
    })
}else{
  window.location.href = "pages-login.html"
}
})