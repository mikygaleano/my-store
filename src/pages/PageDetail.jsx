import { useListApi } from "../hooks/useListApi";
import { CardDetail } from "../components/cards/CardDetail";

export const PageDetail = ()=> {

    const { data, loading } = useListApi();


    return (
        <section className="w-full grid">
            <CardDetail data={data} loading={loading} />
        </section>
    )
}