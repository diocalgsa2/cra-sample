const Input = ({id, text, changeHandler, value}) => {
    return (
        <>
            <label htmlFor={id} className="">{ text }</label>
            <input type='text' id={id} onChange={changeHandler} value={value} />
        </>
    )
}

export default Input;