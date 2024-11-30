import Child from "./Child" 

const Parent = (message) => {
    return (
    <>
        <div className="parent">
            <h2>Parent {message.familyName}</h2>
            <Child message={message}/>
        </div>
    </>
    )
}

export default Parent
