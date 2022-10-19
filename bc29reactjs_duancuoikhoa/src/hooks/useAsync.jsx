import { useEffect, useState } from "react";

export const useAsync = ({dependencies = [], service, condition = true})=>{
    const [state, setState]= useState();
    useEffect(()=>{
        if(condition){
            fetchData();
        }
    },dependencies);

    const fetchData = async ()=>{
        const result = await service();
        console.log({result});
        setState(result.data.content)
    };
    return {state};
};
