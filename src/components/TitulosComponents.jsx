const TitleH1Component = ({titulo}) => {
    
    const myStyles = {
        /* color: 'red', 
        backgroundColor: 'green' */
    }
    
    return (

    <>
    <h1  style={myStyles}>{titulo}</h1>
    </>
    )
}

const TitleH2Component = ({titulo}) => {
    return (

    <>
    <h2>{titulo}</h2>
    </>
    )
}

const TitleH3Component = ({titulo}) => {
    return (

    <>
    <h3>{titulo}</h3>
    </>
    )
}

const TitleH4Component = ({titulo}) => {
    return (

    <>
    <h4>{titulo}</h4>
    </>
    )
}
export { TitleH1Component, TitleH2Component, TitleH3Component }

export default TitleH4Component