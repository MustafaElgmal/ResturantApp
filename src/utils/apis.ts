import axios from "axios";
import { userType } from "../types";

const baseUrl = "http://localhost:5000";

export const createUser = async (
  user: userType
): Promise<{ user?: userType; status?: number,message?:string,error?:string }> => {
  try {
    const res = await axios.post(`${baseUrl}/users`, user);
    console.log(res);
    return {
      user: res.data.user,
      status: res.status,
    };
  } catch (e:any) {
    if(e.status!==500){
        return {
            status:e.status,
            message:e.response.data.message
        }
    }else{
        return {
            status:e.status,
            error:e.response.data.error
        }

    }
    
    
   
  }
};

export const loginUser = async (user: userType):Promise<{user?:userType,status?:number,message?:string,error?:string}> => {
  try {
    const res = await axios.post(`${baseUrl}/users/login`, user);
    return {
        user:res.data.user,
        status:res.status
    };
  } catch (e:any) {
    if(e.status!==500){
        return {
            status:e.status,
            message:e.response.data.message
        }
    }else{
        return {
            status:e.status,
            error:e.response.data.error
        }

    }
    
    
  }
};

export const getCategories=async()=>{

  try{
    const res=await axios.get(`${baseUrl}/categories`)
    console.log(res)
    return res
  }catch(e){
    console.log(e)

  }

}

export const getItems=async()=>{
  try{
    const res=await axios.get(`${baseUrl}/items`)
    console.log(res)
    return res
  }catch(e){
    console.log(e)
  }
}
