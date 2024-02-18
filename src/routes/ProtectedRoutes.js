import { Navigate } from "react-router-dom";

export function ProtectedRoutes({children}){
    const token = sessionStorage.getItem('token');
    return token?children:<Navigate to={'/log-in'}/>
}