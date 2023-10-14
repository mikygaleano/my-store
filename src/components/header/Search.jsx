

export const Search = ({inputData, inputChangeSearch, inputSubmitSearch})=> {


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
            <button className="absolute w-8 h-6 right-1/2  border-l-2 mt-2">
                <img
                    className="w-4 m-auto"
                    src="public/lupa.png" 
                    alt="lupa" />
            </button>
        </form>
    )
}