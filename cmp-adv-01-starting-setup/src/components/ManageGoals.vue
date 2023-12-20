<template>
    <div>
        <h2> Manage Goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal">Set Goal</button>
        <error-alert v-if="inputIsInvalid">
            <h2>Input is Invalid</h2>
            <p>Please enter a few characters...</p>
            <button @click="confirmError">Close</button>
        </error-alert>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'

    export default {
        components: {
            ErrorAlert
        },
        data(){
            return {
                inputIsInvalid: false
            };
        },
        methods: {
            setGoal(){
                const value = this.$refs.goal.value;

                //     if(value ===''){
                //         //alert('Input must not be empty!')
                //     }
                // }
                this.inputIsInvalid = value === '';
            },
            confirmError(){
                this.inputIsInvalid = false
            }
        }
    }
</script>