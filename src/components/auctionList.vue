<template>
	<div>
		<div class="auctionListNoMain">	    
			<div>
				<img class="nodataImg" src="../pic/loginBg.jpg" alt="" />
		        <div class="upTitle">你来晚了</div>
		        <div class="downTitle">本次活动已结束</div> 
	        </div>
	    </div>
	</div>
</template>

<script>
export default {
  name: 'auctionList',
  data () {
    return {
      msg: ''
    }
  },
	created(){
		this.$axios("goods_list.json",{
			params:{
				type:'junshi',
				count:30
			}
		}).then(function(res){console.log(res)}).catch(function(error){console.log(error)})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.testBox{
	width: 100px;
	height: 100px;
	background: red;
}
.testBox1{
	width: 1rem;
	height: 1rem;
	background: red;
}
/* 完整页面 */
.auctionListMain{
    width: 100%;
    display: flex;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    background-color: #f4f4f4;
}

.auctionListNoMain{
    width: 100%;
    height: 100%;
    display: flex;
    /* overflow: auto; */
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
}

/* 竞拍商品切换 */
.headtop{
  display: flex;  
  width: 100%;
  height: 0.49rem;
  flex-direction: row;
  background-color: #ffffff;
  border-bottom: 0.005rem solid rgb(230, 230, 230);
}

.goodstap{
   width: 1.87rem;
   display: flex;
   flex-direction: column;
   align-items: center;
}
.actiontap{
    width: 1.87rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.imgsmall{
    width: 0.13rem;
    height: 0.13rem;
    margin-top: 0.1rem;
}
.taptitlel{
    color: #808080;
    font-size: 0.14rem;
    margin-top: 0.02rem;
}
.taptitler{
    color: #DFB50E;
    font-size: 0.14rem;
    margin-top: 0.02rem;
}
.lineyellow{
    background-color: #DFB50E;
    margin-top: 0.02rem;
    width: 0.65rem;
    height: 0.03rem;
}

/* 正在热拍布局 */
.hotauction{
    width: 100%;
    display: flex;
    background-color: white;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 0.1rem;
}

/* 竞拍预告布局 */
.preauction{
    width: 100%;
    display: flex;
    align-items: flex-start;
    background-color: white;
    margin-top: 0.1rem;
    flex-direction: column;
}

/* 竞拍完成布局 */
.endauction{
    width: 100%;
    display: flex;
    background-color:white;
    margin-top: 0.1rem;
    flex-direction: column;
    align-items: flex-start;
}

/* 三个灰色标题 */
.devtitle{
    font-Size: 0.14rem;
    margin-top: 0.14rem;
    margin-left: 0.14rem;
    color: #808080;
    padding-bottom: 0.04rem;
}

/* 每个热拍商品(竖排的) */
.hotgoods{
    display: flex;
    width: 3.47rem;
    height:1.2rem;
    background-color:white;
    margin-top:0.1rem;
    margin-left:0.14rem;
    flex-direction: row;
    text-align: start;
    border: 0.005rem solid rgb(230, 230, 230);
}

/* 热拍商品的图片 */
.hotgoodsimg{
    margin-left: 0.01rem;
    width: 1.2rem;
    height: 1.2rem;
}

/* 热拍商品描述框架 */
.hotdiv{
    display: flex;
    width: 2.27rem;
    height: 1.2rem;
    flex-direction: column;
    /* background-color: skyblue; */
    padding-left: 0.08rem;
}

/* 单个热拍商品名称(竖排的) */
.goodstitleline{
    font-size: 0.14rem;
    width: 2rem;
    /* height: 0.36rem; */
    text-align: left;
    overflow: hidden;
    text-overflow:ellipsis;
    color: #333333;
    margin-top: 0.08rem;
}

/* 单个热拍商品时间(竖排的)  */
.goodstimeline{
    font-size: 0.12rem;
    color: #808080;
    width: 1.56rem;
    margin-top: 0.21rem;
    text-align: left;
}  

/* 单个热拍商品积分价格(竖排的) */
.goospointline{
    font-size: 0.12rem;
    width: 1.56rem;
    color: #ed3771;
    text-align: left;
    margin-top: 0.04rem;
}
/* 单个热拍商品名称大字号(竖排的)  */
.goodspointbigline{
    font-size: 0.16rem;
    color: #ed3771;
    text-align: left;
}


/* 预告和结束商品列表背景(横排的) */
.goodsrow{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    /* justify-content: center; */
    padding-bottom: 0.1rem;
    /* padding-top: 0.1rem; */
}

/* 单个预告和结束商品(横排的) */
.pregoods{
    width: 1.68rem; 
    height: 2.48rem;
    display: flex;
    flex-direction: column;
    margin-left: 0.12rem;
    margin-top: 0.1rem;
    border: 0.005rem solid rgb(230, 230, 230);
    align-items: center;
}

/* 单个预告和结束商品图片(横排的) */
.goodsimg{
    width: 1.2rem;
    height: 1.2rem;
    margin-top: 0.27rem;
    
}
/* 单个预告和结束商品名称(横排的) */
.goodstitlerow{
    font-size: 0.14rem;
    /* height: 0.36rem; */
    width: 1.56rem;
    text-align: left;
    color: #333333;
    margin-top: 0.14rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

/* 单个预告和结束商品时间(横排的) */
.goodstimerow{
    font-size: 0.12rem;
    color: #808080;
    width: 1.56rem;
    margin-top: 0.06rem;
    text-align: left;
}  

/* 单个预告和结束商品积分价格(前面)(横排的) */
.goospointrow{
    font-size: 0.12rem;
    width: 1.56rem;
    color: #ed3771;
    text-align: left;
    margin-top: 0.02rem;
}
/* 单个预告和结束商品名称(后面)(横排的) */
.goodspointbig{
    font-size: 0.16rem;
    color: #ed3771;
    text-align: left;
}

.goodsimgover{
    width: 1.2rem;
    height: 1.2rem;
    margin-top: 0.07rem;
}
.overtitle{
    align-self:flex-start;
    text-align:center;
    width: 0.44rem;
    height: 0.2rem;
    background-color: #cccccc;
    font-size: 0.14rem;
    color: #7a7a7a;
    border-radius: 0 0  0.05rem 0.05rem;
}

.h2s{
    font-size: 0.14rem;
}

.countdowngb{
    display: flex;
    flex-direction: row;
    font-size: 0.13rem;
    height: 0.16rem;
    width: 2rem;
}

.datanum1{
    color: white;
    font-size: 0.11rem;
    width: 0.16rem;
    background-color: #e8365e;
    text-align: center;
}
.danwei1{
    font-size: 0.13rem;
    color: #333333;
    margin-left: 0.04rem;
    margin-right: 0.04rem;
}


.nodataImg{
    width: 1.07rem;
    height: 1.07rem;
    margin-top: 0.96rem;
}


.upTitle{
    font-size: 0.15rem;
    color: #333333;
    margin-top: -0.15rem;
    text-align: center;
}
.downTitle{
    text-align: center;
    font-size: 0.15rem;
    color: #333333;
}

.nodataImgTitle{
    display: flex;
    height: 0.54rem;
    width: 2.23rem;
    margin-top: 0.1rem;
}
</style>
