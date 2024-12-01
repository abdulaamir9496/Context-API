import GrandSon from "./GrandSon"
import GrandDaugther from "./GrandDaugther"

const Child = (message) => {
    return (
    <>
        <div className="children">
            <h3>Child {message.familyName}</h3>
            <GrandSon message={message} />
            <GrandDaugther message={message} />
        </div>
    </>
    )
}

export default Child
