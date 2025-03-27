import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Filter.css"

const Filter = () => {
    const [maxPrice, setMaxPrice] = useState<number | "">("")
    const [includes, setIncludes] = useState<string>("")
    const [limit, setLimit] = useState< number | "">("")
    const navigate = useNavigate()

    const handleFilterSubmit = () => {
        const params = new URLSearchParams()
        if (maxPrice !== "") params.append("maxPrice", maxPrice.toString())
        
        if (includes !== "") params.append("includes", includes)
        
        if (limit !== "") params.append("limit", limit.toString())

        navigate(`/products?${params}`)
    }

    return (
        <form onSubmit={handleFilterSubmit} className="filter-form">
            <div className="max-price">
                <label htmlFor="max-price">Max Price </label>
                <input 
                    type="number"
                    name="max-price"
                    id="max-price"
                    value={maxPrice}
                    onChange={(e) => (setMaxPrice(+e.target.value))}
                />
            </div>
            <div className="includes">
                <label htmlFor="includes">Includes </label>
                <input 
                    type="text"
                    name="includes"
                    id="includes"
                    value={includes}
                    onChange={(e) => (setIncludes(e.target.value))}
                />
            </div>
            <div className="limit">
                <label htmlFor="limit">Limit </label>
                <input 
                    type="number"
                    name="limit"
                    id="limit"
                    value={limit}
                    onChange={(e) => (setLimit(+e.target.value))}
                />
            </div>
            <button type="submit">Filter</button>
        </form>
    )
}

export default Filter

// need to use useNavigate() when button is clicked that'll take you to the url