<template>
    <div class="home">
        <img alt="Vue logo" src="src/assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <a href="">123</a>
        <div class="firstOne"></div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'HomeView',
    components: {
        HelloWorld
    },
    data() {
        return {}
    },
    mounted() {
        console.log(123)
    }
}
</script>
<style lang="scss">
.firstOne {
    position: absolute;
    top: 10px;
    background: red;
}

.firstTwo {
    position: absolute;
    top: 10px;
    background: red;
}
</style>
