/**
 * Created by NL on 2017/1/15.
 */
$(function () {
    setBanner();
    loadNote();
})
//主页脚本
window.onload=function () {
    setBanner();
    communityLogoColor();
};
window.onresize=function () {
    setBanner();
};
//原生JS的setBanner()
//但是offsetWidth()和offsetHeight()无法正确获取
// function setBanner () {
//     var banner=document.getElementById('banner');
//     banner.style.width='100%';
//     var bannerW=banner.width();//获取banner框的宽度
//     var bannerRadio=2.28;
//     var bannerH=bannerW/bannerRadio;
//     console.log(bannerW);
//     console.log(bannerH);
//     banner.style.height=bannerH+'px';   //设置高度属性
// }
//jQuerysetBanner
function setBanner() {
    var banner=$('#banner');
    var bannerW=banner.width();//获取banner框的宽度
    var bannerRadio=2.28;
    var bannerH=bannerW/bannerRadio;
    // if(!bannerH) return false;  //
    console.log(bannerW);
    console.log(bannerH);
    banner.height(bannerH);   //设置高度属性
}
function showsub(elem) {
    elem.onmouseover=function () {
        elem.getElementsByTagName('ul')[0].style.display="block";
    }
}
function hidesub(elem) {
    elem.onmouseout=function () {
        elem.getElementsByTagName('ul')[0].style.display="none";
    }
}
function communityLogoColor() {
    var communityLogo=document.getElementsByClassName("community-logo");
    for(i in communityLogo){
        communityLogo[i].onmouseover=function () {
            var str=this.src;
            var arr=str.split('.');
            this.src=arr[0]+'c.'+arr[1];
        };
        communityLogo[i].onmouseout=function () {
            var str=this.src;
            var arr=str.split('.');
            this.src=arr[0].substring(0,arr[0].length-1)+'.'+arr[1];
        }
    }
}

//笔记页脚本
//iframe加载内容，对搜索引擎不友善
//ajax加载的话导致样式覆盖，尴尬
function loadNote() {
    var button=$('.blog .title-col ul li');
    var content=$('.blog iframe');
    button.click(function () {
        content.attr({"src":$(this).attr("href")});  //不需要返回上一级
    })
}