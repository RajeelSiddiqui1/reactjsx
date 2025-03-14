import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() =>{
        fetch(`https://v6.exchangerate-api.com/v6/86d7581bbee1aee29f68107b/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => {
            if(res.conversion_rates){
                setData(res.conversion_rates)
            }else{
                setData[{}]
            }
        })
        console.log(data)
    },[currency])
    
    console.log(data)
    return data
}

export default useCurrencyInfo;