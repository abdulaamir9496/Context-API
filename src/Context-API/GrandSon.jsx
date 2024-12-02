import { ContextFamily } from "./ContextFamily"
import { useContext } from "react"

const GrandSon = () => {
    const information = useContext(ContextFamily)
    return (
        <>
            <div className="gson">
                <h4>Grand Son component is a {information.familyName}</h4>
            </div>
        </>
    )
}

export default GrandSon
