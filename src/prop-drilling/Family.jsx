import Parent from './Parent';

const Family = (message) => {
    return (
    <>
        <div className='family'>
            <h1>Family</h1>
            <Parent message={message}/>
        </div>
    </>
    )
}

export default Family
