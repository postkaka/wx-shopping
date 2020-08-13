// pages/home/home.js
import {getMultiData,getGoodsDate} from "../../service/home.js"
const types = ['pop','new','sell'];
Page({
    data: {
      banners: [],
      recommends: [],
      tab:['流行','新款','精选'],
      goods: {
        'pop' : {page: 0 ,list: []},
        'new' : {page: 0 ,list: []},
        'sell' : {page: 0 ,list: []},
      },
      currentType:"pop"
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 1.请求轮播图以及推荐数据
     */
      this._getMultiData()
      //2.请求商品数据
      this._getGoodsDate("pop")
      this._getGoodsDate("new")
      this._getGoodsDate("sell")
  },
  //------------------------网络请求函数-----------------------------------
  _getMultiData(){
    getMultiData().then(res => {
      // 取出轮播图数据
       const banners = res.data.data.banner.list
       // 取出推荐数据
       const recommends = res.data.data.recommend.list
      //console.log(banners,recommends)
      //讲banners和recommends放到data中
      this.setData({
        banners: banners,
        recommends: recommends
      })
    })
  },
  _getGoodsDate(type){
    //获取页码
    const Page = this.data.goods[type].page + 1  ;
    getGoodsDate(type,Page).then(res =>{
      //1.取出数据
      const list = res.data.data.list;
      //2.将数据设置到对应的type的list中
      const goods = this.data.goods;
      goods[type].list.push(...list)
      goods[type].page += 1
      //3.将数据设置到data中的goods中
       this.setData({
        goods: goods  
      })
      //console.log(this.data.goods)
    })
  },
  //------------------------事件监听函数-----------------------------------
  handleTabclick(event){
    const index = event.detail.index;
    //console.log(index)
    //设置currentType
    const type = types[index]
    this.setData({
      currentType: type
    })
  },

//-----上拉加载更多-------
  onReachBottom() {
    this._getGoodsDate(this.data.currentType)
  }

  
})