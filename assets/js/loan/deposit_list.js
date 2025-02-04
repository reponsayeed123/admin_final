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



var transaction_name = "";


var transaction_number = "";
var acc_holder = "";

var branch_name = "";


var key2 = '';






var deposit_list = firebase.database().ref().child("deposit_list");


deposit_list.once("value").then(function (snapshot) {

  if (snapshot.exists()) {

    var content = '';






    snapshot.forEach(function (data) {



      var val = data.val();

      content += '<tr name="bc">';

      // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';


      content += '<td >' + val.transaction_name + '</td>';
      content += '<td >' + val.transaction_number + '</td>';
      content += '<td >' +  val.acc_holder + '</td>';
      content += '<td >'  + val.branch_name  + '</td>';



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

  key2 = key ;

  document.getElementById("userdata").style.display = "none"

  document.getElementById("prof2").style.display = "block"



  var ref5 = firebase.database().ref().child("deposit_list").child(key);


  console.log(key)


  ref5.on("value", function (snapshot4) {
      if (snapshot4.exists()) {



        transaction_name = snapshot4.val().transaction_name;
        transaction_number = snapshot4.val().transaction_number;
        acc_holder = snapshot4.val().acc_holder;
        branch_name = snapshot4.val().branch_name;
   






      }

console.log(transaction_name)
$('#transaction_name_2').val(transaction_name);

  

      $('#transaction_number2').val(transaction_number);



      $('#acc_holder2').val(acc_holder);
      // $('#amount').val(amount);


      //  $('#per_installment').val(per_installment);

      //
      $('#branch_name2').val(branch_name);


    })

}







function save32() {

  
  
  
  
   
  document.getElementById("userdata").style.display = "block"

document.getElementById("prof2").style.display = "none"





}






function save2() {

  
  
  
  
   
    document.getElementById("userdata").style.display = "none"

  document.getElementById("prof").style.display = "block"

  
  
  
  
  }
  

  function save3() {

  
  
  
  
   
    document.getElementById("userdata").style.display = "block"

  document.getElementById("prof").style.display = "none"

  
  
  
  
  }


  
  function save22() {

  
    const transaction_name= document.getElementById('transaction_name').value;
    const transaction_number = document.getElementById('transaction_number').value;

    const acc_holder = document.getElementById('acc_holder').value;
    const branch_name = document.getElementById('branch_name').value;


    alert("Upload Success!!");

    var database = firebase.database();


    database.ref('deposit_list').push().set({


      'transaction_name': transaction_name,
      'transaction_number': transaction_number,
      'acc_holder': acc_holder,
      "branch_name": branch_name,
    


    }).then(() =>{
      window.location.href = "deposit_list.html";
     });


  
  
  
  
  }




  function save222() {




    var didConfirm = confirm("Are you sure You want to Update ??");

    if (didConfirm == true) {


      const transaction_name= document.getElementById('transaction_name_2').value;
      const transaction_number = document.getElementById('transaction_number2').value;
  
      const acc_holder = document.getElementById('acc_holder2').value;
      const branch_name = document.getElementById('branch_name2').value;
  
  
    
  
      var database = firebase.database();
  
  
      database.ref('deposit_list').child(key2).set({
  
  
        'transaction_name': transaction_name,
        'transaction_number': transaction_number,
        'acc_holder': acc_holder,
        "branch_name": branch_name,
      
  
  
      }).then(() =>{
        window.location.href = "deposit_list.html";
       });
  

    }

    else {
      return false;
  }


  
 

  
  
  
  
  }





  function del2() {




    var didConfirm = confirm("Are you sure You want to Delete ??");

    if (didConfirm == true) {


      var ref5 = firebase.database().ref().child("deposit_list").child(key2);
  
      ref5.remove().then(() =>{
        window.location.href = "deposit_list.html";
       });;
    }

    else {
      return false;
  }


  
 

  
  
  
  
  }