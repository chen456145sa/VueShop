<template>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
				<router-link :to="'/home/newsinfo/' + item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h2>{{item.title}}</h2>
						<p class='mui-ellipsis'>
							<span>{{item.add_time}}</span>
							<span class="clickNum">点击次数：{{item.click}}次</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
</template>

<script>
	export default {
		data() {
			return {
				newList:[]
			}
		},
		created() {
			this.getNewsList();
		},
		methods: {
			getNewsList() {
				this.$http.get('http://localhost:8888/home/newslist')
				.then(result => {
					if(result.body.status == 0) {
						this.newList = result.body.message;
					}
					console.log(result.body);
					
				})
				.catch(err =>{
					console.log(err);
				})
			}
		}
	}
</script>

<style scoped>
	.mui-table-view-cell a {
		text-align: left;
	}
	.mui-media-body h2{
		margin-left: 0;
		display: inline-block;
		font-size: 16px;
	}
	.mui-table-view-cell .clickNum {
		position: absolute;
		margin-right: 0;
		right: 5px;
	}
	.mui-ellipsis span {
		font-size: 12px;
		color: #226aff;
	}
</style>