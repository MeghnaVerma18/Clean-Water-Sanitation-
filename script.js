
function display(){
    var dnam,dphone,dmail,damont,Address
    dnam=document.getElementById("Donernam").value;
    dphone=document.getElementById("dophon").value;
    dmail=document.getElementById("domail").value;
    damont=document.getElementById("amount").value;
    Address=document.getElementById("doadd").value;
    if(dnam=="")
{
    alert("Please Enter the name")
    document.getElementById("Donernam").focus()
    return false
}
if(damont=="")
{
    alert("Please Enter the Donation amount")
    document.getElementById("amount").focus()
    return false
}
else if(damont<=0){
    alert("Please Enter the valid Donation amount")
    document.getElementById("amount").focus()
    return false
}
if(dmail=="")
{
    alert("Please Enter e-mail id")
    document.getElementById("domail").focus()
    return false
}
if(dphone=="")
{
    alert("Please Enter the phone number")
    document.getElementById("dophon").focus()
    return false
} 
if(dphone.length<10||dphone.length>10||isNaN(dphone))
    {
        alert("Please Enter the Valid phone number")
        document.getElementById("dophon").focus()
        return false
    } 
 if(Address=="")
{
    alert("Please Enter the Address")
    document.getElementById("doadd").focus()
    return false
} 
alert("Thank you! For Your Donation");
}
