// Component Vue instance
Vue.component('round-detail', {
    // Note how the data property receives a function in a Component
    data: function () {
        return {
            deleted: false,
        }
    },
    template: `
    <div v-if='!deleted'>
        <p class='roundResults'>Round #{{ number }} / Winner: {{ winner }}</p>
    </div>
    `,
    methods: {
        deleteRound: function () {
            this.deleted = true
        }
    },
    props: ['number', 'winner'],
});

//The Vue instance
let app = new Vue({
    el: '#app',
    data:{
        startGame: false,
        playerName: 'Samer',
        playerSelection: '',
        compSelection: '',
        compScore: 0,
        playerScore:0,
        winnerTxt: '',
        imageSrc: '',
        imageAlt: '',
        rounds: [],
        numberOfRounds: 0,
        playerWins: false,
        computerWins: false,
    },

    methods:{
        //Random 'computer' selection
        letsGo: function() {
            var rand = Math.random();
            if(rand<=0.33) this.compSelection = 'Rock';
            else if(rand<=0.66) this.compSelection = 'Paper';
            else this.compSelection = 'Scissors';
            this.numberOfRounds++;

            if(this.playerSelection==this.compSelection){
                this.winnerTxt = 'It is a tie!!';
                this.imageSrc= 'angry';
                this.imageAlt = 'Angry Face';
                this.playerWins = false,
                this.computerWins = false,
                this.rounds.push({number: this.numberOfRounds, winner: 'tie'});
            } else if(this.playerSelection == 'Rock') {
                if(this.compSelection == 'Paper'){
                    this.winnerTxt = 'Computer Wins :(';
                    this.imageSrc = 'sad';
                    this.imageAlt = 'Sad Face';
                    this.compScore++;
                    this.playerWins = false,
                    this.computerWins = true,
                    this.rounds.push({number: this.numberOfRounds, winner: 'computer'});
                }
                else {
                    this.winnerTxt = 'You Win :)';
                    this.imageSrc = 'happy';
                    this.imageAlt = 'Happy Face';
                    this.playerScore++;
                    this.playerWins = true,
                    this.computerWins = false,
                    this.rounds.push({number: this.numberOfRounds, winner: this.playerName});
                }
            } else if(this.playerSelection == 'Paper') {
                if(this.compSelection == 'Scissors'){
                    this.winnerTxt = 'Computer Wins :(';
                    this.imageSrc = 'sad';
                    this.imageAlt = 'Sad Face';
                    this.compScore++;
                    this.playerWins = false,
                    this.computerWins = true,
                    this.rounds.push({number: this.numberOfRounds, winner: 'computer'});
                }
                else {
                    this.winnerTxt = 'You Win :)';
                    this.imageSrc= 'happy';
                    this.imageAlt = 'Happy Face';
                    this.playerScore++;
                    this.playerWins = true,
                    this.computerWins = false,
                    this.rounds.push({number: this.numberOfRounds, winner: this.playerName});
                }
            } else if(this.playerSelection == 'Scissors') {
                if(this.compSelection == 'Rock') {
                    this.winnerTxt = 'Computer Wins :(';
                    this.imageSrc= 'sad';
                    this.imageAlt = 'Sad Face';
                    this.compScore++;
                    this.playerWins = false,
                    this.computerWins = true,
                    this.rounds.push({number: this.numberOfRounds, winner: 'computer'});
                }
                else {
                    this.winnerTxt = 'You Win :)';
                    this.imageSrc = 'happy';
                    this.imageAlt = 'Happy Face';
                    this.playerScore++;
                    this.playerWins = true,
                    this.computerWins = false,
                    this.rounds.push({number: this.numberOfRounds, winner: this.playerName});
                }
            }
            console.log(this.playerWins);
        },
        reset: function () {
            this.startGame = false,
            this.playerName = '',
            this.playerSelection = '',
            this.compSelection = '',
            this.compScore = 0,
            this.playerScore = 0,
            this.winnerTxt= '',
            this.imageSrc= '',
            this.imageAlt= '',
            this.rounds= [],
            this.numberOfRounds= 0,
            this.playerWins = false,
            this.computerWins = false
        }
    }
})