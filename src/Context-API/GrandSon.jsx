import { ContextFamily } from "./ContextFamily"
import { useContext } from "react"

const GrandSon = () => {
    const information = useContext(ContextFamily)
    return (
        <>
            <h4 className="gson">Grand Son component is a {information.familyName}</h4>
        </>
    )
}

export default GrandSon
