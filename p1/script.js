//The Vue instance
let app = new Vue({
    el: '#app',
    data:{
        startGame: false,
        playerName: '',
        playerSelection: '',
        compSelection: '',
        compScore: 0,
        playerScore:0,
        winnerTxt: '',
    },

    methods:{
        //Random 'computer' selection
        letsGo: function() {
            var rand = Math.random();
            if(rand<=0.33) this.compSelection = 'Rock';
            else if(rand<=0.66) this.compSelection = 'Paper';
            else this.compSelection = 'Scissors';

            if(this.playerSelection==this.compSelection){
                this.winnerTxt = 'It is a tie!!'
            } else if(this.playerSelection == 'Rock') {
                if(this.compSelection == 'Paper'){
                    this.winnerTxt = 'Computer Wins :(';
                    this.compScore++;
                }
                else {
                    this.winnerTxt = 'You Win :)';
                    this.playerScore++;
                }
            } else if(this.playerSelection == 'Paper') {
                if(this.compSelection == 'Scissors'){
                    this.winnerTxt = 'Computer Wins :(';
                    this.compScore++;
                }
                else {
                    this.winnerTxt = 'You Win :)';
                    this.playerScore++;
                }
            } else if(this.playerSelection == 'Scissors') {
                if(this.compSelection == 'Rock') {
                    this.winnerTxt = 'Computer Wins :(';
                    this.compScore++;
                }
                else {
                    this.winnerTxt = 'You Win :)';
                    this.playerScore++;
                }
            }
        },
        reset: function () {
            this.startGame = false,
            this.playerName = '',
            this.playerSelection = 'Rock',
            this.compSelection = 'Rock',
            this.compScore = 0,
            this.playerScore = 0
        }
    }
})