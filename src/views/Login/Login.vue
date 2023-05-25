<template>
    <div class="background">
        <LoginCard/>
    </div>
</template>

<script>
import LoginCard from './components/LoginCard.vue'

export default {
    name: "Login",
    components: {
        LoginCard,
    },
    data(){
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

@keyframes slide-in-left {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-in-right {
    from {
        transform: translateX(100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>