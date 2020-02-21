//The Vue instance
let app = new Vue({
    el: '#app',
    data:{
        firstLoad: true,
        quantity: 0,
        totalQuantity: 0,
        item: '',
        items: []
    },
    methods: {
        addItem: function () {
            this.firstLoad = false;
            this.items.push([this.quantity, this.item]);
            this.totalQuantity += this.quantity;
        },
        reset: function () {
            this.firstLoad = true;
            this.quantity = 0;
            this.totalQuantity = 0;
            this.item = '';
            this.items = [];
        }
    }
})