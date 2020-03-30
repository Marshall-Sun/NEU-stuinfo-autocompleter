// ==UserScript==
// @name         NEU-stuinfo-autocompleter
// @namespace    http://stuinfo.neu.edu.cn/
// @description  东北大学学生防控信息统计系统的自动填写，自动提交
// @version      0.4
// @author       Marshall Sun
// @match        http://stuinfo.neu.edu.cn/cloud-xxbl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var r = confirm(
        "请确认你满足下列所有条件：\n\n" +
        "1.之前无医学观察、疑似、确诊经历\n" +
        "2.这个寒假你在家里\n" +
        "3.没有去过任何地方\n" +
        "4.无湖北或其他有本地病例持续传播地区的旅行史或居住史\n" +
        "5.没有接触过湖北或其他有本地病例持续传播地区有发热或呼吸道症状的人\n" +
        "6.没有接触过湖北或其他有本地病例持续传播地区旅行史或居住史的人\n" +
        "7.无与疑似病例、确诊病例或无症状感染者的接触史\n" +
        "8.家庭成员没有过聚集性发病情况\n" +
        "9.没有去过某医疗机构发热门诊看病\n" +
        "10.没有过发热\n" +
        "11.没有过呼吸道不适症状\n" +
        "12.没有过消化道不适症状\n" +
        "\n你是否确认？"
        );
    if (r == true) {
        $("#sfgcyiqz").get(0).selectedIndex = 2;
        $("#sfqtdqlxs").get(0).selectedIndex = 2;
        $("#sfjcgbr").get(0).selectedIndex = 2;
        $("#sfjcglxsry").get(0).selectedIndex = 2;
        $("#sfjcgysqzbr").get(0).selectedIndex = 2;
        $("#sfjtcyjjfbqk").get(0).selectedIndex = 2;
        $("#sfqgfrmz").get(0).selectedIndex = 2;
        $("#sfygfr").get(0).selectedIndex = 2;
        $("#sfyghxdbsy").get(0).selectedIndex = 2;
        $("#sfygxhdbsy").get(0).selectedIndex = 2;
        document.getElementsByName('hjnznl')[0].value='家里';
        document.getElementsByName('qgnl')[0].value='无';
        save()
        window.location.href="http://stuinfo.neu.edu.cn/#/studentPort/serveAdmin"
    }
})();