/*
通过id找到所有提示标签
*/
var Cusername = document.getElementById("un");
var Cphone = document.getElementById("ph");
var Cvalidate = document.getElementById("vd");
var Cmail = document.getElementById("ma");
var Cresume = document.getElementById("resume");
window.onload = function() { //页面加载出来后实现下列方法
    // winback();
    username();
    phone();
    valimg();
    clickvalimg();
    validate();
    mail();
    submit();
}

function username() { //判断公司用户名输入是否正确

    var username = document.getElementById("username");
    username.onchange = function() {
        var text = /^[\u4E00-\u9FA5a-zA-Z0-9_-]{2,16}$/;

        // var c = storage.getItem("name");//读取
        // console.log(c);
        var boo = text.test(username.value);
        // console.log(Lname);
        if (boo) {

            Cusername.innerHTML = "正确";
            Cusername.style.color = "#61BFFF";
            Cusername.style.fontSize = "15px";
        } else {
            Cusername.innerHTML = "输入用户名必须为字母、数字、汉字，且必须是4-16位";
            Cusername.style.color = "red";
            Cusername.style.fontSize = "10px"
        }
    }
    username.onblur = function() {
        if (username.value == "") {
            Cusername.innerHTML = "用户名不能为空";
            Cusername.style.color = "red"
            Cusername.style.fontSize = "15px"
        }
    }

}

function phone() { //判断电话号码是否正确
    var phone = document.getElementById("phone");
    phone.onchange = function() {
        var text = /^[^0][13|14|15|18]\d{9}$/;
        var boo = text.test(phone.value);
        if (!boo) {
            Cphone.innerHTML = "请输入正确的手机号";
            Cphone.style.color = "red";
            Cphone.style.fontSize = "15px"


        } else {
            Cphone.innerHTML = "正确";
            Cphone.style.color = "#61BFFF";
            Cphone.style.fontSize = "15px"

        }
    }
    phone.onblur = function() {
        if (phone.value == "") {
            Cphone.innerHTML = "手机号不能为空";
            Cphone.style.color = "red";
            Cphone.style.fontSize = "15px"
        }
    }
}

function valimg() { //用来显示验证码
    var code = "";
    var valimg = document.getElementById("valimg");
    var text = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    for (var i = 0; i < 4; i++) {
        var tindex = Math.floor(Math.random() * 62); //获取数组的下标
        code += text[tindex];
    }
    valimg.firstChild.nodeValue = code;
    // valimg.style.color = "rgb(" + r + "," + g + "," + b + ")";
    // valimg.style.backgroundColor = "rgb(" + b + "," + r + "," + g + ")";
    valimg.style.color = "#ccc";
    valimg.style.backgroundColor = "";
}

function validate() { //判断验证码是否正确
    var validate = document.getElementById("validate");
    var valimg = document.getElementById("valimg");
    validate.onblur = function() {
        if (validate.value == "") {
            Cvalidate.innerHTML = "验证码不能为空";
            Cvalidate.style.color = "red";
            Cvalidate.style.fontSize = "15px"
        }
    }
    validate.onchange = function() {
        var va_text = valimg.firstChild.nodeValue;
        if (validate.value == va_text) {
            Cvalidate.innerHTML = "正确";
            Cvalidate.style.color = "#61BFFF";
            Cvalidate.style.fontSize = "15px"
        } else {
            Cvalidate.innerHTML = "验证码错误";
            Cvalidate.style.color = "red";
            Cvalidate.style.fontSize = "15px"
        }
    }
}

function mail() { //判断邮箱是否正确
    var mail = document.getElementById("mail");
    mail.onchange = function() {
        var text = /^\d{5,10}@qq|163.com$/;
        var boo = text.test(mail.value);
        if (!boo) {
            Cmail.innerHTML = "请输入正确的邮箱号";
            Cmail.style.color = "red";
            Cmail.style.fontSize = "15px"
        } else {
            Cmail.innerHTML = "正确";
            Cmail.style.color = "#61BFFF";
            Cmail.style.fontSize = "15px"
        }
    }
    mail.onblur = function() {
        if (mail.value == "") {
            Cmail.innerHTML = "邮箱不能为空";
            Cmail.style.color = "red";
            Cmail.style.fontSize = "15px"
        }
    }
}

