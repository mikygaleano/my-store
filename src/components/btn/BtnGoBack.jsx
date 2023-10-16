import { useNavigate } from "react-router-dom";


export const BtnGoBack = ()=> {

    const navigate = useNavigate();

    const handleGoBack = ()=> {
        navigate(-1);
    }

    return (
        <button onClick={handleGoBack}>Volver</button>
    )
}