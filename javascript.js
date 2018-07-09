
    var d =  new Date();
    var month = d.getMonth() +1;
    var day = d.getDate();
    var year = d.getFullYear();
    document.getElementById("date").innerHTML = "Today is " + day + "/" + month + "/" + year;