var link3 =crossroads.addRoute('',function(){
    
    if(!localStorage.datcount || localStorage.datacount === null)
        localStorage.datacount =0;
      
    dataLength = localStorage.datacount;
    htmlText = "";
    if (dataLength > 0){
    for (var i = 1; i <= dataLength; i++){
            myData =localStorage.getItem("data" + i);
            myData = JSON.parse(myData);
            htmlText = htmlText + "<tr onclick='trClick(this,"
                    +i+")'><td>"
                    + myData.nickname
                    + "</td><tr>";
        }
    }
    else{
        htmlText = htmlText + "<tr><td> no data found </td><tr>";
    }
        $('#maintable tbody').html(htmlText);
        
    $("#masterC").show();
    
     $("#divFrmAddKenalan").hide();
     $("#divFrmAddKenalan").hide();
     
});

var link4 =crossroads.addRoute('',function(){
    
     $("#masterC").hide();
     
     $("#divFrmAddKenalan").show();
     $("#divFrmAddKenalan").hide();
});

$("#divFrmAddKenalan").submit(function(e){
e.preventDefault();
e.stopPropagation();
var employeeNumber = $("#employeeNumber").val();
var firstName = $("#firsrName").val();
var lastName = $("#lastName").val();
var officeCode = $("#officeCode").val();
var extension = $("#extension").val();
var email = $("#email").val();
var jobTitle = $("#jobTitle").val();
var reportsTo = $("#reportsTo").val();

myData={employeenumber:"",firstname:"",lastname:"",officecode:"",extension:"",email:"",jobtitle:"",reportto:""};
mydata.employeenumber=employeeNumber;
mydata.firstname=firsrName;
mydata.lastname=lastName;
mydata.officecode=officeCode;
mydata.extension=extension;
mydata.email=email;
mydata.jobtitle=jobTitle;
mydata.reportto=reportsTo;
var i = localStorage.datacount
i++;
localStorage.setItem("data"+i, JSON.stringify(mydata));
localStorage.datacount=i;

 alert('New data added');
 
 });
 
 function parseHash(newHash,oldHash){
     crossroads.parse(newHash);
 }
 hasher.initialized.add(parseHash);
 hasher.changed.add(parseHash);
 hasher.init();
 
       
secondpage=<a href='secondpage.html?id="+employeeNumber+"'>"+email+"</a>

htmlText = htmlText + "<tr><td>"+secondpage+"</td></tr>";
 
 $('#maintable tbody').html(htmlText)
 
 query = window.location.search;
 urlParam = new URLSearchParams(query);
 var id = urlParam.get('id');
 
 


$.ajax({
    type:"post",
    url:"https://kerbau.odaje.biz/getstaff.php",
    data: '',
    cache: false,
    success:function(mydata){
        var myData = JSON.parse(myData);
        if (myData.status === 1){
            alert("update Data Berjaya!");
            
        }else{
            alert("Update Data Gagal, Jumpa Admin");
        }
    
    },
    error:function(){
        console.log("error in ajax function");
        alert("AJAX Failed, get help from your admin!");
    }
});