// 
    if(jQuery("body").length) {
        jQuery('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>').insertAfter(jQuery("body"));
    }
 
 
var count = jQuery('.page > p').length;
//считаем середины абзацев
var sered=Math.floor(count/2);

 //alert(count);
    // залипашка в центре

    zalip='<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1882080916869352" data-ad-slot="2894991301" data-ad-format="auto" data-full-width-responsive="true"></ins> <div id="rekl-center">  <div id="rekl-center-fix"> <div id="yandex_rtb_R-A-489742-8"></div> </div></div>'; 
    zalip += '<style>#rekl-center{ height:650px; margin-bottom:30px;} #rekl-center-fix{min-height:300px;} .sticky { position: fixed; z-index: 99; } .stop { position: relative; z-index: 99; } </style>';
    

    if(jQuery(".page p:nth(" + sered + ")").length) {
        // jQuery(zalip).insertAfter(jQuery(".page p:nth(" + sered + ")"));

        (adsbygoogle = window.adsbygoogle || []).push({});
        (function(w, d, n, s, t) {
            w[n] = w[n] || [];
            w[n].push(function() {
                Ya.Context.AdvManager.render({
                    blockId: "R-A-489742-8",
                    renderTo: "yandex_rtb_R-A-489742-8",
                    async: true
                });
            });
            t = d.getElementsByTagName("script")[0];
            s = d.createElement("script");
            s.type = "text/javascript";
            s.src = "//an.yandex.ru/system/context.js";
            s.async = true;
            t.parentNode.insertBefore(s, t);
        })(this, this.document, "yandexContextAsyncCallbacks");
      
        Array.prototype.slice.call(document.querySelectorAll('#rekl-center-fix')).forEach(function(a) {   
        var b = null, P = 0;
        window.addEventListener('scroll', Ascroll, false);
        document.body.addEventListener('scroll', Ascroll, false);
        function Ascroll() {
          if (b == null) {
            var Sa = getComputedStyle(a, ''), s = '';
            for (var i = 0; i < Sa.length; i++) {
              if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
              }
            }
            b = document.createElement('div');
            b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
            a.insertBefore(b, a.firstChild);
            var l = a.childNodes.length;
            for (var i = 1; i < l; i++) {
              b.appendChild(a.childNodes[1]);
            }
            a.style.height = b.getBoundingClientRect().height + 'px';
            a.style.padding = '0';
            a.style.border = '0';
          }
          var Ra = a.getBoundingClientRect(),
              R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#rekl-center').getBoundingClientRect().bottom + 0);
          if ((Ra.top - P) <= 0) {
            if ((Ra.top - P) <= R) {
              b.className = 'stop';
              b.style.top = - R +'px';
              b.style.left = 0;
            } else {
              b.className = 'sticky';
              b.style.top = P + 'px';
              b.style.left = Ra.left + 'px';
            }
          } else {
            b.className = ''; 
            b.style.top = '';
            b.style.left = '';
          }
          window.addEventListener('resize', function() {
            a.children[0].style.width = getComputedStyle(a, '').width;
            b.style.left = (b.className == 'sticky' ? (a.getBoundingClientRect().left + 'px') : '0');
          }, false);
        }
        })  

      
    } 
    
