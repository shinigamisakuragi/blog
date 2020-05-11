<template>
    <div>

        <p>DOM 事件里的 debounce 概念其实是从机械开关和继电器的“去弹跳”（debounce）衍生 出来的，基本思路就是把多个信号合并为一个信号。</p>

        <p>在 JavaScript 中，debounce
            函数所做的事情就是，强制一个函数在某个连续时间段内只执行一次，哪怕它本来会被调用多次。我们希望在用户停止某个操作一段时间之后才执行相应的监听函数，而不是在用户操作的过程当中，浏览器触发多少次事件，就执行多少次监听函数。
        </p>

        <p>比如，在某个 3s 的时间段内连续地移动了鼠标，浏览器可能会触发几十（甚至几百）个 mousemove 事件，不使用 debounce 的话，监听函数就要执行这么多次；如果对监听函数使用 100ms
            的“去弹跳”，那么浏览器只会执行一次这个监听函数，而且是在第 3.1s 的时候执行的。
        </p>

        <p>现在，我们就来实现一个 debounce 函数，第一个参数是要“去弹跳”的回调函数 func，第二个是延迟的时间 delay。</p>

        <pre>
            /**
            *
            * @param func {Function} 实际要执行的函数
            * @param delay {Number} 延迟时间，也就是阈值，单位是毫秒（ms）
            *
            * @return {Function} 返回一个“去弹跳”了的函数
            *
            */
            function debounce(func, delay) {

              // 定时器，用来 setTimeout
              let timer;

              // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 func 函数
              return function () {

                // 保存函数调用时的上下文和参数，传递给 func
                let self = this;
                let args = arguments;

                // 每次这个返回的函数被调用，就清除定时器，以保证不执行 func
                clearTimeout(timer);

                // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
                // 再过 delay 毫秒就执行 func
                timer = setTimeout(function () {
                  func.apply(self, args);
                }, delay);
              }
            }
        </pre>

        <p>定义好方法之后我们这样使用它</p>

        <p>AJAX请求实例
            <small>有一个类名为js-search-input的输入框，当用户输入的时候会发送请求。加入debounce函数之后会在300ms之后才会发送请求，这样可以有效的减少服务器压力。</small>
        </p>


        <pre>
            $('.js-search-input').on('keyup', debounce(function(e) {
                // 发送 ajax 请求从服务端获取输入的关键字相关的数据显示在页面上，类似百度的搜索预测
            }, 300));
        </pre>

        <p>页面缩放实例</p>

        <pre>
            function resizeHandler() {
                // 监听resize事件做响应式设计
            }

            window.onresize = debounce(resizeHandler, 300);
        </pre>

        <p>页面滚动到元素可见位置用例</p>

        <pre>
            function scrollHandler(){
              let win_pos = $(window).scrollTop();
              //也可以把元素位置初始化在页面加载完毕之时
              let element_height = $('.element').offset().top - $(window).height();

              if (win_pos >= initCounterHeight) {
                console.log("scroll");
              }
            };

            $(window).scroll(debounce(scrollHandler, 100));
        </pre>

        <p>改变窗口大小实例</p>
        <pre>
            function resizeHandler() {
                console.log("resize");
            }

            window.onresize = throttle(resizeHandler, 300);
        </pre>

        <p>debounce其实就是把触发非常频繁的事件合并成一次延迟执行，合理使用不仅可以减少服务器压力还能加快浏览器的渲染速度。</p>
        <p>可以访问这个 <a href="http://demo.nimius.net/debounce_throttle/" target="_blank">http://demo.nimius.net/debounce_throttle/</a> 来查看debounce、throttle和默认情况的事件监听效果。
        </p>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>

</style>