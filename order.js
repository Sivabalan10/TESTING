const category1 = ["CUP","GRAPE","FLOWER"];
function category(x,y){
	document.getElementById('de_fault').style.boxShadow = "0px 0px 0px";
	document.getElementById('6').style.boxShadow = "0px 0px 0px";
	document.getElementById('7').style.boxShadow = "0px 0px 0px";

	document.getElementById('ike').innerHTML = "IKEBANA - "+category1[x];
	if(y==5){
		document.getElementById('de_fault').style.boxShadow = "5px 5px 5px  #262425";
	}
	else if(y==6){
		document.getElementById('6').style.boxShadow = "5px 5px 5px  #262425";
	}
	else{
		document.getElementById('7').style.boxShadow = "5px 5px 5px  #262425";
	}
}
function submita(){
	swal({title:"SUCCESS",
		 text:"Your order placed Successfully",
		 type:"success"});
	document.getElementById('candimg').style.display= "none";
	document.getElementById('form').style.display= "none";
	document.getElementById('orderinfo').style.display= "block";

	document.getElementById('order').style.display= "none";

	document.getElementById('yorn').style.color= "green";
	document.getElementById('yorn').innerHTML = "Your order Placed Successfully!";

}