// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url:{
      type:String,
      value:"../../img/ftp图.png"
    },
    title:{
      type:String,
      value:"title"
    },
    msg: {
      type: String,
      value: "msg"
    },
    bottomBar:{
      type:Boolean,
      value:true,
      observer:function(val){
        if(val){
          this.setData({
            style: "wrap bottom"
          })
        }else{
          this.setData({
            style: "wrap"
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    style: "wrap bottom"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
