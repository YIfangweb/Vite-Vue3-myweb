<script setup>
import { reactive } from 'vue'
import Welcome from './logoAnimation.vue';
const ComponentMap = {
    1: Welcome,
}
const ComponentProps = reactive({
    type: null
})

const mouseenter = () => {
    ComponentProps.type = 1
}
const mouseleave = () => {
    ComponentProps.type = null
}
</script>
<template>
    <div class="myCopyright" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <keep-alive>
            <component :is="ComponentMap[ComponentProps.type]" class="logoAnim"></component>
        </keep-alive>
        <span class="copy">&copy 2023 ClownX</span>
        <span class="cn">版权所有</span>
    </div>
</template>

<style>
@font-face {
    font-family: "Potta";
    src: url("../assets/fonts/GrahamPotta.otf");
}

@font-face {
    font-family: "alimama";
    src: url("../assets/fonts/AlimamaShuHeiTi-Bold.otf");
}

@media (max-width:1920px) {
    .copy {
        color: rgba(0, 0, 0, 0.6);
        font-size: 10px;
        font-family: "Potta";
        position: absolute;
        left: 50%;
        bottom: 3%;
        transform: translate(-50%, -50%);
    }

    .cn {
        color: rgba(0, 0, 0, 0.6);
        font-size: 10px;
        font-family: "alimama";
        position: absolute;
        left: 50%;
        bottom: 1%;
        transform: translate(-50%, -50%);
    }

    .logo {
        width: 192px;
        height: 108px;
        position: absolute;
        left: 50%;
        bottom: -5%;
        transform: translate(-50%, -50%);
    }

    .myCopyright {
        width: 100%;
    }

    .logoAnim {
        width: 192px;
        height: 108px;
        position: absolute;
        bottom: -66%;
        overflow: hidden;
        transform: translate(0, -1px);
    }

}

@media (max-width:520px) {
    .copy {
        color: rgba(0, 0, 0, 0.6);
        font-size: 10px;
        font-family: "Potta";
        position: absolute;
        left: 50%;
        bottom: 3%;
        transform: translate(-50%, -50%);
    }

    .cn {
        color: rgba(0, 0, 0, 0.6);
        font-size: 10px;
        font-family: "alimama";
        position: absolute;
        left: 50%;
        bottom: 1%;
        transform: translate(-50%, -50%);
    }
    .logo{
        display: none;
    }
}
</style>