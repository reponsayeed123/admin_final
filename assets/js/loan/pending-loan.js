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



var applinant_name = "";
var phone_number = "";
var profession = "";
var monthly_income = "";
var account_holder_name_ = "";
var account_number = "";
var bank_name = "";
var branch_code = "";
var application_date = "";
var idfront = "";
var idback = "";
var status = "";
var plan = "";
var uid = "";
var username = "";
var amount = "";
var amount2 = "";
var per_installment = "";
var total_installment = "";
var total_payable = "";
var curentime = '';

var balance = "";




var key2 = '';
var application_date2 = "";

var applinant_name2 = "";

var current_time = "";

var phone_number2 = "";




var address = "";


var balance2 = "";
var city = "";

var email = "";

var firstname = "";

var joindate = "";

var lastname = "";

var mobile = "";

var pimage = "";

var state = "";

var status = "";
var status222 = "";

var username2 = "";

var zip = "";
var rate = "";

var pendingloan = firebase.database().ref().child("loan").orderByChild('status').equalTo('Pending');;

const imgpr = document.getElementById('idfront');
const imgpr2 = document.getElementById('idback');


pendingloan.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    var content = '';






    snapshot.forEach(function (data) {



      var val = data.val();

      content += '<tr name="bc">';

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';


      content += '<td >' + val.plan + '</td>';
      content += '<td >' + val.username + '</td>';
      content += '<td >' + '<span style="font-size:14px;font-weight: 800;">৳ </span>' + val.amount + '</td>';
      content += '<td >' + '<span style="font-size:14px;font-weight: 800;">৳ </span>' + val.per_installment + ".00" + '</td>';
      content += '<td >' + val.application_date + '</td>';


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




  var ref5 = firebase.database().ref().child("loan").child(key);


  ref5.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      applinant_name = snapshot4.val().applinant_name;
      phone_number = snapshot4.val().phone_number;
      profession = snapshot4.val().profession;
      monthly_income = snapshot4.val().monthly_income;
      account_holder_name_ = snapshot4.val().account_holder_name_;
      account_number = snapshot4.val().account_number;
      bank_name = snapshot4.val().bank_name;
      branch_code = snapshot4.val().branch_code;
      application_date = snapshot4.val().application_date
      idfront = snapshot4.val().idfront
      idback = snapshot4.val().idback;
      status = snapshot4.val().status
      status222 = snapshot4.val().status
      plan = snapshot4.val().plan
      username = snapshot4.val().username;
      amount = snapshot4.val().amount
      per_installment = snapshot4.val().per_installment
      total_installment = snapshot4.val().total_installment;
      total_payable = snapshot4.val().total_payable;
      uid = snapshot4.val().uid;
      rate = snapshot4.val().rate;
      curentime = snapshot4.val().current_time;






    }


    const formattedNumber = parseInt(amount).toLocaleString();

    $('#plan').val(plan);



    $('#application_date').val(application_date);
    // $('#amount').val(amount);
    $('#amount').val(formattedNumber + ".00" + " BDT");

    //  $('#per_installment').val(per_installment);



    $('#per_installment').val(parseInt(per_installment).toLocaleString() + ".00" + " BDT");
    $('#total_installment').val(total_installment);

    $('#total_payable').val(parseInt(total_payable).toLocaleString() + ".00" + " BDT");
    const profit = parseInt(total_payable) - parseInt(amount);
    $('#profit').val(parseInt(profit).toLocaleString() + ".00" + " BDT");
    //
    $('#status').html(status);

    $('#applinant_name').val(applinant_name);
    $('#phone_number').val(phone_number);

    $('#profession').val(profession);
    $('#monthly_income').val(monthly_income);
    $('#account_holder_name_').val(account_holder_name_);
    $('#account_number').val(account_number);
    $('#bank_name').val(bank_name);
    $('#branch_code').val(branch_code);
    // $('#usname').html('Username :'+username);
    //  $('#jdate').html('Joined On :'+jdate);
    // $('#usname').html('Username :'+username);
    //  $('#jdate').html('Joined On :'+jdate);
    // $('#usname').html('Username :'+username);
    //  $('#jdate').html('Joined On :'+jdate);


    if (idfront == 'no image') {
      imgpr.src = "https://res.cloudinary.com/dbcsyo0wi/image/upload/v1738491333/boyohqoqf7xojvralype.png"
    }
    else {
      imgpr.src = idfront;
    }




    if (idback == 'no image') {
      imgpr2.src = "https://res.cloudinary.com/dbcsyo0wi/image/upload/v1738491333/boyohqoqf7xojvralype.png"
    }
    else {
      imgpr2.src = idback;
    }




    var user_profile = firebase.database().ref().child("user-profile").child(uid);



    user_profile.on("value", function (snapshot4) {
      if (snapshot4.exists()) {




        address = snapshot4.val().address;
        balance = snapshot4.val().balance;
      
        city = snapshot4.val().city;
        email = snapshot4.val().email;
        firstname = snapshot4.val().firstname;
        joindate = snapshot4.val().joindate;
        lastname = snapshot4.val().lastname;
        mobile = snapshot4.val().mobile;
        pimage = snapshot4.val().pimage;
        state = snapshot4.val().state;
        status = snapshot4.val().status;
        username2 = snapshot4.val().username;

        zip = snapshot4.val().zip;



      }


     // console.log(key2);

      

    

    });




  });







}


