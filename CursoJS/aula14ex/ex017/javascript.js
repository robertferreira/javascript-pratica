function gerar() {

    var numero = window.document.getElementById('numero');
    var select = window.document.getElementById('select');

    if (numero.value.length == 0) {
        window.alert('Preencha o campo com um número!')
    }
    else {
        var numero_value = Number(numero.value);
        var resultado = 0;
        var i = 0;
        select.innerHTML = '';

        while (i < 10) {
            var item = window.document.createElement('option');
            i++
            resultado = numero_value * i;

            item.text = `${numero_value} x ${i} = ${resultado}`;
            item.value = `tab${i}`

            select.appendChild(item);
        }
    
    }
}