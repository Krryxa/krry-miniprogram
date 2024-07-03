// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mytest: '哈哈哈哈',
    listSelected: ['kv'],
    list: [
      {
        name: 'kk',
        value: 'kv'
      },
      {
        name: 'bb',
        value: 'bv',
      },
      {
        name: 'cc',
        value: 'cv'
      }
    ],
    images: [1,2,3,4],
    blog: []
  },

  onchange(e) {
    console.log(1212, e.detail.value)
    this.setData({listSelected: e.detail.value})
    console.log(12333, this.data.listSelected)
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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
    console.log('正在下拉加载...')
    wx.request({
      url: 'https://ainyi.com/blog/list',
      data: {
        pageNo: 1,
        pageSize: 12
      },
      success: ({data}) => {
        console.log(1212, data)
        this.setData({
          blog: data.result.data
        })
        wx.stopPullDownRefresh()
      }
    })
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