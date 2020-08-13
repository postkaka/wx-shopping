// components/w-tab-contorl/w-tab-contorl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tab: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabControlClick(e){
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
      //将点击事件发送给home
      const data = {index: this.data.currentIndex}
      this.triggerEvent("tabClick",data)
    }
  }
})
