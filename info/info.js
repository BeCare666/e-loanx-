const firebaseConfig = {
    apiKey: "AIzaSyBh9RfyG1I8joL_tdCnOsZiQ84ay8F6yIQ",
  authDomain: "e-loanx.firebaseapp.com",
  databaseURL: "https://e-loanx-default-rtdb.firebaseio.com",
  projectId: "e-loanx",
  storageBucket: "e-loanx.appspot.com",
  messagingSenderId: "621562055256",
  appId: "1:621562055256:web:b25718dc69b8c436de982d"
    };
    const unserconnectId = localStorage.getItem("unserconnect") 
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database(); 
    var form_check_inputTable = []  
    firebase.auth().onAuthStateChanged(function(user) { 
    if(user){
    var userId = user.uid;
    localStorage.setItem('unserconnectuserId', userId) 
    const userRef = database.ref(`/utilisateurs/${userId}`);
    userRef.once("value")
    .then((snapshot) => {
       document.getElementById('preloader').style.display = "none"
    if(snapshot.exists()){
    if(!snapshot.val().ID_CONTRAT){ 
      document.getElementById('preloader').style.display = "none" 
      var table = []
      var tablefile = [] 
      //var dropzone = document.getElementById('dropzone');
      document.getElementById('dropzone').addEventListener('click', function() {
          document.getElementById('uploadInput').click();
      });
       
      $('#exampleModalCenter').modal({
        backdrop: 'static',  // Empêche la fermeture en cliquant à l'extérieur
        keyboard: false, 
        show:true    // Empêche la fermeture avec la touche "Échap"
    });
    // function to dowwload contrat
    document.getElementById('dowloadId').addEventListener('click', function(){
        const storage = firebase.storage();
        // Référence à ton fichier dans Firebase Storage
        const storageRef = storage.ref(`/uploads/photo_capture.png`);

        // Récupérer l'URL de téléchargement du fichier
        storageRef.getDownloadURL().then((url) => {
            // Créer un lien de téléchargement en utilisant l'URL récupéré
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'blob';  // Pour télécharger le fichier en tant que blob

            xhr.onload = function() {
                // Créer un lien temporaire pour déclencher le téléchargement
                const blob = xhr.response;
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'Loan_Contrat.png';  // Nom du fichier téléchargé
                link.click();  // Déclenchement du téléchargement
            };

            xhr.onerror = function(error) {
                console.error("Erreur lors du téléchargement : ", error);
            };

            xhr.send();
        }).catch((error) => {
            console.error("Erreur lors de la récupération du fichier :", error);
        });
    });
      document.getElementById('uploadInput').addEventListener('change', function(event) {
          const file = event.target.files[0];
          if (file) {
             // console.log('Selected file:', file);
              // You can now process the file further
              // For example, read its content using FileReader
               document.getElementById('svgId').style.display = "none"
              document.getElementById('pSms').innerHTML = `${file.name}`
              // Stocker le fichier sélectionné dans une variable globale
              var  selectedFile = file;
              table.push(file.name)
              tablefile.push(file)
              const reader = new FileReader();
              reader.onload = function(e) {
                  console.log('File content:', e.target.result);
              };
              reader.readAsText(file);  // Change to readAsDataURL(file) if the file is an image
          }
      }); 
      document.getElementById('submitId').addEventListener('click', function() {
        document.getElementById('preloader').style.display = "block"
      if(table.length !=0){ 
        var selectedFile = tablefile[tablefile.length-1]
        if (selectedFile) {
          // Créez une référence Firebase Storage pour le fichier
          const storageRef = firebase.storage().ref(`/uploads/${selectedFile.name}`);

          // Uploader le fichier
          const uploadTask = storageRef.put(selectedFile);

          // Suivre la progression de l'upload
          uploadTask.on('state_changed',
              function(snapshot) {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log('Upload is ' + progress + '% done');
              }, 
              function(error) {
                  // Gérer les erreurs
                  console.error('Error uploading file:', error);
              }, 
              function() {
                  // Upload terminé, récupérer l'URL du fichier
                  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                      console.log('File available at', downloadURL);
                      firebase.database().ref('utilisateurs/' + userId).update({
                        ID_CONTRAT:downloadURL, 
                    }).then(() => {
                       document.getElementById('preloader').style.display = "none"
                       var askLoanEnd = "E3756738IJJI087EHJNH9JBHD"
                       localStorage.setItem("askLoanEnd", askLoanEnd) 
                        Swal.fire({
                          title: i18next.t("TERMES4"), 
                          text: i18next.t("TERMES11"),
                            icon: "success",
                            allowOutsideClick: false,
                        }).then((result) => {
                            if (result.isConfirmed) {
                                 window.location.reload()

                            }
                        });
                    }).catch((error) => { 
                        Swal.fire({
                            title: i18next.t("INDEXID13"),
                            text: i18next.t("INDEXID15"),
                            icon: "error",
                            allowOutsideClick: false,
                        });
                    });
                  });
              }
          );
      } else {
          console.error('Aucun fichier sélectionné.');
      } 
      }else{
      Swal.fire({
      icon: "error",
      title: "Oops...",
      text: i18next.t("TERMES12"), 
      });
      } 
      });
     
    }else if(!snapshot.val().B_U) {
     window.location.href = `../bank.html`
    } else if(!snapshot.val().TASK_PAIMENT){
    $('#TASK_PAIMENTID').modal({
    backdrop: 'static',  // Empêche la fermeture en cliquant à l'extérieur
    keyboard: false, 
    show:true    // Empêche la fermeture avec la touche "Échap"
    });  
    }
    }else{
     window.location.href = "login/emaillogin.html"
    } 
    })
    }else{
      window.location.href = "login/emaillogin.html"
    }
    
    })
  
    const linkInputx = document.getElementById('linkInputx');
    const copyButtonx = document.getElementById('affiliateIDxQ');
    copyButtonx.innerHTML = `Click to copy adress  <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
    </svg></span>`
    copyButtonx.addEventListener('click', () => {
        linkInputx.value = `HDGJBS686hkjhg578GJKKcsfg345678LJEGeifd2467ETEBNE`
        copyButtonx.innerHTML = `HDGJBS686hkjhg578GJKKcsfg345678LJEGeifd2467ETEBNE`
        linkInputx.select(); // Sélectionne le texte dans l'input
        document.execCommand('copy'); // Copie le texte sélectionné dans le presse-papiers
        Swal.fire({
          title: "Super !",
          text: "Your link has been copied to the clipboard",
          icon: "success",
          confirmButtonText: "OK",
        })
    })
  