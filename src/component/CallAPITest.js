import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8080/order/query/1";

export default function CallAPITest() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;
  

  return (
    <div>
        <h1>request success!</h1>
        <h2>{data.name}</h2>
        <h2>{data.orderid}</h2>
        <p>{data.body}</p>
    </div>
  );
}
