<template>
    <div>
        <pre>
            let fetchArticleData = async function(){
                console.log('开始执行 fetchArticleData 异步函数')
                let data = await new Promise(resolve => setTimeout(() => resolve('article list'), 1000))
                console.log('fetchArticleData 异步函数执行完成')
                return data
            }

            console.log('开始执行js代码')

            fetchData().then(r => {console.log(r)})

            console.log('js代码执行完毕')
        </pre>
        <p>以上代码输出结果为</p>
        <ul>
            <li>开始执行js代码</li>
            <li>开始执行 fetchArticleData 异步函数</li>
            <li>js代码执行完毕</li>
            <li style="color: #ccc; font-size: 0.7%">延迟1秒</li>
            <li>fetchArticleData 异步函数执行完成</li>
            <li>article list</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'async-await',
        created() {
            console.log('aaa')
        }
    }
</script>
