// Pages/cloud/cloud.js
const db = wx.cloud.database()
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

  insertDate: function () {
    db.collection('user').add({
      data: {
        name: 'pyp',
        age: 18,
        sex: 'female'
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },

  sum: function(){
    wx.cloud.callFunction({
      name: 'sum',
      data: {
        a: 5,
        b: 10
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },

  getOpenId: function(){
    wx.cloud.callFunction({
      name: 'login'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },

  batchdelete: function(){
    wx.cloud.callFunction({
      name: 'batchdelete'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    })
  },

  uploadImage: function(){
    wx.chooseImage({
      count: 2,
      sizeType: ['original', 'compressed'],
      success: function(res) {
        console.log(res.tempFilePaths);
        const imagefile = res.tempFilePaths;
        wx.cloud.uploadFile({
          cloudPath: 'wyb/'+ new Date().getTime() +'.png',
          filePath: imagefile[0]
        }).then(data => {
          console.log(data);
            // // 上传成功存入数据库
          db.collection('image').add({
            data: {
              fileId: data.fileID
              }
          }).then(a => {
            console.log(a);
          }).catch(err => {
            console.error(err);
          })
        }).catch(err => {
          console.error(err);
        })
      },
      fail: function(err) {
        console.error(err);
      }
    })
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