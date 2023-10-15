import { useParams } from "react-router-dom"


export const Detail = ({ data, loading })=> {

    const { producTitle, productCategory, categoryName } = useParams();


    const currentProDetail = data.find(product => {
        if (producTitle) {
            return  product.title === producTitle;
        } if (productCategory) {
            return product.category === productCategory;
        } if (categoryName) {
            return product.category === categoryName;
        }
    });

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <>
            {currentProDetail && (
            <article className="place-self-center w-5/6 h-56 flex flex-row gap-5 border shadow-md p-1 bg-white">
                <figure className="w-1/4 h-36 m-auto cursor-pointer">
                <img className="w-fit h-36 object-fill m-auto" src={currentProDetail.image} alt={currentProDetail.title} />
                </figure>
                <div className="w-3/4 flex flex-col items-start justify-center">
                <h2 className="text-md font-light">{currentProDetail.title}</h2>
                <span className="text-xl font-semibold">${currentProDetail.price}</span>
                <span className="text-xs font-extralight">12 x ${Math.ceil(currentProDetail.price * 12)}</span>
                <strong className="font-semibold text-green-600">Envío gratis</strong>
                </div>
            </article>
            )}
      </>
    );
    
}
    
    
    
    
    