var btn = document.getElementById('clos');
function changeColor() {
  document.getElementById("userdata").style.display = "block"
  document.getElementById("serc").style.display = "block"
  document.getElementById("prof").style.display = "none"
  document.getElementById("clos").style.display = "none"





}

function myImage5() {
  console.log(idfront)

  window.open(idfront, '_blank')


}

function myImage6() {
  window.open(idback, '_blank')


}





function save2() {

  var active_loan = firebase.database().ref().child("loan2").child(uid).orderByChild('current_time').equalTo(curentime);




active_loan.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    //    activeloan = snapshot.numChildren();
    snapshot.forEach(function (data) {


      key2 = data.key;



    });



  }

  var today = new Date();
  var d = String(today.getDate()).padStart(2, '0');
  var m = String(today.getMonth() + 1).padStart(2, '0');
  var y = today.getFullYear();


  var active_loan2 = firebase.database().ref().child("loan2").child(uid).child(key2);
  var active_loan3 = firebase.database().ref().child("loan").child(ke);
  var user_profile = firebase.database().ref().child("user-profile").child(uid);

  console.log(key2);
  console.log(ke);



  active_loan2.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      application_date2 = snapshot4.val().application_date;
      applinant_name2 = snapshot4.val().applinant_name;
      current_time = snapshot4.val().current_time;
      phone_number2 = snapshot4.val().phone_number;
      amount2 = snapshot4.val().amount;


    }
    console.log("balance2:" + applinant_name2);

    var database = firebase.database();

    database.ref('loan2').child(uid).child(key2).set({


      "application_date": application_date,
      'applinant_name': applinant_name,
      'current_time': curentime,
      'phone_number': phone_number,
      'amount': amount,
      'status': 'Active'

 


    });




  });


      console.log("balance:" + amount);
      console.log("balance2:" + balance);
      console.log("balance2:" + city);
      


      
      var database = firebase.database();


      database.ref('user-profile').child(uid).set({



        'address': address,
       
        "balance": parseInt(amount) + parseInt(balance),
        'city': city,
        'email': email,
        'firstname': firstname,
        "joindate": joindate,
        'lastname': lastname,
        "mobile": mobile,
        'pimage': pimage,
        'state': state,
        'status': status,
        'username': username,
        'zip': zip


      });


      database.ref('transactions').child(uid).push().set({
    
        "application_date": d + "-" + m + "-" + y,
        'current_time': d + "-" + m + "-" + y + '-' + today.getHours() + '-' + today.getMinutes(),

        "balance": parseInt(amount) + parseInt(balance),

        "uid": uid,
        'method': 'Loan Taken',
        'amount': amount,
        




    });




      const plan_2 = document.getElementById('plan').value;
      const application_date22= document.getElementById('application_date').value;
      const total_installment2 = document.getElementById('total_installment').value;
  
      const name_of_applicant2 = document.getElementById('applinant_name').value;
      const phone_number22 = document.getElementById('phone_number').value;
      const profession2 = document.getElementById('profession').value;
      const monthly_income2 = document.getElementById('monthly_income').value;
      const account_holder_name_2 = document.getElementById('account_holder_name_').value;
      const account_number2 = document.getElementById('account_number').value;
      const bank_name2 = document.getElementById('bank_name').value;
      const branch_code_2 = document.getElementById('branch_code').value;



		  database.ref('loan').child(ke).set({


          'account_holder_name_': account_holder_name_2,
          'account_number': account_number2,
          'amount': amount,
          "application_date": application_date22,
          'applinant_name': name_of_applicant2,
          'bank_name': bank_name2,
          'branch_code': branch_code_2,
          'current_time': curentime,
          'idback': idback,
          'idfront': idfront,
          'monthly_income': monthly_income2,
          'per_installment': per_installment,
          'phone_number': phone_number22,
          "plan": plan_2,
          'profession': profession2,
          'status': 'Active',
          'total_installment': total_installment2,
          'total_payable': total_payable,
          "uid": uid,
          'rate': rate,
          'username': username2


        }).then(() =>{
          window.location.href = "pending-loan.html";
         });

 

});







}



