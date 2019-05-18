// pages/comic_detail/comicDetail.js
var localOverView = require("../../data/comic_detail.js")
var localDetailTab1 = require("../../data/comic_detail_tab1.js")
var localDetailTab2 = require("../../data/comic_detail_tab2.js")
var localDetailTab3 = require("../../data/comic_detail_tab3.js")
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    overView: {},
    detailTab1: {},
    detailTab2: {},
    detailTab3: {},
    // 这里改变当前显示第几个tab
    currentTab: 1,
  },

  // tab滑动
  bindChange(e) {
    this.setData({
      currentTab: e.detail.current
    })
  },
  // 左
  onLeft() {
    this.setData({
      currentTab: 0
    })
  },
  // 、中
  onMiddle() {
    this.setData({
      currentTab: 1
    })
  },
  // 右
  onRight() {
    this.setData({
      currentTab: 2
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    if (options.id) {
      this.setData({
        id: parseInt(options.id)
      });
    }
    this.setData({
      overView: localOverView,
      detailTab1: localDetailTab1,
      detailTab2: localDetailTab2,
      detailTab3: localDetailTab3,
    })
    console.log(this.data.detailTab1)
    wx.setNavigationBarTitle({
      title: localOverView.title
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})