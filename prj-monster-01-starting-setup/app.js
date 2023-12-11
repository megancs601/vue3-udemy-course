function getRandomNum(min, max){
    return Math.floor(Math.random() * (max-min)) + min
}

const app = Vue.createApp({
    data(){
        return{
            monsterHp: 100,
            playerHp:100
        }
    },
    computed:{
        monsterBarStyle(){
            return {width: this.monsterHp + '%'}
        },
        playerBarStyle(){
            return {width: this.playerHp + '%'}
        }
    },
    methods: {
        attackMonster(){
            const dmg = getRandomNum(5, 12);
            this.monsterHp -= dmg;
            this.attackPlayer();
        },
        attackPlayer(){
            const dmg = getRandomNum(8, 15);
            this.playerHp -= dmg;
        }
    }
});

app.mount("#game");

