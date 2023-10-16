import { useParams } from "react-router-dom"


export const CardDetail = ({ data, loading })=> {

  const { productTitle } = useParams();


  // Busca el producto por título
  const currentProDetail = data.find(product => product.title === productTitle);

  if (loading) {
    return <h1 className="place-self-center">Loading...</h1>;
  }

  if (!currentProDetail) {
    return <h1 className="place-self-center">No se encontró nada</h1>;
  }

  return (
    <>
      <article className="place-self-center w-5/6 h-56 flex flex-row gap-5 border shadow-md p-1 bg-white mt-10">
        <figure className="w-1/4 h-36 m-auto cursor-pointer">
          <img
            className="w-fit h-36 object-fill m-auto"
            src={currentProDetail.image}
            alt={currentProDetail.title}
          />
        </figure>
        <div className="w-3/4 flex flex-col items-start justify-center">
          <h2 className="text-md font-light">{currentProDetail.title}</h2>
          <span className="text-xl font-semibold">${currentProDetail.price}</span>
          <span className="text-xs font-extralight">
            12 x ${Math.ceil(currentProDetail.price * 12)}
          </span>
          <strong className="font-semibold text-green-600">Envío gratis</strong>
        </div>
      </article>
    </>
  );
};
    
    
    
    
    