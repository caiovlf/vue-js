new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta: function(){
            alert('Alerta!!')
        },
        armazenaValor: function(){
            this.valor = event.target.value
        }
    }
})