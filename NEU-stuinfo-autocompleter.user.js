// ==UserScript==
// @name         NEU-stuinfo-autocompleter
// @namespace    https://e-report.neu.edu.cn/
// @description  东北大学师生健康信息上报平台的自动填写，自动提交
// @version      1.1
// @author       Marshall Sun
// @match        https://e-report.neu.edu.cn/notes/create
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var r = confirm(
        "请确认你满足下列所有条件：\n\n" +
        "1.本次为本人上报\n" +
        "2.目前身体状况正常\n" +
        "3.所处位置无变化\n" +
        "\n你是否确认？"
        );
    if (r == true) {
        document.getElementsByName('jibenxinxi_shifoubenrenshangbao')[0].click();
        document.getElementsByName('jiankangxinxi_muqianshentizhuangkuang')[0].click();
        setTimeout("document.getElementsByName('xingchengxinxi_weizhishifouyoubianhua')[1].click()",500);
        setTimeout("document.getElementsByTagName('button')[1].click()",600);
    }
})();
