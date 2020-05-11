<template>
    <div>
        <p>throttle 的概念理解起来更容易，就是固定函数执行的速率，即所谓的“节流”。</p>
        <p>正常情况下，`mousemove` 的监听函数可能会每 20ms（假设）执行一次，如果设置 200ms 的“节流”，那么它就会每 200ms 执行一次。</p>
        <p>比如在 1s 的时间段内，正常的监听函数可能会执行 50（1000/20） 次，“节流” 200ms 后则会执行 5（1000/200）
            次。</p>

        <pre>
            /**
            *
            * @param func {Function} 实际要执行的函数
            * @param delay {Number} 执行间隔，单位是毫秒（ms）
            *
            * @return {Function} 返回一个“节流”函数
            *
            */
            function throttle(func, delay){
                let statTime = 0;

                return function() {
                    let currTime = + new Date();

                    if (currTime - statTime > delay) {
                        func.apply(this, arguments);
                        statTime = currTime ;
                    }
                }
            }
        </pre>

        <p>throttle设置一个阀值，在阀值内，把触发的事件合并成一次执行；当到达阀值，必定执行一次事件。</p>

        <p>可以访问这个 <a href="http://demo.nimius.net/debounce_throttle/" target="_blank">http://demo.nimius.net/debounce_throttle/</a> 来查看debounce、throttle和默认情况的事件监听效果。
        </p>
    </div>
</template>

<script>
    export default {
        name: "throttle"
    }
</script>

<style scoped>

</style>