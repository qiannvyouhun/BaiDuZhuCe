function check() {
    var nametip = checkUserName();
    var passtip = checkUserPassword();
    var phonetip = checkUserPhone();
    return nametip && passtip && phonetip;
}

//验证用户名   
function checkUserName() {
    var username = document.getElementById('userName');
    var errname = document.getElementById('nameVer');
    //判断用户名是否为空      
    if (username.value.length == 0) {
        errname.innerHTML = "请输入用户名";
        errname.className = "error";
        return false;
    }
    // 判断是否有非法字符(除了中英文、数字、下划线以外的字符)
    var char = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
    if (!char.test(username.value)) {
        errname.innerHTML = "用户名仅支持中英文、数字和下划线,且不能为纯数字";
        errname.className = "error";
        return false;
    }
    // 判断是否为纯数字
    var num = /[0-9]/;
    if (num.test(username.value)) {
        errname.innerHTML = "用户名仅支持中英文、数字和下划线,且不能为纯数字";
        errname.className = "error";
        return false;
    }
    //判断用户名字符串的长度
    var len = 0;
    for (var i = 0; i < username.value.length; i++) {
        var text = /[\u4e00-\u9fa5]/;
        //如果是中文就+2，否则+1
        if (text.test(username.value[i])) {
            len += 2;
        } else {
            len += 1;
        }
        //如果长度超过14则停止运行
        if (len > 14) {
            break;
        }
    }
    //判断长度是否满足条件
    if (len > 14) {
        errname.innerHTML = "用户名不能超过7个汉字或14个字符";
        errname.className = "error";
        return false;
    }
    else {
        errname.innerHTML = "用户名符合要求";
        errname.className = "success";
        return true;
    }
}

//验证手机号 
function checkUserPhone() {
    var userphone = document.getElementById('userPhone');
    var phonrErr = document.getElementById('phoneVer');
    var pattern = /^1[34578]\d{9}$/; //验证手机号正则表达式 
    if (!pattern.test(userphone.value)) {
        phonrErr.innerHTML = "手机号码格式不正确";
        phonrErr.className = "error";
        return false;
    }
    else {
        phonrErr.innerHTML = "手机号符合要求";
        phonrErr.className = "success";
        return true;
    }
}

//验证密码   
function checkUserPassword() {
    var userpasswd = document.getElementById('userPasword');
    var errPasswd = document.getElementById('passwordVer');
    var pattern = /^\w{8,14}$/; //密码要在8-14位 
    if (!pattern.test(userpasswd.value)) {
        errPasswd.innerHTML = "密码设置不符合要求";
        errPasswd.className = "error";
        return false;
    }
    else {
        errPasswd.innerHTML = "密码设置符合要求";
        errPasswd.className = "success";
        return true;
    }
}

//获取验证码：
var countdown = 60;
var yzmErr = document.getElementById('yzm');
function time(obj) {
    var button = document.getElementById('button');
    if (countdown == 0) {
        obj.removeAttribute("disabled");
        button.removeAttribute("disabled");
        obj.value = "获取验证码";
        countdown = 60;
        yzmErr.innerHTML = "请求超时，请稍后再试";
        yzmErr.className = "error";
        return;
    } else {
        obj.setAttribute("disabled", true);
        obj.value = "重新发送(" + countdown + ")";
        countdown--;
        button.setAttribute("disabled", true);
        button.className = "button1";
    }
    setTimeout(function () {
        time(obj);
    }, 1000);
}