var count = jQuery('.best .content .text > p').length;
//считаем середины абзацев
var sered=Math.floor(count/2);

 //alert(count);
    // залипашка в центре

    zalip='<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1882080916869352" data-ad-slot="2894991301" data-ad-format="auto" data-full-width-responsive="true"></ins> <div id="rekl-center">  <div id="rekl-center-fix"> <div id="yandex_rtb_R-A-489742-8"></div> </div></div>';
    zalip += '<style> #rekl-center{ height:650px;margin-bottom:30px; } #rekl-center-fix{min-height:300px;} .sticky { position: fixed; z-index: 99; } .stop { position: relative; z-index: 99; } </style>';

    if(jQuery(".best .content .text p:nth(" + sered + ")").length) {
        jQuery(zalip).insertAfter(jQuery(".best .content .text p:nth(" + sered + ")"));

        (adsbygoogle = window.adsbygoogle || []).push({});
        (function(w, d, n, s, t) {
            w[n] = w[n] || [];
            w[n].push(function() {
                Ya.Context.AdvManager.render({
                    blockId: "R-A-489742-8",
                    renderTo: "yandex_rtb_R-A-489742-8",
                    async: true
                });
            });
            t = d.getElementsByTagName("script")[0];
            s = d.createElement("script");
            s.type = "text/javascript";
            s.src = "//an.yandex.ru/system/context.js";
            s.async = true;
            t.parentNode.insertBefore(s, t);
        })(this, this.document, "yandexContextAsyncCallbacks");
      
        Array.prototype.slice.call(document.querySelectorAll('#rekl-center-fix')).forEach(function(a) {   
        var b = null, P = 0;
        window.addEventListener('scroll', Ascroll, false);
        document.body.addEventListener('scroll', Ascroll, false);
        function Ascroll() {
          if (b == null) {
            var Sa = getComputedStyle(a, ''), s = '';
            for (var i = 0; i < Sa.length; i++) {
              if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
              }
            }
            b = document.createElement('div');
            b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
            a.insertBefore(b, a.firstChild);
            var l = a.childNodes.length;
            for (var i = 1; i < l; i++) {
              b.appendChild(a.childNodes[1]);
            }
            a.style.height = b.getBoundingClientRect().height + 'px';
            a.style.padding = '0';
            a.style.border = '0';
          }
          var Ra = a.getBoundingClientRect(),
              R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#rekl-center').getBoundingClientRect().bottom + 0);
          if ((Ra.top - P) <= 0) {
            if ((Ra.top - P) <= R) {
              b.className = 'stop';
              b.style.top = - R +'px';
              b.style.left = 0;
            } else {
              b.className = 'sticky';
              b.style.top = P + 'px';
              b.style.left = Ra.left + 'px';
            }
          } else {
            b.className = ''; 
            b.style.top = '';
            b.style.left = '';
          }
          window.addEventListener('resize', function() {
            a.children[0].style.width = getComputedStyle(a, '').width;
            b.style.left = (b.className == 'sticky' ? (a.getBoundingClientRect().left + 'px') : '0');
          }, false);
        }
        })  

      
    } 
    // сайдбар автообновление
    if(jQuery(".loaf").length) {
        jQuery('<center id="pril"><div id="yandex_rtb_R-A-489742-2" ></div></center><style>.sticky { position: fixed;  z-index: 99; margin-top: 70px; }.stop {  margin-top:50px;  position: relative;  z-index: 99;}</style>').insertAfter(jQuery(".loaf"));
        if(jQuery(window).width()>700){
            Array.prototype.slice.call(document.querySelectorAll('#pril')).forEach(function(a) {  // селекторы блоков, которые будут фиксироваться. Может быть как один блок, так два и более
            var b = null, P = 0;
            window.addEventListener('scroll', Ascroll, false);
            document.body.addEventListener('scroll', Ascroll, false);
            function Ascroll() {
              if (b == null) {
                var Sa = getComputedStyle(a, ''), s = '';
                for (var i = 0; i < Sa.length; i++) {
                  if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                    s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
                  }
                }
                b = document.createElement('div');
                b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                a.insertBefore(b, a.firstChild);
                var l = a.childNodes.length;
                for (var i = 1; i < l; i++) {
                  b.appendChild(a.childNodes[1]);
                }
                a.style.height = b.getBoundingClientRect().height + 'px';
                a.style.padding = '0';
                a.style.border = '75px 0 solid #fff';
              }
              var Ra = a.getBoundingClientRect(),
                  R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.qa').getBoundingClientRect().bottom + 0);
             if ((Ra.top - P) <= 0) {
             /* if ((Ra.top - P) <= R) {
                  b.className = 'stop';
                  b.style.top = - R +'px';
                  b.style.left = 0;
                } else {*/
                  b.className = 'sticky';
                  b.style.top = P + 'px';
                  b.style.left = Ra.left + 'px';
                /*}*/
              } else {
                b.className = '';
                b.style.top = '';
                b.style.left = '';
              }
              window.addEventListener('resize', function() {
                a.children[0].style.width = getComputedStyle(a, '').width;
                b.style.left = (b.className == 'sticky' ? (a.getBoundingClientRect().left + 'px') : '0');
              }, false);
            }
            })  
        }
    function AdBangSideBar(){
        //
            (function(w, d, n, s, t) {
            w[n] = w[n] || [];
            w[n].push(function() {
                Ya.Context.AdvManager.render({
                    blockId: "R-A-489742-2",
                    renderTo: "yandex_rtb_R-A-489742-2",
                    async: true
                });
            });
            t = d.getElementsByTagName("script")[0];
            s = d.createElement("script");
            s.type = "text/javascript";
            s.src = "//an.yandex.ru/system/context.js";
            s.async = true;
            t.parentNode.insertBefore(s, t);
            })(this, this.document, "yandexContextAsyncCallbacks");
      
        }       
        setTimeout(AdBangSideBar,1000*30);
        AdBangSideBar();
    }
        
