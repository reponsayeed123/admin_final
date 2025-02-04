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



var firstName = '';
var lastName = '';
var email = '';
var mobile = '';

var city = '';
var address = '';
var state = '';
var zipCode = '';
var id = '';
var jdate = '';

var accnumber = '';
var bankname = '';
var branchname = '';
var username = '';

var imgpreview = '';

var sta = '';
var friendnumber = '';
var nomineenumber = '' ;
var usernumber = '';

var ke = '';
var balance ="";
var pass ="";

var totalbalance = 0;

var pendingloan = '';
var activeloan = '';

var totaluser = firebase.database().ref().child("user-profile").orderByChild('status').equalTo('Active');;

const imgpr = document.getElementById('uploadedAvatar');


totaluser.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    var content = '';






    snapshot.forEach(function (data) {



      var val = data.val();

      content += '<tr name="bc">';

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';


      content += '<td >' + val.firstname + " " + val.lastname + '</td>';
      content += '<td >' + val.email + '</td>';
      content += '<td >' + val.joindate + '</td>';
      content += '<td >' + '<span style="font-size:14px;font-weight: 800;">৳ </span>' + val.balance + ".00" + '</td>';
      content += '<td >' + val.status + '</td>';


      // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';

      content += "<td style='text-align:center'>" + '<button type="button" class="btn" onclick=edit("' + data.key + '")><span class="layer"></span>Details</button>' +


        "</td>";


      content += '</tr>';






    });







    $('#atttbl_posts_body').html(content);


    let currentPage = 1;
    let rowsPerPage = 10;
    let totalPages;
    const pageNumbers = document.getElementById("pageNumbers");

    function paginateTable() {
      let table = document.getElementById("myTable");
      let rows = Array.from(table.rows).slice(1);
      totalPages = Math.ceil(rows.length / rowsPerPage);

      rows.forEach(row => row.style.display = "none");

      let start = (currentPage - 1) * rowsPerPage;
      let end = start + rowsPerPage;
      rows.slice(start, end).forEach(row => row.style.display = "");
      pageNumbers.innerHTML = "";
      createPageLink("<<", 1);
      createPageLink("<", currentPage - 1);

      let startPageNumber = currentPage < 5 ? 1 : (currentPage > totalPages - 2 ? totalPages - 4 : currentPage - 2);
      let endPageNumber = totalPages < 5 ? totalPages : (currentPage <= totalPages - 2 ? startPageNumber + 4 : totalPages);
      for (let i = startPageNumber; i <= endPageNumber; i++) {
        createPageLink(i, i);
      }
      createPageLink(">", currentPage + 1);
      createPageLink(">>", totalPages);

      setActivePageNumber();
      from.innerHTML = (currentPage - 1) * rowsPerPage + 1;
      to.innerHTML = currentPage === totalPages ? rows.length : (currentPage) * rowsPerPage;
      totalTableEntries.innerHTML = rows.length;

    }

    paginateTable();

    function changePage(e, pageNumber) {
      if ((pageNumber == 0) || (pageNumber == totalPages + 1)) return;
      e.preventDefault();
      currentPage = pageNumber;
      pageNumberInput.value = "";
      paginateTable();
    }

    function setActivePageNumber() {
      document.querySelectorAll("#pageNumbers a").forEach(a => {
        if (a.innerText == currentPage) {
          a.classList.add("active");
        }
      });
    }

    function createPageLink(linkText, pageNumber) {
      let pageLink = document.createElement("a");
      pageLink.href = "#";
      pageLink.innerHTML = linkText;
      pageLink.addEventListener("click", function (e) {
        changePage(e, pageNumber);
      });
      pageNumbers.appendChild(pageLink);
    }

    goToPageButton.addEventListener("click", (e) => {
      changePage(e, pageNumberInput.value);
    });
  }


});


function edit(key) {

  ke = key;
  //alert(key)
  document.getElementById("userdata").style.display = "none"
  document.getElementById("serc").style.display = "none"
  document.getElementById("prof").style.display = "block"
  document.getElementById("clos").style.display = "block"
  document.getElementById("abc").style.display = "block"


  var ref4 = firebase.database().ref().child("user-account").child(key);
  var ref5 = firebase.database().ref().child("user-profile").child(key);
  var pending_loan = firebase.database().ref().child("loan").child(key).orderByChild('status').equalTo('Pending');
  var active_loan = firebase.database().ref().child("loan2").child(key).orderByChild('status').equalTo('Active');


  console.log(active_loan)


  ref4.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      pass = snapshot4.val().passw;      ;
      
    }



 
    $('#pass').html('Password  :'+pass);
  
 


 

  });










  ref5.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      address = snapshot4.val().address;
      city = snapshot4.val().city;
      email = snapshot4.val().email;
      firstName = snapshot4.val().firstname;
      jdate = snapshot4.val().joindate;
      state = snapshot4.val().state;
      lastName = snapshot4.val().lastname;
      zipCode = snapshot4.val().zip ;
      username = snapshot4.val().username
      mobile = snapshot4.val().mobile



    //  firstname = snapshot4.val().firstname;
     // lastname = snapshot4.val().lastname;
      //state = snapshot4.val().state;
     // address = snapshot4.val().address;
     // zip = snapshot4.val().zip;
    //  city = snapshot4.val().city;
      imgpreview = snapshot4.val().pimage;
      balance = snapshot4.val().balance;
     // joindate = snapshot4.val().joindate;
      sta = snapshot4.val().status





    }


