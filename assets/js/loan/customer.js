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



var service_name = '';
var url = '';

var key2 = '';



  var deposit_list = firebase.database().ref().child("customer_care");


deposit_list.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    var content = '';






    snapshot.forEach(function (data) {



      var val = data.val();

      content += '<tr name="bc">';

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';


      content += '<td >' + val.service_name + '</td>';
      content += '<td >' + val.url + '</td>';
 



      // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';

      content += "<td style='text-align:center'>" + '<button type="button" class="btn" onclick=edit("' + data.key + '")><span class="layer"></span>Edit</button>' +


        "</td>";


      content += '</tr>';






    });






    $('#atttbl_posts_body').html(content);


  }


});


function edit(key) {

    key2 = key ;
  
    document.getElementById("userdata").style.display = "none"
  
    document.getElementById("prof2").style.display = "block"
  
  
  
    var ref5 = firebase.database().ref().child("customer_care").child(key);
  
  
    console.log(key)
  
  
    ref5.on("value", function (snapshot4) {
        if (snapshot4.exists()) {
  
  
  
          service_name = snapshot4.val().service_name;
          url = snapshot4.val().url;
    
     
  
  
  
  
  
  
        }
  

  $('#service_name').val(service_name);
  
    
  
        $('#url').val(url);

  
  
      })
  
  }
  

  function save32() {

  
  
  
  
   
    document.getElementById("userdata").style.display = "block"
  
  document.getElementById("prof2").style.display = "none"
  
  
  
  
  
  }




  
  function save222() {




    var didConfirm = confirm("Are you sure You want to Update ??");

    if (didConfirm == true) {


      const service_name= document.getElementById('service_name').value;
      const url = document.getElementById('url').value;
  

  
    
  
      var database = firebase.database();
  
  
      database.ref('customer_care').child(key2).set({
  
  
        'service_name': service_name,
        'url': url,
 
      
  
  
      }).then(() =>{
        window.location.href = "customer.html";
       });
  

    }

    else {
      return false;
  }


  
 

  
  
  
  
  }
