<template>
    <div class="home">
        <img alt="Vue logo" src="src/assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <div id="video"></div>
        <a href="">123</a>
        <a href=""></a>
        <div class="first-one first1" style="position: absolute; top: 10px">
            <div class="second-div" style="position: absolute; top: 10px"></div>
        </div>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
    name: 'HomeView',
    components: {
        HelloWorld
    },

    methods: {},
    mounted() {},
    data() {
        return {
            obj: {
                a: 1,
                b: 2,
                c: 3
            }
        }
    }
}
</script>
<style lang="scss">
#video {
    width: 500px;
    height: 500px;
}
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

    .second-div {
        background-color: tan;
    }

    .second-div-two {
        background-color: tan;
    }
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
