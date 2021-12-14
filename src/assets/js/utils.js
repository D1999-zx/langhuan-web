// import reqApi from "./api";
// import store from '../../store';

const utils = {

    clearMess(){
        this.delCookie('access_token')
        sessionStorage.removeItem('store')
    },

    isEmpty(obj) {
        if (obj === "undefined" || obj == null || obj === "") {
            return true;
        } else {
            return false;
        }
    },

    isNotEmpty(obj) {
        return !this.isEmpty(obj);
    },

    getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return;
    },

    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },

    setToken(token) {
        this.setCookie('access_token', token, 1);
    },

    delCookie(cname){
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        //获取cookie是否存在
        let value = this.getCookie(cname);
        if (value != null) {
            document.cookie = cname + "=" + value + ";expires="+ exp.toUTCString();
        }
    },

    getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return;
    },

    getToken() {
        return this.getCookie('access_token');
    },
    // getUserInfo(isSync = true) {
    //     return new Promise((resolve, reject) => {
    //         let token = utils.getQueryVariable('access_token');
    //         if (utils.isNotEmpty(token)) {
    //             utils.setCookie('access_token', token, 1);
    //         } else {
    //             token = utils.getCookie('access_token');
    //         }
    //
    //         if (utils.isNotEmpty(token)) {
    //             reqApi.get({
    //                 url: 'user/getUserInfo',
    //                 params: {isSync: isSync},
    //                 success: res => {
    //                     store.state.user = res.data;
    //                     resolve();
    //                 }
    //             });
    //         } else {
    //             resolve();
    //         }
    //     });
    // },

    calculateTime(beginTime, endTime) {
        let dateBegin = new Date(beginTime);
        let dateEnd = new Date(endTime);
        let dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
        let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
        let leave1 = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
        let hours = Math.floor(leave1 / (3600 * 1000)); //计算出小时数
        //计算相差分钟数
        let leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
        let minutes = Math.floor(leave2 / (60 * 1000)); //计算相差分钟数
        //计算相差秒数
        let leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
        let seconds = Math.round(leave3 / 1000);
        if (seconds < 0) {
            return "逾期" + (-dayDiff-1) + "天" + -hours + "小时" + -minutes + "分钟" + -seconds + "秒"
        }
        return "剩余" + dayDiff + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒"
    },
    waitingTime(beginTime) {
        let dateBegin = new Date(beginTime);
        let dateEnd = new Date();
        let dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
        let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
        let leave1 = dateDiff % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
        let hours = Math.floor(leave1 / (3600 * 1000));//计算出小时数
        //计算相差分钟数
        let leave2 = leave1 % (3600 * 1000);   //计算小时数后剩余的毫秒数
        let minutes = Math.floor(leave2 / (60 * 1000)); //计算相差分钟数
        //计算相差秒数
        let leave3 = leave2 % (60 * 1000);     //计算分钟数后剩余的毫秒数
        let seconds = Math.round(leave3 / 1000);
        return  dayDiff + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";

    },

    dateFormat:function(time) {
        let date=new Date(time);
        let year=date.getFullYear();
        /* 在日期格式中，月份是从0开始的，因此要加0
         * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
         * */
        let month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
        let day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
        let hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
        let minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
        let seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
        // 拼接
        return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
    },

  /**
   * 拼装ids
   */
   assIds(list, idKey = 'id') {
      let s = '';
      for (let i = 0; i < list.length; i++){
        let id = list[i][idKey];
        s += id;
        if (i < list.length - 1){
          s += ','
        }
      }
      return s;
    },

    assIds2(list, idKey = 'id') {
        let s = '';
        for (let i = 0; i < list.length; i++){
            let id = list[i][idKey];
            s += id;
            if (i < list.length - 1){
                s += '|'
            }
        }
        return s;
    },

  // getUrlKey(name){
  //   return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
  // }

}

export default utils;
