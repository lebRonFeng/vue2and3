<template>
    <div>
        <ul>
            <li :style="{opacity}">欢迎学习vue</li>
            <li>news001 <input type="text"></li>
            <li>news002 <input type="text"></li>
            <li>news003 <input type="text"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'News',
        data(){
            return {
                opacity:1
            }
        },
        // beforeDestroy(){
        //     console.log('News组件即将被销毁了')
        //     clearInterval(this.timer)
        // },
        // mounted(){
            // this.timer = setInterval(() => {
            //     console.log('@')
            //     this.opacity -= 0.01
            //     if(this.opacity <= 0) this.opacity = 1
            // },16)
        // }
        activated(){
            console.log('New组件被激活了')
            this.timer = setInterval(() => {
                console.log('@')
                this.opacity -= 0.01
                if(this.opacity <= 0) this.opacity = 1
            },16)
        },
        deactivated(){
            console.log('New组件失活了')
            clearInterval(this.timer)
        }
    }
</script>

<style scoped>

</style>