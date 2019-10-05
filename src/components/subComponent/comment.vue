<template>
	<div id="comment">
		<h3>发表评论</h3>
		<!--<hr />-->
		<textarea id='cmt_text' placeholder="请输入要发表的评论(120字)" maxlength="120" v-model="texts"></textarea>
		<mt-button type="primary" size="large" @click="sendComment" >发表评论</mt-button>
		<ul>
			<li v-for="(item, i) in comments" >
				<div class="cmt-title">
					第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time}}
				</div>
				<div class="cmt-body">
					{{item.content}}
				</div>
			</li>
		</ul>
		<mt-button type="danger" @click="getMore" size="large" plain>加载更多</mt-button>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	
	export default {
		data() {
			return {
				pageIndex : 1,
				comments: [],
				texts:""
			}
		},
		props: ["id"],
		created() {
			this.getComment();
		},
		computed: {
			index: function() {
				return this.comments.length+1;
			}
		},
		methods: {
			getComment() {  //得到数据
				this.$http.get('http://localhost:8888/api/getComments/'+this.id+'?pageIndex='+this.pageIndex)
				.then(result => {
					if(result.body.status == 0) {
						//获取数据
						//this.comments = result.body.message;
						//拼接数据 防止覆盖老数据
						this.comments = this.comments.concat(result.body.message);
					}
					console.log(result.body);
				})
				.catch(err =>{
					console.log(err);
				})
			},
			getMore() {   //加载更多数据
				this.pageIndex++;
				this.getComment();
			},
			sendComment() {   //发表评论
				if(this.texts.trim()!="") {
					var cmt = {
						"user_name": "匿名用户"+this.index,
						"add_time": this.format(new Date(),"yyyy-MM-dd")+"",  //调用全局定义的方法
						"content": this.texts.trim()
					}
					this.comments.unshift(cmt);
					this.texts="";
				}else {
					Toast('数据不能为空');
				}
			}
			
			
		}
		
	}
</script>

<style scoped>
	#comment {
		text-align: left;
	}
	#comment h3 {
		font-size: 16px;
		margin-left: 10px;
	}
	textarea {
		font-size: 14px;
		padding-bottom: 10px;
		margin-bottom: 5px;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	ul li {
		padding-top: 8px;
	}
	.cmt-title {
		background-color: #DCDCDC;
		width: 100%;
		font-size: 14px;
		letter-spacing: 2px;
		padding: 3px 2px;
	}
	.cmt-body {
		padding-top: 3px;
		width: 100%;
		font-size: 14px;
		letter-spacing: 1px;
		padding-left: 2px;
	}
</style>