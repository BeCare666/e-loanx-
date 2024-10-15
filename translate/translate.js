$(document).ready(function() {
    //window.location.href = "https://illicolove.com/under.html"
    // Configuration de i18next pour les différentes langues
    // Sélectionnez tous les éléments de la page
    $('.btn').click(function(){
      $('.mod-fond').show(40);
      });
      $('.close').click(function(){
      $('.mod-fond').hide(40);
      });
    const urlParams = new URLSearchParams(window.location.search);
    const selectedLanguagex = urlParams.get("lg");
     if(selectedLanguagex){
      localStorage.setItem('selectedLanguage', selectedLanguagex);
     }
    i18next.init({
      lng: localStorage.getItem('selectedLanguage') || 'en',
      debug: true, 
      resources: { 
        en: {       
          translation : { 
            "INDEXID1":`login`, 
            "INDEXID2":`Sign in`, 
            "INDEXID3":`Email`,
            "yourEmail":`email`, 
            "INDEXID5":`password`,
            "yourPassword":`password`,
            "INDEXID7":`Sign In`,
            "INDEXID8":` Sign up whith email <a href="emailregister.html">Click Here</a>`,
            "INDEXID9":`You can Sign up whith phone <a href="login.html">Click Here</a>`,
            "INDEXID10":`success`,
            "INDEXID11":`You are successfully connected!`,
            "INDEXID12":`You haven't validated your e-mail yet!`,
            "INDEXID13":`Error`,
            "INDEXID14XXX":`The user doesn't exist with this e-mail address! `,
            "INDEXID15":`Error`,
            "INDEXID16":` Incorrect password!`,
            "INDEXID17":`Error`,
            "INDEXID18":`The user doesn't exist or your login is incorrect.`,
            "INDEXID19":`Enter the verification code you received by SMS :`,
            "INDEXID21X":`Phone`,
            "INDEXID21":`You can login whith email <a href="emaillogin.html">Click Here`, 
            "INDEXID22":` Signn up `,
            "INDEXID22X":`Signn up`, 
            "INDEXID24":`login whith email <a href="emaillogin.html">Click Here</a>`,
            "INDEXID25":`You can login whith phone <a href="login.html">Click Here</a>`,
            "INDEXID26":`You have been successfully registered.`,
            "INDEXID27":`Check your mailbox to validate your email. Thank you for your interest!`,
            "INDEXID28":`Error sending verification e-mail`,
            "INDEXID29":`The e-mail address is already being used by another account`,
            "INDEXID30":`Home`,
            "INDEXID31":`About Us`,
            "INDEXID32":`Termes`,
            "INDEXID33":` Politique`,
            "INDEXID34":` Contact Us`,
            "INDEXID35":`Your <span class="underline-shape">Loan</span> made easier.`,
            "INDEXID36":`Harlit Finance, ideal for those who want to make a difference while lending small amounts of money. 
            Our microcredit model gives many people access to opportunities they wouldn't otherwise have had.`,
            "INDEXID37":`Apply for a loan`,
            "INDEXID38":`5K+ ⭐ Active users`,
            "INDEXID39":`About-us`,
            "INDEXID40":`<span class="underline-shape">Harlit Finance</span>  is a non-profit organization that enables 
            people to make loans to entrepreneurs and students around the world.`,
            "INDEXID41":` <h3>Social impact</h3>
            <p>Every loan helps to improve living conditions for borrowers and their communities.</p>`,
            "INDEXID42":` <h3>Worldwide participation  </h3>
                            <p>Lenders can support projects in over 80 countries.</p>`,
            "INDEXID43":`<h3>Transparency</h3>
                            <p>Harlit Financeoffers full transparency on how funds are used</p>`,
            "INDEXID44":` <span class="short-title-2 wow fadeInUp">OUR PROCESS</span>
            <h1 class="wow fadeInUp">Get loan from 4
            simple <span class="underline-shape">process</span>
             </h1>
            <p class="wow fadeInUp" data-wow-delay="0.3s">Here’s a simplified process for obtaining a loan in four steps</p>
            `,
            "INDEXID45":`<h2 class="number">01</h2>
             <h4>Sign Up</h4>
              <p>Create an account on the loan provider’s platform by providing your email address, setting up a password, 
              and verifying your account through phone.
              </p>`,
            "INDEXID46":` <h2 class="number">02</h2>
                                    <h4>Loan Details</h4>
                                    <p>Select the type and amount of loan you need. Specify the loan term and any other relevant details.
                                    </p>`,
            "INDEXID47":` <h2 class="number">03</h2>
                                    <h4>Personal Details</h4>
                                    <p>Fill out your personal information, including your full name, address, date of birth, 
                                      employment status, and income details.
                                    </p>`,
            "INDEXID48":`<h2 class="number">04</h2>
                                    <h4>Documents Upload</h4>
                                    <p>Upload the necessary documents to support your application, such as proof of identity, address, income, and any other documents required by the lender.
                                    </p>`,
            "INDEXID49":` <span class="short-title-2">Worldwide Reach</span>
                    <h1>Our customer base<br> reaches <span class="underline-shape">worldwide</span></h1>`,
            "INDEXID50":` <span class="short-title-2">Loan Calculator</span>
                    <h1 class="wow fadeInUp"><span class="underline-shape">Calculate</span> your loan<br>
                        & get loan details
                    </h1>`,
            "INDEXID51":` <h4>Loan Calculator</h4>
              <div class="range-label mt-40">Loan Term</div>`,
            "yearTab-tab":`Yearly`,
            "monthTab-tab":`Monthly`,
            "weekTab-tab":`Weekly`,
            "INDEXID55":`Loan Amount`,
            "INDEXID56":`Interest Rate`,
            "INDEXID57":`Loan Duration`,
            "INDEXID58":`Start Date`,
            "loanStartDate ":`Select Date`,
            "loanEndDate":`Select Date`, 
            "INDEXID59":`End Date`,
            "INDEXID60":`  <div class="pie-wrapper mt-25" id="loan_graph_circle">
                                    <div class="label">Total Amount<h2 class="LoanTotalAmount"></h2>
                                    </div>
                                    <div class="pie">
                                        <div class="left-side half-circle"></div>
                                        <div class="right-side half-circle"></div>
                                    </div>
                                    <div class="circle-border"></div>
                                </div>
                                <div class="graph-indicator">
                                    <div><span class="blue-dot"></span> EMI Amount</div>
                                    <div><span class="orange-dot"></span> Interest Payable</div>
                                </div>
                                <ul class="loan-calculation list-unstyled">
                                    <li>
                                        <span class="label">EMI Amount (Principal + Interest)</span>
                                        <span class="amount LoanTotalAmount"></span>
                                    </li>
                                    <li>
                                        <span class="label">Interest Payable</span>
                                        <span class="amount" id="InterestPayable"></span>
                                    </li>
                                    <li>
                                        <span class="label">Loan Duration</span>
                                        <span class="amount LoanTotalDuration"></span>
                                    </li>
                                    <li>
                                        <span class="label">Your EMI Amount</span>
                                        <span class="amount" id="emiAmount"></span>
                                    </li>
                                </ul>
                                <a href="loan-details.html" class="theme-btn theme-btn-lg mt-20 w-100">Apply Now
                          <i class="arrow_right"></i></a>`,
            "INDEXID61":`Trust Trusted by over <span>10,000+</span> customers wordwide`,
            "INDEXID62":` <h2>Try it for free</h2>
                                <p>Choose Harlit Finance, a microcredit model for financing projects that help combat poverty and support innovation.</p>
                                <a href="#" class="wow fadeInUp theme-btn theme-btn-lg">Get started now <i  class="arrow_right-up"></i></a>`,
            "INDEXID63":`<p class="copyright-text"><a href="terms.html">Terms </a><a href="politique.html">Privacy Policy</a></p>`,
            "INDEXID64":`Total Amount<h2 class="LoanTotalAmount" id="LoanTotalAmount1"></h2> `,
            "INDEXID65":` <div><span class="blue-dot"></span> EMI Amount</div>
                          <div><span class="orange-dot"></span> Interest Payable</div>`,
            "INDEXID66":`EMI Amount (Principal + Interest)`,
            "INDEXID67":`Interest Payable`,
            "INDEXID68":`Loan Duration`,
             "accountId":`account`,
             "bankId":`Bank`,
            "INDEXID69":`Your EMI Amount`,
            "WithdrawalId":`Transfer your loan`,
            "INDEXID70":` <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"/>
            </svg> Go to your dashboard`,
            "INDEXID71":`Full Name *`,
            "INDEXID77":`IBAN *`, 
            "INDEXID78":`BIC/SWIFT *`,
            "TERMES1":`Name of Bank *`,
            "TERMES2":`Countrie *`, 
            "TERMES3":`Amount *`, 
            "soldeId":`Amount`,
            "submitid":`submit`,
            "TERMES4":`Update successful`,
            "TERMES5":`Bank information has been updated!`,
            "TERMES6":`Document-upload`,
            "TERMES7":`<div class="number"><i class="icon_check"></i> <span>1</span></div> Loan
                                        Details`,
            "TERMES71XB":` <div class="number"><i class="icon_check"></i> <span>2</span></div>
                                        Personal
                                        Details`,
            "TERMES71XC":`<div class="number"><i class="icon_check"></i> <span>3</span></div>
                                Documants
                                        Upload`,
            "TERMES8":`ID Card. Valid Government ID Card. Front and Back side. Original ID Card.
             Full photo. All parts of the ID card must be shown. The four corners of
              the ID card must show on the photo. ID must be original and valid. ID
              card must be very clear. (Please attach file) *`,
            "TERMES9":`I hereby agree that the information given is true, accurate and complete as of the date of this
             application submission. **`,
            "TERMES10":`<i class="arrow_left"></i>previous`,
            "TERMES11":`The information has been updated!`, 
            "TERMES12":`File not Selected`,
            "DEPARTMENTS1":`You've skipped steps`,
            "DEPARTMENTS2":`Go back.`,
            "DEPARTMENTS3":`You are alredy set your personal details.`,
            "DEPARTMENTS4":`Your loan application is being examined.`,
            "DEPARTMENTS5":`Your loan application is being examined`,
            "captureBtn":`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-camera-fill" viewBox="0 0 16 16">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
              </svg> Capture Photo`,
            "DEPARTMENTS6":`Congratulations`,
            "DEPARTMENTS7":`Your account has been finalized!`,
            "DEPARTMENTS8":`Loan details`,
            "DEPARTMENTS9":`Choose your loan type `,
            "DEPARTMENTS10":`Personal Loan`,
            "DEPARTMENTS11":`home Loan`,
            "DEPARTMENTS12":`Buisness Loan`,
            "DEPARTMENTS13":`car Loan`,
            "DEPARTMENTS14":`Choose your financing type`,
            "DEPARTMENTS15":`Debt Financing`,
            "DEPARTMENTS16":`Equity Finance`,
            "DEPARTMENTS17":`Choose your preferred bank service`,
            "DEPARTMENTS18":`Individual Banking `,
            "DEPARTMENTS19":` Business Banking `,
            "DEPARTMENTS20":`Digital Banking`,
            "DEPARTMENTS21":`Loans `,
            "DEPARTMENTS22":`Yout loan amount`, 
            "DEPARTMENTS23":`Laon duration`,
            "inlineRadio1":`3 ans`,
            "inlineRadio2":`5 ans`,
            "inlineRadio3":`6 ans`,
            "inlineRadio4":`8 ans`,
            "inlineRadio5":`10 ans`,
            "DEPARTMENTS24":`next<i class="arrow_right"></i>.`,
            "DEPARTMENTS25":`Not all fields are completed`,
            "DEPARTMENTS26":`You are alredy set your loan details.`,
            "DEPARTMENTS27":`Go to personal details.`,
            //"alert-in":`My  account `,
            "DEPARTMENTS28":`transfer has been received and credited to your account. You can add your <strong>IBAN</strong> to make an <strong>external transfer</strong> to your <strong>bank</strong>.`,
            "DEPARTMENTS29":`Account balance :`,
            "DEPARTMENTS30":`Making a transfer<i class="bi bi-arrow-right-short"></i> `,
            "DEPARTMENTS31":`My account<i class="bi bi-arrow-right-short"></i>`,
            "DEPARTMENTS32":` Transaction history`,
            "DEPARTMENTS33":`Solde`,
            "DEPARTMENTS34":`Transfert`,
            "DEPARTMENTS35":`My account`,
            "DEPARTMENTS36":`Logout`,
            "DEPARTMENTS37":`Hello`,
            "DEPARTMENTS38":`Bank transfer received`,
            "DEPARTMENTS39":`You cannot perform this action because your loan application is still under review.`,
            "DEPARTMENTS40":`No transfers carried out`,
            "DEPARTMENTS41":`Personal details`,
            "DEPARTMENTS42":`First Name*`,
            "DEPARTMENTS43":`PLast Name*`,
            "DEPARTMENTS44":`Date of Birth*`,
            "DEPARTMENTS45":`Marital Statas*`,
            "DEPARTMENTS46":`Single`,
            "DEPARTMENTS47":`Married`,
            "DEPARTMENTS48":`Email`,
            "DEPARTMENTS49":`Present Address*`,
            "DEPARTMENTS50":`State*`,
            "DEPARTMENTS51":`City*`,
            "DEPARTMENTS52":`Postal / Zip Code*`,
            "DEPARTMENTS53":`<i class="arrow_left"></i>previous`,
            "DEPARTMENTS54":`next<i class="arrow_right"></i>`,
            "DEPARTMENTS55":`loan details not set.`,
            "DEPARTMENTS56":` Go to loan details.`,
            "DEPARTMENTS57":`You are alredy set your personal details.`,
            "DEPARTMENTS58":` Go to upload document.`,
            "DEPARTMENTS59":`Politique`,
            "DEPARTMENTS60":`<h2>Privacy Policy</h2>
            </div>
            <div class="card-body" id="DEPARTMENTS60">
                <h5>1. Introduction</h5>
                <p>
                    We value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.
                </p>
                <h5>2. Information We Collect</h5>
                <p>
                    We may collect personal identification information (Name, Email Address, Phone Number, etc.) and non-personal identification information (Browser type, IP address, etc.).
                </p>
                <h5>3. How We Use Your Information</h5>
                <p>
                    The information we collect is used to personalize your experience, improve our website, process transactions, send periodic emails, and improve customer service.
                </p>
                <h5>4. Sharing Your Information</h5>
                <p>
                    We do not sell, trade, or otherwise transfer your personal identification information to outside parties except when required by law or to protect our rights.
                </p>
                <h5>5. Data Security</h5>
                <p>
                    We adopt appropriate data collection, storage, and processing practices to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
                </p>
                <h5>6. Changes to This Privacy Policy</h5>
                <p>
                    We may update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page.
                </p>
                <h5>7. Your Consent</h5>
                <p>
                    By using our site, you consent to our privacy policy.
                </p>
                <h5>8. Contact Us</h5>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at [email@example.com].
            </p>`,
            "DEPARTMENTS61":`Terms`,
            "DEPARTMENTS62":`
            <h2>Loan Terms and Conditions</h2>
            </div>
            <div class="card-body">
                <h5>1. Sign Up</h5>
                <p>
                    To apply for a loan, you must first create an account on our platform. Provide your email address and set up a password. Verify your account through the confirmation email sent to you.
                </p>
                <h5>2. Loan Details</h5>
                <p>
                    Select the type and amount of loan you need. Specify the loan term and any other relevant details in the loan application form.
                </p>
                <h5>3. Personal Details</h5>
                <p>
                    Fill out your personal information, including your full name, address, date of birth, employment status, and income details. Ensure that all information provided is accurate and up to date.
                </p>
                <h5>4. Documents Upload</h5>
                <p>
                    Upload the necessary documents to support your application, such as proof of identity, address, income, and any other documents required by the lender.
                </p>
                <h5>5. No External Relationships</h5>
                <p>
                    You are not permitted to engage with any other structure or organization in the execution of this project without permission from the company Becare.
                </p>
                <h5>6. Verification</h5>
                <p>
                    Our team may conduct counter-expert assessments by a surveyor to ensure the effective area of the land, and by an agronomist to confirm the soil's nutrient richness and the validity of the maize seeds and cassava cuttings.
                </p>
                <h5>7. Weather Impact</h5>
                <p>
                    Please be aware that agricultural projects can be affected by weather conditions. We are not responsible for any disruptions caused by climatic factors.
                </p>
            </div>`,
 
        }
  
        },
        fr:{
          translation : {
            "INDEXID1": "connexion",
            "INDEXID2": "Se connecter",
            "INDEXID3": "E-mail",
            "yourEmail": "email",
            "INDEXID5": "mot de passe",
            "yourPassword": "mot de passe",
            "INDEXID7": "Se connecter",
            "INDEXID8": "Inscrivez-vous avec votre e-mail <a href=\"emailregister.html\">Cliquez ici</a>",
            "INDEXID9": "Vous pouvez vous inscrire avec votre téléphone <a href=\"login.html\">Cliquez ici</a>",
            "INDEXID10": "succès",
            "INDEXID11": "Vous êtes connecté avec succès !",
            "INDEXID12": "Vous n'avez pas encore validé votre e-mail !",
            "INDEXID13": "Erreur",
            "INDEXID14XXX": "L'utilisateur n'existe pas avec cette adresse e-mail !",
            "INDEXID15": "Erreur",
            "INDEXID16": "Mot de passe incorrect !",
            "INDEXID17": "Erreur",
            "INDEXID18": "L'utilisateur n'existe pas ou votre connexion est incorrecte.",
            "INDEXID19": "Entrez le code de vérification que vous avez reçu par SMS :",
            "INDEXID21X": "Téléphone",
            "INDEXID21": "Vous pouvez vous connecter avec votre e-mail <a href=\"emaillogin.html\">Cliquez ici</a>",
            "INDEXID22": "S'inscrire",
            "INDEXID22X": "S'inscrire",
            "INDEXID24": "Connectez-vous avec votre e-mail <a href=\"emaillogin.html\">Cliquez ici</a>",
            "INDEXID25": "Vous pouvez vous connecter avec votre téléphone <a href=\"login.html\">Cliquez ici</a>",
            "INDEXID26": "Vous avez été enregistré avec succès.",
            "INDEXID27": "Vérifiez votre boîte mail pour valider votre e-mail. Merci de votre intérêt !",
            "INDEXID28": "Erreur lors de l'envoi de l'e-mail de vérification",
            "INDEXID29": "L'adresse e-mail est déjà utilisée par un autre compte",
            "INDEXID30": "Accueil",
            "INDEXID31": "À propos de nous",
            "INDEXID32": "Termes",
            "INDEXID33": "Politique",
            "INDEXID34": "Contactez-nous",
            "INDEXID35": "Votre <span class=\"underline-shape\">prêt</span> simplifié.",
            "INDEXID36": `Harlit Finance, idéal pour ceux qui veulent faire une différence tout en prêtant de petites sommes d'argent. 
            Notre modèle de microcrédit donne accès à des opportunités que beaucoup n'auraient pas eues autrement.`,
            "INDEXID37": "Demander un prêt",
            "INDEXID38": "5K+ ⭐ Utilisateurs actifs",
            "INDEXID39": `<span class="underline-shape">À propos de nous</span>`,
            "INDEXID40": `<span class="underline-shape">Harlit Finance</span> est une organisation à but non lucratif qui permet aux gens de faire des prêts à des entrepreneurs et des étudiants à travers le monde.`,
            "INDEXID41": `<h3>Impact social</h3>
                      <p>Chaque prêt aide à améliorer les conditions de vie des emprunteurs et de leurs communautés.</p>`,
            "INDEXID42": `<h3>Participation mondiale</h3>
                                      <p>Les prêteurs peuvent soutenir des projets dans plus de 80 pays.</p>`,
            "INDEXID43": `<h3>Transparence</h3>
                                      <p>Harlit Finance offre une transparence totale sur l'utilisation des fonds.</p>`,
            "INDEXID44": `<span class="short-title-2 wow fadeInUp">NOTRE PROCESSUS</span>
                      <h1 class="wow fadeInUp">Obtenez un prêt en 4
                      étapes simples <span class="underline-shape">processus</span>
                       </h1>
                      <p class="wow fadeInUp" data-wow-delay="0.3s">Voici un processus simplifié pour obtenir un prêt en quatre étapes</p>`,
            "INDEXID45": `<h2 class="number">01</h2>
                       <h4>Inscription</h4>
                        <p>Créez un compte sur la plateforme du prêteur en fournissant votre adresse e-mail, en configurant un mot de passe, 
                        et en vérifiant votre compte par téléphone.</p>`,
            "INDEXID46": `<h2 class="number">02</h2>
                                              <h4>Détails du prêt</h4>
                                              <p>Sélectionnez le type et le montant de prêt dont vous avez besoin. Spécifiez la durée du prêt et tout autre détail pertinent.
                                              </p>`,
            "INDEXID47": `<h2 class="number">03</h2>
                                              <h4>Détails personnels</h4>
                                              <p>Remplissez vos informations personnelles, y compris votre nom complet, adresse, date de naissance, 
                                                statut d'emploi et détails des revenus.
                                              </p>`,
            "INDEXID48": `<h2 class="number">04</h2>
                                              <h4>Téléchargement de documents</h4>
                                              <p>Téléchargez les documents nécessaires pour soutenir votre demande, tels que la preuve d'identité, d'adresse, de revenus, et tout autre document requis par le prêteur.
                                              </p>`,
            "INDEXID49": `<span class="short-title-2">Portée mondiale</span>
                              <h1>Notre clientèle<br> atteint <span class="underline-shape">le monde entier</span></h1>`,
            "INDEXID50": `<span class="short-title-2">Calculateur de prêts</span>
                              <h1 class="wow fadeInUp"><span class="underline-shape">Calculez</span> votre prêt<br>
                                  & obtenez des détails sur le prêt
                              </h1>`,
            "INDEXID51": `<h4>Calculateur de prêts</h4>
                                          <div class="range-label mt-40">Durée du prêt</div>`,
            "yearTab-tab": `Annuel`,
            "monthTab-tab": `Mensuel`,
            "weekTab-tab": `Hebdomadaire`,
            "INDEXID55": `Montant du prêt`,
            "INDEXID56": `Taux d'intérêt`,
            "INDEXID57": `Durée du prêt`,
            "INDEXID58": `Date de début`,
            "loanStartDate": `Sélectionner la date`,
            "loanEndDate": `Sélectionner la date`, 
            "INDEXID59": `Date de fin`,
            "INDEXID60": `<div class="pie-wrapper mt-25" id="loan_graph_circle">
                                              <div class="label">Montant total<h2 class="LoanTotalAmount"></h2>
                                              </div>
                                              <div class="pie">
                                                  <div class="left-side half-circle"></div>
                                                  <div class="right-side half-circle"></div>
                                              </div>
                                              <div class="circle-border"></div>
                                          </div>
                                          <div class="graph-indicator">
                                              <div><span class="blue-dot"></span> Montant EMI</div>
                                              <div><span class="orange-dot"></span> Intérêt à payer</div>
                                          </div>
                                          <ul class="loan-calculation list-unstyled">
                                              <li>
                                                  <span class="label">Montant EMI (Principal + Intérêt)</span>
                                                  <span class="amount LoanTotalAmount"></span>
                                              </li>
                                              <li>
                                                  <span class="label">Intérêt à payer</span>
                                                  <span class="amount" id="InterestPayable"></span>
                                              </li>
                                              <li>
                                                  <span class="label">Durée du prêt</span>
                                                  <span class="amount LoanTotalDuration"></span>
                                              </li>
                                              <li>
                                                  <span class="label">Votre montant EMI</span>
                                                  <span class="amount" id="emiAmount"></span>
                                              </li>
                                          </ul>
                                          <a href="loan-details.html" class="theme-btn theme-btn-lg mt-20 w-100">Postulez maintenant
                                    <i class="arrow_right"></i></a>`,
            "INDEXID61": `Confiance de plus de <span>10,000+</span> clients dans le monde`,
            "INDEXID62": `<h2>Essayez-le gratuitement</h2>
                                          <p>Choisissez Harlit Finance, un modèle de microcrédit pour financer des projets qui aident à lutter contre la pauvreté et à soutenir l'innovation.</p>
                                          <a href="#" class="wow fadeInUp theme-btn theme-btn-lg">Commencez maintenant <i  class="arrow_right-up"></i></a>`,
            "INDEXID63": `<p class="copyright-text"><a href="terms.html">Conditions</a><a href="politique.html">Politique de confidentialité</a></p>`,
            "INDEXID64": `Montant total<h2 class="LoanTotalAmount" id="LoanTotalAmount1"></h2> `,
            "INDEXID65": `<div><span class="blue-dot"></span> Montant EMI</div>
                                    <div><span class="orange-dot"></span> Intérêt à payer</div>`,
            "INDEXID66": `Montant EMI (Principal + Intérêt)`,
            "INDEXID67": `Intérêt à payer`,
            "INDEXID68": `Durée du prêt`,
            "accountId": `compte`,
            "bankId": `Banque`,
            "INDEXID69": `Votre montant EMI`,
            "WithdrawalId": `Transférez votre prêt`,
            "INDEXID70": `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"/>
                      </svg> Aller à votre tableau de bord`,
            "INDEXID71": `Nom complet *`,
            "INDEXID77": `IBAN *`, 
            "INDEXID78": `BIC/SWIFT *`,
            "TERMES1": `Nom de la Banque *`,
            "TERMES2": `Pays *`, 
            "TERMES3": `Montant *`, 
            "soldeId": `Montant`,
            "submitid": `Soumettre`,
            "TERMES4": `Mise à jour réussie`,
            "TERMES5": `Les informations bancaires ont été mises à jour !`,
            "TERMES6": `Téléchargement de documents`, 
            "TERMES7": `<div class="number"><i class="icon_check"></i> <span>1</span></div> Détails du prêt`,
            "TERMES71XB":`  <div class="number"><i class="icon_check"></i> <span>2</span></div>  Détails personnels`,
            "TERMES71XC":` <div class="number"><i class="icon_check"></i> <span>3</span></div>  Téléchargement de documents`,
                      "TERMES8": `Carte d'identité. Carte d'identité valide émise par le gouvernement. Côté avant et arrière. Carte d'identité originale.
                      Photo complète. Toutes les parties de la carte d'identité doivent être visibles. Les quatre coins
                      de la carte d'identité doivent être visibles sur la photo. La carte d'identité doit être originale et valide. La carte d'identité
                      doit être très claire. (Veuillez joindre le fichier) *`,
          "TERMES9": `J'accepte par la présente que les informations fournies sont vraies, précises et complètes à la date de soumission de cette
                      demande. **`,
          "TERMES10": `<i class="arrow_left"></i> précédent`,
          "TERMES11": `Les informations ont été mises à jour !`,
          "TERMES12": `Fichier non sélectionné`,
          "DEPARTMENTS1": `Vous avez sauté des étapes`,
          "DEPARTMENTS2": `Retourner.`,
          "DEPARTMENTS3": `Vous avez déjà défini vos informations personnelles.`,
          "DEPARTMENTS4": `Votre demande de prêt est en cours d'examen.`,
          "DEPARTMENTS5": `Votre demande de prêt est en cours d'examen`,
          "captureBtn": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-camera-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
                      </svg> Prendre une photo`,
          "DEPARTMENTS6": `Félicitations`,
          "DEPARTMENTS7": `Votre compte a été finalisé !`,
          "DEPARTMENTS8": `Détails du prêt`,
          "DEPARTMENTS9": `Choisissez votre type de prêt`,
          "DEPARTMENTS10": `Prêt personnel`,
          "DEPARTMENTS11": `Prêt immobilier`,
          "DEPARTMENTS12": `Prêt commercial`,
          "DEPARTMENTS13": `Prêt automobile`,
          "DEPARTMENTS14": `Choisissez votre type de financement`,
          "DEPARTMENTS15": `Financement de la dette`,
          "DEPARTMENTS16": `Financement par capitaux propres`,
          "DEPARTMENTS17": `Choisissez votre service bancaire préféré`,
          "DEPARTMENTS18": `Banque individuelle`,
          "DEPARTMENTS19": `Banque d'affaires`,
          "DEPARTMENTS20": `Banque numérique`,
          "DEPARTMENTS21": `Prêts`,
          "DEPARTMENTS22": `Montant de votre prêt`,
          "DEPARTMENTS23": `Durée du prêt`,
          "inlineRadio1": `3 ans`,
          "inlineRadio2": `5 ans`,
          "inlineRadio3": `6 ans`,
          "inlineRadio4": `8 ans`,
          "inlineRadio5": `10 ans`,
          "DEPARTMENTS24": `suivant<i class="arrow_right"></i>.`,
          "DEPARTMENTS25": `Tous les champs ne sont pas remplis`,
          "DEPARTMENTS26": `Vous avez déjà défini vos détails de prêt.`,
          "DEPARTMENTS27": `Allez aux informations personnelles.`,
          //"alert-in": `Mon compte`,
          "DEPARTMENTS28": `de transfert a été reçu et crédité sur votre compte. Vous pouvez ajouter votre <strong>IBAN</strong> pour effectuer un <strong>transfert externe</strong> vers votre <strong>banque</strong>.`,
          "DEPARTMENTS29": `Solde du compte :`,
          "DEPARTMENTS30": `Effectuer un transfert<i class="bi bi-arrow-right-short"></i> `,
          "DEPARTMENTS31": `Mon compte<i class="bi bi-arrow-right-short"></i>`,
          "DEPARTMENTS32": `Historique des transactions`,
          "DEPARTMENTS33": `Solde`,
          "DEPARTMENTS34": `Transfert`,
          "DEPARTMENTS35": `Mon compte`,
          "DEPARTMENTS36": `Déconnexion`,
          "DEPARTMENTS37": `Bonjour`,
          "DEPARTMENTS38": `Transfert bancaire reçu`,
          "DEPARTMENTS39": `Vous ne pouvez pas effectuer cette action car votre demande de prêt est toujours en cours d'examen.`,
          "DEPARTMENTS40": `Aucun transfert effectué`,
          "DEPARTMENTS41": `Détails personnels`,
          "DEPARTMENTS42": `Prénom*`,
          "DEPARTMENTS43": `Nom de famille*`,
          "DEPARTMENTS44": `Date de naissance*`,
          "DEPARTMENTS45": `État civil*`,
          "DEPARTMENTS46": `Célibataire`,
          "DEPARTMENTS47": `Marié`,
          "DEPARTMENTS48": `Email`,
          "DEPARTMENTS49": `Adresse actuelle*`,
          "DEPARTMENTS50": `État*`,
          "DEPARTMENTS51": `Ville*`,
          "DEPARTMENTS52": `Code postal*`,
          "DEPARTMENTS53": `<i class="arrow_left"></i> précédent`,
          "DEPARTMENTS54": `suivant<i class="arrow_right"></i>`,
          "DEPARTMENTS55": `détails du prêt non définis.`,
          "DEPARTMENTS56": ` Allez aux détails du prêt.`,
          "DEPARTMENTS57": `Vous avez déjà défini vos informations personnelles.`,
          "DEPARTMENTS58": ` Allez télécharger le document.`,
          "DEPARTMENTS59": `Politique`,
          "DEPARTMENTS60": `<h2>Politique de Confidentialité</h2>
          </div>
          <div class="card-body" id="DEPARTMENTS60">
              <h5>1. Introduction</h5>
              <p>
                  Nous attachons une grande importance à votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
              </p>
              <h5>2. Informations que Nous Collectons</h5>
              <p>
                  Nous pouvons collecter des informations d'identification personnelle (Nom, Adresse e-mail, Numéro de téléphone, etc.) et des informations d'identification non personnelles (Type de navigateur, Adresse IP, etc.).
              </p>
              <h5>3. Comment Nous Utilisons Vos Informations</h5>
              <p>
                  Les informations que nous collectons sont utilisées pour personnaliser votre expérience, améliorer notre site Web, traiter les transactions, envoyer des e-mails périodiques et améliorer le service client.
              </p>
              <h5>4. Partage de Vos Informations</h5>
              <p>
                  Nous ne vendons, n'échangeons ni ne transférons autrement vos informations d'identification personnelle à des tiers, sauf lorsque la loi l'exige ou pour protéger nos droits.
              </p>
              <h5>5. Sécurité des Données</h5>
              <p>
                  Nous adoptons des pratiques appropriées de collecte, de stockage et de traitement des données pour protéger contre l'accès non autorisé, la modification, la divulgation ou la destruction de vos informations personnelles.
              </p>
              <h5>6. Modifications de Cette Politique de Confidentialité</h5>
              <p>
                  Nous pouvons mettre à jour cette politique de confidentialité à tout moment. Lorsque cela se produit, nous réviserons la date de mise à jour en bas de cette page.
              </p>
              <h5>7. Votre Consentement</h5>
              <p>
                  En utilisant notre site, vous consentez à notre politique de confidentialité.
              </p>
              <h5>8. Contactez-Nous</h5>
              <p>
                  Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à [email@example.com].
              </p>`,
"DEPARTMENTS61": `Conditions`,
"DEPARTMENTS62": `
          <h2>Conditions et Termes du Prêt</h2>
          </div>
          <div class="card-body">
              <h5>1. Inscription</h5>
              <p>
                  Pour demander un prêt, vous devez d'abord créer un compte sur notre plateforme. Fournissez votre adresse e-mail et définissez un mot de passe. Vérifiez votre compte par l'e-mail de confirmation qui vous a été envoyé.
              </p>
              <h5>2. Détails du Prêt</h5>
              <p>
                  Sélectionnez le type et le montant de prêt dont vous avez besoin. Précisez la durée du prêt et tout autre détail pertinent dans le formulaire de demande de prêt.
              </p>
              <h5>3. Détails Personnels</h5>
              <p>
                  Remplissez vos informations personnelles, y compris votre nom complet, adresse, date de naissance, statut d'emploi et détails de revenu. Assurez-vous que toutes les informations fournies sont exactes et à jour.
              </p>
              <h5>4. Téléchargement de Documents</h5>
              <p>
                  Téléchargez les documents nécessaires pour soutenir votre demande, tels que la preuve d'identité, d'adresse, de revenu et tout autre document requis par le prêteur.
              </p>
              <h5>5. Pas de Relations Externes</h5>
              <p>
                  Vous n'êtes pas autorisé à interagir avec une autre structure ou organisation dans l'exécution de ce projet sans l'autorisation de l'entreprise Becare.
              </p>
              <h5>6. Vérification</h5>
              <p>
                  Notre équipe peut effectuer des évaluations contre-expertes par un géomètre pour assurer la surface effective du terrain, et par un agronome pour confirmer la richesse nutritive du sol et la validité des semences de maïs et des boutures de manioc.
              </p>
              <h5>7. Impact Météorologique</h5>
              <p>
                  Veuillez être conscient que les projets agricoles peuvent être affectés par des conditions météorologiques. Nous ne sommes pas responsables des interruptions causées par des facteurs climatiques.
              </p>
          </div>`,

          }
        },
        es:{
          translation : {
            "INDEXID1": "iniciar sesión",
            "INDEXID2": "Iniciar sesión",
            "INDEXID3": "Correo electrónico",
            "yourEmail": "email",
            "INDEXID5": "contraseña",
            "yourPassword": "contraseña",
            "INDEXID7": "Iniciar sesión",
            "INDEXID8": "Regístrate con tu correo electrónico <a href=\"emailregister.html\">Haz clic aquí</a>",
            "INDEXID9": "Puedes registrarte con tu teléfono <a href=\"login.html\">Haz clic aquí</a>",
            "INDEXID10": "éxito",
            "INDEXID11": "¡Te has conectado con éxito!",
            "INDEXID12": "¡Aún no has validado tu correo electrónico!",
            "INDEXID13": "Error",
            "INDEXID14XXX": "¡El usuario no existe con esta dirección de correo electrónico!",
            "INDEXID15": "Error",
            "INDEXID16": "¡Contraseña incorrecta!",
            "INDEXID17": "Error",
            "INDEXID18": "El usuario no existe o tu inicio de sesión es incorrecto.",
            "INDEXID19": "Ingresa el código de verificación que recibiste por SMS:",
            "INDEXID21X": "Teléfono",
            "INDEXID21": "Puedes iniciar sesión con tu correo electrónico <a href=\"emaillogin.html\">Haz clic aquí</a>",
            "INDEXID22": "Registrarse",
            "INDEXID22X": "Registrarse",
            "INDEXID24": "Inicia sesión con tu correo electrónico <a href=\"emaillogin.html\">Haz clic aquí</a>",
            "INDEXID25": "Puedes iniciar sesión con tu teléfono <a href=\"login.html\">Haz clic aquí</a>",
            "INDEXID26": "Te has registrado con éxito.",
            "INDEXID27": "Revisa tu bandeja de entrada para validar tu correo electrónico. ¡Gracias por tu interés!",
            "INDEXID28": "Error al enviar el correo electrónico de verificación",
            "INDEXID29": "La dirección de correo electrónico ya está siendo utilizada por otra cuenta",
            "INDEXID30": "Inicio",
            "INDEXID31": "Sobre nosotros",
            "INDEXID32": "Términos",
            "INDEXID33": "Política",
            "INDEXID34": "Contáctanos",
            "INDEXID35": "Tu <span class=\"underline-shape\">préstamo</span> facilitado.",
            "INDEXID36": `Harlit Finance, ideal para quienes quieren hacer una diferencia mientras prestan pequeñas cantidades de dinero. 
            Nuestro modelo de microcrédito da acceso a oportunidades que muchas personas no habrían tenido de otra manera.",
            "INDEXID37": "Solicitar un préstamo`,
            "INDEXID38": "5K+ ⭐ Usuarios activos",
            "INDEXID39": `<span class="underline-shape">Acerca de nosotros</span>`,
            "INDEXID40": `<span class="underline-shape">Harlit Finance</span> es una organización sin fines de lucro que permite a las personas otorgar préstamos a emprendedores y estudiantes en todo el mundo.`,
            "INDEXID41": `<h3>Impacto social</h3>
                      <p>Cada préstamo ayuda a mejorar las condiciones de vida de los prestatarios y sus comunidades.</p>`,
            "INDEXID42": `<h3>Participación mundial</h3>
                                      <p>Los prestamistas pueden apoyar proyectos en más de 80 países.</p>`,
            "INDEXID43": `<h3>Transparencia</h3>
                                      <p>Harlit Finance ofrece total transparencia sobre cómo se utilizan los fondos.</p>`,
            "INDEXID44": `<span class="short-title-2 wow fadeInUp">NUESTRO PROCESO</span>
                      <h1 class="wow fadeInUp">Obtén un préstamo en 4
                      pasos simples <span class="underline-shape">proceso</span>
                       </h1>
                      <p class="wow fadeInUp" data-wow-delay="0.3s">Aquí hay un proceso simplificado para obtener un préstamo en cuatro pasos</p>`,
            "INDEXID45": `<h2 class="number">01</h2>
                       <h4>Regístrate</h4>
                        <p>Crea una cuenta en la plataforma del prestamista proporcionando tu dirección de correo electrónico, configurando una contraseña, 
                        y verificando tu cuenta a través del teléfono.</p>`,
            "INDEXID46": `<h2 class="number">02</h2>
                                              <h4>Detalles del préstamo</h4>
                                              <p>Selecciona el tipo y monto del préstamo que necesitas. Especifica la duración del préstamo y cualquier otro detalle relevante.
                                              </p>`,
            "INDEXID47": `<h2 class="number">03</h2>
                                              <h4>Detalles personales</h4>
                                              <p>Completa tu información personal, incluyendo tu nombre completo, dirección, fecha de nacimiento, 
                                                estado laboral y detalles de ingresos.
                                              </p>`,
            "INDEXID48": `<h2 class="number">04</h2>
                                              <h4>Carga de documentos</h4>
                                              <p>Sube los documentos necesarios para respaldar tu solicitud, como prueba de identidad, dirección, ingresos y cualquier otro documento requerido por el prestamista.
                                              </p>`,
            "INDEXID49": `<span class="short-title-2">Alcance mundial</span>
                              <h1>Nuestra base de clientes<br> llega <span class="underline-shape">a todo el mundo</span></h1>`,
            "INDEXID50": `<span class="short-title-2">Calculadora de préstamos</span>
                              <h1 class="wow fadeInUp"><span class="underline-shape">Calcula</span> tu préstamo<br>
                                  y obtén detalles del préstamo
                              </h1>`,
            "INDEXID51": `<h4>Calculadora de préstamos</h4>
                                          <div class="range-label mt-40">Duración del préstamo</div>`,
            "yearTab-tab": `Anual`,
            "monthTab-tab": `Mensual`,
            "weekTab-tab": `Semanal`,
            "INDEXID55": `Monto del préstamo`,
            "INDEXID56": `Tasa de interés`,
            "INDEXID57": `Duración del préstamo`,
            "INDEXID58": `Fecha de inicio`,
            "loanStartDate": `Seleccionar fecha`,
            "loanEndDate": `Seleccionar fecha`, 
            "INDEXID59": `Fecha de fin`,
            "INDEXID60": `<div class="pie-wrapper mt-25" id="loan_graph_circle">
                                              <div class="label">Monto total<h2 class="LoanTotalAmount"></h2>
                                              </div>
                                              <div class="pie">
                                                  <div class="left-side half-circle"></div>
                                                  <div class="right-side half-circle"></div>
                                              </div>
                                              <div class="circle-border"></div>
                                          </div>
                                          <div class="graph-indicator">
                                              <div><span class="blue-dot"></span> Monto EMI</div>
                                              <div><span class="orange-dot"></span> Interés a pagar</div>
                                          </div>
                                          <ul class="loan-calculation list-unstyled">
                                              <li>
                                                  <span class="label">Monto EMI (Principal + Interés)</span>
                                                  <span class="amount LoanTotalAmount"></span>
                                              </li>
                                              <li>
                                                  <span class="label">Interés a pagar</span>
                                                  <span class="amount" id="InterestPayable"></span>
                                              </li>
                                              <li>
                                                  <span class="label">Duración del préstamo</span>
                                                  <span class="amount LoanTotalDuration"></span>
                                              </li>
                                              <li>
                                                  <span class="label">Tu monto EMI</span>
                                                  <span class="amount" id="emiAmount"></span>
                                              </li>
                                          </ul>
                                          <a href="loan-details.html" class="theme-btn theme-btn-lg mt-20 w-100">Aplica ahora
                                    <i class="arrow_right"></i></a>`,
            "INDEXID61": `Confiado por más de <span>10,000+</span> clientes en todo el mundo`,
            "INDEXID62": `<h2>Pruébalo gratis</h2>
                                          <p>Elige Harlit Finance, un modelo de microcrédito para financiar proyectos que ayudan a combatir la pobreza y apoyar la innovación.</p>
                                          <a href="#" class="wow fadeInUp theme-btn theme-btn-lg">Comienza ahora <i  class="arrow_right-up"></i></a>`,
            "INDEXID63": `<p class="copyright-text"><a href="terms.html">Términos</a><a href="politique.html">Política de privacidad</a></p>`,
            "INDEXID64": `Monto total<h2 class="LoanTotalAmount" id="LoanTotalAmount1"></h2> `,
            "INDEXID65": `<div><span class="blue-dot"></span> Monto EMI</div>
                                    <div><span class="orange-dot"></span> Interés a pagar</div>`,
            "INDEXID66": `Monto EMI (Principal + Interés)`,
            "INDEXID67": `Interés a pagar`,
            "INDEXID68": `Duración del préstamo`,
            "accountId": `cuenta`,
            "bankId": `Banco`,
            "INDEXID69": `Tu monto EMI`,
            "WithdrawalId": `Transfiere tu préstamo`,
            "INDEXID70": `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"/>
                      </svg> Ir a tu tablero`,
            "INDEXID71": `Nombre completo *`,
            "INDEXID77": `IBAN *`, 
            "INDEXID78": `BIC/SWIFT *`,
            "TERMES1": `Nombre del Banco *`,
            "TERMES2": `País *`, 
            "TERMES3": `Monto *`, 
            "soldeId": `Monto`,
            "submitid": `Enviar`,
            "TERMES4": `Actualización exitosa`,
            "TERMES5": `¡La información bancaria ha sido actualizada!`,
            "TERMES6": `Carga de documentos`,
            "TERMES7": ` <div class="number"><i class="icon_check"></i> <span>1</span></div> Detalles del préstamo`,
                      "TERMES71XB":`<div class="number"><i class="icon_check"></i> <span>2</span></div>
                                                  Detalles personales`,
                      "TERMES71XC":`<div class="number"><i class="icon_check"></i> <span>3</span></div>
                                                  Carga de documentos`,
          
                      "TERMES8": `Documento de identificación. Documento de identificación válido emitido por el gobierno. Lado frontal y posterior. Documento de identificación original.
              Foto completa. Todas las partes del documento de identificación deben ser visibles. Las cuatro esquinas
              del documento de identificación deben ser visibles en la foto. El documento de identificación debe ser original y válido. El documento de identificación
              debe ser muy claro. (Por favor adjunte el archivo) *`,
              "TERMES9": `Por la presente, acepto que la información proporcionada es verdadera, precisa y completa a la fecha de envío de esta
                          solicitud. **`,
              "TERMES10": `<i class="arrow_left"></i> anterior`,
              "TERMES11": `¡La información ha sido actualizada!`,
              "TERMES12": `Archivo no seleccionado`,
              "DEPARTMENTS1": `Has saltado pasos`,
              "DEPARTMENTS2": `Regresar.`,
              "DEPARTMENTS3": `Ya has establecido tus datos personales.`,
              "DEPARTMENTS4": `Tu solicitud de préstamo está siendo revisada.`,
              "DEPARTMENTS5": `Tu solicitud de préstamo está siendo revisada`,
              "captureBtn": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-camera-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
                          </svg> Captura de Foto`,
              "DEPARTMENTS6": `Felicidades`,
              "DEPARTMENTS7": `¡Tu cuenta ha sido finalizada!`,
              "DEPARTMENTS8": `Detalles del préstamo`,
              "DEPARTMENTS9": `Elige tu tipo de préstamo`,
              "DEPARTMENTS10": `Préstamo personal`,
              "DEPARTMENTS11": `Préstamo hipotecario`,
              "DEPARTMENTS12": `Préstamo comercial`,
              "DEPARTMENTS13": `Préstamo para automóviles`,
              "DEPARTMENTS14": `Elige tu tipo de financiamiento`,
              "DEPARTMENTS15": `Financiamiento de deuda`,
              "DEPARTMENTS16": `Financiamiento de capital`,
              "DEPARTMENTS17": `Elige tu servicio bancario preferido`,
              "DEPARTMENTS18": `Banca individual`,
              "DEPARTMENTS19": `Banca empresarial`,
              "DEPARTMENTS20": `Banca digital`,
              "DEPARTMENTS21": `Préstamos`,
              "DEPARTMENTS22": `El monto de tu préstamo`,
              "DEPARTMENTS23": `Duración del préstamo`,
              "inlineRadio1": `3 años`,
              "inlineRadio2": `5 años`,
              "inlineRadio3": `6 años`,
              "inlineRadio4": `8 años`,
              "inlineRadio5": `10 años`,
              "DEPARTMENTS24": `siguiente<i class="arrow_right"></i>.`,
              "DEPARTMENTS25": `No todos los campos están completos`,
              "DEPARTMENTS26": `Ya has establecido los detalles de tu préstamo.`,
              "DEPARTMENTS27": `Ve a los detalles personales.`,
              //"alert-in": `Mi cuenta`,
              "DEPARTMENTS28": `han sido recibidos y acreditados en su cuenta. Puede agregar su <strong>IBAN</strong> para realizar una <strong>transferencia externa</strong> a su <strong>banco</strong>.`,
              "DEPARTMENTS29": `Saldo de la cuenta :`,
              "DEPARTMENTS30": `Realizando una transferencia<i class="bi bi-arrow-right-short"></i> `,
              "DEPARTMENTS31": `Mi cuenta<i class="bi bi-arrow-right-short"></i>`,
              "DEPARTMENTS32": `Historial de transacciones`,
              "DEPARTMENTS33": `Saldo`,
              "DEPARTMENTS34": `Transferencia`,
              "DEPARTMENTS35": `Mi cuenta`,
              "DEPARTMENTS36": `Cerrar sesión`,
              "DEPARTMENTS37": `Hola`,
              "DEPARTMENTS38": `Transferencia bancaria recibida`,
              "DEPARTMENTS39": `No puedes realizar esta acción porque tu solicitud de préstamo aún está en revisión.`,
              "DEPARTMENTS40": `No se realizaron transferencias`,
              "DEPARTMENTS41": `Detalles personales`,
              "DEPARTMENTS42": `Nombre*`,
              "DEPARTMENTS43": `Apellido*`,
              "DEPARTMENTS44": `Fecha de nacimiento*`,
              "DEPARTMENTS45": `Estado civil*`,
              "DEPARTMENTS46": `Soltero`,
              "DEPARTMENTS47": `Casado`,
              "DEPARTMENTS48": `Email`,
              "DEPARTMENTS49": `Dirección actual*`,
              "DEPARTMENTS50": `Estado*`,
              "DEPARTMENTS51": `Ciudad*`,
              "DEPARTMENTS52": `Código postal*`,
              "DEPARTMENTS53": `<i class="arrow_left"></i> anterior`,
              "DEPARTMENTS54": `siguiente<i class="arrow_right"></i>`,
              "DEPARTMENTS55": `detalles del préstamo no establecidos.`,
              "DEPARTMENTS56": ` Ve a los detalles del préstamo.`,
              "DEPARTMENTS57": `Ya has establecido tus datos personales.`,
              "DEPARTMENTS58": ` Ve a cargar el documento.`,
              "DEPARTMENTS59": `Política`,
              "DEPARTMENTS60": `<h2>Política de Privacidad</h2>
            </div>
            <div class="card-body" id="DEPARTMENTS60">
                <h5>1. Introducción</h5>
                <p>
                    Valoramos su privacidad y estamos comprometidos a proteger sus datos personales. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos su información.
                </p>
                <h5>2. Información que Recopilamos</h5>
                <p>
                    Podemos recopilar información de identificación personal (Nombre, Dirección de correo electrónico, Número de teléfono, etc.) e información de identificación no personal (Tipo de navegador, Dirección IP, etc.).
                </p>
                <h5>3. Cómo Utilizamos su Información</h5>
                <p>
                    La información que recopilamos se utiliza para personalizar su experiencia, mejorar nuestro sitio web, procesar transacciones, enviar correos electrónicos periódicos y mejorar el servicio al cliente.
                </p>
                <h5>4. Compartiendo su Información</h5>
                <p>
                    No vendemos, intercambiamos ni transferimos de otro modo su información de identificación personal a terceros, excepto cuando lo exija la ley o para proteger nuestros derechos.
                </p>
                <h5>5. Seguridad de los Datos</h5>
                <p>
                    Adoptamos prácticas adecuadas de recopilación, almacenamiento y procesamiento de datos para protegerse contra el acceso no autorizado, la alteración, la divulgación o la destrucción de su información personal.
                </p>
                <h5>6. Cambios en Esta Política de Privacidad</h5>
                <p>
                    Podemos actualizar esta política de privacidad en cualquier momento. Cuando lo hagamos, revisaremos la fecha de actualización al final de esta página.
                </p>
                <h5>7. Su Consentimiento</h5>
                <p>
                    Al utilizar nuestro sitio, usted consiente nuestra política de privacidad.
                </p>
                <h5>8. Contáctenos</h5>
                <p>
                    Si tiene alguna pregunta sobre esta Política de Privacidad, comuníquese con nosotros en [email@example.com].
                </p>`,
  "DEPARTMENTS61": `Términos`,
  "DEPARTMENTS62": `
            <h2>Términos y Condiciones del Préstamo</h2>
            </div>
            <div class="card-body">
                <h5>1. Registro</h5>
                <p>
                    Para solicitar un préstamo, primero debe crear una cuenta en nuestra plataforma. Proporcione su dirección de correo electrónico y establezca una contraseña. Verifique su cuenta a través del correo electrónico de confirmación que se le envió.
                </p>
                <h5>2. Detalles del Préstamo</h5>
                <p>
                    Seleccione el tipo y la cantidad de préstamo que necesita. Especifique el plazo del préstamo y cualquier otro detalle relevante en el formulario de solicitud de préstamo.
                </p>
                <h5>3. Detalles Personales</h5>
                <p>
                    Complete su información personal, incluyendo su nombre completo, dirección, fecha de nacimiento, estado laboral y detalles de ingresos. Asegúrese de que toda la información proporcionada sea precisa y esté actualizada.
                </p>
                <h5>4. Carga de Documentos</h5>
                <p>
                    Cargue los documentos necesarios para respaldar su solicitud, como prueba de identidad, dirección, ingresos y cualquier otro documento requerido por el prestamista.
                </p>
                <h5>5. No Relaciones Externas</h5>
                <p>
                    No se le permite interactuar con ninguna otra estructura u organización en la ejecución de este proyecto sin el permiso de la empresa Becare.
                </p>
                <h5>6. Verificación</h5>
                <p>
                    Nuestro equipo puede realizar evaluaciones contrainformes por parte de un agrimensor para garantizar la superficie efectiva del terreno, y por parte de un agrónomo para confirmar la riqueza nutritiva del suelo y la validez de las semillas de maíz y los esquejes de yuca.
                </p>
                <h5>7. Impacto Meteorológico</h5>
                <p>
                    Tenga en cuenta que los proyectos agrícolas pueden verse afectados por las condiciones meteorológicas. No somos responsables de las interrupciones causadas por factores climáticos.
                </p>
            </div>`


          }
        },
        ar:{
          translation : {
            "INDEXID1": "تسجيل الدخول",
            "INDEXID2": "تسجيل الدخول",
            "INDEXID3": "البريد الإلكتروني",
            "yourEmail": "البريد الإلكتروني",
            "INDEXID5": "كلمة المرور",
            "yourPassword": "كلمة المرور",
            "INDEXID7": "تسجيل الدخول",
            "INDEXID8": "سجل باستخدام بريدك الإلكتروني <a href=\"emailregister.html\">اضغط هنا</a>",
            "INDEXID9": "يمكنك التسجيل باستخدام رقم هاتفك <a href=\"login.html\">اضغط هنا</a>",
            "INDEXID10": "نجاح",
            "INDEXID11": "لقد قمت بتسجيل الدخول بنجاح!",
            "INDEXID12": "لم تقم بعد بالتحقق من بريدك الإلكتروني!",
            "INDEXID13": "خطأ",
            "INDEXID14XXX": "لا يوجد مستخدم بهذا العنوان البريدي!",
            "INDEXID15": "خطأ",
            "INDEXID16": "كلمة المرور غير صحيحة!",
            "INDEXID17": "خطأ",
            "INDEXID18": "لا يوجد مستخدم أو أن تسجيل الدخول الخاص بك غير صحيح.",
            "INDEXID19": "أدخل رمز التحقق الذي تلقيته عبر الرسائل القصيرة:",
            "INDEXID21X": "الهاتف",
            "INDEXID21": "يمكنك تسجيل الدخول باستخدام بريدك الإلكتروني <a href=\"emaillogin.html\">اضغط هنا</a>",
            "INDEXID22": "سجل",
            "INDEXID22X": "سجل",
            "INDEXID24": "تسجيل الدخول باستخدام بريدك الإلكتروني <a href=\"emaillogin.html\">اضغط هنا</a>",
            "INDEXID25": "يمكنك تسجيل الدخول باستخدام رقم هاتفك <a href=\"login.html\">اضغط هنا</a>",
            "INDEXID26": "لقد تم تسجيلك بنجاح.",
            "INDEXID27": "تحقق من صندوق بريدك للتحقق من بريدك الإلكتروني. شكرًا لاهتمامك!",
            "INDEXID28": "خطأ في إرسال البريد الإلكتروني للتحقق",
            "INDEXID29": "عنوان البريد الإلكتروني مستخدم بالفعل بواسطة حساب آخر",
            "INDEXID30": "الصفحة الرئيسية",
            "INDEXID31": "معلومات عنا",
            "INDEXID32": "الشروط",
            "INDEXID33": "سياسة",
            "INDEXID34": "اتصل بنا",
            "INDEXID35": "قرضك <span class=\"underline-shape\">أسهل.</span>",
            "INDEXID36": "هارليت فاينانس، مثالي لمن يرغبون في إحداث فرق أثناء إقراض مبالغ صغيرة من المال.   نموذجنا للتمويل الصغير يوفر الوصول إلى الفرص التي لم يكن ليحصل عليها الكثيرون بطريقة أخرى.",
            "INDEXID37": "قدم طلبًا للحصول على قرض",
            "INDEXID38": "5K+ ⭐ مستخدمين نشطين",
            "INDEXID39": `<span class="underline-shape">من نحن</span>`,
  "INDEXID40": `<span class="underline-shape">Harlit Finance</span> هي منظمة غير ربحية تتيح للأشخاص تقديم القروض للرواد الطلاب في جميع أنحاء العالم.`,
  "INDEXID41": `<h3>الأثر الاجتماعي</h3>
            <p>كل قرض يساعد في تحسين ظروف المعيشة للمقترضين ومجتمعاتهم.</p>`,
  "INDEXID42": `<h3>المشاركة العالمية</h3>
                            <p>يمكن للمقرضين دعم المشاريع في أكثر من 80 دولة.</p>`,
  "INDEXID43": `<h3>الشفافية</h3>
                            <p>تقدم Harlit Finance شفافية كاملة حول كيفية استخدام الأموال.</p>`,
  "INDEXID44": `<span class="short-title-2 wow fadeInUp">عمليتنا</span>
            <h1 class="wow fadeInUp">احصل على قرض من 4
            خطوات بسيطة <span class="underline-shape">العملية</span>
             </h1>
            <p class="wow fadeInUp" data-wow-delay="0.3s">إليك عملية مبسطة للحصول على قرض في أربع خطوات</p>`,
  "INDEXID45": `<h2 class="number">01</h2>
             <h4>سجل</h4>
              <p>قم بإنشاء حساب على منصة الممول من خلال تقديم عنوان بريدك الإلكتروني، وتعيين كلمة مرور، 
              والتحقق من حسابك عبر الهاتف.</p>`,
  "INDEXID46": `<h2 class="number">02</h2>
                                    <h4>تفاصيل القرض</h4>
                                    <p>اختر نوع ومبلغ القرض الذي تحتاجه. حدد مدة القرض وأي تفاصيل ذات صلة أخرى.
                                    </p>`,
  "INDEXID47": `<h2 class="number">03</h2>
                                    <h4>تفاصيل شخصية</h4>
                                    <p>املأ معلوماتك الشخصية، بما في ذلك اسمك الكامل، عنوانك، تاريخ ميلادك، 
                                      حالة العمل، وتفاصيل الدخل.
                                    </p>`,
  "INDEXID48": `<h2 class="number">04</h2>
                                    <h4>تحميل الوثائق</h4>
                                    <p>قم بتحميل الوثائق اللازمة لدعم طلبك، مثل إثبات الهوية، العنوان، الدخل، وأي وثائق أخرى مطلوبة من قبل المقرض.
                                    </p>`,
  "INDEXID49": `<span class="short-title-2">الوصول العالمي</span>
                    <h1>قاعدة عملائنا<br> تصل إلى <span class="underline-shape">العالمية</span></h1>`,
  "INDEXID50": `<span class="short-title-2">آلة حاسبة للقرض</span>
                    <h1 class="wow fadeInUp"><span class="underline-shape">احسب</span> قرضك<br>
                        واحصل على تفاصيل القرض
                    </h1>`,
  "INDEXID51": `<h4>آلة حاسبة للقرض</h4>
                                <div class="range-label mt-40">مدة القرض</div>`,
  "yearTab-tab": `سنوي`,
  "monthTab-tab": `شهري`,
  "weekTab-tab": `أسبوعي`,
  "INDEXID55": `مبلغ القرض`,
  "INDEXID56": `سعر الفائدة`,
  "INDEXID57": `مدة القرض`,
  "INDEXID58": `تاريخ البدء`,
  "loanStartDate": `حدد التاريخ`,
  "loanEndDate": `حدد التاريخ`, 
  "INDEXID59": `تاريخ الانتهاء`,
  "INDEXID60": `<div class="pie-wrapper mt-25" id="loan_graph_circle">
                                    <div class="label">المبلغ الإجمالي<h2 class="LoanTotalAmount"></h2>
                                    </div>
                                    <div class="pie">
                                        <div class="left-side half-circle"></div>
                                        <div class="right-side half-circle"></div>
                                    </div>
                                    <div class="circle-border"></div>
                                </div>
                                <div class="graph-indicator">
                                    <div><span class="blue-dot"></span> مبلغ EMI</div>
                                    <div><span class="orange-dot"></span> الفائدة المستحقة</div>
                                </div>
                                <ul class="loan-calculation list-unstyled">
                                    <li>
                                        <span class="label">مبلغ EMI (الأساسي + الفائدة)</span>
                                        <span class="amount LoanTotalAmount"></span>
                                    </li>
                                    <li>
                                        <span class="label">الفائدة المستحقة</span>
                                        <span class="amount" id="InterestPayable"></span>
                                    </li>
                                    <li>
                                        <span class="label">مدة القرض</span>
                                        <span class="amount LoanTotalDuration"></span>
                                    </li>
                                    <li>
                                        <span class="label">مبلغ EMI الخاص بك</span>
                                        <span class="amount" id="emiAmount"></span>
                                    </li>
                                </ul>
                                <a href="loan-details.html" class="theme-btn theme-btn-lg mt-20 w-100">قدم الآن
                          <i class="arrow_right"></i></a>`,
  "INDEXID61": `موثوق به من قبل أكثر من <span>10,000+</span> عميل في جميع أنحاء العالم`,
  "INDEXID62": `<h2>جربه مجانًا</h2>
                                <p>اختر Harlit Finance، نموذج التمويل الأصغر لمشاريع تمويل المشاريع التي تساعد في محاربة الفقر ودعم الابتكار.</p>
                                <a href="#" class="wow fadeInUp theme-btn theme-btn-lg">ابدأ الآن <i  class="arrow_right-up"></i></a>`,
  "INDEXID63": `<p class="copyright-text"><a href="terms.html">الشروط </a><a href="politique.html">سياسة الخصوصية</a></p>`,
  "INDEXID64": `المبلغ الإجمالي<h2 class="LoanTotalAmount" id="LoanTotalAmount1"></h2> `,
  "INDEXID65": `<div><span class="blue-dot"></span> مبلغ EMI</div>
                          <div><span class="orange-dot"></span> الفائدة المستحقة</div>`,
  "INDEXID66": `مبلغ EMI (الأساسي + الفائدة)`,
  "INDEXID67": `الفائدة المستحقة`,
  "INDEXID68": `مدة القرض`,
  "accountId": `حساب`,
  "bankId": `بنك`,
  "INDEXID69": `مبلغ EMI الخاص بك`,
  "WithdrawalId": `قم بتحويل قرضك`,
  "INDEXID70": `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"/>
            </svg> اذهب إلى لوحة القيادة`,
  "INDEXID71": `الاسم الكامل *`,
  "INDEXID77": `IBAN *`, 
  "INDEXID78": `BIC/SWIFT *`,
  "TERMES1": `اسم البنك *`,
  "TERMES2": `الدولة *`, 
  "TERMES3": `المبلغ *`, 
  "soldeId": `المبلغ`,
  "submitid": `إرسال`,
  "TERMES4": `تم التحديث بنجاح`,
  "TERMES5": `تم تحديث معلومات البنك!`,
  "TERMES6": `تحميل الوثائق`,
  "TERMES7": ` <div class="number"><i class="icon_check"></i> <span>1</span></div> تفاصيل القرض`,
    "TERMES71XB":` <div class="number"><i class="icon_check"></i> <span>2</span></div>
                                        تفاصيل شخصية`,
    "TERMES71XC":`   <div class="number"><i class="icon_check"></i> <span>3</span></div>
                                        تحميل الوثائق`,
            "TERMES8": `بطاقة الهوية. بطاقة هوية حكومية صالحة. الجانبان الأمامي والخلفي. بطاقة الهوية الأصلية.
            صورة كاملة. يجب أن تظهر جميع أجزاء بطاقة الهوية. يجب أن تظهر الزوايا الأربع
            لبطاقة الهوية في الصورة. يجب أن تكون الهوية أصلية وصالحة. يجب أن تكون بطاقة الهوية
            واضحة جدًا. (يرجى إرفاق الملف) *`,
"TERMES9": `أوافق بموجب هذه الوثيقة على أن المعلومات المقدمة صحيحة ودقيقة وكاملة اعتبارًا من تاريخ تقديم هذه
            الطلب. **`,
"TERMES10": `<i class="arrow_left"></i> السابق`,
"TERMES11": `تم تحديث المعلومات!`,
"TERMES12": `لم يتم اختيار ملف`,
"DEPARTMENTS1": `لقد تخطيت خطوات`,
"DEPARTMENTS2": `العودة.`,
"DEPARTMENTS3": `لقد قمت بالفعل بتحديد تفاصيلك الشخصية.`,
"DEPARTMENTS4": `طلب القرض الخاص بك قيد المراجعة.`,
"DEPARTMENTS5": `طلب القرض الخاص بك قيد المراجعة`,
"captureBtn": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-camera-fill" viewBox="0 0 16 16">
              <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
              <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
            </svg> التقاط صورة`,
"DEPARTMENTS6": `مبروك`,
"DEPARTMENTS7": `تم إنهاء حسابك!`,
"DEPARTMENTS8": `تفاصيل القرض`,
"DEPARTMENTS9": `اختر نوع القرض الخاص بك`,
"DEPARTMENTS10": `قرض شخصي`,
"DEPARTMENTS11": `قرض عقاري`,
"DEPARTMENTS12": `قرض تجاري`,
"DEPARTMENTS13": `قرض سيارة`,
"DEPARTMENTS14": `اختر نوع التمويل الخاص بك`,
"DEPARTMENTS15": `تمويل الديون`,
"DEPARTMENTS16": `تمويل الأسهم`,
"DEPARTMENTS17": `اختر الخدمة المصرفية المفضلة لديك`,
"DEPARTMENTS18": `البنك الفردي`,
"DEPARTMENTS19": `البنك التجاري`,
"DEPARTMENTS20": `البنك الرقمي`,
"DEPARTMENTS21": `القروض`,
"DEPARTMENTS22": `مبلغ قرضك`,
"DEPARTMENTS23": `مدة القرض`,
"inlineRadio1": `3 سنوات`,
"inlineRadio2": `5 سنوات`,
"inlineRadio3": `6 سنوات`,
"inlineRadio4": `8 سنوات`,
"inlineRadio5": `10 سنوات`,
"DEPARTMENTS24": `التالي<i class="arrow_right"></i>.`,
"DEPARTMENTS25": `لم تكتمل جميع الحقول`,
"DEPARTMENTS26": `لقد قمت بالفعل بتحديد تفاصيل قرضك.`,
"DEPARTMENTS27": `انتقل إلى التفاصيل الشخصية.`,
//"alert-in": `حسابي`,
"DEPARTMENTS28":`دولار تم استلامها وتمت إضافتها إلى حسابك. يمكنك إضافة <strong>رقم IBAN</strong> الخاص بك لإجراء <strong>تحويل خارجي</strong> إلى <strong>بنكك</strong>.`,
"DEPARTMENTS29": `رصيد الحساب :`,
"DEPARTMENTS30": `إجراء تحويل<i class="bi bi-arrow-right-short"></i> `,
"DEPARTMENTS31": `حسابي<i class="bi bi-arrow-right-short"></i>`,
"DEPARTMENTS32": `سجل المعاملات`,
"DEPARTMENTS33": `الرصيد`,
"DEPARTMENTS34": `تحويل`,
"DEPARTMENTS35": `حسابي`,
"DEPARTMENTS36": `تسجيل الخروج`,
"DEPARTMENTS37": `مرحبًا`,
"DEPARTMENTS38": `تم استلام تحويل مصرفي`,
"DEPARTMENTS39": `لا يمكنك إجراء هذا الإجراء لأن طلب القرض الخاص بك لا يزال قيد المراجعة.`,
"DEPARTMENTS40": `لم يتم إجراء أي تحويلات`,
"DEPARTMENTS41": `التفاصيل الشخصية`,
"DEPARTMENTS42": `الاسم الأول*`,
"DEPARTMENTS43": `اسم العائلة*`,
"DEPARTMENTS44": `تاريخ الميلاد*`,
"DEPARTMENTS45": `الحالة الاجتماعية*`,
"DEPARTMENTS46": `أعزب`,
"DEPARTMENTS47": `متزوج`,
"DEPARTMENTS48": `البريد الإلكتروني`,
"DEPARTMENTS49": `العنوان الحالي*`,
"DEPARTMENTS50": `الولاية*`,
"DEPARTMENTS51": `المدينة*`,
"DEPARTMENTS52": `الرمز البريدي*`,
"DEPARTMENTS53": `<i class="arrow_left"></i> السابق`,
"DEPARTMENTS54": `التالي<i class="arrow_right"></i>`,
"DEPARTMENTS55": `لم يتم تحديد تفاصيل القرض.`,
"DEPARTMENTS56": ` انتقل إلى تفاصيل القرض.`,
"DEPARTMENTS57": `لقد قمت بالفعل بتحديد تفاصيلك الشخصية.`,
"DEPARTMENTS58": ` انتقل إلى تحميل الوثيقة.`,
"DEPARTMENTS59": `سياسة`,
"DEPARTMENTS60": `<h2>سياسة الخصوصية</h2>
            </div>
            <div class="card-body" id="DEPARTMENTS60">
                <h5>1. مقدمة</h5>
                <p>
                    نحن نقدر خصوصيتك وملتزمون بحماية بياناتك الشخصية. تشرح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها وحمايتها.
                </p>
                <h5>2. المعلومات التي نجمعها</h5>
                <p>
                    قد نجمع معلومات التعريف الشخصية (الاسم، عنوان البريد الإلكتروني، رقم الهاتف، إلخ) ومعلومات التعريف غير الشخصية (نوع المتصفح، عنوان IP، إلخ).
                </p>
                <h5>3. كيف نستخدم معلوماتك</h5>
                <p>
                    تُستخدم المعلومات التي نجمعها لتخصيص تجربتك، وتحسين موقعنا على الويب، ومعالجة المعاملات، وإرسال رسائل بريد إلكتروني دورية، وتحسين خدمة العملاء.
                </p>
                <h5>4. مشاركة معلوماتك</h5>
                <p>
                    نحن لا نبيع أو نتبادل أو ننقل بطريقة أخرى معلومات التعريف الشخصية الخاصة بك إلى أطراف خارجية، باستثناء ما هو مطلوب بموجب القانون أو لحماية حقوقنا.
                </p>
                <h5>5. أمان البيانات</h5>
                <p>
                    نتبنى ممارسات مناسبة لجمع البيانات وتخزينها ومعالجتها لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو التدمير.
                </p>
                <h5>6. تغييرات على سياسة الخصوصية هذه</h5>
                <p>
                    قد نقوم بتحديث سياسة الخصوصية هذه في أي وقت. عندما نفعل ذلك، سنراجع تاريخ التحديث في أسفل هذه الصفحة.
                </p>
                <h5>7. موافقتك</h5>
                <p>
                    باستخدام موقعنا، فإنك توافق على سياسة الخصوصية الخاصة بنا.
                </p>
                <h5>8. اتصل بنا</h5>
                <p>
                    إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على [email@example.com].
                </p>`,
  "DEPARTMENTS61": `الشروط`,
  "DEPARTMENTS62": `
            <h2>شروط وأحكام القرض</h2>
            </div>
            <div class="card-body">
                <h5>1. التسجيل</h5>
                <p>
                    للتقدم للحصول على قرض، يجب عليك أولاً إنشاء حساب على منصتنا. قدم عنوان بريدك الإلكتروني وقم بإنشاء كلمة مرور. تحقق من حسابك من خلال رسالة البريد الإلكتروني التأكيدية التي تم إرسالها إليك.
                </p>
                <h5>2. تفاصيل القرض</h5>
                <p>
                    اختر نوع ومبلغ القرض الذي تحتاجه. حدد مدة القرض وأي تفاصيل ذات صلة أخرى في نموذج طلب القرض.
                </p>
                <h5>3. التفاصيل الشخصية</h5>
                <p>
                    املأ معلوماتك الشخصية، بما في ذلك اسمك الكامل، عنوانك، تاريخ ميلادك، حالة العمل، وتفاصيل الدخل. تأكد من أن جميع المعلومات المقدمة دقيقة ومحدثة.
                </p>
                <h5>4. تحميل الوثائق</h5>
                <p>
                    قم بتحميل الوثائق اللازمة لدعم طلبك، مثل إثبات الهوية، العنوان، الدخل، وأي مستندات أخرى مطلوبة من قبل المقرض.
                </p>
                <h5>5. عدم وجود علاقات خارجية</h5>
                <p>
                    لا يُسمح لك بالتفاعل مع أي هيكل أو منظمة أخرى في تنفيذ هذا المشروع دون إذن من شركة Becare.
                </p>
                <h5>6. التحقق</h5>
                <p>
                    قد يقوم فريقنا بإجراء تقييمات مضادة من قبل مساح لضمان المساحة الفعالة للأرض، ومن قبل خبير زراعي لتأكيد غنى التربة بالعناصر الغذائية وصلاحية بذور الذرة وقطع الكسافا.
                </p>
                <h5>7. تأثير الطقس</h5>
                <p>
                    يرجى ملاحظة أن المشاريع الزراعية يمكن أن تتأثر بالظروف الجوية. نحن غير مسؤولين عن أي اضطرابات ناجمة عن العوامل المناخية.
                </p>
            </div>`
  }
        }

        
      
    }
    }, function(err, t) {
      // Traduire le contenu de la page après initialisation de i18next
      translatePage();
    });
  
    // Fonction pour traduire le contenu de la page
    function translatePage() {
      // Récupérez la description correspondant à la langue actuelle
      var description = i18next.t('IDTRANSLATE11');
  
      // Sélectionnez la balise <meta> de description
      var metaDescription = $("meta[name='description']");
  
      // Mettez à jour le contenu de la balise <meta> avec la description
      metaDescription.attr('content', description);
  
      // Récupérez le keywords correspondant à la langue actuelle
      var keywords = i18next.t('keywords');
  
      // Sélectionnez la balise <meta> de description
      var metaKeywords = $("meta[name='keywords']");
  
      // Mettez à jour le contenu de la balise <meta> avec la description  
      metaKeywords.attr('content', keywords);  
      //$("#INDEXID1").attr("placeholder", i18next.t("INDEXID1")); INDEXID3
      $("#INDEXID1").text(i18next.t("INDEXID1")); 
      $("#INDEXID2").text(i18next.t("INDEXID2"));
      $("#INDEXID3").html(i18next.t("INDEXID3"));
      $("#INDEXID4").text(i18next.t("INDEXID4")); 
      $("#yourEmail").attr("placeholder", i18next.t("yourEmail"));
      $("#yourPassword").attr("placeholder", i18next.t("yourPassword")); 
      $("#loanStartDate").attr("placeholder", i18next.t("loanStartDate"));  
      $("#soldeId").attr("placeholder", i18next.t("soldeId"));  
      $("#loanEndDate").attr("placeholder", i18next.t("loanEndDate")); 
      $("#INDEXID7").attr("value", i18next.t("INDEXID7")); 
      $("#INDEXID2W").attr("value", i18next.t("INDEXID7"));
      $("#submitid").attr("value", i18next.t("submitid"));
      $("#INDEXID4WWW").text(i18next.t("INDEXID4")); 
      $("#INDEXID5").text(i18next.t("INDEXID5"));
      $("#INDEXID6").text(i18next.t("INDEXID6")); 
      $("#INDEXID8").html(i18next.t("INDEXID8"));
      $("#INDEXID9").html(i18next.t("INDEXID9"));
      $("#INDEXID10").text(i18next.t("INDEXID10"));
      $("#INDEXID11").html(i18next.t("INDEXID11"));
      $("#INDEXID12").text(i18next.t("INDEXID12"));
      $("#INDEXID13").html(i18next.t("INDEXID13"));
      $("#INDEXID14XXX").text(i18next.t("INDEXID14XXX"));
      $("#INDEXID15").html(i18next.t("INDEXID15"));
      $("#INDEXID16").text(i18next.t("INDEXID16"));
      $("#INDEXID17").text(i18next.t("INDEXID17"));
      $("#INDEXID18").text(i18next.t("INDEXID18"));
      $("#INDEXID19").text(i18next.t("INDEXID19"));
      $("#INDEXID20").text(i18next.t("INDEXID12")); 
      $("#INDEXID21").html(i18next.t("INDEXID21"));
      $("#WithdrawalId").html(i18next.t("WithdrawalId"));
      $("#INDEXID22").html(i18next.t("INDEXID22"));
      $("#INDEXID22X").html(i18next.t("INDEXID22X"));
      $("#INDEXID23").attr("value", i18next.t("INDEXID7")); 
      $("#INDEXID24").html(i18next.t("INDEXID24"));
      $("#INDEXID25").html(i18next.t("INDEXID25"));
      $("#INDEXID26").html(i18next.t("INDEXID26"));
      $("#INDEXID27").html(i18next.t("INDEXID27"));
      $("#INDEXID29").html(i18next.t("INDEXID29"));
      $("#INDEXID30").html(i18next.t("INDEXID30"));
      $("#INDEXID31").html(i18next.t("INDEXID31"));
      $("#INDEXID32").html(i18next.t("INDEXID32"));
      $("#INDEXID33").html(i18next.t("INDEXID33"));
     // $("#alert-in").html(i18next.t("alert-in"));
      $("#INDEXID34").html(i18next.t("INDEXID34"));
      $("#INDEXID35").html(i18next.t("INDEXID35"));
      $("#INDEXID36").html(i18next.t("INDEXID36"));
      $("#INDEXID37").html(i18next.t("INDEXID37"));
      $("#INDEXID38").html(i18next.t("INDEXID38"));
      $("#INDEXID39").html(i18next.t("INDEXID39"));
      $("#INDEXID40").html(i18next.t("INDEXID40"));
      $("#INDEXID41").html(i18next.t("INDEXID41"));
      $("#INDEXID42").html(i18next.t("INDEXID42"));
      $("#INDEXID43").html(i18next.t("INDEXID43"));
      $("#INDEXID44").html(i18next.t("INDEXID44"));
      $("#INDEXID45").html(i18next.t("INDEXID45"));
      $("#INDEXID46").html(i18next.t("INDEXID46"));
      $("#INDEXID47").html(i18next.t("INDEXID47"));
      $("#INDEXID48").html(i18next.t("INDEXID48"));
      $("#INDEXID49").html(i18next.t("INDEXID49"));
      $("#INDEXID50").html(i18next.t("INDEXID50"));
      $("#INDEXID51").html(i18next.t("INDEXID51"));
      $("#yearTab-tab").html(i18next.t("yearTab-tab"));
      $("#monthTab-tab").html(i18next.t("monthTab-tab"));
      $("#weekTab-tab").html(i18next.t("weekTab-tab"));
      $("#INDEXID55").html(i18next.t("INDEXID55"));
      $("#INDEXID56").html(i18next.t("INDEXID56"));
      $("#INDEXID57").html(i18next.t("INDEXID57"));
      $("#INDEXID58").html(i18next.t("INDEXID58"));
      $("#INDEXID59").html(i18next.t("INDEXID59"));
      $("#INDEXID60").html(i18next.t("INDEXID60"));
      $("#INDEXID61").html(i18next.t("INDEXID61"));
      $("#INDEXID62").html(i18next.t("INDEXID62"));
      $("#INDEXID63").html(i18next.t("INDEXID63"));
      $("#INDEXID64").html(i18next.t("INDEXID64"));
      $("#INDEXID65").html(i18next.t("INDEXID65"));
      $("#INDEXID66").html(i18next.t("INDEXID66"));
      $("#INDEXID67").html(i18next.t("INDEXID67"));
      $("#INDEXID68").html(i18next.t("INDEXID68"));
      $("#INDEXID69").html(i18next.t("INDEXID69"));
      $("#INDEXID70").html(i18next.t("INDEXID70"));
      $("#INDEXID71").html(i18next.t("INDEXID71"));
      $("#INDEXID72").html(i18next.t("INDEXID2"));
      $("#INDEXID73").html(i18next.t("INDEXID3"));
      $("#INDEXID74").html(i18next.t("INDEXID4"));
      $("#INDEXID75").html(i18next.t("INDEXID5")); 
      $("#INDEXID76").html(i18next.t("INDEXID8"));
      $("#accountId").html(i18next.t("INDEXID8"));
      $("#bankId").html(i18next.t("INDEXID8"));
      $("#INDEXID77").html(i18next.t("INDEXID77")); 
      $("#INDEXID78").html(i18next.t("INDEXID78"));
      $("#TERMES1").html(i18next.t("TERMES1"));
      $("#TERMES2").html(i18next.t("TERMES2"));
      $("#TERMES3").html(i18next.t("TERMES3"));
      $("#TERMES4").html(i18next.t("TERMES4"));
      $("#TERMES5").html(i18next.t("TERMES5"));
      $("#TERMES6").html(i18next.t("TERMES6"));
      $("#TERMES7").html(i18next.t("TERMES7"));
      $("#TERMES71XB").html(i18next.t("TERMES71XB"));
      $("#TERMES71XC").html(i18next.t("TERMES71XC")); 
      $("#TERMES8").html(i18next.t("TERMES8"));
      $("#TERMES9").html(i18next.t("TERMES9"));
      $("#TERMES10").html(i18next.t("TERMES10"));
      $("#TERMES11").html(i18next.t("TERMES11")); 
      $("#TERMES12").html(i18next.t("TERMES12"));
      $("#captureBtn").html(i18next.t("captureBtn"));
      $("#DEPARTMENTS1").html(i18next.t("DEPARTMENTS1"));
      $("#DEPARTMENTS2").html(i18next.t("DEPARTMENTS2"));
      $("#DEPARTMENTS3").html(i18next.t("DEPARTMENTS3"));
      $("#DEPARTMENTS4").html(i18next.t("DEPARTMENTS4"));
      $("#DEPARTMENTS5").html(i18next.t("DEPARTMENTS5"));
      $("#DEPARTMENTS6").html(i18next.t("DEPARTMENTS6"));
      $("#DEPARTMENTS7").html(i18next.t("DEPARTMENTS7"));
      $("#DEPARTMENTS8").html(i18next.t("DEPARTMENTS8"));
      $("#DEPARTMENTS9").html(i18next.t("DEPARTMENTS9"));
      $("#DEPARTMENTS10").html(i18next.t("DEPARTMENTS10"));
      $("#DEPARTMENTS11").html(i18next.t("DEPARTMENTS11"));
      $("#DEPARTMENTS12").html(i18next.t("DEPARTMENTS12"));
      $("#DEPARTMENTS13").html(i18next.t("DEPARTMENTS13"));
      $("#DEPARTMENTS14").html(i18next.t("DEPARTMENTS14"));
      $("#DEPARTMENTS15").html(i18next.t("DEPARTMENTS15"));
      $("#DEPARTMENTS15").attr("value", i18next.t("DEPARTMENTS15")); 
      $("#DEPARTMENTS16").attr("value", i18next.t("DEPARTMENTS16")); 
      $("#DEPARTMENTS16").html(i18next.t("DEPARTMENTS16"));  
      $("#DEPARTMENTS17").html(i18next.t("DEPARTMENTS17"));
      $("#DEPARTMENTS18").html(i18next.t("DEPARTMENTS18"));
      $("#DEPARTMENTS19").html(i18next.t("DEPARTMENTS19"));
      $("#DEPARTMENTS20").html(i18next.t("DEPARTMENTS20"));

      $("#inlineRadio1x").html(i18next.t("inlineRadio1"));  
      $("#inlineRadio2x").html(i18next.t("inlineRadio2"));
      $("#inlineRadio3x").html(i18next.t("inlineRadio3"));
      $("#inlineRadio4x").html(i18next.t("inlineRadio4"));
      $("#inlineRadio5x").html(i18next.t("inlineRadio5"));
      $("#inlineRadio1").attr("value", i18next.t("inlineRadio1"));
      $("#inlineRadio2").attr("value", i18next.t("inlineRadio2"));
      $("#inlineRadio3").attr("value", i18next.t("inlineRadio3"));
      $("#inlineRadio4").attr("value", i18next.t("inlineRadio4"));
      $("#inlineRadio5").attr("value", i18next.t("inlineRadio5"));
      $("#DEPARTMENTS21").html(i18next.t("DEPARTMENTS21"));
      $("#DEPARTMENTS18").attr("value", i18next.t("DEPARTMENTS18"));
      $("#DEPARTMENTS19").attr("value", i18next.t("DEPARTMENTS19"));
      $("#DEPARTMENTS20").attr("value", i18next.t("DEPARTMENTS20"));
      $("#DEPARTMENTS21").attr("value", i18next.t("DEPARTMENTS21"));
      $("#DEPARTMENTS22").html(i18next.t("DEPARTMENTS22"));
      $("#DEPARTMENTS23").html(i18next.t("DEPARTMENTS23"));
      $("#DEPARTMENTS24").html(i18next.t("DEPARTMENTS24"));
      $("#DEPARTMENTS25").html(i18next.t("DEPARTMENTS25"));
      $("#DEPARTMENTS26").html(i18next.t("DEPARTMENTS26"));
      $("#DEPARTMENTS27").html(i18next.t("DEPARTMENTS27"));
      $("#DEPARTMENTS28").html(i18next.t("DEPARTMENTS28"));
      $("#DEPARTMENTS29").html(i18next.t("DEPARTMENTS29"));
      $("#DEPARTMENTS30").html(i18next.t("DEPARTMENTS30"));
      $("#DEPARTMENTS31").html(i18next.t("DEPARTMENTS31"));
      $("#DEPARTMENTS32").html(i18next.t("DEPARTMENTS32"));
      $("#DEPARTMENTS33").html(i18next.t("DEPARTMENTS33"));
      $("#DEPARTMENTS34").html(i18next.t("DEPARTMENTS34"));
      $("#DEPARTMENTS35").html(i18next.t("DEPARTMENTS35"));

      $("#DEPARTMENTS36").html(i18next.t("DEPARTMENTS36"));
      $("#DEPARTMENTS37").html(i18next.t("DEPARTMENTS37"));
      $("#DEPARTMENTS38").html(i18next.t("DEPARTMENTS38"));
      $("#DEPARTMENTS39").html(i18next.t("DEPARTMENTS39"));
      $("#DEPARTMENTS40").html(i18next.t("DEPARTMENTS40"));
      $("#DEPARTMENTS41").html(i18next.t("DEPARTMENTS41"));
      $("#DEPARTMENTS42").html(i18next.t("DEPARTMENTS42"));
      $("#DEPARTMENTS43").html(i18next.t("DEPARTMENTS43"));
      $("#DEPARTMENTS44").html(i18next.t("DEPARTMENTS44"));
      $("#DEPARTMENTS45").html(i18next.t("DEPARTMENTS45")); 
      $("#DEPARTMENTS46").html(i18next.t("DEPARTMENTS46"));
      $("#single").attr("value", i18next.t("single"));
      $("#married").attr("value", i18next.t("married")); 
      $("#DEPARTMENTS47").html(i18next.t("DEPARTMENTS47"));

      $("#DEPARTMENTS48").html(i18next.t("DEPARTMENTS48"));
      $("#DEPARTMENTS49").html(i18next.t("DEPARTMENTS49"));
      $("#DEPARTMENTS50").html(i18next.t("DEPARTMENTS50"));
      $("#DEPARTMENTS51").html(i18next.t("DEPARTMENTS51"));
      $("#DEPARTMENTS52").html(i18next.t("DEPARTMENTS52"));
      $("#DEPARTMENTS53").html(i18next.t("DEPARTMENTS53"));
      $("#DEPARTMENTS54").html(i18next.t("DEPARTMENTS54"));
      $("#DEPARTMENTS55").html(i18next.t("DEPARTMENTS55"));
      $("#DEPARTMENTS56").html(i18next.t("DEPARTMENTS56"));
      $("#DEPARTMENTS57").html(i18next.t("DEPARTMENTS57"));
      $("#DEPARTMENTS58").html(i18next.t("DEPARTMENTS58"));
      $("#DEPARTMENTS59").html(i18next.t("DEPARTMENTS59"));
      $("#DEPARTMENTS60").html(i18next.t("DEPARTMENTS60"));
      $("#DEPARTMENTS61").html(i18next.t("DEPARTMENTS61"));
      $("#DEPARTMENTS62").html(i18next.t("DEPARTMENTS62"));
    }   
    // Récupérer la langue sélectionnée à partir du stockage local
    var selectedLanguage = localStorage.getItem('selectedLanguage');
   //document.getElementById('lgId').innerHTML = `${selectedLanguage}`
    if (selectedLanguage) {
      // Changer la langue selon la valeur récupérée
      $("#language-select").val(selectedLanguage);
      i18next.changeLanguage(selectedLanguage);
    }
  // Écoutez l'événement personnalisé "translateClicked"
  document.addEventListener('translateClicked', () => {
    // Appelez la fonction de traduction lorsque l'événement est déclenché
    translateFunction();
    Swal.update({
      confirmButtonText: i18next.t('IDTRANSLATE6WXQSDF', { lng: selectedLanguage })
  });
  });
  
  // Définissez votre fonction de traduction
  function translateFunction() {
    var selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
     
      i18next.changeLanguage(selectedLanguage);
    }
    i18next.changeLanguage(selectedLanguage, function(err, t) {
      if (err) return console.error(err);
      translatePage();
    });
    console.log('Fonction de traduction appelée !');
  {/*setTimeout(()=>{
    Swal.update({
      confirmButtonText: i18next.t('IDTRANSLATE6WXQSDF', { lng: selectedLanguage })
  });
  }, 100)*/}
  }
    // Écouteur d'événement pour changer la langue
    $("#language-select li").on("click", function() {
      var selectedLanguage = $(this).find("img").attr("alt");
      const urlParams = new URLSearchParams(window.location.search);
      const selectedLanguagex = urlParams.get("lg");
       if(selectedLanguagex){
        const urlParamsx = new URLSearchParams(window.location.search);
        urlParamsx.set('lg', selectedLanguage);
        window.location.search = urlParamsx.toString();
        // Enregistrer la langue sélectionnée dans le stockage local
        localStorage.setItem('selectedLanguage', selectedLanguage);
        $('#language-select').hide();
        //location.reload();
        // Changer la langue avec i18next
        i18next.changeLanguage(selectedLanguage, function(err, t) {
        if (err) return console.error(err);
        translatePage();
      });
       }else{
        var selectedLanguage = $(this).find("img").attr("alt");
        // Enregistrer la langue sélectionnée dans le stockage local
        localStorage.setItem('selectedLanguage', selectedLanguage);
        $('#language-select').hide();
        location.reload();
        // Changer la langue avec i18next
        i18next.changeLanguage(selectedLanguage, function(err, t) {
        if (err) return console.error(err);
        translatePage();
      });
      }
  });
  
  });