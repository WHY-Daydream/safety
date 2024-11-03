
var score = 0;
var timer = null; // 声明一个全局变量来存储计时器
var questionSet = getRandomQuestions(); // 随机获取题目数组

function two_char(n) {
    return n >= 10 ? n : "0" + n;
}

function time_fun() {
    var sec = 0;

    function updateTime() {
        sec++;
        var date = new Date(0, 0);
        date.setSeconds(sec);
        var m = date.getMinutes();
        var s = date.getSeconds();
        document.getElementById("mytime").innerText = two_char(m) + ":" + two_char(s);
    }

    timer = setInterval(updateTime, 1000);
}

function stopTimer() {
    clearInterval(timer); // 停止计时器
}

function main() {
    var resultArray = [];
    var rightArray = [];
    var aryAns = getAnswers(); // 获取答案数组

    for (var i = 0; i < questionSet.length; i++) {
        if (Name("Q" + (i + 1)) != 10) {
            resultArray[i] = Name("Q" + (i + 1));
        } else {
            alert("第" + (i + 1) + "题,您未作答!!");
            return false;
        }
    }

    var right_number = 0;

    for (var i = 0; i < questionSet.length; i++) {
        if (aryAns[i] == resultArray[i]) {
            right_number++;
            rightArray[i] = 1;
        } else {
            rightArray[i] = 0;
        }
    }

    // 计算积分
    var score = right_number;

    var right_question = " ";
    var error_question = " ";

    for (var i = 0; i < rightArray.length; i++) {
        if (rightArray[i] == 1) {
            right_question += (i + 1) + " ";
        } else {
            error_question += (i + 1) + " ";
        }
    }

    document.getElementById("right_number").innerText = right_number;
    document.getElementById("score").innerText = score;

    var time = document.getElementById("mytime").innerHTML;
    document.getElementById("time").innerText = time;

    if (right_question != " ") {
        document.getElementById("right_question").innerText = right_question;
    }
    if (error_question != " ") {
        document.getElementById("error_question").innerText = error_question;
    }
    if (score >= 6) {
        document.getElementById("content").innerText = "您目前是第:1名";
    }
    else if (score >= 5) {
        document.getElementById("content").innerText = "您目前是第:100名";

    } else if (score >= 4) {
        document.getElementById("content").innerText = "您目前是第:200名";

    }
    else if (score >= 3) {
        document.getElementById("content").innerText = "您目前是第:300名";
    }
    else if (score >= 2) {
        document.getElementById("content").innerText = "您目前是第:400名";
    }
    else if (score >= 1) {
        document.getElementById("content").innerText = "您目前是第:999名";
    }
    else {
        document.getElementById("content").innerText = "您目前是第999+名";
    }
    stopTimer(); // 停止计时器
}

function Name(name) {
    var temp = document.getElementsByName(name);
    var intHot = 9;
    for (var i = 0; i < temp.length; i++) {
        if (temp[i].checked)
            intHot = temp[i].value;
    }
    if (intHot == 9) {
        return 10;
    }
    return intHot;
}

