<script setup>
import { reactive } from "vue";
import welcome from "./welcome.vue";
import surport from "./surport.vue";
import aboutme from "./aboutme.vue";
import port from "./port.vue";
import copyrightInfo from './copyrightInfo.vue'
const ComponentMap = {
    1:welcome,
    2:aboutme,
    3:surport,
    4:port
}
const ComponentProps = reactive({
    type: 1
})

function setComsTohome() {
  ComponentProps.type = 1
}
function setComsToABOU() {
  ComponentProps.type = 2
}
function setComsToSUPR() {
  ComponentProps.type = 3
}
function setComsToPORT() {
  ComponentProps.type = 4
}
</script>

<template>
  <div class="mymenu">
    <ul class='mymenu-ul'>
      <li id="lihome" class="myli"><router-link to="" @click="setComsTohome">HOME</router-link></li>
      <li id="liabou" class="myli"><router-link to="" @click="setComsToABOU">ABOU</router-link></li>
      <li id="lisupr" class="myli"><router-link to="" @click="setComsToSUPR">SUPR</router-link></li>
      <li id="liport" class="myli"><router-link to="" @click="setComsToPORT">PORT</router-link></li>
    </ul>
  </div>
  <keep-alive>
      <component :is="ComponentMap[ComponentProps.type]"></component>
  </keep-alive>
  <copyrightInfo class="copyrightInfo"></copyrightInfo>
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

li {
  list-style: none
}

a {
  text-decoration: none;
  color: #000;
  position: relative;
}

.copyrightInfo{
  position: absolute;
  bottom: 0px;
}

@media (max-width:1920px) {

  /* 兼容PC */
  .mymenu {
    font-family: "Potta","alimama";
    width: 15%;
    position: absolute;
    top: 40%;
    left: -1%;
  }

  .myli {
    font-size: 10px;
    margin-top: 15%;
    margin-bottom: 15%;
  }
}

a::after {
  content: '';
  display: block;
  /*开始时候下划线的宽度为100%*/
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: -10px;
  background: #000;
  transition: all 0.3s ease-in-out;
  /*通过transform的缩放scale来让初始时x轴为0*/
  transform: scale3d(0, 1, 1);
  /*将坐标原点移到元素的中间，以原点为中心进行缩放*/
  transform-origin: 50% 0;
}

a:hover::after {
  transform: scale3d(1, 1, 1);
}


@media (max-width:520px) {

  /* 兼容phone*/
  .mymenu {
    width: 80%;
    position: absolute;
    top: 2%;
    left: 2%;
  }

  .mymenu-ul {
    width: 100%;
  }

  .myli {
    font-size: 0.5em;
    float: left;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 3%;
    margin-right: 3%;
  }
}</style>
