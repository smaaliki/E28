import Vue from 'vue';
import FeedbackMessage from './components/FeedbackMessage.vue'

//The Vue instance
let app = new Vue({
    el: '#app',
    data:{
        startGame: false,
        playerName: 'Samer',
        words: [
            ['apple', 'Sometimes red, sometimes delicious'],
            ['washington', 'Rushmore\'s left edge'],
            ['pumpkin', 'Halloween\'s favorite fruit'],
            ['football', 'Play with your hands or feet, depending on your location'],
            ['computer', 'Electronic device you use on a daily basis (you\'re probably using it right now)'],
            ['ferrari', 'Manufacturer of a sports car'],
            ['scrambled', 'Some people like their eggs this way'],
            ['corona', 'A Mexican beer brand; also, the name given to a 2019 flu-like virus that originated in Wuhan, China'],
            ['paper','something that you usually write on'],
            ['celtics', 'name of a basketball team']
        ],
        mysteryWord: '',
        hint: '',
        playerGuess:'',
        feedbackMessage: '',
        correctAnswer: false,
    },
    components: {
        'feedback-msg' : FeedbackMessage
    },
    computed: {
        scrambledWord: function() {
           //Let's put the letters of the word into an array
           let myWordArray = [];
           for (var i=0; i<this.mysteryWord.length; i++) {
               myWordArray.push(this.mysteryWord[i]);
           }

           //Now, we will scramble the letters into an array
           let randArrangement = '';
           for (var i=0; i<this.mysteryWord.length; i++) {
               let myRand = Math.floor(Math.random() * (myWordArray.length));
               randArrangement += myWordArray[myRand];               
               myWordArray.splice(myRand,1);
           }
           return randArrangement;       
        },
    },
    methods:{
        //Random 'computer' selection
        setup: function() {
            this.playerGuess = '';
            this.feedbackMessage = '';
            this.startGame = true;
            
            //Let's pick a random word from the list
            let rand = 0;
            let flag = true;
            while (flag) {
                rand = Math.floor(Math.random() * (this.words.length));
                
                //Make sure that it is not the same as the previous word
                if(this.mysteryWord != this.words[rand][0]) {
                    this.mysteryWord = this.words[rand][0];
                    this.hint = this.words[rand][1];
                    flag = false;
                }
            }

        },
        submitGuess: function() {
            if (this.playerGuess.toLowerCase() === this.mysteryWord.toLowerCase()) {
                this.feedbackMessage = "You got it! Nice Work";
                this.correctAnswer = true;
            } else {
                this.feedbackMessage = "Sorry, that's not correct. Plase try again.";
                this.correctAnswer = false;
            }
        }
    }
})