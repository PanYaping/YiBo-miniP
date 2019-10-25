// Pages/list/list.js
Page({

  /**
   * Page initial data
   */
  data: {
    listData: []
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
    this.getList()
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
    this.getList();
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  getList: function () {
    wx.showLoading({
      title: '加载中...',
    })
    wx.cloud.callFunction({
      name: 'getdata',
      data: {
        start: this.data.listData.length,
        count: 10
      }
    }).then(res => {
      console.log(res)
      this.setData({
        listData: this.data.listData.concat(JSON.parse(res.result).subjects)
      })
      wx.hideLoading();
      console.log(this.data.listData)
    }).catch(err => {
      wx.hideLoading();
    })
  }
})