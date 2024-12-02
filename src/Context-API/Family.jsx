import Parent from "./Parent"
import { ContextFamily } from "./ContextFamily"
import { useContext } from "react"


const Family = () => {
    const members = useContext(ContextFamily)
    return (
        <>
            <h1 className="family">Family component is a {members.familyName}</h1>
            <Parent />
        </>
    )
}

export default Family