console.log(firstName)

    $('#firstName').val(firstName);



    $('#lastName').val(lastName);
    $('#email').val(email);





    $('#mobile').val(mobile);
    $('#city').val(city);

    $('#address').val(address);
    $('#state').val(state);

    $('#zipCode').val(zipCode);
 
    $('#usname').html('Username :'+username);
    $('#jdate').html('Joined On :'+jdate);
 


    if(imgpreview == 'no image'){
      imgpr.src = "https://res.cloudinary.com/dbcsyo0wi/image/upload/v1738491333/boyohqoqf7xojvralype.png"
  }
  else
  {
      imgpr.src = imgpreview ;
  }


  });




  pending_loan.once("value").then(function (snapshot) {

    if (snapshot.exists()) {

        pendingloan = snapshot.numChildren();

     
        


    }

    else{
      pendingloan = 0;
    }

    $('#pending').html(pendingloan);

   
   


});




active_loan.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

      activeloan = snapshot.numChildren();
      snapshot.forEach(function (data) {


        totalbalance += parseInt(data.val().amount);

        // content11 = snapshot.numChildren();
  
  
      });

      console.log('total ' + totalbalance);
      const formattedNumber = totalbalance.toLocaleString();
      $('#balance').html('<span style="font-size:18px;font-weight: 800;">৳ </span>'+formattedNumber+".00");

  }

  else{
    totalbalance = 0;
    activeloan = 0;
   
    $('#balance').html('<span style="font-size:18px;font-weight: 800;">৳ </span>'+totalbalance+".00");
  }

 // console.log('total user ' + pendingloan);
  $('#running').html(activeloan);


});


}


var btn = document.getElementById('clos');
function changeColor() {
  document.getElementById("userdata").style.display = "block"
  document.getElementById("serc").style.display = "block"
  document.getElementById("prof").style.display = "none"
  document.getElementById("clos").style.display = "none"
  document.getElementById("abc").style.display = "none"




  
}

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dbcsyo0wi/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'preset-for-file-upload';
function save2() {



  const fileInput = document.getElementById('upload');
  const file = fileInput.files[0];




  if( document.getElementById("upload").files.length == 0 ){

    console.log('no image selected')





      const firstname = document.getElementById('firstName').value;
      const lastname = document.getElementById('lastName').value;
      const address = document.getElementById('address').value;
      const mobile = document.getElementById('mobile').value;
      const state = document.getElementById('state').value;
      const zip = document.getElementById('zipCode').value;
      const email = document.getElementById('email').value;
      const city = document.getElementById('city').value;
  
      alert('upload success');
  
       var database = firebase.database();
  
       database.ref('user-profile').child(ke).set({
           'firstname': firstname,
           'lastname':lastname,
           'address':address,
           'state':state,
           'zip':zip,
           'pimage':imgpreview,
           'city':city,
           'email': email,
           "joindate":jdate,
           'username':username,
            'status':sta,
           "balance":balance,
           "mobile":mobile
          
       }).then(() =>{
        window.location.href = "active-users.html";
       });
  

    
  }
  else{

    console.log('image selected')


      const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

   axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',

      },
      data: formData}).then(function(res){
   console.log(res.data.secure_url);

   const firstname = document.getElementById('firstName').value;
   const lastname = document.getElementById('lastName').value;
   const address = document.getElementById('address').value;
   const mobile = document.getElementById('mobile').value;
   const state = document.getElementById('state').value;
   const zip = document.getElementById('zipCode').value;
   const email = document.getElementById('email').value;
   const city = document.getElementById('city').value;

  alert('upload success');

   var database = firebase.database();

   database.ref('user-profile').child(ke).set({
       'firstname': firstname,
       'lastname':lastname,
       'address':address,
       'state':state,
       'zip':zip,
       'pimage':res.data.secure_url,
       'city':city,
       'email': email,
       "joindate":jdate,
       'username':username,
       'status':sta,
       "balance":balance,
       "mobile":mobile
      
   }).then(() =>{
    window.location.href = "active-users.html";
   });






  





      }).catch(function(err){
          console.error(err);
      })



    
  }





  
}



var admin_u = firebase.database().ref().child("admin");

var d_name = '';


admin_u.on("value", function (snapshot4) {
  if (snapshot4.exists()) {






      d_name = snapshot4.val().name;
    




  }






  $('#d_name').html(d_name);




});



function myFunction() {
  // get user input
  const userInput = document.getElementById("myInput").value.trim().toUpperCase();

  document.querySelectorAll('tr[name="bc"]').forEach((item) => {
    const tdTxt = [...item.querySelectorAll('td')].map(elem => elem.textContent.trim().toUpperCase()).join(',');

    if (tdTxt.indexOf(userInput) === -1) {
      item.style.display = "none"
    } else {
      item.style.display = "";
    }

  })
}