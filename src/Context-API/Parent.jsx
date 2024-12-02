import Child from "./Child"
import { ContextFamily } from "./ContextFamily"
import { useContext } from "react"

const Parent = () => {
    const details = useContext(ContextFamily)
    return (
        <>
            <h2 className="parent">Parent component is a {details.familyName}</h2>
            <Child />
        </>
    )
}

export default Parent
