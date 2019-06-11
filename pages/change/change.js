const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    curLang: {}, //当前语言
    langList: app.globalData.langList //语言列表
  },

   /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({ 'curLang': app.globalData.curLang})
  },
  onTap(e){
    wx.setStorageSync('curLang', e.currentTarget.dataset.item)
    this.setData({ 'curLang': e.currentTarget.dataset.item.chs})
    app.globalData.curLang = e.currentTarget.dataset.item
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

 

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
