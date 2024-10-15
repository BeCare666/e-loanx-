const firebaseConfig = {
  apiKey: "AIzaSyAdpKwXX_dtdjaQ7ia0OC7VxQNw-_nI_iY",
  authDomain: "arlitfinance.firebaseapp.com",
  databaseURL: "https://arlitfinance-default-rtdb.firebaseio.com",
  projectId: "arlitfinance",
  storageBucket: "arlitfinance.appspot.com",
  messagingSenderId: "1012825535505",
  appId: "1:1012825535505:web:767da3656b27c1b994edb0"
    };
    const unserconnectId = localStorage.getItem("unserconnect") 
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database(); 
    var form_check_inputTable = []  
    const form_check_input = document.querySelectorAll('.form-check-input');
    form_check_input.forEach((T)=>{
      T.addEventListener("click", function(){
      const valeurx = T.value
      form_check_inputTable.push(valeurx)
      })
  })
    firebase.auth().onAuthStateChanged(function(user) { 
    if(user){
    var userId = user.uid;
    console.log(userId)
    localStorage.setItem('unserconnectuserId', userId) 
    const userRef = database.ref(`/utilisateurs/${userId}`);
    userRef.once("value")
    .then((snapshot) => {
    document.getElementById('preloader').style.display = "none"
    if(snapshot.exists()){
    if(!snapshot.val().Email){
    if(snapshot.val().bank_service){ 
      console.log("Email n'est pas")
      document.getElementById('preloader').style.display = "none" 
      document.getElementById('next-btnIdpx').addEventListener("click", function(){
        const fName = document.getElementById('fName');
        const lName = document.getElementById('lName');
        //const datetime_local = document.getElementById('datetime_local');
        const emailName = document.getElementById('emailName');
        const pAddress = document.getElementById('pAddress');
        const stateName = document.getElementById('stateName');
        const cityName = document.getElementById('cityName');
        const zipCode = document.getElementById('zipCode');
      var element = form_check_inputTable[form_check_inputTable.length-1]

        if(element && fName.value && lName.value //datetime_local.value 
          && emailName.value &&
            pAddress.value && stateName.value && cityName.value && zipCode.value
        ){
          firebase.database().ref('utilisateurs/' + userId).update({
            First_Name:fName.value,
            Last_Name:lName.value,
           // Date_of_Birth:datetime_local.value,
            Marital_Statas:element,
            Email:emailName.value,
            Present_Address:pAddress.value,
            State:stateName.value,
            City:cityName.value,
            Postal_Zip_Code:zipCode.value,
            STEP2: true,
        }).then(() => {
            Swal.fire({
                title: i18next.t("TERMES4"), 
                text: i18next.t("TERMES11"),
                icon: "success",
                allowOutsideClick: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "document-upload.html"
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
        }else{
          Swal.fire({
            title: i18next.t("INDEXID17"),
            text:  i18next.t("DEPARTMENTS25"),
              icon: "error",
              allowOutsideClick: false,
          }); 
        }
      }) 
    }else{
      document.getElementById('next-btnIdpx').addEventListener("click", function(){ 
        Swal.fire({
          title: "Ooops",
          text: i18next.t("DEPARTMENTS55"),
          showCancelButton: false,
          showConfirmButton: false,
          allowOutsideClick: false,
          icon: 'info',
          footer:`<a href="loan-details.html">${i18next.t("DEPARTMENTS56")}</a>`
          }) 
      })
    }
    }else{
      document.getElementById('next-btnIdpx').addEventListener("click", function(){ 
        Swal.fire({
          title: "Ooops",
          text: i18next.t("DEPARTMENTS57"),
          showCancelButton: false,
          showConfirmButton: false,
          allowOutsideClick: false,
          icon: 'info',
          footer:`<a href="document-upload.html">${i18next.t("DEPARTMENTS58")}</a>`
          }) 
      })
    }
    }else{
     window.location.href = "login/emaillogin.html"
    } 
    })
    }else{
      window.location.href = "login/emaillogin.html"
      console.log("no userId")
    }
    
    })
    
    const askLoanEndVal = localStorage.getItem("askLoanEnd")
    if(!askLoanEndVal){
    }else{
     window.location.href = "myaccount.html"
    }
  
  