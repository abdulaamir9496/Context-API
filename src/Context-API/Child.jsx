import GrandDaughter from "./GrandDaughter"
import GrandSon from "./GrandSon"

import { ContextFamily } from "./ContextFamily"
import { useContext } from "react"  //hook for using ContextFamily

const Child = () => {
    //useContext will say what context to be used.
    const message = useContext(ContextFamily)
    return (
        <>
            <h3 className="child">Child component is a {message.familyName}</h3>
            <GrandSon />
            <GrandDaughter />
        </>
    )
}

export default Child
