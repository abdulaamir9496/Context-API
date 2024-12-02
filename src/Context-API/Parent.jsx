import Child from "./Child"
import { ContextFamily } from "./ContextFamily"
import { useContext } from "react"

const Parent = () => {
    const details = useContext(ContextFamily)
    return (
        <>
            <div className="parent">
                <h2>Parent component is a {details.familyName}</h2>
                <Child />
            </div>
        </>
    )
}

export default Parent
