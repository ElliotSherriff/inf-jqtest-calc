// self executing main function
(function($) {
  console.log('Welcome to the calculator app');

  //--------------- put your code below this line -------------
})(jQuery);

var num1 = [];
var num2 = [];
var totalplus = null;
var totalmulitply = null;
var totalsubtract = null;
var totaldivide = null;
var operand = [];

//Push Numbers into Array & attribute value
$(".btn-default").on("click",function(){
  
  if (operand.length === 0 ) {
   
	  num1.push($(this).attr("value"));
	  $("#output").val(parseInt(num1.join('')));
    console.log(num1);
  }
  
	else {
	 
	  num2.push($(this).attr("value"));
	  $("#output").val(parseInt(num2.join('')));
	  console.log(num2);
	}
  
});
//Push operands into Array
$(".btn-danger").on("click",function(){
  
	operand.push($(this).attr("value"));
	$("#output").val(operand.join(''));
	console.log(operand);
	
});
//Clear Calculator
$("[name*='bttnc']").on("click",function(){
  num1 = [];
  num2 = [];
  operand = [];
	$('#output').val((''))
	console.clear();
});
	
//Equations including operands
$(".btn-info").on("click",function(){
  
  if (operand == "+"){
  var totalplus = parseInt(num1.join('')) + parseInt(num2.join(''));
  $("#output").val(totalplus);
  }
  
  console.log(totalplus);
  
  if (operand == "x"){
  var totalmulitply = parseInt(num1.join('')) * parseInt(num2.join(''));
  $("#output").val(totalmulitply);
  }
  
  console.log(totalmulitply);
  
  if (operand == "-"){
  var totalsubtract = parseInt(num1.join('')) - parseInt(num2.join(''));
  $("#output").val(totalsubtract);
  }
  
  console.log(totalsubtract);
  
  if (operand == "/"){
  var totaldivide = parseInt(num1.join('')) / parseInt(num2.join(''));
  $("#output").val(totaldivide);
  }
  
  console.log(totaldivide);

});
