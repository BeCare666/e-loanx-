const firebaseConfig = {
  apiKey: "AIzaSyA432xcvnylhtUgoBcZYM9Vd7XlbOSpCfI",
  authDomain: "banca-9d9b5.firebaseapp.com",
  databaseURL: "https://banca-9d9b5-default-rtdb.firebaseio.com",
  projectId: "banca-9d9b5",
  storageBucket: "banca-9d9b5.appspot.com",
  messagingSenderId: "1009941377223",
  appId: "1:1009941377223:web:b14d390799fa7ac40b0ee2"
  };
  const unserconnectId = localStorage.getItem("unserconnect") 
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database(); 
  var loantypeTable = []
  var form_check_inputTable = []
  const loan_typex = document.querySelectorAll('.loan-typex');
  const loandetails01 = document.getElementById('loandetails01');
  const loandetails02 = document.getElementById('loandetails02');
  const loan_amount = document.getElementById('loan-amount');
  const form_check_input = document.querySelectorAll('.form-check-input'); 
  loan_typex.forEach((T)=>{
    T.addEventListener("click", function(){
      loantypeTable.push(T.id)
    })
  })
  form_check_input.forEach((T)=>{
    T.addEventListener("click", function(){
      const valeurx = T.value
      form_check_inputTable.push(valeurx)
    })
  })
  firebase.auth().onAuthStateChanged(function(user) { 
  if(user){
  var userId = user.uid;
  localStorage.setItem('unserconnectuserId', userId) 
  const userRef = database.ref(`/utilisateurs/${userId}`);
  userRef.once("value")
  .then((snapshot) => {
     document.getElementById('preloader').style.display = "none"
  if(snapshot.exists()){
    if(!snapshot.val().financing_type){
    document.getElementById('preloader').style.display = "none"
    var element = form_check_inputTable[form_check_inputTable.length-1]
    var elementx = loantypeTable[loantypeTable.length-1]
    const loandetails01 = document.getElementById('loandetails01');
    const loandetails02 = document.getElementById('loandetails02');
    document.getElementById('next-btnId').addEventListener("click", function(){
      if(element && elementx && loandetails01.value && loandetails02.value && loan_amount.value){
        firebase.database().ref('utilisateurs/' + userId).update({
          userId : userId,
          email: "",
          username : "",
          ACCOUNTPRINCIPAL: 0,
          ACCOUNTPRINCIPALX: 0,
          ABONNEMENT : false, 
          USERSTATUS : true, 
          MESSAGES : false,
          MESSAGESAMWALLET:"",
          ACCOUNTINVEST:0,
          ACCOUNTINVESTSATUS: false,
          ACCOUNTINVESTGETCIDR: 0,
          ACCOUNTINVESTGETCIDRDATE: "",
          Selfie_Photo: downloadURL, // Stocker l'URL de la photo
          ID_Card:"",
          LOANTYPE:elementx, 
          financing_type:loandetails01.value,
          bank_service:loandetails02.value,
          Yout_loan_amount:loan_amount.value,
          Laon_duration:element,
          First_Name:"",
          Last_Name:"",
          Date_of_Birth:"",
          Marital_Statas:"",
          Email:"",
          Present_Address:"",
          State:"",
          City:"",
          Postal_Zip_Code:"",
          STEP1: false,
          STEP2: false,
          STEP3: false,
          A_U : "",
          B_U : "",
          C_U : "",
          D_U : "",
          E_U : 0,
          F_U : 0,
          G_U : 0,
          H_U : 0,
          I_U : false,
          J_U : false,
          K_U : false,
          L_U : false,
          M_U : true,
          N_U : true,
          O_U : true,
          P_U : true,
      }).then(() => {
          Swal.fire({
              title: "Mise à jour réussie",
              text: "Les informations ont été mises à jour !",
              icon: "success",
              allowOutsideClick: false,
          }).then((result) => {
              if (result.isConfirmed) {
                  location.reload();
              }
          });
      }).catch((error) => {
          Swal.fire({
              title: "Erreur",
              text: "Une erreur s'est produite: " + error.message,
              icon: "error",
              allowOutsideClick: false,
          });
      });
      }else{

      }
    }) 
  }else{
    document.getElementById('next-btnId').addEventListener("click", function(){ 
      Swal.fire({
        title: "Ooops",
        text:"You are alredy set your loan details.",
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        icon: 'info',
        footer:`<a href="personal-details.html">Go to personal details.</a>`
        }) 
    })
  }
  }else{
   window.location.href = "login/login.html"
  } 
  })
  }else{
    // window.location.href = "login/login.html"
  }
  
  })
  const welcomLoa = localStorage.getItem("welcomLoa")
  if(welcomLoa){
    window.location.href = `account.html`
  }
  


