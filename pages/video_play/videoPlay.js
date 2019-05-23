function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onShareAppMessage() {
    return {
      title: 'video',
      path: 'page/component/pages/video/video',
    }
  },

  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '三人行钢琴曲'
    })
  },

  onReady() {
    this.videoContext = wx.createVideoContext('myVideo')
    this.toast = this.selectComponent("#toast");
  },

  data: {
    coverImage: "https://image1.pearvideo.com/main/20190517/12719568-133605-1.png",
    videoUrl: "https://video.pearvideo.com/mp4/third/20190517/cont-1555570-12719568-133553-hd.mp4",
    danmuList: [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }],
    initText: ''
  },

  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },

  bindButtonTap() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },

  bindSendDanmu() {
    if (this.inputValue == null || this.inputValue == '') {
      this.toast.showToast('弹幕不能为空哟');
      return
    }
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
    this.setData({
      initText: ''
    })
    this.inputValue = ''
    this.toast.showToast('弹幕发送成功');
  },

  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  }
})