function billingFunction(){
    var name = "";
    var zipcode;
    if(document.getElementById("same").checked){
        //getting
        name = document.getElementById('shippingName').value;
        zipcode = document.getElementById("shippingZip").value;

        //setting
        document.getElementById('billingName').value = name;
        document.getElementById('billingZip').value = zipcode;
    }
    else{
        document.getElementById('billingName').value = null;
        document.getElementById('billingZip').value = null;
    }
}