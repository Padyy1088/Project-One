import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://reference.intellisense.io/thickenernn/v1/referencia";

export function CheckStatus() {

    const[Underflow,setUnderflow] = useState([])
    const getUnderflow = async () => {
    const {data} =  await axios.get(url)
    setUnderflow(data.current.data.TK1.TK1_Underflow_Percent_Solids.values[0])
    }
    
    useEffect(() => {
        getUnderflow();
        }, []);   

  console.log(Underflow)
}
