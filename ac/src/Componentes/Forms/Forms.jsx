import React from 'react'

function Forms(){
    return(
        <>
            <form class="form">
                <label class="label">Nome:</label>
                <input type="text" class="input"></input>
                <label class="label">Email:</label>
                <input type="email" class="input"></input>
                <label class="label">Mensagem:</label>
                <textarea class="textarea"></textarea>
                <input type="button" class="button" value="Enviar"/>
            </form>
        </>
    )
}
export default Forms