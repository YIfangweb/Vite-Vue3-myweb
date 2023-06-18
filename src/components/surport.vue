<script setup>
const surportLists = [
    { name: "GPotta.", url: "https://www.freefonts.io/graham-potta-font/", imgurl: "https://i.imgtg.com/2023/06/18/OTpHxq.png", descript: "英文字体个人免费,禁止商用" },
    { name: "阿里妈妈数黑体.", url: "https://www.iconfont.cn/fonts/detail?spm=a313x.7781069.1998910419.d9df05512&cnid=a9fXc2HD9n7s", imgurl: "https://i.imgtg.com/2023/06/18/OTpHxq.png", descript: "中文字体个人免费,禁止商用" },
    { name: "Vite", url: "https://cn.vitejs.dev/", imgurl: "https://i.imgtg.com/2023/06/17/OTNgIg.png", descript: "下一代的前端工具链,为开发提供极速响应" },
    { name: "Vue3", url: "https://cn.vuejs.org/", imgurl: "https://i.imgtg.com/2023/06/17/OTNphB.png", descript: "渐进式前端框架，易学易用，性能出色" },
    { name: "VScode", url: "https://code.visualstudio.com/", imgurl: "https://i.imgtg.com/2023/06/17/OTNyEl.png", descript: "前端开发者你必须要知道的工具" },
    { name: "Vercel", url: "https://vercel.com/", imgurl: "https://i.imgtg.com/2023/06/17/OTNveb.png", descript: "一键免费部署你精彩的项目！" },
    { name: "Git", url: "https://git-scm.com/", imgurl: "https://i.imgtg.com/2023/06/17/OTN1R1.png", descript: "最好的代码管理工具，用过都说好" },
    { name: "Github", url: "https://github.com/", imgurl: "https://i.imgtg.com/2023/06/17/OTNnFG.png", descript: "全球最大的同性交友平台QaQ" },
    { name: "Nodejs", url: "https://nodejs.org/en", imgurl: "https://i.imgtg.com/2023/06/17/OTNAd6.png", descript: "开源的跨平台的项目运行环境" },
    { name: "Lottie", url: "https://lottiefiles.com/", imgurl: "https://i.imgtg.com/2023/06/17/OTNeUD.png", descript: "从JSON到动画,强大的动画库" },
    { name: "Bodymo", url: "https://aescripts.com/bodymovin/", imgurl: "https://i.imgtg.com/2023/06/18/OTpLpc.png", descript: "把动画导出为JSON的AE插件" },
    { name: "AE", url: "https://www.adobe.com/cn/products/aftereffects.html", imgurl: "https://i.imgtg.com/2023/06/17/OTNryF.png", descript: "用AE制作气势恢宏的大场面" },
]

function relocation() {
    window.location.href = "https://ricocc.com"
}
</script>

<template style="height:1200px;">
    <div class="suprPer">
        <span class="suprPer-title">
            特别鸣谢
        </span>
        <div class="suprPer-main" @click="relocation">
            <img src="https://i.imgtg.com/2023/06/17/OTN0ht.jpg" class="suprPer-main-img">
            <div class="descP">
            </div>
            <span class="suprPer-main-span">
                @Rico. <br>
                设计师、开发者<br>
                我的技术指导
            </span>
        </div>
    </div>
    <div class="surpList">
        <span class="surpList-title">我使用了什么工具开发了这个项目</span>
        <ul class="surpList-ul">
            <li v-for=" surportList in surportLists">
                <a :href="surportList.url">
                    <img :src="surportList.imgurl" class="logolistimg">
                    <div class="surpList-ul-li-right">
                        <div class="location">
                            <span class="surpspan">名称：{{ surportList.name }}</span>
                            <span class="surpspan">描述：{{ surportList.descript }}</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<style>
* {
    margin-top: 0;
    margin-left: 0;
}
.suprPer-main-span{
    margin-top: 2%;
}
.suprPer-main-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 20px;
}

.suprPer-main {
    margin-top: 25px;
    width: 100%;
    height: 200px;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 1s;
}

.suprPer-main:hover {
    transform: scale(1.1);
    transition: all 1s;
}

.suprPer {
    width: 80%;
    margin-top: 3%;
    margin-left: 10%;
    font-family: "Potta", "alimama";
    text-align: center;
}

.suprPer-title {
    font-size: 25px;
}

.surpList {
    width: 80%;
    font-family: "Potta", "alimama";
    margin-left: 10%;
    margin-top: 3%;
}

.descP {
    height: 10px;
}

.surpList-title {
    width: 100%;
    font-size: 25px;
}

.surpList-ul {
    width: 100%;
    height: 1025px;
}

.surpList-ul>li {
    width: 30%;
    height: 150px;
    float: left;
    display: flex;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
    transition: all 1s;
    margin-top: 2%;
}

.surpspan {
    display: inline-block;
    width: 100%;
}

.location {
    margin-top: 20%;
}

.surpList-ul>li:not(:first-child):not(:nth-child(4)):not(:nth-child(7)):not(:nth-child(10)) {
    margin-left: 5%;
}

.surpList-ul>li:hover {
    transform: scale(1.1);
    transition: all 1s;
}

.surpList-ul-li-right {
    width: 50%;
    height: 100%;
    float: left;
    text-align: left;
    margin-left: 15%;
}

.logolistimg {
    width: 110px;
    height: 110px;
    position: relative;
    top: 20px;
    left: 10%;
    float: left;
}

@media (max-width:520px) {

    .suprPer {
        margin-top: 15%;
    }

    .suprPer-main-img {
        width: 100px;
        height: 100px;
    }

    .surpList {
        width: 80%;
        height: 1800px;
        font-family: "Potta", "alimama";
        margin-left: 10%;
        margin-top: 5%;
    }

    .surpList-title {
        width: 100%;
        font-size: 25px;
    }

    .surpList-ul {
        width: 100%;
    }

    .surpList-ul>li {
        width: 100%;
        height: 130px;
        float: left;
        display: flex;
        box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
        transition: all 1s;
        margin-top: 5%;
    }

    .surpList-ul>li:not(:first-child):not(:nth-child(4)):not(:nth-child(7)):not(:nth-child(10)) {
        margin-left: 0%;
    }

    .surpspan {
        display: inline-block;
        width: 100%;
    }

    .location {
        margin-top: 20%;
    }

    .surpList-ul>li:hover {
        transform: scale(1.1);
        transition: all 1s;
    }

    .surpList-ul-li-right {
        width: 40%;
        height: 100%;
        float: left;
        text-align: left;
        margin-left: 15%;
    }

    .logolistimg {
        width: 85px;
        height: 85px;
        position: relative;
        top: 20px;
        left: 10%;
        float: left;
    }
}</style>