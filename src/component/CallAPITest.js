import axios from "axios";
import React from "react";


// export default function CallAPITest(props) {
//   const baseURL = "http://localhost:8080/";
//   const url = props.url;
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
    // axios.get(baseURL + url).then((response) => {
    //   setData(response.data);
    // });
//   }, [url]);

//   if (!data) return null;
  

//   // return (
//   //   <div>
//   //       {data.map((data,index) => 
//   //           data.month !== 3 ?
//   //           <li key={index}>{data.name} : {data.memberid} </li>
//   //           :
//   //           <li key={index}>{data.name}</li>
            
//   //       )}
//   //       嬤嬤媽媽
//   //   </div>
//   // );

// }

const baseURL = "http://localhost:8080/";
const api = {
  getProducts: (url) => axios.get( baseURL + url),
};
export default api;