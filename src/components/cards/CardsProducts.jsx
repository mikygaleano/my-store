

export const CardsProducts = ({ data, loading })=> {

    if (loading) {
        return (
           <div className="w-full justify-self-center flex place-content-center">
            <h3>Loading...</h3>
           </div>
        )
    }

    return (
        <>
            {
                    data.map((product, index) => (
                        <article
                        className="w-5/6 h-56 flex flex-row gap-5 border shadow-md p-1"
                            key={index}
                        >
                            <figure className="w-1/4 h-36 m-auto cursor-pointer">
                                <img 
                                    className="w-fit h-36 object-fill m-auto"
                                    src={product.image} 
                                    alt={product.title} 
                                />
                            </figure>
                            <div className="w-3/4 flex flex-col items-start justify-center">
                                <h2 className="text-md font-light">{product.title}</h2>
                                <span className="text-xl  font-semibold">$ {product.price}</span>
                                <strong className="font-semibold text-green-600">Envío gratis</strong>
                            </div>
                        </article>
                    ))
            }
        </>
    )
}