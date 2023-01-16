import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider";

export default function useAuth(){
    const value = useContext(AuthContext);

    if(value === null){
        throw new Error('You should wrap you react tree in AuthProvider')
    }

    return value;
}