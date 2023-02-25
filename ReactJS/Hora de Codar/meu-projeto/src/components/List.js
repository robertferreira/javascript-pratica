import Item from "./Item";

function List() {
    return (
        <>
            <h1> Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" anoLancamento={1999}/>
                <Item marca="Fiat" anoLancamento={1999}/>
                <Item marca="Renault"/>
            </ul>
        </>
    )
}

export default List;