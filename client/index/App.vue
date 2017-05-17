<style>
html,
body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
}
body {
    position: relative;
    font-family: -apple-system,BlinkMacSystemFont,Neue Haas Grotesk Text Pro,Arial Nova,Segoe UI,Helvetica Neue,\.PingFang SC,PingFang SC,Microsoft YaHei,Microsoft JhengHei,Source Han Sans SC,Noto Sans CJK SC,Source Han Sans CN,Noto Sans SC,Source Han Sans TC,Noto Sans CJK TC,Hiragino Sans GB,sans-serif;
    font-size: 14px;
    line-height: 1.65;
    color: #3d444f;
    background-color: #fff;
}
* {
    box-sizing: border-box;
}
.container,
.container-lg {
    max-width: 1040px;
}
.container, 
.container-fluid,
.container-lg,
.container-wide,
.container-xl {
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
}

.view {
    padding-top: 50px;
    height: 100%;
    overflow: auto;
}
.view-header {
    position: absolute;
    left: 0;
    top: 10px;
    right: 0;
    z-index: 500;
    height: 50px;
    perspective: 2000px;
}
.view-footer {
    position: relative;
    color: #fff;
    z-index: 2;
}
.view-header .logo {
    font-family: Camphor,Open Sans,Segoe UI,sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    font-size: 16px;
}
.view-header-container {
    display: flex;
    justify-content: space-between;
}
.hd-nav-root {
    display: flex;
    position: relative;
    padding: 0;
    margin: 0;
    list-style: none;
}
.hd-nav-item {
    font-family: Camphor,Open Sans,Segoe UI,sans-serif;
    -webkit-font-smoothing: antialiased;
    margin-left: 30px;
    color: #fff;
    font-size: 16px;
}
.hd-nav-item a {
    text-decoration: none;
    color: #fff;
}
.zero-view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform-origin: 0;
    will-change: background;
    transition: background .2s;
    background: linear-gradient(150deg,#53f 15%,#05d5ff 70%,#a6ffcb 94%);
}
.second-view {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: skewY(12deg);
    transform-origin: 0;
    background: #efefef;
}
.view-block {
    display: flex;
    position: relative;
    color: #fff;
    z-index: 2;
    align-items: center;
    height: 580px;
    -webkit-font-smoothing: antialiased;
}
.intro-card-link {
    color: #fff;
    text-decoration: none;
}
.intro-card-link:hover {
    text-decoration: initial;
}
.intro-card {
    max-width: 600px;
}
.footer-copyright {
    font-size: 14px;
    line-height: 50px;
    font-weight: 300;
    text-align: center;
}
</style>

<template>
    <div id="app" class="view container">
        <header class="view-header">
            <div class="view-header-container container-lg">
                <div class="logo">
                    SyncConsole
                </div>
                <ul class="hd-nav-root">
                    <li class="hd-nav-item">
                        <a href="https://fd.igetget.com/dash/#/login">Sign in</a>
                    </li>
                </ul>
            </div>
        </header>
       
        <section id="intro" class="view-block">
            <div class="intro-card">
                <h1>
                    SyncConsole
                </h1>
                <p>
                    SyncConsole is a part of the <a class="intro-card-link" href="https://fd.igetget.com">Foundation</a> project for real-time remote debugging on the mobile or PC side, with which developers can view console logs, network requests and browser side info in user's browser.
                </p>
            </div>
        </section>
        
        <footer class="view-footer">
            <div class="footer-copyright">
                © 罗辑思维前端团队
            </div>
        </footer>
        
        <div class="zero-view" :style="style"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            text: 'foundation',
            growth: 0,
            colorIndex: 0,
            colorParams: {
                roate: 150,
                preColor: '#53f',
                prePercent: 15,
                transitionColor: '#05d5ff',
                transitionPercent: 70,
                endColor: '#a6ffcb',
                endPercent: 94
            },
            style: {
                background: ''
            }
        }
    },
    mounted () {
        this.go()
    },
    methods: {
        hexPad (hex) {
            const map = {
                1: '0',
                2: '00',
                3: '000'
            }

            if (!hex) return map[3] + map[3]
            if (hex.length === 6) return hex.length

            const len = hex.length 
            const distance = 6 - len
            if (distance < 3) {
                return map[distance] + hex
            } else {
                let i = 0
                while (i < distance) {
                    i++
                    hex = map[1] + hex
                }
                return hex
            }
        },
        render () {
            const cp = this.colorParams
            this.style.background = `linear-gradient(${cp.roate}deg,${cp.preColor} ${cp.prePercent}%,${cp.transitionColor} ${cp.transitionPercent}%,${cp.endColor} ${cp.endPercent}%)`
        },
        roateWorker () {
            this.colorParams.roate += Math.cos(this.growth) * .08
        },
        percentWorker () {
            this.growth += .01

            this.colorParams.prePercent = 10 + Math.sin(this.growth) * 30
            
            this.colorParams.transitionPercent = 60 + Math.sin(this.growth) * 10

            this.colorParams.endPercent = 95 + Math.sin(this.growth) * 5
        },
        go () {
            this.roateWorker()
            this.percentWorker()
            this.render()
            window.requestAnimationFrame(this.go)
        }
    }
}
</script>