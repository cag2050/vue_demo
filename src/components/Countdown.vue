<template>
    <span class='orange' v-model='time'>倒计时:{{time}}</span>
</template>

<script>
export default{
	data(){
		return {
			time: ''
		};
	},
	methods:{
		formate(time){
            let day, hour, minute, second
            if (time > 0 ) {
                day = Math.floor(time / (60 * 60 * 24)),
                hour = Math.floor(time / (60 * 60)) - (day * 24),
                minute = Math.floor(time / 60) - (day * 24 * 60) - (hour * 60),
                second = Math.floor(time) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
                if (minute <= 9) minute = '0' + minute;
                if (second <= 9) second = '0' + second;
            }
            if (time === 0) {
                day = 0, hour = 0, minute = 0, second = 0
            }
			return day + '天' + hour + '小时' + minute + '分钟' + second + '秒';
		}
	},
	mounted(){
		let _this = this;
		let startTime = new Date(localStorage.getItem('subTime')),
            curTime = new Date().getTime(),
            endTime = startTime.getTime() + 432000000,
            intDiff = parseInt((endTime - curTime) / 1000)
        let interval = setInterval(function () {
            _this.time = _this.formate(intDiff)
            intDiff--
            if (intDiff === -1) {
                clearInterval(interval)
            }
        }, 1000);
	}
}
</script>

<style scoped>
</style>
