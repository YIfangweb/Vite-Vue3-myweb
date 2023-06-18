<script setup>
const titleList = [
    { desc: "developer" },
    { desc: "freelance" },
    { desc: "Random" },
    { desc: "freelance" },
    { desc: "single" },
    { desc: "youth" },
    { desc: "developer" },
    { desc: "freelance" },
    { desc: "Random" },
    { desc: "freelance" },
    { desc: "single" },
    { desc: "youth" },
    { desc: "developer" },
    { desc: "freelance" },
    { desc: "Random" },
    { desc: "freelance" },
    { desc: "single" },
    { desc: "youth" },
    { desc: "developer" },
    { desc: "freelance" },
    { desc: "Random" },
    { desc: "freelance" },
    { desc: "single" },
    { desc: "youth" },
    { desc: "developer" },
    { desc: "freelance" },
    { desc: "Random" },
    { desc: "freelance" },
    { desc: "single" },
    { desc: "youth" },
]
</script>

<template>
    <div class="wrap">
        <div class="cont">
            <span v-for=" descs in titleList" class="mydescs">{{ descs.desc }}&nbsp;•&nbsp;</span>
        </div>
    </div>
</template>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.wrap {
    position: relative;
    width: 100%;
    height: 40px;
    overflow: hidden;
}

.cont{
    width: 320%;
    height: 40px;
    border-bottom: #000000 1px solid;
}
.wrap .mydescs {
    font-size: 1vw;
    font-family: "Potta", "alimama";
    color: #000000;
    display: inline-block;
    width: auto;
    height: 30px;
    line-height: 30px;
    margin-top: 5px;
    position: relative;
    animation: 150s move infinite linear;
}

@keyframes move {

    /* 原理 left值的变化 移动一个容器的宽度 */
    0% {
        left: 0;
    }

    100% {
        left: -100%;
    }
}
</style>