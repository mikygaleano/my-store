import { useNavigate } from "react-router-dom";


export const BtnGoBack = ()=> {

    const navigate = useNavigate();

    const handleGoBack = ()=> {
        navigate(-1);
    }

    return (
        <button
            className="w-52 h-fit relative top-10 -left-16" 
            onClick={handleGoBack}>Volver</button>
    )
}