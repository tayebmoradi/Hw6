
function plus()
{
    document.getElementById('number').innerHTML++;
}

function mines()
{
 var check = document.getElementById('number').innerHTML;
if(check <= 1)
{
   alert("عدد نمیتواند 0 و یا - باشد") 
}
else{
    document.getElementById('number').innerHTML--;
}
}

