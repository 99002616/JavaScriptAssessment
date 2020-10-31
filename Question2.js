describe('Suite  to test classses',()=> {
    let emp=null;
    


    xit('should set id',()=>{
       const emp = new employee("RAJAN","pq%n")
       const b=emp.validateName(emp);
        expect(true).toBe(b)
    })
    xit('should set email',()=>{
        const emp = new employee("rajan","pqn")
        const e=emp.validateEmail(emp);
         expect(true).toBe(e)
     })


     xit('should set Phone',()=>{
        const emp = new employee("rajan","pqn","7004027535",500)
        const p=emp.validatePhone(emp);
         expect(true).toBe(p)
     })

     it('should set Phone',()=>{
        const emp = new employee("rajan","pqn","7004027535",600)
        const a=emp.validateBillAmt(emp);
         expect(true).toBe(a)
     })
     
    
})








class employee{
    constructor(name,email,phone,amt){
        this.name=name;
        this.email=email;
        this.phone=phone;
        
        
        
    }

    display(){
        return this.name;
    };

    validateName(emp){
        name=emp.name;
        var letters = /^[A-Za-z]+$/;
        var len=name.length;
        //console.log(len)
        if(name.match(letters) && (len>=5) )
        {
            return true;
           }
         else
           {
           alert("message");
           return false;
           }
    }

    validateEmail(emp){
       var email=emp.email;
        var mailformat= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (email.match(mailformat))
           {
             return true
            }
             return (false)

            }
        validatePhone(emp){
       var phone=emp.phone;
        var phoneFor=/^\d{10}$/;
          if (phone.match(phoneFor))
           {
             return true
            }
             return (false)

            }
        
            

        }