<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">{{ isHomePage ? title : '返回' }}</router-link>
            <b class="fr">Made by adil with ❤️</b>
        </div>
        <div class="jum">
            <h1>{{ title }}</h1>
        </div>
        <div id="content">
            <div v-if="isHomePage">
                <div class="cate" v-for="page in pages">
                    <h3 v-show="page.name.length">{{ page.name }}</h3>
                    <div class="routes">
                        <router-link class="route" v-for="child in page.children" :to="{ name: child.name }">{{
                            child.name }}
                        </router-link>
                    </div>
                </div>
            </div>
            <router-view v-else/>
        </div>
    </div>
</template>

<script>
    import pages from './router/pages';

    export default {
        data() {
            return {
                isHomePage: true,
                title: 'adil\'s blog',
                pages: pages
            }
        },
        watch: {
            $route(to, from) {
                this.isHomePage = to.path === '/';
                this.title = to.path === '/' ? 'adil\'s blog' : to.name;
                document.title = this.title
                this.scrollTopTimer()
            }
        },
        methods: {
            scrollTopTimer() {
                let scrollTopTimer = setInterval(function () {
                    let top = document.body.scrollTop || document.documentElement.scrollTop;
                    let speed = top / 4;
                    if (document.body.scrollTop !== 0) {
                        document.body.scrollTop -= speed;
                    } else {
                        document.documentElement.scrollTop -= speed;
                    }
                    if (top === 0) {
                        clearInterval(scrollTopTimer);
                    }
                }, 10);
            }
        }
    }
</script>

<style>
    html, body {
        margin: 0;
        padding: 0;
    }

    ::selection {
        background: #2c3e50;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #fff;
        background: #2c3e50;
    }

    #nav {
        padding: 15px;
        backdrop-filter: blur(3px);
        background: rgba(52, 58, 64, .35);
        position: fixed;
        width: 98%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
    }

    .jum {
        background: #343a40;
        padding: 116px 32px 64px;
        text-align: center;
        color: #f8f9fa;
    }

    a {
        font-weight: bold;
        color: #fff;
        text-decoration: none;
        cursor: default;
    }

    #content {
        min-height: 100vh;
        padding: 10px;
    }

    .routes {
        display: flex;
        flex-wrap: wrap;
    }

    pre {
        margin: 5px -10px;
        padding: 8px;
        color: #fff;
        background: #212529;
        word-wrap: break-word;
    }

    code {
        border-radius: 8px;
        padding: 8px;
        color: #fff;
        background: #212529;
    }

    p small {
        color: #ddd;
    }

    .routes .route {
        background: rgba(255, 255, 255, 0.2);
        margin: 12px;
        padding: 12px;
        border-radius: 8px;
    }
</style>
