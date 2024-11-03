
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
        document.getElementById("content").innerText = "您已经遨游了全中国";
    } else if (score >= 4) {
        // 如果积分大于等于5但小于10，显示内容B
        document.getElementById("content").innerText = "您已经遨游了大半个中国";

    }
    else if (score >= 3) {
        // 如果积分大于等于5但小于10，显示内容B
        document.getElementById("content").innerText = "你已经遨游了中国西部";
    }
    else if (score >= 2) {
        // 如果积分大于等于5但小于10，显示内容B
        document.getElementById("content").innerText = "你已经遨游了一个省份";
    }
    else if (score >= 1) {
        // 如果积分大于等于5但小于10，显示内容B
        document.getElementById("content").innerText = "你已经遨游了一个城市";
    }
    else {
        // 如果积分小于5，显示内容C
        document.getElementById("content").innerText = "你已经在梦中遨游了一圈";
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
            question: " 河南地处中国的中部,地理位置使其处于季风气候的影响之下,季风带来了大量水汽和降雨。当你身处洪水中时，哪些物品可以用来救生？(   )",
            options: [
                "A、盖紧盖的空油桶、水桶",
                "B、树木、桌椅板凳、箱柜等",
                "C、空的带盖的饮料瓶捆扎在一起",
                "D、以上都可以"

            ],
            answer: 4// 答案是D
        }, {
            question: "当你在甘肃旅游时，若遇到下雨天气经常会发生滑坡现象，特殊的黄土层、复杂的地形地貌和大规模的降雨都是引发滑坡的诱因。那么如何避免遭遇滑坡呢？(  )",
            options: [
                "A、不在大雨天走进易滑坡地段 ",
                "B、远离陡峭、破碎、疏松的斜坡",
                "C、必须通过滑坡易发区时，选择干燥的季节与气象条件",
                "D、以上都可以",
            ],
            answer: 4// 答案是D
        }, {
            question: "云南有美丽的大理，丽江古城，玉龙雪山等等，但是独特的植被、山形地势、气候条件等因素让它也成为了发生火灾最多的地区，火灾中引起人员大量伤亡的主要原因是(  )",
            options: [
                "A、相互挤压致死",
                "B、吸入烟气窒息死亡",
                "C、被火烧死"
            ],
            answer: 2// 答案是B
        }, {
            question: "新疆是我国肉毒梭状芽孢杆菌食物中毒较多的地区,引起中毒的食品有30多种,常见的有臭豆腐、豆酱、豆豉和谷类食品。那么你知道肉毒梭状芽孢杆菌引起食物中毒是由什么因素引起的(  )",
            options: [
                "A、肉毒梭状芽孢杆菌本身 ",
                "B、其产生的外毒素即肉毒毒素",
                "C、肉毒梭状芽孢杆菌生长快",
                "D、食品腐朽"
            ],
            answer: 2 // 答案是B
        }, {
            question: "作为我国的沿海省市,广东省的7,8月份时常会出现台风。下列有关台风的防御措施叙述不正确的是()",
            options: [
                "A. 加固或者拆除易被风吹动的搭建物 ",
                "B. 人员切勿随意外出，待在防风安全的地方",
                "C. 禁止室内外大型集会和高空等户外危险作业 ",
                "D. 尽量留在家中最安全的地方，打开门窗通风"
            ],
            answer: 4 // 答案是D
        },
        {
            question: "湖南省经常性发生的主要气象气候灾害是(   )",
            options: [
                "A.山体滑坡和泥石流",
                "B.沙尘暴、雪暴",
                "C.台风、冰灾",
                "D.水旱灾害、寒潮"
            ],
            answer: 4 // 答案是D
        },
        {
            question: "郑州是河南省省会城市，也是我国重要的交通枢纽。由于地理位置的原因，郑州市经常受到暴雨袭击。当发布时暴雨黄色预警，以下应对措施不当的是(   )。",
            options: [
                "A.及时检查城市、农田、鱼塘排水系统，采取必要的排涝措施",
                "B.切断室外危险电源，停止户外作业 ",
                "C. 前往沿海观浪",
                "D. 举行户外庆祝活动"
            ],
            answer: 4// 答案是D
        },

        {
            question: "青岛是山东省的一座沿海城市，经常受到台风影响。当台风预警发布时，以下应对措施正确的是(   )",
            options: [
                "A. 在户外拍摄风景照片",
                "B. 紧闭门窗，加固屋顶，准备应急物资",
                "C.政府及相关部门按照职责做好防暴雨工作",
                "D.学校停课，禁止集会，停业休息"
            ],
            answer: 2// 答案是B
        },
        {
            question: "深圳是中国的特大城市，位于广东省，经常受到台风袭击。当台风预警发布时，以下应对措施不当的是(  )",
            options: [
                "A. 做好窗户的防护措施，避免风雨侵入",
                "B. 前往沿海观浪",
                "C. 保持紧急联系方式，随时准备向救援部门求助",
                "D. 躲避户外，不要到露天区域"
            ],
            answer: 2// 答案是B
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

