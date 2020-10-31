class Customer{
	constructor(name,email,billdate,phone,billamount){
		this.name=name;
		this.email=email;
		this.billdate=billdate;
		this.phone=phone;
		this.billamount=billamount;
	}
	
}
function employeevalidation()
{
	this.name!=[@,#,$];
}
}

const getDate = function(dt){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year = dt.getFullYear();
    const month = months[dt.getMonth()];
    const day = dt.getDate();
    
  if (this.phone!==sizeof(10))
  {
  	throw Error ("invalid phone number");
  }

  if(this.billamount<500)
  {
  	throw Error("Bill amount should be minimum of rupees 500");
  }
  function validate(){
            //get all the values....
            let name = document.regForm.name.value;
            let email = document.regForm.email.value;
            let mobile = document.regForm.phone.value;
          
            //name validation
            if(name == "" || name == null){
                showErr("errName", "Name is mandatory")
                return false;
            }else{
                showErr("errName", "")
            }
            //email validation    
            if(email == ""){
                showErr("errEmail", "Email is mandatory")
                return false;
            }else{
                showErr("errEmail", "")
            }
            let regEx = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
            if(regEx.test(email) == false){
                showErr("errEmail", "Email is not in a valid format")
                return false;
            } else {
                showErr("errEmail", "")
            }