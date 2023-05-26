<template>
    <div class="background">
        <SignupCard />
    </div>
</template>

<script>
import SignupCard from './components/SignupCard.vue'
export default {
    name: "Signup",
    components: {
        SignupCard
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.background {
    height: 100vh;
    position: relative;
    background-color: rgb(227, 186, 216);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>