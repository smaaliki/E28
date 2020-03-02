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
        imageSrc: '',
        imageAlt: '',
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
                this.imageSrc= 'angry';
                this.imageAlt = 'Angry Face';
            } else if(this.playerSelection == 'Rock') {
                if(this.compSelection == 'Paper'){
                    this.winnerTxt = 'Computer Wins :(';
                    this.imageSrc= 'sad';
                    this.imageAlt = 'Sad Face';
                    this.compScore++;
                }
                else {
                    this.winnerTxt = 'You Win :)';
                    this.imageSrc= 'happy';
                    this.imageAlt = 'Happy Face';
                    this.playerScore++;
                }
            } else if(this.playerSelection == 'Paper') {
                if(this.compSelection == 'Scissors'){
                    this.winnerTxt = 'Computer Wins :(';
                    this.imageSrc= 'sad';
                    this.imageAlt = 'Sad Face';
                    this.compScore++;
                }
                else {
                    this.winnerTxt = 'You Win :)';
                    this.imageSrc= 'happy';
                    this.imageAlt = 'Happy Face';
                    this.playerScore++;
                }
            } else if(this.playerSelection == 'Scissors') {
                if(this.compSelection == 'Rock') {
                    this.winnerTxt = 'Computer Wins :(';
                    this.imageSrc= 'sad';
                    this.imageAlt = 'Sad Face';
                    this.compScore++;
                }
                else {
                    this.winnerTxt = 'You Win :)';
                    this.imageSrc= 'happy';
                    this.imageAlt = 'Happy Face';
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