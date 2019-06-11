import MD5 from './md5.js'
const appid = '20190611000306499';
const key = 'sxH8fUQSqh3_tC3kmEnm';
var salt = (new Date).getTime();


function request(q,from,to){
  return new Promise((resovle,reject)=>{
    var salt = (new Date).getTime();  
    let str1 = appid + q + salt + key;
    let sign = MD5(str1);
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      data: {
        q,
        from,
        to,
        appid,
        salt,
        sign
      },
      success(res){
        if(res.data && res.data.trans_result){
          resovle(res.data)
        }else{
          reject({staus:'error',msg:'翻译失败'})
          wx.showToast({
            title: '翻译失败',
            icon:'none',
            duration: 3000
          })
        }
      },
      fail(){
        reject({status:'error',msg:'翻译失败'})
        wx.showToast({
          title: '网络异常',
          icon:'none',
          duration:3000
        })
      }
    })
  })
  
}
export default request