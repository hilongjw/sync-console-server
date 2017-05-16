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
                    SyncConsole is part of the <a class="intro-card-link" href="https://fd.igetget.com">Foundation</a> project for real-time remote debugging on the mobile or PC side, viewing console logs, network requests and browser side info.
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