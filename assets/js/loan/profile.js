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



  var e_name = '';
var e_username = '';
var e_password = '';
var d_name = '';

var d_username = '';
var d_password = '';


var admin_u = firebase.database().ref().child("admin");


admin_u.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



        e_name = snapshot4.val().name;
        e_username = snapshot4.val().username;
        e_password = snapshot4.val().password;


        d_name = snapshot4.val().name;
        d_username = snapshot4.val().username;
        d_password = snapshot4.val().password;





    }




    $('#e_name').val(e_name);



    $('#e_username').val(e_username);
    $('#e_password').val(e_password);

 
    $('#d_name').html(d_name);
    $('#d_username').html(d_username);
    $('#d_password').html(d_password);



  });


  function save2() {



    var didConfirm = confirm("Are you sure You want to update??");

    if (didConfirm == true) {

        const e_name = document.getElementById('e_name').value;
        const e_username = document.getElementById('e_username').value;
        const e_password = document.getElementById('e_password').value;
    
    
        var database = firebase.database();
    
    
        database.ref('admin').set({
    
    
          'name': e_name,
          'username': e_username,
          'password': e_password,
        
    
    
        }).then(() =>{
          window.location.href = "profile.html";
         });

    }

    else {

        return false;
      }



  }


  var admin_u2 = firebase.database().ref().child("admin");

  var d_name2 = '';


admin_u2.on("value", function (snapshot4) {
    if (snapshot4.exists()) {






        d_name2 = snapshot4.val().name;
      




    }





 
    $('#d_name2').html(d_name2);




  });
