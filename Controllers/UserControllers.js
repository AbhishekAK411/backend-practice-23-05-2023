export const login = (req,res) =>{
    try{
        res.send("login");
    } catch(error){
        console.log(error,"login error");
    }
}

export const register = (req,res) =>{
    res.send("register");
}