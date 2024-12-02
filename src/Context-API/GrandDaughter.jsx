import { ContextFamily } from "./ContextFamily"
import { useContext } from "react"

const GrandDaughter = () => {
    const updating = useContext(ContextFamily)
    return (
        <>
            <h4 className="gdaughter">Grand Daughter component is a {updating.familyName}</h4>
        </>
    )
}

export default GrandDaughter
