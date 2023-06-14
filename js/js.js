
function plus()
{
   var count = parseInt(document.getElementById('number').innerHTML++ ) ;
  count++;
 
   console.log(count);
    if(count)
    {
   const price = 50000;
   var total = count * price;

   totalCommas = numberWithCommas(total);
   document.getElementById('total').innerHTML= totalCommas;
   }
}

function mines()
{
   var number = parseInt(document.getElementById('number').innerHTML) ;
   if(number <= 1)
   {
      alert("عدد نمیتواند 0 و یا - باشد") 
   }
   else{
      document.getElementById('number').innerHTML--;
      number--;
      console.log(number);
      const price = 50000;
      var total = number * price;
      totalCommas = numberWithCommas(total);
      document.getElementById('total').innerHTML= totalCommas;
   }
}

function numberWithCommas(x) {
   x = x.toString();
   var pattern = /(-?\d+)(\d{3})/;
   while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
   return x;
}

function removeAllCommas(string) {
   return string.replaceAll(',', '');
 }

 function SumCount()
 {
   var x = document.getElementsByClassName('x');
   if(x)
   {
  var classNumber = parseInt(document.getElementById('number').innerHTML);
  var classNumber1 = parseInt(document.getElementById('number1').innerHTML);
  var classNumber2 = parseInt(document.getElementById('number2').innerHTML);
  var num =classNumber + classNumber1 +classNumber2;
  console.log(num);
  document.getElementById('show').innerHTML = num;
   }
  
 }
 
