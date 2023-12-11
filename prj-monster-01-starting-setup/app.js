function getRandomNum(min, max){
    return Math.floor(Math.random() * (max-min)) + min
}

const app = Vue.createApp({
    data(){
        return{
            monsterHp: 100,
            playerHp:100,
            currentRound:0,
            winner: null,
            logMessages: []
        }
    },
    watch: {
        playerHp(value){
            if(value <=0 && this.monsterHp <=0){
                //draw
                this.winner = "draw";
            }else if(value <=0){
                //player lost
                this.winner = "monster";
            }
        },
        monsterHp(value){
            if(value <=0 && this.playerHp <=0){
                //draw
                this.winner = "draw";
            }else if(value <=0){
                //monster lost
                this.winner = "player";
            }
        }
    },
    computed:{
        monsterBarStyle(){
            return {width: this.monsterHp < 0 ? 0:this.monsterHp + '%'}
        },
        playerBarStyle(){
            return {width: this.playerHp < 0 ? 0:this.playerHp + '%'}
        },
        specialAttackAvailable(){
            return this.currentRound % 3 !==0
        }
        
    },
    methods: {
        attackMonster(){
            this.currentRound++;
            const dmg = getRandomNum(5, 12);
            this.monsterHp -= dmg;
            this.addLogMessage('player', 'attack', dmg);
            this.attackPlayer();
        },
        attackPlayer(){
            const dmg = getRandomNum(8, 15);
            this.playerHp -= dmg;
            this.addLogMessage('monster', 'attack', dmg);
        },
        specialAttackMonster(){
            this.currentRound++;
            const dmg = getRandomNum(10,25);
            this.monsterHp -=dmg;
            this.addLogMessage('player', 'attack', dmg);
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const heal = getRandomNum(8,20);
            this.playerHp += heal;
            this.playerHp = this.playerHp > 100 ? 100:this.playerHp;
            this.addLogMessage('player', 'heal', heal);
            this.attackPlayer();
        },
        startGame(){
            this.playerHp = 100;
            this.monsterHp = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        surrender(){
            this.winner = "monster"
        },
        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        },
        classNameFor(who){
            return who === 'player' ? 'log--player': 'log--monster'
        }
    }
});

app.mount("#game");

