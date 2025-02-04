const firebaseConfig = {
    apiKey: "AIzaSyBYHfeYu_nB8tJLZKkjtC017kepwtnnkSg",
    authDomain: "loan-5d609.firebaseapp.com",
    databaseURL: "https://loan-5d609-default-rtdb.firebaseio.com",
    projectId: "loan-5d609",
    storageBucket: "loan-5d609.firebasestorage.app",
    messagingSenderId: "710671627106",
    appId: "1:710671627106:web:fec517824971c9a708723b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var total = '';
var ploan = '';
var aloan = '';
var tloan = '';
var activeuser = '';
var ac_loan_total = 0;
var pen_loan_total = 0;
var pen_depo_total = 0;
var total_deposit = 0 ;

var totaluser = firebase.database().ref().child("user-account");
var activeluser = firebase.database().ref().child("user-profile").orderByChild('status').equalTo('Active');;
var ac_loan = firebase.database().ref().child("loan").orderByChild('status').equalTo('Active');;
var pen_loan = firebase.database().ref().child("loan").orderByChild('status').equalTo('Pending');;
var pen_deposit = firebase.database().ref().child("deposit").orderByChild('status').equalTo('Pending');;

totaluser.once("value").then(function (snapshot) {

    if (snapshot.exists()) {

        total = snapshot.numChildren();

     

       // console.log('total user ' + total);



        $('#tuser').html(total);



    }


});



activeluser.once("value").then(function (snapshot) {

    if (snapshot.exists()) {

        activeuser = snapshot.numChildren();

     

        console.log('total user ' + activeuser);


        $('#activeuser').html(activeuser);
        



    }


});





ac_loan.once("value").then(function (snapshot) {

    if (snapshot.exists()) {

        ac_loan_total = snapshot.numChildren();

     

        console.log('total user ' + activeuser);


        $('#ac_loan').html(ac_loan_total);
        



    }


});



pen_loan.once("value").then(function (snapshot) {

    if (snapshot.exists()) {

        pen_loan_total = snapshot.numChildren();

     

        console.log('total user ' + activeuser);


        $('#pen_loan').html(pen_loan_total);
        



    }
    else{
        pen_loan_total = 0;

     

        


        $('#pen_loan').html(pen_loan_total);
    }


});


pen_deposit.once("value").then(function (snapshot) {

    if (snapshot.exists()) {

        pen_depo_total = snapshot.numChildren();

     

       


        $('#pen_depo').html(pen_depo_total);
        



    }
    else{
        pen_depo_total = 0;

     

        


        $('#pen_depo').html(pen_depo_total);
    }


});



var pendingloan = firebase.database().ref().child("deposit").orderByChild('status').equalTo('Active');



pendingloan.once("value").then(function (snapshot) {

    if (snapshot.exists()) {
  
      var content = '';
  
  
  
  
  
  
      snapshot.forEach(function (data) {
  
  
  
        var val = data.val();

        total_deposit = parseInt(total_deposit) +  parseInt(val.amount) ;
  
       
  
  
      });
  
  
  console.log("total deposit : "+total_deposit)
  
  $('#tdiposit').html(total_deposit.toLocaleString());
  
    }
  
  
  });


  var admin_u = firebase.database().ref().child("admin");

  var d_name = '';


admin_u.on("value", function (snapshot4) {
    if (snapshot4.exists()) {






        d_name = snapshot4.val().name;
      




    }





 
    $('#d_name').html(d_name);




  });

  