import { ContextFamily } from "./ContextFamily"
import { useContext } from "react"

const GrandDaughter = () => {
    const updating = useContext(ContextFamily)
    return (
        <>
            <div className="gdaughter">
                <h4>Grand Daughter component is a {updating.familyName}</h4>
            </div>
        </>
    )
}

export default GrandDaughter
