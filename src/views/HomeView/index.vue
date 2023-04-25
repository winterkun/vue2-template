<template>
    <div class="home">
        <img alt="Vue logo" src="src/assets/logo.png"/>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
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

    methods: {
        add(a) {
            console.log(123)
        }
    },
    mounted() {
    },
    data() {
        return {
            obj: {
                a: 1,
                b: 2,
                c: 3
            }
        }
    },
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
