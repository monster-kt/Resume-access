window.onload = function() {
    writeData(); //当打开页面的时候，先将localStorage中的数据输出一边，如果没有数据，则输出空

}
window.addEventListener("storage", function(e) {
    if (e.key == "time" && e.newValue) {
        var dataHtml = "",
            data = "";
        for (var i = localStorage.length - 1; i >= 0; i--) //效率更高的循环方法
        {
            data = localStorage.getItem(localStorage.key(i)).split("|");

            //dataHtml += "<p><span class=\"msg\">" + data[0] + "</span><span class=\"datetime\">" + data[1] + "</span><span>" + data[2]+"</span></p>";
            dataHtml += "<span style=> 公司名称： " + data[1] + "<span class=\"thetime\"> 访问时间： " + data[2] + "</span><p><span class=\"phone\">联系方式：" + data[0] + "</span></p>";
        }
        document.getElementById("comment").innerHTML = dataHtml;
        // document.getElementById("time").innerHTML = e.newValue;
        // 调用removeItem方法再次set的时候,保证每次set事件都可以监听到,同时可以释放资源
        localStorage.removeItem("time");
    }
});

function writeData() {
    var dataHtml = "",
        data = "";
    for (var i = localStorage.length - 1; i >= 0; i--) //效率更高的循环方法
    {
        console.log(localStorage.length);

        data = localStorage.getItem(localStorage.key(i)).split("|");

        //dataHtml += "<p><span class=\"msg\">" + data[0] + "</span><span class=\"datetime\">" + data[1] + "</span><span>" + data[2]+"</span></p>";
        dataHtml += "<span style=> 公司名称： " + data[1] + "<span class=\"thetime\"> 访问时间： " + data[2] + "</span><p><span class=\"phone\">联系方式：" + data[0] + "</span></p>";
    }
    document.getElementById("comment").innerHTML = dataHtml;
}

function delete1(id) {
    localStorage.removeItem(id);
}
document.getElementById("clearBt").onclick = function clearData() //清空数据
    {
        if (localStorage.length > 0) {
            if (window.confirm("清空后不可恢复，是否确认清空？")) {
                localStorage.clear();
                writeData();
            }
        } else {
            alert("没有需要清空的数据！");
        }
    }