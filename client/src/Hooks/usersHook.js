import React, {useCallback} from "react";
import useHttp from "./httpHook";

export default function useUsersHook() {

    let users = [];
    const {request} = useHttp()
    const getDbData = useCallback( async() => {

        try {
            
            const data = await request('/api/auth/getDbData', 'POST')
            console.log(data)
            users = Array.from(JSON.parse(data.message))
            return Array.from(JSON.parse(data.message))
        } catch (e) {
            console.log(e.message)
        }
    },[])

    return {users, getDbData}
}
