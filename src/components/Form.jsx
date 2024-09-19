import { useState } from "react"
import { convert, conver2 } from "../utils"

const Form = () => {
    const [input, setInput] = useState(0)
    const [word, setWord] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setWord(conver2(input))
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input">Please type your number</label>
                <input 
                    id="input" 
                    type="number" 
                    value={input} 
                    onChange={handleChange} 
                    step={0.01} 
                    min={0} 
                    max={2147483647} 
                />
                <button type="submit">Convert</button>
            </form>
            <p>Word Presentation for your Number is: </p>
            <p>{word}</p>
        </>
    )
}

export default Form