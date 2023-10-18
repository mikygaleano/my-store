import { usePagination } from "../../hooks/usePagination";


export const CardsProducts = ({ data, onClickDatail })=> {
   
    const {
        next,
        prev,
        currentProducts,
        currentPage,
        totalPages
    } = usePagination(data);

    return (
        <>
            <div className="flex flex-col mt-10">
            {
                    currentProducts.map(product => (
                        <article
                        className="place-self-center w-5/6 h-56 flex flex-row gap-5 border shadow-md p-1 bg-white"
                            key={product.id}
                        >
                            <figure 
                                onClick={()=> onClickDatail(product.title)}
                                className="w-1/4 h-36 m-auto cursor-pointer">
                                <img 
                                    className="w-fit h-36 object-fill m-auto"
                                    src={product.image} 
                                    alt={product.title} 
                                />
                            </figure>
                            <div className="w-3/4 flex flex-col items-start justify-center">
                                <h2 className="text-md font-light">{product.title}</h2>
                                <span className="text-xl font-semibold">${product.price}</span>
                            </div>
                        </article>
                    ))
            }
            
            </div>
            <div className="place-self-center inline-flex gap-5 mt-5">
                <button onClick={prev}>Anterior</button>
                <span>{currentPage} de {totalPages}</span>
                <button onClick={next}>Siguiente</button>
            </div>
        </>
    )
}