

export const Search = ()=> {


    return (
        <form className="w-full self-center relative right-1/3">
            <input 
                className="w-full h-12 rounded shadow-lg p-2"
                type="search" 
                name="search" 
                id="search" 
                placeholder="Buscar productos, marcas y más..."
            />
        </form>
    )
}