
const REACT_API = import.meta.env.VITE_REACT_API;

export function CheckFunctionWorks(route){
  return  REACT_API+route;
}

// export async function CallAPI(ba,route,body,query){
//     const response= await axios.(REACT_API+route,{
// 	body
// })
// return response
// }