function submit() {
    var submit = document.getElementById("submit");
    submit.onclick = function() {
        var booCusername = Cusername.innerHTML;
        var booCphone = Cphone.innerHTML;
        var booCvalidate = Cvalidate.innerHTML;
        var booCmail = Cmail.innerHTML;
        var booCresume = Cresume.selectedIndex;
        console.log(booCresume);
        //判断提示框内的内容是否为"正确" 一致的话将所有提示变空 如果没有输入的话将提示不能为空
        if (booCusername == "正确" && booCphone == "正确" && booCvalidate == "正确" && booCmail == "正确" && booCresume == 0) {
            // alert("成功");
            Cusername.innerHTML = "";
            Cphone.innerHTML = "";
            Cvalidate.innerHTML = "";
            Cmail.innerHTML = "";
            Cusername.style.padding = "0px";
            Cphone.style.padding = "0px";
            Cvalidate.style.padding = "0px";
            Cmail.style.padding = "0px";
            var username = document.getElementById("username");
            var phone = document.getElementById("phone");
            var time = new Date().getTime() + Math.random() * 5; //getTime是Date对象中的方法，作用是返回 1970年01月01日至今的毫秒数
            localStorage.setItem(time, phone.value + "|" + username.value + "|" + getDateTime()); //将毫秒数存入Key值中，可以降低Key值重复率
            function getDateTime() //获取日期时间，例如 2020-12-13 12:58:58
            {
                var isZero = function(num) //私有方法，自动补零
                    {
                        if (num < 10) {
                            num = "0" + num;
                        }
                        return num;
                    }

                var d = new Date();
                return d.getFullYear() + "-" + isZero(d.getMonth() + 1) + "-" + isZero(d.getDate()) + " " + isZero(d.getHours()) + ":" + isZero(d.getMinutes()) + ":" + isZero(d.getSeconds());
            }
            window.open('./short.html', '_top');
        } else if (booCusername == "正确" && booCphone == "正确" && booCvalidate == "正确" && booCmail == "正确" && booCresume == 1) {
            // alert("成功");
            Cusername.innerHTML = "";
            Cphone.innerHTML = "";
            Cvalidate.innerHTML = "";
            Cmail.innerHTML = "";
            Cusername.style.padding = "0px";
            Cphone.style.padding = "0px";
            Cvalidate.style.padding = "0px";
            Cmail.style.padding = "0px";
            var username = document.getElementById("username");
            var phone = document.getElementById("phone");
            var time = new Date().getTime() + Math.random() * 5; //getTime是Date对象中的方法，作用是返回 1970年01月01日至今的毫秒数
            localStorage.setItem(time, phone.value + "|" + username.value + "|" + getDateTime()); //将毫秒数存入Key值中，可以降低Key值重复率
            function getDateTime() //获取日期时间，例如 2012-03-08 12:58:58
            {
                var isZero = function(num) //私有方法，自动补零
                    {
                        if (num < 10) {
                            num = "0" + num;
                        }
                        return num;
                    }

                var d = new Date();
                return d.getFullYear() + "-" + isZero(d.getMonth() + 1) + "-" + isZero(d.getDate()) + " " + isZero(d.getHours()) + ":" + isZero(d.getMinutes()) + ":" + isZero(d.getSeconds());
            }
            window.open('./long.html', '_top');
        } else if (booCusername == " " | booCphone == " " | booCvalidate == " " | booCmail == " ") {
            Cusername.innerHTML = "用户名不能为空";
            Cusername.style.color = "red";
            Cusername.style.fontSize = "15px"
            Cphone.innerHTML = "电话号码不能为空";
            Cphone.style.color = "red";
            Cphone.style.fontSize = "15px"
            Cvalidate.innerHTML = "验证码不能为空";
            Cvalidate.style.color = "red";
            Cvalidate.style.fontSize = "15px"
            Cmail.innerHTML = "邮箱不能为空";
            Cmail.style.color = "red";
            Cmail.style.fontSize = "15px"
        }
    }
}


function clickvalimg() { //点击验证码图片进行切换验证码
    var valimg = document.getElementById("valimg");
    valimg.onclick = function() {
        var code = "";
        var valimg = document.getElementById("valimg");
        var text = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        for (var i = 0; i < 4; i++) {
            var tindex = Math.floor(Math.random() * 62); //获取数组的下标
            code += text[tindex];
        }
        valimg.firstChild.nodeValue = code;
        valimg.style.color = "#ccc";
        valimg.style.backgroundColor = "";
    }
}