function save3() {

  var didConfirm = confirm("Are you sure You want to Reject ??");



  if (didConfirm == true) {




    var active_loan = firebase.database().ref().child("loan2").child(uid).orderByChild('current_time').equalTo(curentime);




    active_loan.once("value").then(function (snapshot) {
    
      if (snapshot.exists()) {
    
        //    activeloan = snapshot.numChildren();
        snapshot.forEach(function (data) {
    
    
          key2 = data.key;
    
    
    
        });
    
    
    
      }
    
    
      var active_loan2 = firebase.database().ref().child("loan2").child(uid).child(key2);
      var active_loan3 = firebase.database().ref().child("loan").child(ke);
      var user_profile = firebase.database().ref().child("user-profile").child(uid);
    
      console.log(key2);
      console.log(ke);
    
    
    
      active_loan2.on("value", function (snapshot4) {
        if (snapshot4.exists()) {
    
    
    
          application_date2 = snapshot4.val().application_date;
          applinant_name2 = snapshot4.val().applinant_name;
          current_time = snapshot4.val().current_time;
          phone_number2 = snapshot4.val().phone_number;
          amount2 = snapshot4.val().amount;
    
    
        }
        console.log("balance2:" + applinant_name2);
    
        var database = firebase.database();
    
        database.ref('loan2').child(uid).child(key2).set({
    
    
          "application_date": application_date,
          'applinant_name': applinant_name,
          'current_time': curentime,
          'phone_number': phone_number,
          'amount': amount2,
          'status': 'Reject'
    
     
    
    
        });
    
    
    
    
      });
    
    
          console.log("balance:" + amount);
          console.log("balance2:" + balance);
          console.log("balance2:" + city);
          
    
    
          
          var database = firebase.database();
    
    
    
    
    
          database.ref('loan').child(ke).set({
    
    
              'account_holder_name_': account_holder_name_,
              'account_number': account_number,
              'amount': amount,
              "application_date": application_date,
              'applinant_name': applinant_name,
              'bank_name': bank_name,
              'branch_code': branch_code,
              'current_time': curentime,
              'idback': idback,
              'idfront': idfront,
              'monthly_income': monthly_income,
              'per_installment': per_installment,
              'phone_number': phone_number,
              "plan": plan,
              'profession': profession,
              'status': 'Reject',
              'total_installment': total_installment,
              'total_payable': total_payable,
              "uid": uid,
              'rate': rate,
              'username': username2
    
    
            }).then(() =>{
              window.location.href = "pending-loan.html";
             });
    
     
    
    });
    
    


  }else {
    return false;
  }
  








}



function togglePopup() {
  const overlay = document.getElementById('popupOverlay');
  overlay.classList.toggle('show');


   // console.log(key2);

    

  

  
}



function save21() {

  const amount3 = document.getElementById('amount3').value;

  if (amount3 == '') {
    alert("Please check amount!!")
  }
  else {


    var didConfirm = confirm("Are you sure You want to update??");

    if (didConfirm == true) {



      const tamount = parseInt(amount) + parseInt(amount3);


      var totalpayble = parseInt(tamount) + parseInt((tamount * rate) / 100);
      var per_installment2 = parseInt(totalpayble / total_installment);



      console.log('tamount:'+ tamount);
      console.log('totalpayble:'+ totalpayble);
      console.log('per_installment:'+ per_installment2);

      console.log('uid:'+ uid);


 
      console.log('status:'+ status222);

      console.log('uid:'+ ke);







      var database = firebase.database();





      database.ref('loan').child(ke).set({


        'account_holder_name_': account_holder_name_,
        'account_number': account_number,
        'amount': tamount,
        "application_date": application_date,
        'applinant_name': applinant_name,
        'bank_name': bank_name,
        'branch_code': branch_code,
        'current_time': curentime,
        'idback': idback,
        'idfront': idfront,
        'monthly_income': monthly_income,
        'per_installment': per_installment2,
        'phone_number': phone_number,
        "plan": plan,
        'profession': profession,
        'status': status222,
        'total_installment': total_installment,
        'total_payable': totalpayble,
        "uid": uid,
        'rate': rate,
        'username': username


      }).then(() =>{
        window.location.href = "pending-loan.html";
       });







      const overlay = document.getElementById('popupOverlay');
      overlay.classList.toggle('show');

    }
    else {
      const overlay = document.getElementById('popupOverlay');
      overlay.classList.toggle('show');
      return false;
    }

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

