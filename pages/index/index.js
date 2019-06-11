import fyrequest from '../../utils/api.js'
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideClearIcon:true,
    query:'',
    result: [],
    curLang: app.globalData.curLang
  },
  onInput(e){
    this.setData({'query':e.detail.value})
    if(this.data.query.length > 0){
      this.setData({ 'hideClearIcon': false })
    }else{
      this.setData({ 'hideClearIcon': true })
      this.setData({'result':[]})
    }
    
  },
  onTapClose(){
    this.setData({ 'query': '','hideClearIcon':true})
    this.setData({ "result": [] })
  },
  onConfirm(){
    if(!this.data.query){
      return
    }
    fyrequest(this.data.query,'auto',this.data.curLang.lang).then(res=>{
      this.setData({'result':res.trans_result})
      console.log(1)
      let history = wx.getStorageSync('history')||[]
      console.log(history)
      history.unshift({ query: this.data.query, result: res.trans_result[0].dst})
      history.length=history.length > 10 ? 10:history.length
      wx.setStorageSync('history', history)
    })
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    if(options.query){
      this.setData({"query":options.query})
    }
  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    this.setData({ "curLang": app.globalData.curLang})
    if(this.data.query){
      fyrequest(this.data.query, 'auto', this.data.curLang.lang).then(res => {
        this.setData({ 'result': res.trans_result })
      })
    }
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