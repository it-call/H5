document.addEventListener("DOMContentLoaded",function(){pull("btn_one","menu_one"),pull("btn_two","menu_two"),pull("btn","box"),option("subnav");var n=document.querySelector("#csort");function c(t){var e=t.parent().next().text(),n=(e=(e=$.trim(e)).substring(1))*t.parent().find("input").val();t.parent().next().next().html("￥&nbsp;"+n.toFixed(2))}function a(){0==$(".jia").size()&&($(".cart_total").remove(),$(".cart_bot").remove())}ajax("GET","../api/cart.php","",function(t){var e=JSON.parse(t).map(function(t){return' <ul>\n                        <h3 class="good_check"><input name="all" type="checkbox"></h3>\n                        <li class="cart_img"><img src="'+t.urlimg+'" alt=""></li>\n                        <li class="cart_title">'+t.title+'</li>\n                        <li class="cart_number">\n                            <span class="jian"></span>\n                            <input type="text" class="text" value="'+t.store+'">\n                            <span class="jia"></span>\n                        </li>\n                        <li class="cart_price">￥'+t.newprice+'</li>\n                        <li class="cart_subtotal subtotal">￥'+t.newprice+'</li>\n                        <li class="cart_ops">\n                            <a href="javascript:;" id="support">删除</a>\n                            | \n                            <a href="javascript:;" id="oppose">收藏</a>\n                        </li>\n                    </ul>'}).join("");n.innerHTML=e}),$("#cart").on("click",".jia",function(){var t=$(this).prev().val();200<=++t&&(t=200);var e=$(this).parent().next().text().substring(1);ajax("GET","../api/update.php","newprice="+e+"&store="+t,function(t){}),$(this).prev().val(t),c($(this));var n=r();i(n),o(n)}),$("#cart").on("click",".jian",function(){var t=$(this).next().val();--t<=1&&(t=1);var e=$(this).parent().next().text().substring(1);ajax("GET","../api/update.php","newprice="+e+"&store="+t,function(t){}),$(this).next().val(t),c($(this));var n=r();i(n),o(n)}),$("#cart").on("click","#support",function(){if(confirm("您确定要删除该商品吗？")){$(this).parent().parent().remove();var t=$(this).parent().prev().prev().text().substring(1);ajax("GET","../api/delete.php","newprice="+t,function(t){})}a();var e=r();i(e),o(e)});var e=!0;function r(){for(var t=[],e=$(".good_check input").size(),n=0;n<e;n++)$(".good_check input").eq(n).prop("checked")&&t.push(n);return t}function i(t){for(var e=0,n=0;n<t.length;n++)e+=parseInt($(".nownum").eq(t[n]).val());$("#allnum").html("已选 "+e+" 件商品")}function o(t){for(var e=0,n=0;n<t.length;n++){var c=$(".subtotal").eq(t[n]).text();e+=1*(c=(c=$.trim(c)).substring(1))}$(".total").html(e.toFixed(2))}$("#allchecked").on("click",function(){e?($(".good_check input").prop("checked","checked"),$("#allchecked input").prop("checked","checked")):($(".good_check input").removeAttr("checked"),$("#allchecked input").removeAttr("checked")),e=!e;var t=r();i(t),o(t)}),$(".clear").on("click",function(){var t=r();if(confirm("您确定要删除多行吗？"))for(var e=t.length-1;0<=e;e--){$(".good_check").eq(t[e]).parent().remove();ajax("GET","../api/delete.php","",function(t){})}a()}),$("#cart").on("click",".good_check",function(){var t;(t=r()).length==$(".good_check").size()?$("#allchecked input").prop("checked","checked"):$("#allchecked input").removeAttr("checked"),i(t=r()),o(t)}),$("#cart").on("blur",".text",function(){c($(this));var t=r();i(t),o(t)})});
function randomNum(e,t){return parseInt(Math.random()*(t-e+1))+e}function getid(e){return document.getElementById(e)}function filterTex(e){for(var t=["傻B","妈蛋","bitch","fuck","操","小学生","反清复明"],n=0;n<t.length;n++){var o=new RegExp(t[n],"gi");e=e.replace(o,"**")}return e}function randomColor(e){if(16==e){e="0123456789abcdef";for(var t="#",n=0;n<6;n++)t+=e.charAt(parseInt(Math.random()*e.length));return t}if("rgb"==e)return"rgb("+parseInt(256*Math.random())+","+parseInt(256*Math.random())+","+parseInt(256*Math.random())+")";alert("参数传错了")}function setDb(e){return e<10?"0"+e:""+e}function setTime(e){return{sec:setDb(e%60),min:setDb(Math.floor(e/60)%60),hour:setDb(Math.floor(e/60/60)%24),day:Math.floor(e/60/60/24)}}function strToObj(e){for(var t=e.split("&"),n={},o=0;o<t.length;o++){var a=t[o].split("=");n[a[0]]=a[1]}return n}function objToStr(e){var t="";for(var n in e)t+=n+"="+e[n]+"&";return t=t.slice(0,-1)}function bind(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function getstyle(e,t){return e.currentStyle?e.currentStyle[t]:getComputedStyle(e,!1)[t]}function startMove(a,s,r){clearInterval(a.timer),a.timer=setInterval(function(){var e=!0;for(var t in s){var n=0;n="opacity"==t?100*getstyle(a,t):parseInt(getstyle(a,t));var o=(s[t]-n)/6;o=0<o?Math.ceil(o):Math.floor(o),e=n==s[t],"opacity"==t?(a.style.opacity=(n+o)/100,a.style.filter="alpha(opacity:"+(n+o)+")"):a.style[t]=n+o+"px"}e&&(clearInterval(a.timer),r&&r())},30)}var Cookie={set:function(e,t,n){var o=e+"="+t;n.expires&&(o+=";expires="+n.expires.toUTCString()),n.path&&(o+=";path="+n.path),n.domain&&(o+=";domain="+n.domain),document.cookie=o},get:function(e){for(var t=document.cookie.split("; "),n=0;n<t.length;n++){var o=t[n].split("=");if(e==o[0])return o[1]}},remove:function(e){var t=new Date;t.setDate(t.getDate()-1),this.set(e,"no",{expires:t})}};function sliderImg(e,t){for(var n=getid(e),o=n.children[0].children[0].children,a=o[0].offsetWidth,s=0,r=n.children[1].children,l=n.children[2],i=l.children[0],c=l.children[1],u=0;u<o.length;u++)o[u].style.left=a+"px";o[0].style.left=0;var d=null;function f(){startMove(o[s],{left:-a}),s=++s>=o.length?0:s,o[s].style.left=a+"px",startMove(o[s],{left:0}),m()}function m(){for(var e=0;e<r.length;e++)r[e].className="";r[s].className=t}clearInterval(d),d=setInterval(f,2e3),n.onmouseenter=function(){clearInterval(d)},n.onmouseleave=function(){clearInterval(d),d=setInterval(f,2e3)},i.onclick=function(){startMove(o[s],{left:a}),s=--s<0?o.length-1:s,o[s].style.left=-a+"px",startMove(o[s],{left:0}),m()},c.onclick=function(){f()};for(u=0;u<r.length;u++)r[u].index=u,r[u].onclick=function(){var e=this.index;s<e&&(startMove(o[s],{left:-a}),o[e].style.left=a+"px",startMove(o[e],{left:0}),s=e,m()),e<s&&(startMove(o[s],{left:a}),o[e].style.left=-a+"px",startMove(o[e],{left:0}),s=e,m())}}function extendObj(e,t){for(var n in e)t[n]=e[n]}function cloneDeep(e){var t=JSON.stringify(e);return JSON.parse(t)}var checkReg={trim:function(e){return e.replace(/^\s+|\s+$/g,"")},tel:function(e){return/^1[3-9]\d{9}$/.test(e)},email:function(e){return/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e)},idcard:function(e){return/^(\d{17}|\d{14})[\dX]$/.test(e)},psweasy:function(e){return/^[a-zA-Z]\w{5,17}$/.test(e)},pwwagain:function(e,t){return e===t},urladr:function(e){return/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/.test(e)},name:function(e){return/^[a-zA-Z][\w\-]{5,19}$/.test(e)},chinese:function(e){return/^[\u2E80-\u9FFF]+$/.test(e)},birthday:function(e){return/^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/.test(e)}};function ajax(e,t,n,o){var a=new XMLHttpRequest;"GET"==e&&n&&(t+="?"+n),a.open(e,t,!0),"GET"==e?a.send():(a.setRequestHeader("content-type","application/x-www-form-urlencoded"),a.send(n)),a.onreadystatechange=function(){4==a.readyState&&(200==a.status?o&&o(a.responseText):alert("出错了，状态码是："+a.status))}}function pull(e,t){var n=document.getElementById(e),o=document.getElementById(t);n.onmouseenter=function(){o.className="mainmenu"},o.onmouseleave=function(){o.className="minmenu"}}function pull2(e){for(var t=document.getElementById(e),n=t.querySelectorAll(".list_dt"),o=t.querySelectorAll("ul"),a=t.querySelectorAll("i"),s=!0,r=n.length,l=function(e){n[e].onclick=function(){s?(n[e],o[e].style.display="block",a[e].classList.add("list_icon_hou")):(n[e],o[e].style.display="none",a[e].classList.remove("list_icon_hou")),s=!s}},i=0;i<r;i++){l(i)}}function pull3(e,t){var n=document.getElementById(e),o=document.getElementById(t);n.onmouseenter=function(){o.style.display="block"},n.onmouseleave=function(){o.style.display="none"}}function option(e){for(var t=document.getElementById(e),n=t.getElementsByTagName("h3"),o=t.getElementsByClassName("subnav_content"),a=t.getElementsByClassName("sub_nav"),s=n.length,r=function(t){i=n[t],c=a[t],i.onmouseenter=function(){for(var e=0;e<s;e++)n[e].classList.remove("selected"),o[e].classList.remove("checked");n[t].classList.add("selected"),o[t].classList.add("checked")},c.onmouseleave=function(){for(var e=0;e<s;e++)n[e].classList.remove("selected"),o[e].classList.remove("checked")}},l=0;l<s;l++){var i,c;r(l)}}function option2(e){for(var t=document.getElementById(e),n=t.querySelectorAll(".one"),o=t.querySelectorAll(".two"),a=n.length,s=function(t){n[t].onmouseenter=function(){for(var e=0;e<a;e++)n[e].classList.remove("selected"),o[e].classList.remove("checked");n[t].classList.add("selected"),o[t].classList.add("checked")}},r=0;r<a;r++){s(r)}}function ceiling(e,t){var n=document.getElementById(e),o=document.getElementById(t),a=n.querySelector("h5"),s=n.offsetTop;window.onscroll=function(){var e=window.scrollY;o.style.display=s<=e?(n.classList.add("fixation"),a.style.display="block"):(n.classList.remove("fixation"),a.style.display="none")},a.onclick=function(){n.classList.remove("fixation"),a.style.display="none",window.onscroll=null},o.onclick=function(){var t=setInterval(function(){var e=window.scrollY;0<e?window.scrollTo(0,e-50):clearInterval(t)},50)}}function backtop(t){t=document.getElementById(t);window.onscroll=function(){var e=window.scrollY;t.style.display=650<=e?"block":"none"},t.onclick=function(){var t=setInterval(function(){var e=window.scrollY;0<e?window.scrollTo(0,e-50):clearInterval(t)},50)}}function ajax(e,t,n,o){var a=new XMLHttpRequest;"GET"==e&&n&&(t+="?"+n),a.open(e,t,!0),"GET"==e?a.send():(a.setRequestHeader("content-type","application/x-www-form-urlencoded"),a.send(n)),a.onreadystatechange=function(){4==a.readyState&&(200==a.status?o&&o(a.responseText):alert("出错了，状态码是："+a.status))}}function sliderShow(e,t){for(var n=getid(e),o=n.children[0].children[0].children,a=o[0].offsetWidth,s=0,r=n.children[1].children,l=n.children[2],i=l.children[0],c=l.children[1],u=0;u<o.length;u++)o[u].style.left=a+"px";o[0].style.left=0;var d=null;function f(){startMove(o[s],{left:-a}),s=++s>=o.length?0:s,o[s].style.left=a+"px",startMove(o[s],{left:0}),m()}function m(){for(var e=0;e<r.length;e++)r[e].className="";r[s].className=t}clearInterval(d),d=setInterval(f,2e3),n.onmouseenter=function(){clearInterval(d),i.style.opacity=c.style.opacity="0.8"},n.onmouseleave=function(){clearInterval(d),d=setInterval(f,2e3),i.style.opacity=c.style.opacity="0.2"},i.onclick=function(){startMove(o[s],{left:a}),s=--s<0?o.length-1:s,o[s].style.left=-a+"px",startMove(o[s],{left:0}),m()},c.onclick=function(){f()};for(u=0;u<r.length;u++)r[u].index=u,r[u].onclick=function(){var e=this.index;s<e&&(startMove(o[s],{left:-a}),o[e].style.left=a+"px",startMove(o[e],{left:0}),s=e,m()),e<s&&(startMove(o[s],{left:a}),o[e].style.left=-a+"px",startMove(o[e],{left:0}),s=e,m())}}!function(){var m,t,g;function n(){this.init.apply(this,arguments)}m={addHandler:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},removeHandler:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null},getEvent:function(e){return e||window.event},getTarget:function(e){return e.target||e.srcElement},preventDefault:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}},t={byId:function(e){return"string"==typeof e?document.getElementById(e):e},byClass:function(e,t){for(var n=[],o=new RegExp("(^| )"+e+"( |$)"),a=this.byTagName("*",t),s=0;s<a.length;s++)o.test(a[s].className)&&n.push(a[s]);return n},byTagName:function(e,t){return(t||document).getElementsByTagName(e)}},g={hasClass:function(e,t){return-1<(" "+e.className+" ").indexOf(" "+t+" ")},addClass:function(e,t){this.hasClass(e,t)||(e.className+=" "+t)},removeClass:function(e,t){e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)"),"$1").replace(/\s{1,}/g," ")}},n.prototype={init:function(e){this.magWrap=t.byId(e),this.magMain=this.magWrap.children[0],this.mW=this.magMain.offsetWidth,this.mH=this.magMain.offsetHeight,this.magImg=this.magMain.getElementsByTagName("img")[0],this.mImgSrc=this.magImg.getAttribute("data-src"),this.specBox=t.byClass("spec-items",this.magWrap)[0],this.specUl=this.specBox.getElementsByTagName("ul")[0],this.specItem=this.specBox.getElementsByTagName("li"),this.specFn(),this.setEventFn().dragEvent()},setEleFn:function(){var e=this,t="",n=document.createDocumentFragment(),o=document.createDocumentFragment();e.magMain.children[1]||(e.oMD=document.createElement("div"),e.oMD.className="MagnifierDrag",e.oMD.style.cssText="width:"+e.mW/2+"px;height:"+e.mH/2+"px;",e.oMD.innerHTML="&nbsp;",e.oMP=document.createElement("div"),e.oMP.className="MagnifierPop",e.oMP.style.cssText="width:"+e.mW+"px;height:"+e.mH+"px;right:"+(-e.mW-10)+"px;",e.oMI=document.createElement("div"),e.oMI.className="MagnifierImg",e.oMI.style.cssText="width:"+2*e.mW+"px;height:"+2*e.mH+"px;",t='<img style="width:100%;height:100%;" src="'+e.mImgSrc+'">',e.oMI.innerHTML=t,e.oMP.appendChild(e.oMI),n.appendChild(e.oMD),o.appendChild(e.oMP),e.magMain.appendChild(n),e.magWrap.appendChild(o))},removeFn:function(e){"IMG"!=m.getTarget(e).nodeName&&(this.magMain.removeChild(this.oMD),this.magWrap.removeChild(this.oMP))},setMousemoveFn:function(e){var t=this,n=document.documentElement.scrollLeft||document.body.scrollLeft,o=document.documentElement.scrollTop||document.body.scrollTop;_x=e.clientX+n-(t.magWrap.getBoundingClientRect().left+n)-t.oMD.offsetWidth/2,_y=e.clientY+o-(t.magMain.getBoundingClientRect().top+o)-t.oMD.offsetHeight/2,_l=t.magMain.offsetWidth-t.oMD.offsetWidth,_t=t.magMain.offsetHeight-t.oMD.offsetHeight,_l2=-(t.oMI.offsetWidth-t.magMain.offsetWidth),_t2=-(t.oMI.offsetHeight-t.magMain.offsetHeight),_x<0?_x=0:_x>_l&&(_x=_l),_y<0?_y=0:_y>_t&&(_y=_t),t.oMD.style.left=_x+"px",t.oMD.style.top=_y+"px",_bigx=_x/_l,_bigy=_y/_t,t.oMI.style.left=_bigx*_l2+"px",t.oMI.style.top=_bigy*_t2+"px"},setEventFn:function(){var t=this;function e(e){switch(events=m.getEvent(e),e.type){case"mouseover":t.setEleFn();break;case"mousemove":t.oMD&&t.setMousemoveFn(e);break;case"mouseout":t.removeFn(e)}}return{dragEvent:function(){m.addHandler(t.magMain,"mouseover",e),m.addHandler(t.magMain,"mousemove",e),m.addHandler(t.magMain,"mouseout",e)}}},specFn:function(){var o,a,s,r=this,n=t.byClass("spe_leftBtn",r.magWrap)[0],l=t.byClass("spe_rightBtn",r.magWrap)[0],i=this.specUl.getElementsByTagName("li")[0].offsetWidth+5,c=r.specItem.length,u=0,d=null,f=null;m.addHandler(r.specUl,"mouseover",function(e){var t=m.getTarget(e),n=0;if("UL"!=t.nodeName){for("IMG"==t.nodeName&&(t=t.parentNode);n<c;n++)r.specItem[n].className="";t.className="on",o=t.getElementsByTagName("img")[0],a=o.getAttribute("data-lsrc"),s=o.getAttribute("data-maxSrc"),r.magImg.setAttribute("src",a),r.magImg.setAttribute("data-src",s),r.mImgSrc=r.magImg.getAttribute("data-src")}}),4<c&&(g.addClass(l,"on"),m.addHandler(r.magWrap,"click",function(e){var t=m.getTarget(e);if(-1<t.className.indexOf("spe_rightBtn")){if(f=++u,c-5<f&&g.removeClass(t,"on"),c-4<f)return u=c-4,!1;r.buttur(r.specUl,{left:-f*i}),g.addClass(n,"on")}if(-1<t.className.indexOf("spe_leftBtn")){if((d=--u)<1&&g.removeClass(t,"on"),d<0)return u=0,!1;r.buttur(r.specUl,{left:-d*i}),g.addClass(l,"on")}}))},buttur:function(e,t){window.clearTimeout(e.timer);var n=this,o=null;for(direc in t){var a=direc.toLowerCase(),s="offset"+a.substr(0,1).toUpperCase()+a.substring(1).toLowerCase(),r=(t[direc]-e[s])/8;r=0<=r?Math.ceil(r):Math.floor(r),e.style[a]=e[s]+r+"px",o+=r}o&&("function"==typeof fnCallback?fnCallback.call(e):e.timer=window.setTimeout(function(){n.buttur(e,t)},20))}},window.MagnifierF=function(e){return new n(e)}}(),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#lR_before"),t=document.querySelector("#lR_later"),n=document.querySelector("#name"),o=Cookie.get("name");t.style.display=o?(n.innerHTML=o,e.style.display="none","block"):(e.style.display="block","none")});
document.addEventListener("DOMContentLoaded",function(){pull("btn_one","menu_one"),pull("btn_two","menu_two"),pull("btn","box"),pull2("bk"),pull3("icart_left","Jcart_noItem"),option("subnav"),option2("sale_box"),option2("message"),backtop("backtop");var c=document.querySelector("#det"),t=location.search.slice(1).split("=")[1];ajax("GET","../api/detail.php","gid="+t,function(a){var t=JSON.parse(a),e=t[0],n=' <div class="det_top">\n                        <p class="title">'+e.title+'</p>\n                        <p class="name">'+e.name+'</p>\n                        <p class="newprice">飞虎价：<b style="color: #c7012c;">￥</b><em>'+e.newprice+'</em></p>\n                        <p class="price">原价：￥'+e.price+'</p>\n                        <p class="sales">人气：'+e.sales+'</p>\n                        <p class="store">库存：'+e.store+'</p>\n                    </div>\n                    <div class="det_bot">\n                        <p class="size">选择尺码：'+e.size+'</p>\n                        <div class="amount">我要买：\n                            <span class="jian"></span>\n                            <input type="text" class="text" value="1">\n                            <span class="jia"></span>\n                        </div>\n                        <p class="cart">加入购物车</p>\n                    </div>';c.innerHTML=n;for(var i=[],s=[],l=0;l<t.length;l++)i.push("../"+t[l].urlimg),s.push("../"+t[l].urlimg);var p="";for(l=0;l<i.length;l++)p+='<li><img src="'+i[l]+'" data-lsrc="'+i[l]+'" data-maxSrc="'+s[l]+'"></li>';$("#MagnifierWrap2 .spec-items ul").html(p),$("#MagnifierWrap2 .spec-items ul li").eq(0).addClass("on");var r='<img class="MagTargetImg" src="'+i[0]+'" data-src="'+s[0]+'">';$("#MagnifierWrap2 .MagnifierMain").html(r),MagnifierF("MagnifierWrap2")}),c.onclick=function(a){if("cart"==(a=a||window.event).target.className){ajax("GET","../api/detail.php","gid="+t,function(a){var t=JSON.parse(a)[0],e="urlimg=../"+t.urlimg+"&title="+t.title+"&newprice="+t.newprice+"&store=1";ajax("GET","../api/insert.php",e,function(a){alert("加入成功"),location.href="cart.html"})})}},$("#det").on("click",".jia",function(){var a=$(this).prev().val();200<=++a&&(a=200),$(this).prev().val(a)}),$("#det").on("click",".jian",function(){var a=$(this).next().val();--a<=1&&(a=1),$(this).next().val(a)}),$("#sendBox").on("click",".btn1",function(){var a=$(this).prev().val();$(this).parent().parent().prev().find(".list_show").html(a)})});
document.addEventListener("DOMContentLoaded",function(){pull("btn_one","menu_one"),pull("btn_two","menu_two"),pull("btn","box"),pull3("icart_left","Jcart_noItem"),option("subnav"),sliderShow("slideshow","active"),sliderShow("slideimg","sports"),backtop("backtop");var t=document.querySelector(".seckill_right");ajax("GET","../src/api/index.php","",function(n){var e=JSON.parse(n).map(function(n){return' <li data-id="'+n.id+'">\n                        <img class="urlimg" src="'+n.urlimg+'" style="cursor: pointer;" />\n                        <p class="name">'+n.name+'</p>\n                        <p class="title">'+n.title+'</p>\n                        <p class="cost">\n                            <span class="newprice"><b>￥</b>'+n.newprice+'</span>\n                            <span class="price" style="text-decoration:line-through"><b>￥</b>'+n.price+"</span>\n                        </p>\n                    </li>"}).join("");t.innerHTML=e})});
document.addEventListener("DOMContentLoaded",function(){pull("btn_one","menu_one"),pull("btn_two","menu_two"),pull("btn","box"),pull3("icart_left","Jcart_noItem"),option("subnav"),option2("sale_box"),pull2("bk"),ceiling("former","backtop");var a=document.querySelector("#list_sort"),c=document.querySelector("#page"),n=document.querySelector("#reset"),e=document.querySelector("#sales"),t=document.querySelector("#store"),i=document.querySelector("#newprice_asc"),p=document.querySelector("#newprice_desc");function r(n){var e=n.datalist.map(function(n){return' <li data-id="'+n.id+'">\n                        <a href="./detail?gid='+n.gid+'" target="blank">\n                            <img class="urlimg" src="../'+n.urlimg+'"/>\n                        </a>\n                        <p class="name">'+n.name+'</p>\n                        <p class="title">'+n.title+'</p>\n                        <p class="newprice">￥'+n.newprice+'</p>\n                        <p class="cost">\n                            <span class="an">快速购买</span>\n                            <span class="an">加入购物车</span>\n                        </p>\n                    </li>'}).join("");a.innerHTML=e}ajax("GET","../api/list.php","page=1&qty=20",function(n){var e=JSON.parse(n);r(e);for(var a=Math.ceil(e.total/e.qty),t="",i=0;i<a;i++)t+="<span>"+(i+1)+"</span>";c.innerHTML=t,c.children[0].className="active"}),c.onclick=function(n){if("span"==(n=n||window.event).target.tagName.toLowerCase()){var a=n.target.innerText;ajax("GET","../api/list.php","page="+a+"&qty=20",function(n){r(JSON.parse(n));for(var e=0;e<c.children.length;e++)c.children[e].className="";c.children[a-1].className="active"})}},n.onclick=function(){ajax("GET","../api/list.php","page=1&qty=20",function(n){r(JSON.parse(n))})},e.onclick=function(){ajax("GET","../api/list.php","page=1&qty=20&rank=1",function(n){r(JSON.parse(n))})},t.onclick=function(){ajax("GET","../api/list.php","page=1&qty=20&rank=2",function(n){r(JSON.parse(n))})},i.onclick=function(){ajax("GET","../api/list.php","page=1&qty=20&rank=3",function(n){r(JSON.parse(n))})},p.onclick=function(){ajax("GET","../api/list.php","page=1&qty=20&rank=4",function(n){r(JSON.parse(n))})}});
document.addEventListener("DOMContentLoaded",function(){pull("btn_one","menu_one"),pull("btn_two","menu_two"),pull("btn","box"),pull3("icart_left","Jcart_noItem"),option("subnav");var n=document.querySelector("#username"),o=document.querySelector("#password");document.querySelector("#push").onclick=function(){var t=n.value.trim(),e=o.value.trim();ajax("GET","../api/check.php","username="+t+"&psw="+e,function(e){"0"==e?(Cookie.set("name",t,{path:"/"}),alert("登录成功"),location.href="../inde.html"):alert("用户不存在或密码输入不对")})}});
document.addEventListener("DOMContentLoaded",function(){pull("btn_one","menu_one"),pull("btn_two","menu_two"),pull("btn","box"),pull3("icart_left","Jcart_noItem"),option("subnav");var l=document.querySelector("#username"),r=document.querySelector("#usninf"),a=document.querySelector("#email"),e=document.querySelector("#eminf"),c=document.querySelector("#password"),n=document.querySelector("#pawinf"),t=document.querySelector("#confirm_pwd"),o=document.querySelector("#confirm"),u=document.querySelector("#sub");function i(){if(r.innerHTML=/^[A-z][A-z0-9]{4,9}$/.test(l.value)){var e=l.value.trim(),n=new XMLHttpRequest,t="../api/checkname.php?username="+e+"&time="+new Date;n.open("GET",t,!0),n.send(),n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var e=n.responseText;r.style.color="0"==e?(r.innerHTML="账号已使用","red"):(r.innerHTML="格式正确","green")}}}else r.innerHTML="格式不对",r.style.color="red"}function s(){(e.innerHTML=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(a.value))?(e.innerHTML="格式正确",e.style.color="green"):(e.innerHTML="格式不对",e.style.color="red")}function d(){(n.innerHTML=/^.[^\s]{5,9}$/.test(c.value))?(n.innerHTML="格式正确",n.style.color="green"):(n.innerHTML="格式不对",n.style.color="red")}function m(){t.value==c.value?(o.innerHTML="密码正确",o.style.color="green"):(o.innerHTML="密码不一致",o.style.color="red")}l.onkeyup=i,a.onkeyup=s,c.onkeyup=d,t.onkeyup=m,u.onclick=function(){i(),s(),d(),m();var e=Array.from(document.querySelectorAll("#div1 span")).every(function(e){return"green"==e.style.color}),n=l.value.trim(),t=c.value.trim(),r=a.value.trim();if(e){var o=new XMLHttpRequest;o.open("POST","../api/reg.php",!0),o.setRequestHeader("content-type","application/x-www-form-urlencoded");var u="name="+n+"&psw="+t+"&email="+r+"&time="+new Date;o.send(u),o.onreadystatechange=function(){4==o.readyState&&200==o.status&&("yes"==o.responseText?(alert("注册成功"),l.value="",c.value="",a.value="",location.href="login.html"):(alert("注册失败"),l.value="",c.value="",a.value=""))}}else alert("注册失败"),l.value="",c.value="",a.value=""}});