/**
 * Created by NL on 2017/1/15.
 */
$(function () {
    setBanner();
    loadNote();
});
//主页脚本
window.onload=function () {
    setBanner();
    communityLogoColor();
    searchBoxFocusShadow();
    galleryLoad();
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
//搜索框阴影效果
function searchBoxFocusShadow() {
    if(!document.getElementById('searchBox')) return false;
    var elem=document.getElementById('searchBox');
    elem.onfocus=function () {
        addClass(this.parentNode, 'activeInput')
    };
    elem.onblur=function () {
        removeClass(this.parentNode, 'activeInput')
    }
}
//原生JS增加class属性的方法
function addClass(elem, className) {
    if(!elem.getAttribute('class')){           //可以使用className方法替代getAttribute()方法
        elem.setAttribute('class', className)
    } else{
        var newClass=elem.getAttribute('class');
        newClass+=" "+className;
        elem.setAttribute('class', newClass)
    }
}
//原生JS移除class属性的方法
//这里使用正则表达式匹配目标元素中的class属性中的内容
function removeClass(elem, className) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    elem.className=className.replace(reg, " ")
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
//相册页脚本
//相册外框
function galleryLoad() {
    if(!document.getElementsByClassName('img-wrapper')) return false;
    var elem=document.getElementsByClassName('img-wrapper');
    for(i in elem){
        elem[i].onmouseover=function () {
            this.childNodes[1].style.display='block';
            this.parentNode.style.visibility='visible';
        };
        elem[i].onmouseout=function () {
            this.childNodes[1].style.display='none';
            this.parentNode.style.visibility='hidden';
        }
    }
}
//相册幕布
// function galleryCover() {
//
// }