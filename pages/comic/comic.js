var localData = require("../../data/home_comic.js")
//获取应用实例
const app = getApp()

Page({
  data: {
    banner: [],
    blockList:[],
    recommendEveryDay:{},
    updateTodayList:[],
  },

  onLoad: function () {
    this.setData({
      banner: localData.banner,
      blockList: localData.blockList,
      recommendEveryDay: localData.recommendEveryDay,
      updateTodayList: localData.updateTodayList,
    })
  },
  // 页面分享
  onShareAppMessage: function () {
    let that = this;
    return {
      title: '仿腾讯动漫',
      desc: '唯爱与美食不可辜负',
      path: '/pages/comic/comic'
    }
  },
})
