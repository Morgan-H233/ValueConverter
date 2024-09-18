import { useState } from "react"
import { convert } from "../utils"

const Form = () => {
    const [input, setInput] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        convert(input)
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="input">Please type your number</label>
            <input id="input" type="number" value={input} onChange={handleChange} />
            <button type="submit">Convert</button>
        </form>
    )
}

export default Form