function exit() {
    stopTimer(); // 停止计时器
    document.getElementById("right_number").innerText = "";
    document.getElementById("score").innerText = "";
    document.getElementById("time").innerText = "";
    document.getElementById("right_question").innerText = "";
    document.getElementById("error_question").innerText = "";
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function getRandomQuestions() {
    var questionSet = [

        {
            question: " 发生地震时，以下做法正确的是(   )",
            options: [
                "A.躲在桌子底下",
                "B.躲在窗户下方",
                "C.站在窗户下方",
                "D.躲在墙角"
            ],
            answer: 1
        }, {
            question: "当地震来临时，以下做法正确的是(  )",
            options: [
                "A.乘电梯逃跑 ",
                "B.在门口堵住门口",
                "C.在窗户下方躲避",
                "D.在坚固的桌子底下躲避",
            ],
            answer: 4// 答案是D
        }, {
            question: "遭遇火灾时，下列做法正确的是(  )",
            options: [
                "A.泼水救火",
                "B.用灭火器灭火",
                "C.用砂子",
                "D.用干粉灭火器灭火"
            ],
            answer: 4
        }, {
            question: "以下哪种做法可以提高公共场所排队的安全性？",
            options: [
                "A.增加排队高度",
                "B.增加排队间距",
                "C.增加排队长度",
                "D.增加排队人数"
            ],
            answer: 2// 答案是B
        }, {
            question: "可燃气体与空气混合后，一旦遇到明火，必然会发生爆炸。",
            options: [
                "A. 正确",
                "B. 错误"
            ],
            answer: 2 // 答案是B
        },
        {
            question: "安全生产事故发生后，必须遵循(   )的原则？",
            options: [
                "A.迅速",
                "B.准确",
                "C.边抢救",
                "D.边报告",
                "E.以上都对"
            ],
            answer: 5 // 答案是E
        },
        {
            question: "电器设备引起火灾的原因是(   )。",
            options: [
                "A.短路 ",
                "B.用电量小 ",
                "C.还未超负荷;",
                "D.电线未老化"
            ],
            answer: 1 // 答案是A
        },
        {
            question: "使用灭火器时，应注意(   )",
            options: [
                "A.站在上风方向灭火",
                "B.站在下风方向灭火",
                "C.对准燃烧点下部喷射",
                "D.对准燃烧点上部喷射"
            ],
            answer: 1 // 答案是A
        },
        {
            question: "现场心肺复苏时，按压与吹气之比是(   )",
            options: [
                "A.30:2",
                "B.15:2",
                "C.20:3"
            ],
            answer: 1 // 答案是A
        },
        {
            question: "燃气泄漏时，不要在室内停留，以防窒息、(   )",
            options: [
                "A.中毒",
                "B.昏倒",
                "C.呕吐",
                "D.晕倒"
            ],
            answer: 1 // 答案是A
        },
        {
            question: "以下哪种方法可以快速有效地检测公共场所空气中的病毒？",
            options: [
                "A.采集空气样本进行分析",
                "B.使用空气净化器",
                "C.使用紫外线消毒灯",
                "D.增加通风设备"
            ],
            answer: 1 // 答案是A
        },
        {
            question: "以下哪种人群需要特别注意在公共场所佩戴口罩？",
            options: [
                "A.老年人",
                "B.儿童",
                "C.孕妇",
                "D.健康人群"
            ],
            answer: 3// 答案是C
        },
        {
            question: "以下哪种做法可以有效地保护公共场所内的健康？",
            options: [
                "A.定时开窗通风",
                "B.保持环境卫生干净整洁",
                "C.增加清洁用品的使用",
                "D.减少人员密度"
            ],
            answer: 4
        },
        {
            question: "以下哪种病毒可以通过公共卫生间传播？",
            options: [
                "A.甲型流感病毒 ",
                "B.乙型流感病毒",
                "C.新型冠状病毒",
                "D.普通感冒病毒"
            ],
            answer: 4
        },
        {
            question: "以下哪种方法可以帮助我们正确佩戴口罩？",
            options: [
                "A.直接佩戴口罩",
                "B.先佩戴口罩，再戴上眼镜",
                "C.先戴上眼镜，再佩戴口罩"
            ],
            answer: 2
        },
        {
            question: "以下哪种情况需要立即就医？",
            options: [
                "A.发热",
                "B.咳嗽",
                "C.乏力",
                "D.呼吸困难"
            ],
            answer: 4
        },
    ];

    var shuffledQuestions = shuffleArray(questionSet);
    return shuffledQuestions.slice(0, 6);  // 随机选择多少个题目
}

function populateQuestions() {
    var form = document.forms["quiz_form"];
    var quizQuestions = document.getElementById("quiz_questions");

    for (var i = 0; i < questionSet.length; i++) {
        var questionText = questionSet[i].question;
        var questionDiv = document.createElement("div");
        questionDiv.innerHTML = '<p class="question-text">' + questionText + '</p>';
        questionDiv.classList.add('question-container');  // 这是添加问题容器的类

        var options = questionSet[i].options;

        for (var j = 0; j < options.length; j++) {
            var label = document.createElement("label");
            var radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "Q" + (i + 1);
            radio.value = j + 1;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(options[j]));
            questionDiv.appendChild(label);
        }

        quizQuestions.appendChild(questionDiv);
    }
}
function getAnswers() {
    return questionSet.map(question => question.answer);
}

