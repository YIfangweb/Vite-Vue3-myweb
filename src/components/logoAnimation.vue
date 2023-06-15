<script setup>
import loadJson from '../assets/Json/data.json'
</script>

<template>
  <div class="logoAnim">
    <Vue3Lottie :animationData="loadJson"/>
  </div>
</template>

<style>
.logoAnim {
  width: 50%;
  height: auto;
  position: absolute;
  top: 20%;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: auto;
}
</style>