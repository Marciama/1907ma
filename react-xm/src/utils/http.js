import {fetch as fetchPro} from "whatwg-fetch"
import qs from "qs";
const get = (url)=>{

    var result = fetchPro(url, 
        {
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
            },    
        }
        ).then((res)=>res.json());


    return result;//promise
}


const post = (url,data)=>{
    
    var result = fetchPro(url, 
        {
            method:"POST",
            credentials: 'include',
            body:qs.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },    
        }).then((res)=>res.json());

    return result;
}


export default {
    get,
    post
}