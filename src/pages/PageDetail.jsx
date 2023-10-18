import { v4 as uuidv4 } from 'uuid';
import { useListApi } from "../hooks/useListApi";
import { CardDetail } from "../components/cards/CardDetail";
import { BtnGoBack } from "../components/btn/BtnGoBack";

export const PageDetail = ()=> {

    const uniquePageId = uuidv4(); // Genera un identificador único para la página

    
    const { data, loading } = useListApi();


    return (
        <section key={uniquePageId} className="w-full grid">
            <BtnGoBack/>
            <CardDetail data={data} loading={loading} />
        </section>
    )
}
