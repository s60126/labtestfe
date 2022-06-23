crossroads.addRoute('',function(){});

$.ajax({
    type:"post",
    url:"https://kerbau.odaje.biz/getstaff.php",
    data: '',
    cache: false,
    success:function(mydata){
        var myData = JSON.parse(mydata);
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