// в текстовых статьях

    // начало
    if(jQuery(".page").length) {
        // jQuery('<center><div id="yandex_rtb_R-A-489742-9"></div></center>').insertBefore(jQuery(".page"));
 
         (function(w, d, n, s, t) {
        w[n] = w[n] || [];
        w[n].push(function() {
            Ya.Context.AdvManager.render({
                blockId: "R-A-489742-9",
                renderTo: "yandex_rtb_R-A-489742-9",
                async: true
            });
        });
        t = d.getElementsByTagName("script")[0];
        s = d.createElement("script");
        s.type = "text/javascript";
        s.src = "//an.yandex.ru/system/context.js";
        s.async = true;
        t.parentNode.insertBefore(s, t);
        })(this, this.document, "yandexContextAsyncCallbacks");
  
    } 
    // рекомендации
    if(jQuery(".page").length) {
        jQuery('<center><div id="id-489742-4"></div></center>').insertAfter(jQuery(".page"));
 
            (yaads = window.yaads || []).push({
                id: "489742-4",
                render: "#id-489742-4"
            });
        if(jQuery("body").length) {
            jQuery(' <script async src="https://yastatic.net/pcode-native/loaders/loader.js"></script>').insertAfter(jQuery("body")); 
        }

  
    }   
    // 2 h2
    if(jQuery("article h2:nth(2)").length) {
        jQuery('<center><ins class="adsbygoogle"    style="display:block"    data-ad-client="ca-pub-1882080916869352"     data-ad-slot="2894991301"     data-ad-format="auto"     data-full-width-responsive="true"></ins></center>').insertAfter(jQuery("article h2:nth(2)"));
        (adsbygoogle = window.adsbygoogle || []).push({});  
    } 
    
    // 6 h2
    if(jQuery("article h2:nth(6)").length) {
        jQuery('<center><ins class="adsbygoogle"    style="display:block"    data-ad-client="ca-pub-1882080916869352"     data-ad-slot="2894991301"     data-ad-format="auto"     data-full-width-responsive="true"></ins></center>').insertAfter(jQuery("article h2:nth(6)"));
        (adsbygoogle = window.adsbygoogle || []).push({});  
    } 
    // 4 h2 
    if(jQuery("article h2:nth(4)").length) {
        jQuery('<center><div id="yandex_rtb_R-A-489742-6"></div></center>').insertAfter(jQuery("article h2:nth(4)"));
        (function(w, d, n, s, t) {
            w[n] = w[n] || [];
            w[n].push(function() {
                Ya.Context.AdvManager.render({
                    blockId: "R-A-489742-6",
                    renderTo: "yandex_rtb_R-A-489742-6",
                    async: true
                });
            });
            t = d.getElementsByTagName("script")[0];
            s = d.createElement("script");
            s.type = "text/javascript";
            s.src = "//an.yandex.ru/system/context.js";
            s.async = true;
            t.parentNode.insertBefore(s, t);
        })(this, this.document, "yandexContextAsyncCallbacks");
    }   
    
