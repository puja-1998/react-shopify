export function validate(email,password) {
    const data=JSON.parse(localStorage.getItem("details"))
    if(data===null){
        return data
    }
    else{
        
        const person=data.filter(item=>item.email===email)
        if(person.length===0){
            return "Wrong-Details"
        }
        else if(person[0].password===password){
            return "navigate"
        }
        else{
            return "Wrong-Details"
        }
    }
} 
export function setLocalData(email,password) {
    const data=JSON.parse(localStorage.getItem("details"))
    if(data===null){
        localStorage.setItem("details",JSON.stringify([{email:email,password:password}]))
        return ""
    }
    else{
        const checkIfPresent=data.filter(item=>item.email===email)
        if(checkIfPresent.length===0){
            localStorage.setItem("details",JSON.stringify([...data,{email:email,password:password}]))
            return ""
        }
        else{
            return "Account already exists"
        }
        
    }
  
}