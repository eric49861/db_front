<template>
    <el-footer class="footer">
        <div class="container">
            <div class="logo">
                <!-- Logo -->
            </div>
            <div class="links">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
            <div class="social-media">
                <a href="#">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </el-footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.footer {
    background-color: #f5f5f5;
    padding: 20px 0;
    margin-top: 30px;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.links {
    display: flex;
}

.links a {
    margin-right: 20px;
    color: #999;
}

.links a:hover {
    color: #333;
}

.social-media a {
    margin-right: 10px;
    color: #999;
}

.social-media a:hover {
    color: #333;
}</style>