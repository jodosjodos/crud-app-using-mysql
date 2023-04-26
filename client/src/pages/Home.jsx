import {FormHandling} from "../components/Form"
import { Navigate } from 'react-router-dom'

export const Home=()=>{
    const userEmail = localStorage.getItem("email")
    if (!userEmail) {
        return <Navigate to="/login" />
    }

    return(
        <div>
            <FormHandling/>
        </div>
    )
}
