<template>
    <div class="swiper-box">
        <el-carousel height="100vh" direction="vertical" :autoplay="false" ref="carousel"
            @mousewheel="rollScroll" trigger="click" :loop="false">
            <el-affix class="affix">
                <StartHeader/>
            </el-affix>
            <el-carousel-item v-for="item in 3" :key="item" :class="'page' + item" class="page">
                <div class="text-container">
                    <vuetyped :strings="text[item-1]" :loop="false" :smart-backspace="true">
                        <div class="typing" />
                    </vuetyped>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import StartHeader from './components/StartHeader.vue'

export default {
    components: {
        StartHeader
    },
    name: "Start",
    data() {
        return {
            allow: true,
            index: 0,
            text: [
                ['小组学习，让学习更高效！'],
                ['不要孤军奋战，加入小组学习吧！'],
                ['小组学习，让学习变得更有趣！']
            ]
        }
    },
    methods: {
        rollScroll(event) {
            if (!this.allow) {
                return     
            }
            const delta = event.deltaY > 0 ? 1 : -1
            if (delta > 0) {
                console.log("向下滑动")
                this.$refs.carousel.next()
                this.allow = false
                setTimeout(() => {
                    this.allow = true
                }, 500)
            } else {
                console.log("向上滑动")
                this.$refs.carousel.prev()
                this.allow = false
                setTimeout(() => {
                    this.allow = true
                }, 500)
            }
        },
    }
}
</script>

<style scoped>
.affix{
    position: relative;
    z-index: 1;
}

.start-page {
    height: 100vh;
    overflow: hidden;
}

.page {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    align-self: center;
    justify-self: center;
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
.el-carousel__item {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.typing {
    
    font-weight: 700;
    font-size: 4rem; /* 要给内容也设置font-size */
}
</style>