<script setup>
const surportLists = [
    { name: "GPotta", url: "https://www.freefonts.io/graham-potta-font/", imgurl: "../src/assets/surpLogo/font.png", descript: "英文字体" },
    { name: "阿里妈妈数黑体", url: "https://www.iconfont.cn/fonts/detail?spm=a313x.7781069.1998910419.d9df05512&cnid=a9fXc2HD9n7s", imgurl: "../src/assets/surpLogo/font.png", descript: "中文字体" },
    { name: "Vite", url: "https://cn.vitejs.dev/", imgurl: "../src/assets/surpLogo/vite.png", descript: "下一代的前端工具链" },
    { name: "Vue3", url: "https://cn.vuejs.org/", imgurl: "../src/assets/surpLogo/Vue.png", descript: "渐进式前端框架" },
    { name: "VScode", url: "https://code.visualstudio.com/", imgurl: "../src/assets/surpLogo/vscode.png", descript: "前端开发者你必须要知道的工具" },
    { name: "Vercel", url: "https://vercel.com/", imgurl: "../src/assets/surpLogo/vercel.png", descript: "一键部署你的项目" },
    { name: "Git", url: "https://git-scm.com/", imgurl: "../src/assets/surpLogo/git.png", descript: "最好的代码管理工具" },
    { name: "Github", url: "https://github.com/", imgurl: "../src/assets/surpLogo/github.png", descript: "全球最大交友平台" },
    { name: "Nodejs", url: "https://nodejs.org/en", imgurl: "../src/assets/surpLogo/Nodejs.png", descript: "最好的版本控制工具" },
    { name: "Lottie", url: "https://lottiefiles.com/", imgurl: "../src/assets/surpLogo/lottie.png", descript: "从JSON到动画,强大的动画库" },
    { name: "Bodymo", url: "https://aescripts.com/bodymovin/", imgurl: "../src/assets/surpLogo/puli.png", descript: "把你充满创意的动画导出为JSON的AE插件" },
    { name: "AE", url: "https://www.adobe.com/cn/products/aftereffects.html", imgurl: "../src/assets/surpLogo/Ae.png", descript: "制作气势恢宏的大场面" },
]
</script>

<template>
    <div class="surpList">
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
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    font-family: "Potta", "alimama";
    text-align: center;
}

.surpList-ul>li {
    width: 120px;
    height: 230px;
    float: left;
    display: flex;
    border-radius: 5%;
    margin-top: 5%;
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
    position: absolute;
    left: 50%;
    top: 10%;
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
}</style>