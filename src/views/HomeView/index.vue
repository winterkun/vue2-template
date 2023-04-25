<template>
    <div class="home">
        <img alt="Vue logo" src="src/assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <a href="">123</a>
        <a href=""></a>
        <div class="first-one first1" style="position: absolute; top: 10px"></div>
    </div>
</template>

<script>
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
.First {
    background: red;
}

.first {
    position: absolute;
    top: 10px;
    background: red;
}

.first_one {
    position: absolute;
    top: 10px;
    background: red;
}

.FirstOne {
    position: absolute;
    top: 10px;
    background: red;
}

.firstOneName {
    position: absolute;
    top: 10px;
    background: red;
}
</style>
