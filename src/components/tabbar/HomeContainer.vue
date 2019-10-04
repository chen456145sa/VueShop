<template>
	<div id="container">
		<mt-swipe :auto="4000">
		  <mt-swipe-item></mt-swipe-item>
		  <mt-swipe-item></mt-swipe-item>
		  <mt-swipe-item></mt-swipe-item>
		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
	                <img src="../../images/menu1.png"/>
	                <div class="mui-media-body">新闻资讯</div></router-link></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
	                <img src="../../images/menu2.png"/>
	                <div class="mui-media-body">图片分享</div></router-link></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
	                <img src="../../images/menu3.png"/>
	                <div class="mui-media-body">商品信息</div></router-link></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
	                <img src="../../images/menu4.png"/>
	                <div class="mui-media-body">留言反馈</div></router-link></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
	                <img src="../../images/menu5.png"/>
	                <div class="mui-media-body">视频专区</div></router-link></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
	                <img src="../../images/menu6.png"/>
	                <div class="mui-media-body">联系我们</div></router-link></li>
	        
	    </ul> 
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		created() {
			//this.getLunbotu();
		},
		methods: {
			getLunbotu() {
				this.$http.get('http://vue.studyit.io/api/getLunbo')
				.then(result => {
					console.log(result.body);
				})
				.catch(err => {
					console.log(err);
				})
				
			}
		}
	}
</script>

<style scoped>
	.mint-swipe {
		height: 150px;
	}
	.mint-swipe-item:nth-child(1) {
		background-color: #00A4FF;
	}
	.mint-swipe-item:nth-child(2) {
		background-color: #F4511E;
	}
	.mint-swipe-item:nth-child(3) {
		background-color: #2AC845;
	}
	/*信息栏*/
	.mui-grid-view.mui-grid-9 {
		background-color:#FFFFFF
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border: none;
	}
	.mui-table-view-cell img {
		width: 60px;
		height: 60px;
	}
</style>