<template>
	<div class="NewInfo">
		<h2>新闻详情{{id}}</h2>
		<p class="subtitle">
			<span>发表时间：{{news.add_time}}</span>
			<span>点击次数：{{news.click}}</span>
		</p>
		<div class="content">
			{{news.content}}
		</div>
		<hr />
		<!--评论区-->
		<!--向子组件传 id-->
		<comment :id='this.id'></comment>
		
	</div>
</template>

<script>
	import Comment from '../subComponent/comment.vue';
	export default {
		data() {
			return {
				id : this.$route.params.id,
				newsInfo: [],
				news:{}
			}
		},
		components: {
			Comment
		},
		created() {
			this.getNewsInfo();
		},
		methods: {
			getNewsInfo() {
				this.$http.get('http://localhost:8888/home/newsinfo')
				.then(result => {
					if(result.body.status == 0) {
						//获取数据
						this.newsInfo = result.body.message;
						for(let i =0 ; i<this.newsInfo.length;i++) {
							if(this.newsInfo[i].id == this.id) {
								this.news = this.newsInfo[i];
								console.log(this.news)
							}
						}
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
	.NewInfo {
		
	}
	.NewInfo h2 {
		font-size: 24px !important;
	}
	.subtitle {
		position: relative;
		border-bottom: 1px solid #CCCCCC;
		padding: 0 10px;
		text-align: left;
		color: #226AFF;
	}
	.subtitle span:nth-of-type(2){
		position: absolute;
		display: inline-block;
		right: 5px;
	}
	.content {
		text-align: left;
		padding: 10px 14px;
		text-indent: 2em;
		font-family: "Times New Roman", Times, serif;
		font-size: 16px;
		letter-spacing: 2px;
		line-height: 16px;
		color: #232326;
	}
</style>