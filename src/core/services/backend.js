import { toast } from "react-toastify"

export async function callBackend({
    url     = null, 
    method  = "GET", 
    body    = null,
    errorReturn     = null,
    successMessage  = "",
}){
    const headers = {}
    const options = {method, ...(body !== null && {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    })}
    try{
        const response  = await fetch(url, options)
        const data      = await response.json()
        toast.success(successMessage)
        return data
    }catch(error){
        console.error(error)
        return errorReturn
    }
}