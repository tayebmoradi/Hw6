debugger;
function plus()
{
   var test = document.getElementById('number').innerHTML++;
    if(test)
    {
    var tot =parseFloat(document.getElementById('total').innerHTML) ;
    
    var total = tot + tot;
    document.getElementById('total').innerHTML= total;

    }
}

function mines()
{
 var check = document.getElementById('number').innerHTML;
 
if(check <= 1)
{
   alert("عدد نمیتواند 0 و یا - باشد") 
}
else{
   var test = document.getElementById('number').innerHTML--;
    if(test)
    {
    var tott =parseFloat(document.getElementById('total').innerHTML) ;
    
    var tota = tott - tott;
    document.getElementById('total').innerHTML= tota;

    }
}
}