//вопросник 
    // после вопроса
    if(jQuery(".question").length) {
        jQuery('<center><div id="yandex_rtb_R-A-489742-3"></div></center>').insertAfter(jQuery(".question"));
 
         (function(w, d, n, s, t) {
        w[n] = w[n] || [];
        w[n].push(function() {
            Ya.Context.AdvManager.render({
                blockId: "R-A-489742-3",
                renderTo: "yandex_rtb_R-A-489742-3",
                async: true
            });
        });
        t = d.getElementsByTagName("script")[0];
        s = d.createElement("script");
        s.type = "text/javascript";
        s.src = "//an.yandex.ru/system/context.js";
        s.async = true;
        t.parentNode.insertBefore(s, t);
        })(this, this.document, "yandexContextAsyncCallbacks");
  
    } 
    // после первого ответа
    if(jQuery(".best").length) {
        jQuery('<center><ins class="adsbygoogle"    style="display:block"    data-ad-client="ca-pub-1882080916869352"     data-ad-slot="2894991301"     data-ad-format="auto"     data-full-width-responsive="true"></ins></center>').insertAfter(jQuery(".best"));
        (adsbygoogle = window.adsbygoogle || []).push({});  
    } 
    // после 3 ответа
    if(jQuery(".answer:nth(3)").length) {
        jQuery('<center><ins class="adsbygoogle"    style="display:block"    data-ad-client="ca-pub-1882080916869352"     data-ad-slot="2894991301"     data-ad-format="auto"     data-full-width-responsive="true"></ins></center>').insertAfter(jQuery(".answer:nth(3)"));
        (adsbygoogle = window.adsbygoogle || []).push({});  
    } 
    // после 5 ответа
    if(jQuery(".answer:nth(5)").length) {
        jQuery('<center><div id="yandex_rtb_R-A-489742-6"></div></center>').insertAfter(jQuery(".answer:nth(5)"));
        (function(w, d, n, s, t) {
            w[n] = w[n] || [];
            w[n].push(function() {
                Ya.Context.AdvManager.render({
                    blockId: "R-A-489742-6",
                    renderTo: "yandex_rtb_R-A-489742-6",
                    async: true
                });
            });
            t = d.getElementsByTagName("script")[0];
            s = d.createElement("script");
            s.type = "text/javascript";
            s.src = "//an.yandex.ru/system/context.js";
            s.async = true;
            t.parentNode.insertBefore(s, t);
        })(this, this.document, "yandexContextAsyncCallbacks");
    } 
  
    // после 7 ответа
    if(jQuery(".answer:nth(7)").length) {
        jQuery('<center><ins class="adsbygoogle"     style="display:block; text-align:center;"     data-ad-layout="in-article"     data-ad-format="fluid"     data-ad-client="ca-pub-1882080916869352"     data-ad-slot="3824929598"></ins></center>').insertAfter(jQuery(".answer:nth(7)"));
        (adsbygoogle = window.adsbygoogle || []).push({});  
    } 
    // после 10 ответа
    if(jQuery(".answer:nth(10)").length) {
        jQuery('<center><div id="yandex_rtb_R-A-489742-7"></div></center>').insertAfter(jQuery(".answer:nth(10)"));
        (function(w, d, n, s, t) {
            w[n] = w[n] || [];
            w[n].push(function() {
                Ya.Context.AdvManager.render({
                    blockId: "R-A-489742-7",
                    renderTo: "yandex_rtb_R-A-489742-7",
                    async: true
                });
            });
            t = d.getElementsByTagName("script")[0];
            s = d.createElement("script");
            s.type = "text/javascript";
            s.src = "//an.yandex.ru/system/context.js";
            s.async = true;
            t.parentNode.insertBefore(s, t);
        })(this, this.document, "yandexContextAsyncCallbacks");
    }   
    // после 15 ответа
    if(jQuery(".answer:nth(15)").length) {
        jQuery('<center><ins class="adsbygoogle"     style="display:block; text-align:center;"     data-ad-layout="in-article"     data-ad-format="fluid"     data-ad-client="ca-pub-1882080916869352"     data-ad-slot="3824929598"></ins></center>').insertAfter(jQuery(".answer:nth(15)"));
        (adsbygoogle = window.adsbygoogle || []).push({});  
    } 
    
    
    // после ещё 
    if(jQuery(".other").length) {
        jQuery('<center><div id="yandex_rtb_R-A-489742-5"></div></center>').insertAfter(jQuery(".other"));
 
         (function(w, d, n, s, t) {
        w[n] = w[n] || [];
        w[n].push(function() {
            Ya.Context.AdvManager.render({
                blockId: "R-A-489742-5",
                renderTo: "yandex_rtb_R-A-489742-5",
                async: true
            });
        });
        t = d.getElementsByTagName("script")[0];
        s = d.createElement("script");
        s.type = "text/javascript";
        s.src = "//an.yandex.ru/system/context.js";
        s.async = true;
        t.parentNode.insertBefore(s, t);
        })(this, this.document, "yandexContextAsyncCallbacks");
  
    } 
    
    
    // рекомендации
    if(jQuery(".other").length) {
        jQuery('<center><div id="id-489742-4"></div></center>').insertBefore(jQuery(".other"));
 
            (yaads = window.yaads || []).push({
                id: "489742-4",
                render: "#id-489742-4"
            });
        if(jQuery("body").length) {
            jQuery(' <script async src="https://yastatic.net/pcode-native/loaders/loader.js"></script>').insertAfter(jQuery("body")); 
        }

  
    } 
     
     
 
 
