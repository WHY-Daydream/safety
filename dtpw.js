
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
    if (score >= 5) {
        // 如果积分大于等于10，显示内容A
        document.getElementById("content").innerText = "您目前的段位:安全大专家";
    } else if (score >= 4) {
        // 如果积分大于等于5但小于10，显示内容B
        document.getElementById("content").innerText = "您目前的段位:安全领导者";

    }
    else if (score >= 3) {
        // 如果积分大于等于5但小于10，显示内容B
        document.getElementById("content").innerText = "您目前的段位:安全科代表";
    }
    else if (score >= 2) {
        // 如果积分大于等于5但小于10，显示内容B
        document.getElementById("content").innerText = "您目前的段位:安全初学者";
    }

    else {
        // 如果积分小于5，显示内容C
        document.getElementById("content").innerText = "您目前的段位:安全小趴菜";
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
            question: " 遇到地铁发生火灾，下列处理措施中错误的是(   )",
            options: [
                "A、按照车站工作人员的引导有序疏散",
                "B、跳入铁轨逃生",
                "C、用车厢的消防器材控制小火"
            ],
            answer: 2// 答案是B
        }, {
            question: "下列关于急救的优先次序中，说法错误的是(  )",
            options: [
                "A.先复后固 ",
                "B.先止后包",
                "C.先重后轻",
                "D.先运后救",
            ],
            answer: 4// 答案是D
        }, {
            question: "根据《国家突发公共事件总体应急预案》，各类突发公共事件按照其性质、严重程度、可控性和影响范围等因素，一般分为三级。",
            options: [
                "A. 正确",
                "B. 错误"
            ],
            answer: 2// 答案是B
        }, {
            question: "因紧急避险造成损害的，由（    ）承担民事责任。",
            options: [
                "A.国家",
                "B.受害人",
                "C.引起险情发生的人"
            ],
            answer: 3 // 答案是C
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

    ];

    var shuffledQuestions = shuffleArray(questionSet);
    return shuffledQuestions.slice(0, 5);  // 随机选择五个题目
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

