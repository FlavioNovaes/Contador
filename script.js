function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar!'
        return
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        } 

        if (i < f){
            resultado.innerHTML = 'Contagem crescente: '
            for (var c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449}`
            } 
        } else {
            resultado.innerHTML = 'Contagem regressiva: '
            for (var c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
    }
}
    