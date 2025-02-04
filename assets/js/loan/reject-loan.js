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
  
  var username2 = "";
  
  var zip = "";
  
  var pendingloan = firebase.database().ref().child("loan").orderByChild('status').equalTo('Reject');;
  
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
        plan = snapshot4.val().plan
        username = snapshot4.val().username;
        amount = snapshot4.val().amount
        per_installment = snapshot4.val().per_installment
        total_installment = snapshot4.val().total_installment;
        total_payable = snapshot4.val().total_payable;
        uid = snapshot4.val().uid;
  
        curentime = snapshot4.val().current_time;
  
  
  
  
  
  
      }
  
  
      const formattedNumber = parseInt(amount).toLocaleString();
  
      $('#plan').html(plan);
  
  
  
      $('#application_date').html(application_date);
      $('#amount').html(formattedNumber + ".00" + " BDT");
  
  
  
  
  
      $('#per_installment').html(parseInt(per_installment).toLocaleString() + ".00" + " BDT");
      $('#total_installment').html(total_installment);
  
      $('#total_payable').html(parseInt(total_payable).toLocaleString() + ".00" + " BDT");
      const profit = parseInt(total_payable) - parseInt(amount);
      $('#profit').html(parseInt(profit).toLocaleString() + ".00" + " BDT");;
      //
      $('#status').html(status);
  
      $('#applinant_name').html(applinant_name);
      $('#phone_number').html(phone_number);
  
      $('#profession').html(profession);
      $('#monthly_income').html(monthly_income);
      $('#account_holder_name_').html(account_holder_name_);
      $('#account_number').html(account_number);
      $('#bank_name').html(bank_name);
      $('#branch_code').html(branch_code);
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
  
  var admin_u = firebase.database().ref().child("admin");

  var d_name = '';


admin_u.on("value", function (snapshot4) {
    if (snapshot4.exists()) {






        d_name = snapshot4.val().name;
      




    }





 
    $('#d_name').html(d_name);




  });

  
  
 