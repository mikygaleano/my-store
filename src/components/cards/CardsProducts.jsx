import { usePagination } from "../../hooks/usePagination";
import  PropTypes  from "prop-types"

const CardsProducts = ({ data, onClickDatail })=> {
   
    const {
        next,
        prev,
        currentProducts,
        currentPage,
        totalPages
    } = usePagination(data);

    return (
        <>
            <div className="container h-full flex flex-col mt-10">
            {
                    currentProducts.map(product => (
                        <article
                        className="w-full h-56 flex flex-row gap-5 border shadow-md p-1 bg-white"
                            key={product.id}
                        >
                            <figure 
                                onClick={()=> onClickDatail(product.title)}
                                className="w-1/4 h-36 m-auto cursor-pointer">
                                <img 
                                    className="h-36 m-auto object-fill"
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
            <div className="w-full inline-flex justify-center gap-5 mt-5 relative bottom-0">
                <button onClick={prev}>Anterior</button>
                <span>{currentPage} de {totalPages}</span>
                <button onClick={next}>Siguiente</button>
            </div>
        </>
    )
}

CardsProducts.propTypes = {
    data: PropTypes.array.isRequired,
    onClickDatail: PropTypes.func.isRequired
}

export default CardsProducts;