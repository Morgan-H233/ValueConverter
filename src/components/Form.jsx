import { useState } from "react"
import { convertor } from "../utils"

const Form = () => {
    const [input, setInput] = useState(0)
    const [word, setWord] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setWord(convertor(input))
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="input">Please put your number:</label>
                <input 
                    id="input" 
                    type="number" 
                    value={input} 
                    onChange={handleChange} 
                    step={0.01} 
                    min={0.01}
                    // set max value to the be max integer value in java
                    max={2147483647} 
                />
                <button type="submit">Convert</button>
            </form>
            {
                word !== '' && 
                <>
                    <p>Words for your Number is: </p>
                    <p>{word}</p>
                </>
            }
            
        </>
    )
}

export default Form