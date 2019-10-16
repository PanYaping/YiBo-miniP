// Pages/base/base.js
const db = wx.cloud.database();
Page({

  /**
   * Page initial data
   */
  data: {
    imageArray: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    this.getFileImage()
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  getFileImage: function () {
    //获取图片
    wx.cloud.callFunction({
      name: 'login'
    }).then(res => {
      console.log(res)
      db.collection('image').where({
        _openid: res.result.openid
      }).get().then(data => {
        console.log(data)
        this.setData({
          imageArray: data.data
        })
      })
    })
  }
})