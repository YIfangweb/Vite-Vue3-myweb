<script setup>

</script>
<template>
    <div class="myCopyright" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <span class="copy">&copy 2023 ClownX</span>
        <span class="cn">版权所有</span>
    </div>
</template>

<style>
@media (max-width:1920px) {
    .copy {
        color: rgba(0, 0, 0, 0.6);
        font-size: 10px;
    }

    .cn {
        color: rgba(0, 0, 0, 0.6);
        font-size: 10px;
        margin-left: 1%;
    }

    .myCopyright {
        width: 100%;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        text-align: center;
        font-family: "Potta", "alimama";
    }

    .logoAnim {
        width: 192px;
        height: 108px;
        overflow: hidden;
    }

}
</style>