const localData = require("../../data/home_comic.js")
const util = require('../../utils/util.js');
const api = require('../../config/api.js');
//获取应用实例
const app = getApp()

Page({
  data: {
    banner: [],
    blockList: [],
    recommendEveryDay: {},
    updateTodayList: [],
  },

  onPullDownRefresh() {
    wx.showLoading({
      title: '正在加载中',
    }); //在标题栏中显示加载
    setTimeout(() => {
      this.getHomeComicData();
      wx.hideLoading(); //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 2000);

  },

  onLoad: function() {
    this.getHomeComicData();
  },

  getHomeComicData: function() {
    // 无网络，为了展示，用本地数据
    this.setData({
      banner: localData.banner,
      blockList: localData.blockList,
      recommendEveryDay: localData.recommendEveryDay,
      updateTodayList: localData.updateTodayList,
    })
    
    // 网络请求
    // util.request(api.homeComic).then((res) => {
    //   this.setData({
    //     banner: res.banner,
    //     blockList: res.blockList,
    //     recommendEveryDay: res.recommendEveryDay,
    //     updateTodayList: res.updateTodayList,
    //   });
    // });
  },


  // 页面分享
  onShareAppMessage: function() {
    let that = this;
    return {
      title: '仿腾讯动漫',
      desc: '唯爱与美食不可辜负',
      path: '/pages/comic/comic'
    }
  },
})