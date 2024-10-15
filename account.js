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
    firebase.auth().onAuthStateChanged(function(user) { 
    if(user){
    var userId = user.uid;
    localStorage.setItem('unserconnectuserId', userId) 
    const userRef = database.ref(`/utilisateurs/${userId}`);
    userRef.once("value")
    .then((snapshot) => {
    if(snapshot.exists()){
    if(snapshot.val().STEP3){
    if(!snapshot.val().I_U){
     document.getElementById('preloader').style.display = "none"
     var Loanstatus = document.getElementById('Loanstatus');
     var LoanTotalAmount1 = document.getElementById('LoanTotalAmount1');
     var LoanTotalAmount = document.getElementById('LoanTotalAmount');
     var InterestPayable = document.getElementById('InterestPayable');
     var LoanTotalDuration = document.getElementById('LoanTotalDuration');
     var emiAmount = document.getElementById('emiAmount');
     // Loanstatus  
     Loanstatus.innerHTML = 
     `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="brown" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
    </svg></span> Loan is in pendding`;
    // LoanTotalAmount1
    var Yout_loan_amountx = snapshot.val().Yout_loan_amount
    var InterestPayablex = Yout_loan_amountx*0.10
    const Yout_loan_amount = Yout_loan_amountx.toLocaleString();
    const InterestPayablev = InterestPayablex.toLocaleString();
    LoanTotalAmount1.innerHTML = `${Yout_loan_amount}$`;
    LoanTotalAmount.innerHTML = `${Yout_loan_amount}$`;
    InterestPayable.innerHTML = `${InterestPayablev}$`;
    LoanTotalDuration.innerHTML = `${snapshot.val().Laon_duration }`;
    emiAmount.innerHTML = `${Yout_loan_amount}$`;
    }else {
        document.getElementById('preloader').style.display = "none"
        var Loanstatus = document.getElementById('Loanstatus');
        var LoanTotalAmount1 = document.getElementById('LoanTotalAmount1');
        var LoanTotalAmount = document.getElementById('LoanTotalAmount');
        var InterestPayable = document.getElementById('InterestPayable');
        var LoanTotalDuration = document.getElementById('LoanTotalDuration');
        var emiAmount = document.getElementById('emiAmount');
        LoanTotalAmount1.style.color = "green"
        // Loanstatus  
        Loanstatus.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg></span> loan validated`;
       // LoanTotalAmount1
       var Yout_loan_amountx = snapshot.val().Yout_loan_amount
       var InterestPayablex = Yout_loan_amountx*0.10
       const Yout_loan_amount = Yout_loan_amountx.toLocaleString();
       const InterestPayablev = InterestPayablex.toLocaleString();
       LoanTotalAmount1.innerHTML = `${Yout_loan_amount}$`;
       LoanTotalAmount.innerHTML = `${Yout_loan_amount}$`;
       InterestPayable.innerHTML = `${InterestPayablev}$`;
       LoanTotalDuration.innerHTML = `${snapshot.val().Laon_duration }`;
       emiAmount.innerHTML = `${Yout_loan_amount}$`;   
    }
    var Withdrawal = document.getElementById('WithdrawalId');
    Withdrawal.addEventListener('click', function(){
        const userRef = database.ref(`/utilisateurs/${userId}`);
        userRef.once("value")
        .then((snapshot) => { 
        if(snapshot.exists()){
            if(!snapshot.val().I_U && snapshot.val().STEP3){
                Swal.fire({
                    icon:"info",
                    text: i18next.t("DEPARTMENTS5") ,
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                        `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                        `
                    }
                    });
            }else if(snapshot.val().I_U && snapshot.val().STEP3) {
           window.location.href = `myaccount.html`
            }
        }
        })
    })
    }else{
    window.location.href = `document-upload.html`
    }
    }else{
     window.location.href = "login/emaillogin.html"
    } 
    })
    }else{
       window.location.href = "login/emaillogin.html"
    }
    
    }) 
    
  
  
  