import { useListApi } from "../hooks/useListApi";
import { CardDetail } from "../components/cards/CardDetail";
import { BtnGoBack } from "../components/btn/BtnGoBack";

export const PageDetail = ()=> {

    const { data, loading } = useListApi();

    

    return (
        <section className="w-full grid">
            <BtnGoBack/>
            <CardDetail data={data} loading={loading} />
        </section>
    )
}