if(jQuery(window).width()>700){
    // дектоп
    

 // прилипашка дектоп 
 
    function closepop(){
        document.getElementById('leftrekl').style.display='none';
    }
    jQuery('<div id="leftrekl" style="position: fixed;    background: #fff;    min-height: 32px;    z-index: 9998;    bottom: 0;    margin-bottom: 10px;"><span class="close" onclick="closepop()" title="Закрыть"></span> <div id="yandex_rtb_R-A-489742-10" style="width: 100%;    height: 100%;    position: relative;    background: rgba(255, 255, 255, 0);    clear: both;"></div></div> <style type="text/css"> .close{display: block; box-sizing: content-box; position: absolute; top: 0px; right: 0px; width: 32px; height: 32px; z-index: 99; cursor: pointer; background-color: #000; text-decoration: none; border: none; box-shadow: none!important; opacity:1; } .close::after { transform: rotate(-45deg); } .close::before { transform: rotate(45deg); } .close::before,.close::after { content: \'\'; position: absolute; height: 2px; width: 100%; top: 50%; left: 0; margin-top: -1px; background: #fff; } </style>').insertAfter(jQuery("body"));


    (function(w, d, n, s, t) {
        w[n] = w[n] || [];
        w[n].push(function() {
            Ya.Context.AdvManager.render({
                blockId: "R-A-489742-10",
                renderTo: "yandex_rtb_R-A-489742-10",
                async: true
            }); 
        });
        t = d.getElementsByTagName("script")[0];
        s = d.createElement("script");
        s.type = "text/javascript";
        s.src = "//an.yandex.ru/system/context.js";
        s.async = true;
        t.parentNode.insertBefore(s, t);
    })(this, this.document, "yandexContextAsyncCallbacks");
   
// прилипашка дектоп 2
 
    function closepopright(){
        document.getElementById('rightrekl').style.display='none';
    }
    jQuery('<div id="rightrekl" style="display:none; position: fixed;    background: #fff;    min-height: 32px;    z-index: 9998;    bottom: 0;    margin-bottom: 10px; right:0;"><span class="closer" onclick="closepopright()" title="Закрыть"></span> <div id="yandex_rtb_R-A-489742-11" style="width: 100%;    height: 100%;    position: relative;    background: rgba(255, 255, 255, 0);    clear: both;"></div></div> <style type="text/css"> .closer{display: block; box-sizing: content-box; position: absolute; top: 0px; left: 0px; width: 32px; height: 32px; z-index: 99; cursor: pointer; background-color: #000; text-decoration: none; border: none; box-shadow: none!important; opacity:1; } .closer::after { transform: rotate(-45deg); } .closer::before { transform: rotate(45deg); } .closer::before,.closer::after { content: \'\'; position: absolute; height: 2px; width: 100%; top: 50%; right: 0; margin-top: -1px; background: #fff; } </style>').insertAfter(jQuery("body"));

    

    (function(w, d, n, s, t) {
        w[n] = w[n] || [];
        w[n].push(function() {
            Ya.Context.AdvManager.render({
                blockId: "R-A-489742-11",
                renderTo: "yandex_rtb_R-A-489742-11",
                async: true
            });
        });
        t = d.getElementsByTagName("script")[0];
        s = d.createElement("script");
        s.type = "text/javascript";
        s.src = "//an.yandex.ru/system/context.js";
        s.async = true;
        t.parentNode.insertBefore(s, t);
    })(this, this.document, "yandexContextAsyncCallbacks");
    var verh_pop=0;
    jQuery(window).scroll(function() {
        if (jQuery(document).scrollTop()  > jQuery(document).height() / 2 && verh_pop==0)
        {
            document.getElementById('rightrekl').style.display='';
            verh_pop=1;
        }
    });

 
}else{
    // мобила 



    // прилипашка снизу мобила
    function closepopup(){
        document.getElementById('leftrekl').style.display='none';
    }
     
     
    jQuery('<style> footer{padding-bottom:100px;}</style><div id="leftrekl" style="position:fixed; bottom:0; width:100%; background:#fff;z-index: 999999;"><span class="closel" onclick="closepopup()" title="Закрыть"></span> <center><div id="yandex_rtb_R-A-489742-12" style="width: 100%;    height: 100%;    position: relative;    background: rgba(255, 255, 255, 0);    clear: both;"></div></center></div> <style type="text/css"> .closel{display: block; box-sizing: content-box; position: absolute; top: 0px; left: 0px; width: 32px; height: 32px; z-index: 999999; cursor: pointer; background-color: #000; text-decoration: none; border: none; box-shadow: none!important; opacity:1; } .closel::after { transform: rotate(-45deg); } .closel::before { transform: rotate(45deg); } .closel::before,.closel::after { content: \'\'; position: absolute; height: 2px; width: 100%; top: 50%; left: 0; margin-top: -1px; background: #fff; } </style>').insertAfter('body');
      
    (function(w, d, n, s, t) {  
        w[n] = w[n] || [];
        w[n].push(function() {
            Ya.Context.AdvManager.render({
                blockId: "R-A-489742-12",
                renderTo: "yandex_rtb_R-A-489742-12",
                async: true
            });  
        });
        t = d.getElementsByTagName("script")[0];
        s = d.createElement("script");
        s.type = "text/javascript";
        s.src = "//an.yandex.ru/system/context.js";
        s.async = true;
        t.parentNode.insertBefore(s, t);
    })(this, this.document, "yandexContextAsyncCallbacks");
    
    // второй раз
    var niz_pop=0;
    jQuery(window).scroll(function() {
        if (jQuery(document).scrollTop()  > jQuery(document).height() / 2 && niz_pop==0)
        {
            document.getElementById('leftrekl').style.display='';
            niz_pop=1;
            
            (function(w, d, n, s, t) {   
                w[n] = w[n] || [];
                w[n].push(function() {
                    Ya.Context.AdvManager.render({
                        blockId: "R-A-489742-13",
                        renderTo: "yandex_rtb_R-A-489742-12",
                        async: true
                    });   
                });
                t = d.getElementsByTagName("script")[0];
                s = d.createElement("script");
                s.type = "text/javascript";
                s.src = "//an.yandex.ru/system/context.js";
                s.async = true;
                t.parentNode.insertBefore(s, t);
            })(this, this.document, "yandexContextAsyncCallbacks");
    
        }
    });
 
}    