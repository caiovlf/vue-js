new Vue({
    el: '#desafio',
data: {
    nome: 'Caio Vinicius!',
    idade: 26,
    imageSrc: 'http://www.krugerpark.co.za/images/1-lion-charge-gc590a.jpg'
},
methods: {
    randomNum: function(params) {
        return Math.random();
    }
    
}
});