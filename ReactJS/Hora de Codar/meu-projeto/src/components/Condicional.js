import { useState } from "react";

function Condicional() {

    function enviarEmail(e){
        e.preventDefault();
        console.log('Testando');
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail..." />
                <button type="submit" onClick={enviarEmail}> Enviar e-mail</button>
            </form>
        </div>
    );
}

export default Condicional;