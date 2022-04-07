import React, {useState, useCallback, useEffect} from "react";

export default function  useAuth(){
    
    const [token,setToken] = useState(null)
    const [userId,setId] = useState(null)
    const [ban, setBan] = useState(false)
    const [mail, setMail] = useState(null)

    
    const login = useCallback((jwtToken, Id, isBanned, userMail)=>{

        setToken(jwtToken)
        setId(Id)
        setBan(isBanned)
        setMail(userMail)
        
        if(!isBanned){
            localStorage.setItem('userData',JSON.stringify({userId:Id,token:jwtToken, isBanned:isBanned, userEmail:userMail}))
            localStorage.setItem('inBan', JSON.stringify({inBan:isBanned}))
        }
    },[])

    const logout = useCallback(()=>{

        setId(null)
        setToken(null)
        setBan(false)

        localStorage.removeItem('userData')
        localStorage.removeItem('inBan')
    },[])

    useEffect(()=>{

        const Data = JSON.parse(localStorage.getItem('userData'));

        if (Data && Data.token && !(Data.isBanned)){
            login(Data.token,Data.userId, Data.isBanned,Data.userEmail)
        }
    }, [login])

    return {token,userId, login,logout, ban}
}