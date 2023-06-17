<script setup>
const surportLists = [
    { name: "GPotta", url: "https://www.freefonts.io/graham-potta-font/", imgurl: "https://i.imgtg.com/2023/06/17/OTN79I.png", descript: "英文字体" },
    { name: "阿里妈妈数黑体", url: "https://www.iconfont.cn/fonts/detail?spm=a313x.7781069.1998910419.d9df05512&cnid=a9fXc2HD9n7s", imgurl: "https://i.imgtg.com/2023/06/17/OTN79I.png", descript: "中文字体" },
    { name: "Vite", url: "https://cn.vitejs.dev/", imgurl: "https://i.imgtg.com/2023/06/17/OTNgIg.png", descript: "下一代的前端工具链" },
    { name: "Vue3", url: "https://cn.vuejs.org/", imgurl: "https://i.imgtg.com/2023/06/17/OTNphB.png", descript: "渐进式前端框架" },
    { name: "VScode", url: "https://code.visualstudio.com/", imgurl: "https://i.imgtg.com/2023/06/17/OTNyEl.png", descript: "前端开发者你必须要知道的工具" },
    { name: "Vercel", url: "https://vercel.com/", imgurl: "https://i.imgtg.com/2023/06/17/OTNveb.png", descript: "一键部署你的项目" },
    { name: "Git", url: "https://git-scm.com/", imgurl: "https://i.imgtg.com/2023/06/17/OTN1R1.png", descript: "最好的代码管理工具" },
    { name: "Github", url: "https://github.com/", imgurl: "https://i.imgtg.com/2023/06/17/OTNnFG.png", descript: "全球最大交友平台" },
    { name: "Nodejs", url: "https://nodejs.org/en", imgurl: "https://i.imgtg.com/2023/06/17/OTNAd6.png", descript: "最好的版本控制工具" },
    { name: "Lottie", url: "https://lottiefiles.com/", imgurl: "https://i.imgtg.com/2023/06/17/OTNeUD.png", descript: "从JSON到动画,强大的动画库" },
    { name: "Bodymo", url: "https://aescripts.com/bodymovin/", imgurl: "https://i.imgtg.com/2023/06/17/OTNZaP.png", descript: "把你充满创意的动画导出为JSON的AE插件" },
    { name: "AE", url: "https://www.adobe.com/cn/products/aftereffects.html", imgurl: "https://i.imgtg.com/2023/06/17/OTNryF.png", descript: "制作气势恢宏的大场面" },
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
            <span class="suprPer-main-span">
                @Rico. <br>
                设计师、开发者<br>
                我的技术指导
            </span>
        </div>
    </div>
    <div class="surpList">
        <span class="surpList-title">项目的技术栈</span>
        <ul class="surpList-ul">
            <li v-for=" surportList in surportLists">
                <a :href="surportList.url">
                    <img :src="surportList.imgurl" class="logolistimg"><br>
                    <span class="surpname">{{ surportList.name }}</span><br>
                    <span class="surpDesc">{{ surportList.descript }}</span>
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

.suprPer-main-span {
    position: relative;
    bottom: -65%;
}

.suprPer-main-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translate(-50%, 0);
}

.suprPer-main {
    margin-top: 10px;
    width: 200px;
    height: 200px;
    position: relative;
    top: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
    border-radius: 5%;
    cursor: pointer;
}

.suprPer {
    width: 100%;
    margin-top: 5%;
    font-family: "Potta", "alimama";
    text-align: center;
}

.suprPer-title {
    font-size: 25px;
}

.surpname {
    position: relative;
    top: 8%;
    left: 1%;
}

.surpDesc {
    position: relative;
    top: 12%;
    left: 2%;
}

.surpList {
    width: 60%;
    height: 800px;
    position: relative;
    left: 50%;
    margin-top: 3%;
    transform: translate(-50%, 0);
    font-family: "Potta", "alimama";
    text-align: center;
}

.surpList-title {
    font-size: 25px;
}

.surpList-ul>li {
    width: 120px;
    height: 230px;
    float: left;
    display: flex;
    border-radius: 5%;
    margin-top: 2%;
    margin-left: 5%;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
}

.logolistimg {
    width: 110px;
    height: 110px;
    position: relative;
    top: 5%;
}

@media (max-width:520px) {

    .surpList-title {
        margin-left: 5%;
    }

    .suprPer {
        width: 100%;
        margin-top: 15%;
        font-family: "Potta", "alimama";
        text-align: center;
    }

    .surpname {
        position: relative;
        top: 8%;
        left: 2%;
    }

    .surpDesc {
        position: relative;
        top: 12%;
        left: 2%;
    }

    .surpList {
        width: 100%;
        position: relative;
        left: 50%;
        margin-top: 10%;
        transform: translate(-53%, 0);
        font-family: "Potta", "alimama";
        text-align: center;
        font-size: 10px;
    }

    .surpList-ul>li {
        width: 90px;
        height: 120px;
        float: left;
        display: flex;
        border-radius: 5%;
        margin-top: 5%;
        margin-left: 5%;
        box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
    }

    .logolistimg {
        width: 45px;
        height: 45px;
        position: relative;
        top: 5%;
        left: 2%;
    }
}
</style>