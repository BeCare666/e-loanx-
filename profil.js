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
  if(!snapshot.exists()){
    document.getElementById('preloader').style.display = "none" 
    document.getElementById('next-btnId').addEventListener("click", function(){
      var element = form_check_inputTable[form_check_inputTable.length-1]
      var elementx = loantypeTable[loantypeTable.length-1]
      const loandetails01 = document.getElementById('loandetails01');
      const loandetails02 = document.getElementById('loandetails02');
      const loan_amount = document.getElementById('loan-amount');
      if(element && elementx && loandetails01.value && loandetails02.value && loan_amount.value){
        firebase.database().ref('utilisateurs/' + userId).set({ 
          LOANTYPE:elementx, 
          financing_type:loandetails01.value,
          bank_service:loandetails02.value,
          Yout_loan_amount:loan_amount.value,
          Laon_duration:element,  
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
          ID_Card:"", 
          First_Name:"",
          Last_Name:"",
          Date_of_Birth:"",
          Marital_Statas:"",
          Email:"",
          Present_Address:"",
          State:"",
          City:"",
          Postal_Zip_Code:"",
          STEP1: true,
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
              title: i18next.t("TERMES4"), 
              text: i18next.t("TERMES11"),
              icon: "success",
              allowOutsideClick: false,
          }).then((result) => {
              if (result.isConfirmed) {
                  window.location.href = `personal-details.html`
              }
          });
      }).catch((error) => { 
          Swal.fire({
            title:  i18next.t("INDEXID13"),
            text: i18next.t("INDEXID15"),
              icon: "error",
              allowOutsideClick: false,
          });
      });
      }else{
        Swal.fire({
          title: i18next.t("INDEXID17"),
          text: i18next.t("DEPARTMENTS25"),
            icon: "error",
            allowOutsideClick: false,
        }); 
      }
    }) 
  
  }
  })
  }else{
     window.location.href = "login/emaillogin.html"
  }
  
  })
  const askLoanEndVal = localStorage.getItem("askLoanEnd")
  if(!askLoanEndVal){
  }else{
   window.location.href = "myaccount.html"
  }
  


