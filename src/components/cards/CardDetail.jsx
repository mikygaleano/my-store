/* eslint-disable react/react-in-jsx-scope */
import { useParams } from "react-router-dom"
import  BtnGoBack  from "../btn/BtnGoBack";
import PropTypes from "prop-types";


const CardDetail = ({ data, loading })=> {

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
      <BtnGoBack/>
      <article className="w-full min-h-screen flex flex-row gap-5 border shadow-md p-1 bg-white mt-10 mb-10">
        <figure className="w-1/2 h-full m-auto cursor-pointer">
          <img
            className="object-fill m-auto"
            src={currentProDetail.image}
            alt={currentProDetail.title}
          />
        </figure>
        <div className="w-1/2 flex flex-col items-start justify-start gap-3 mt-16">
          <h2 className="text-xl font-bold">{currentProDetail.title}</h2>
          <span className="text-4xl font-semibold">$ {currentProDetail.price}</span>
          <span className="text-sm font-extralight">
            12 x ${Math.ceil(currentProDetail.price * 12)}
          </span>
          <strong className="font-semibold text-green-600">Envío gratis</strong>
          <div className="flex flex-col gap-3 items-start mt-5">
            <button className="h-fit w-56 bg-blue-400 rounded-md text-white font-semibold p-2">Comprar ahora</button>
            <button className="h-fit w-56 bg-blue-400 rounded-md text-white font-semibold p-2">Agregar al carrito</button>
          </div>
        </div>
      </article>
    </>
  );
};

CardDetail.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
    
export default CardDetail;
    
    
    