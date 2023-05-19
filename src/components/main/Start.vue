<template>
    <StartPage>
    </StartPage>
</template>

<script>
import StartPage from '../pages/StartPage.vue'

export default {
    components: { StartPage },
    props: {
        index: Number,
    },
    data() {
        return {
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.page {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
}

.page1 {
    background-image: url(../../assets/bg-imgs/page1.jpg);
    background-size: cover;
    background-position: center;
}

.page2 {
    background-image: url(../../assets/bg-imgs/page2.jpg);
    background-size: cover;
    background-position: center;
}

.page3 {
    background-image: url(../../assets/bg-imgs/page3.jpg);
    background-size: cover;
    background-position: center;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>