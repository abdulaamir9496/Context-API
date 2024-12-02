import Parent from "./Parent"
import { ContextFamily } from "./ContextFamily"
import { useContext } from "react"


const Family = () => {
    const members = useContext(ContextFamily)
    return (
        <>
            <div className="family">
                <h1>Family component is a {members.familyName}</h1>
                <Parent />
            </div>
        </>
    )
}

export default Family
