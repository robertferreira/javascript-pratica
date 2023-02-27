function Evento({numero}){

    function meuEvento(){
        console.log(`Opa, fui ativado! ${numero}`);
    }

    return (
        <div>
            <Button text="Primeiro Evento"/>
            <p> Clique para disparar um evento:</p>
            <button onClick={meuEvento}> Ativar! </button>
        </div>
    )
}

export default Evento;