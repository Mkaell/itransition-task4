import React, {useState, useCallback} from "react";

export default function useHttp(){

    const [loading, setLoading] = useState(false)
    const [error, setError]=useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {})=>{

        setLoading(true);
        
        try{
            headers['Content-Type'] = 'application/json'

            if(body){
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            let responce = null;

            if(method == 'GET'){
                responce = await fetch(url,{method,headers})
            } else {
                try {
                    responce = await fetch(url,{method,body,headers})
                } catch (error) {
                    console.log(error);
                }
                
            }

            const Data = await responce.json();

            if(!responce.ok){
                throw new Error(Data.message)
            }

            setLoading(false)

            return Data
        }catch (errors){

            setLoading(false)
            setError(errors.message)
            throw errors
        }
    },[])

    return{loading, request, error}
}