Page({

  /**
   * 页面的初始数据
   */
  data: {
    history:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let history = wx.getStorageSync("history")
    this.setData({'history':history})
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let history = wx.getStorageSync("history")
    this.setData({ 'history': history })
  },
  onTapItem(e){
    console.log(e.currentTarget.dataset)
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.item.query}`,
    })
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