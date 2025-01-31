import { setFilter } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = event => {
        event.preventDefault()
        const filter = event.target.value
        dispatch(setFilter(filter))
    }
    const style = {
        marginbottom: 10,
    }
    return (
        <div style={style}>
            Filter: <input onChange={handleChange} />
        </div>
    )
}

export default Filter
