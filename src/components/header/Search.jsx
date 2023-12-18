/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';


const Search = ({inputData, inputChangeSearch, inputSubmitSearch})=> {


    return (
        <form
            className="w-full">
            <input 
                className="w-full h-10 rounded shadow-lg p-2"
                type="search" 
                name="search" 
                id="search" 
                placeholder="Buscar productos, marcas y más..."
                value={inputData}
                onChange={(e)=> inputChangeSearch(e)} 
                onSubmit={(e)=> inputSubmitSearch(e)}
            />    
       </form>
    )
}

Search.propTypes = {
    inputData: PropTypes.string.isRequired,
    inputChangeSearch: PropTypes.func.isRequired,
    inputSubmitSearch: PropTypes.func.isRequired
  };

export default Search;