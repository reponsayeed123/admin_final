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



var application_date = "";
var current_time = "";
var status = "";
var uid = "";
var username = "";
var amount = "";
var method = "";









var address2 = "";


var balance2 = "";
var city2 = "";

var email2 = "";

var firstname2 = "";

var joindate2 = "";

var lastname2 = "";

var mobile2 = "";

var pimage2 = "";

var state2 = "";


var username2 = "";

var zip2 = "";
var rate2 = "";
var ke = '';

var key22 ='';

var pendingloan = firebase.database().ref().child("withdraw").orderByChild('status').equalTo('Pending');

pendingloan.once("value").then(function (snapshot) {

    if (snapshot.exists()) {

        var content = '';






        snapshot.forEach(function (data) {



            var val = data.val();

            var ss = '';

            var val = data.val();

            if (val.status == "Active") {
                ss = "green"
            }
            else if (val.status == "Reject") {
                ss = 'red'
            }


            else {
                ss = 'rgb(230, 175, 35);'
            }

            content += '<tr name="bc">';

            // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';


            content += '<td >' + val.method + '</td>';
            content += '<td >' + val.application_date + '</td>';
            content += '<td >' + val.username + '</td>';
            content += '<td >' + '<span style="font-size:14px;font-weight: 800;">৳ </span>' + parseInt(val.amount).toLocaleString() + '</td>';
            content += '<td id="myH2" style="font-weight: bold;color:' + ss + ';">' + val.status + '</td>';



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






    var ref5 = firebase.database().ref().child("withdraw").child(key);


    ref5.on("value", function (snapshot4) {
        if (snapshot4.exists()) {



            application_date = snapshot4.val().application_date;
            current_time = snapshot4.val().current_time;
            status = snapshot4.val().status;
            uid = snapshot4.val().uid;
            username = snapshot4.val().username;
            amount = snapshot4.val().amount;
            method = snapshot4.val().method;







        }


        const formattedNumber = parseInt(amount).toLocaleString();

        $('#application_date').html(application_date);

        $('#method').html(method);



        $('#status').html(status);
        // $('#amount').val(amount);
        $('#amount').html(formattedNumber + ".00" + " BDT");

        //  $('#per_installment').val(per_installment);

        //
        $('#username').html(username);

        $('#payable').html(formattedNumber + ".00" + " BDT");













    });








}


function save2() {

    var didConfirm = confirm("Are you sure You want to Approve ??");



    if (didConfirm == true) {



        var active_dep = firebase.database().ref().child("withdraw2").child(uid).orderByChild('current_time').equalTo(current_time);



        active_dep.once("value").then(function (snapshot) {
    
            if (snapshot.exists()) {
          
              //    activeloan = snapshot.numChildren();
              snapshot.forEach(function (data) {
          
          
                key22 = data.key;
          
          
          
              });
          
          
          
            }
            console.log('key3:'+key22)


            const profit = parseInt(balance2) + parseInt(amount);



            console.log(uid);
            console.log(profit);
    
    
    
    
            var database = firebase.database();
    
    
            database.ref('withdraw2').child(uid).child(key22).set({
    
                "application_date": application_date,
                'current_time': current_time,
    
                'status': 'Active',
    
                "uid": uid,
                'username': username,
                'amount': amount,
                "method": method
    
    
    
    
            });
    
    
    
    
            database.ref('withdraw').child(ke).set({
    
                "application_date": application_date,
                'current_time': current_time,
    
                'status': 'Active',
    
                "uid": uid,
                'username': username,
                'amount': amount,
                "method": method
    
    
    
    
            }).then(() => {
    
                window.location.href = "pending-withdraw.html";
            });






        });




        /*



      





*/










    } else {
        return false;
    }









}



function save3() {

    var didConfirm = confirm("Are you sure You want to Reject ??");



    if (didConfirm == true) {




        var active_dep = firebase.database().ref().child("withdraw2").child(uid).orderByChild('current_time').equalTo(current_time);



        active_dep.once("value").then(function (snapshot) {
    
            if (snapshot.exists()) {
          
              //    activeloan = snapshot.numChildren();
              snapshot.forEach(function (data) {
          
          
                key22 = data.key;
          
          
          
              });
          
          
          
            }
            console.log('key3:'+key22)


            const profit = parseInt(balance2) + parseInt(amount);



            console.log(uid);
            console.log(profit);
    
    
    
    
            var database = firebase.database();
    
    
            database.ref('withdraw2').child(uid).child(key22).set({
    
                "application_date": application_date,
                'current_time': current_time,
    
                'status': 'Reject',
    
                "uid": uid,
                'username': username,
                'amount': amount,
                "method": method
    
    
    
    
            });
    
    
    
    
            database.ref('withdraw').child(ke).set({
    
                "application_date": application_date,
                'current_time': current_time,
    
                'status': 'Reject',
    
                "uid": uid,
                'username': username,
                'amount': amount,
                "method": method
    
    
    
    
            }).then(() => {
    
                window.location.href = "pending-withdraw.html";
            });






        });





    } else {
        return false;
    }









}
function changeColor() {
    document.getElementById("userdata").style.display = "block"
    document.getElementById("serc").style.display = "block"
    document.getElementById("prof").style.display = "none"
    document.getElementById("clos").style.display = "none"
  
  
  
  
  
  }



  var admin_u = firebase.database().ref().child("admin");

  var d_name = '';


admin_u.on("value", function (snapshot4) {
    if (snapshot4.exists()) {






        d_name = snapshot4.val().name;
      




    }





 
    $('#d_name').html(d_name);




  });
