import axios from 'axios'


// let routerMode = 'hash'
// export const apiUrl = 'https://kl.kxp1688.com/XBM_RootDir/ERP_Test'
// export const apiUrl = '/lp'
// export const apiUrl = BASE_URL

const withCredentials = true;
//返回状态判断
axios.interceptors.response.use((res) => {
  console.log(res);
  if (!res.data.success) {
    return Promise.resolve(res);
  }
  return res;
}, (error) => {
  return Promise.reject(error);
});


let str = 'a=1'  //设置签名
//post请求
const post = (url, params) => {
  // let token = sessionStorage.getItem('h5_token')
  let headers = {  //订单
    'Content-Type': 'application/json',
    // 'accessToken':token
  }
  console.log(url);
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      baseURL: process.env.API,
      data: params,
      headers: headers,
    }).then(response => {
      console.log(response)
      resolve(response.data);
    }, err => {
      reject(err);
    })
      .catch((error) => {
        reject(error)
      })
  })
}



//get请求
const get = (url, params = '') => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: url,
      baseURL: process.env.API,
      params: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' 
      }
    }).then(response => {
      resolve(response.data);
    }, err => {
      reject(err);
    })
      .catch((error) => {
        reject(error)
      })
  })
}


export const api = {
  //获取订单列表
  lunbotu:(data) => post('/XBM_RootDir/ERP_Test/PAGE_162_1.bsp',data),
} 

