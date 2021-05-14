

// (function(){
//     let box = document.getElementById('box');
//     let timer = null;
//     //初始页面生成
//     init();
//     function init(){
//         let optionAry = ['简单模式','正常模式','一般模式','困难模式'];
//         let h1 = document.createElement('h1');
//         h1.innerHTML = '波式飞机大战';
//         box.appendChild(h1);

//         for(let i = 0;i < optionAry.length ; i++){
//             let div = document.createElement('div');
//             div.innerHTML = optionAry[i];
//             div.className = 'init';
//             div.onclick = function (e){
//                 //调用生成飞机的函数(传参)
//                 start(i,e);
//             }
//             box.appendChild(div);
//         }
//     }

//     //生成飞机
//     function start(index,e){
//         box.innerHTML = '';
//         //敌军飞机
//         enemy(index);
//         //我军飞机
//         airPlan(index,e);
//         //index 代表模式
//     }
//     //敌军
//     function enemy(index){
//         //定时器控制生成敌军飞机，同时实现，但生成飞机的快慢不一样

//         //生成飞机的时间，依次对应一种模式，时间越长生成的飞机速度就慢
//         let speed = [300,150,75,40]; 
//         timer = setInterval(()=>{
//             //生成敌军飞机
//             let enemyImg = document.createElement('img');
//             enemyImg.src = '../img/enemy_small.png';
//             //为图片添加宽高，防止没加载时布局变形
//             enemyImg.width = 58;
//             enemyImg.height = 30;
//             enemyImg.style.top = 0;
//             //飞机左边距离 left值范围在 [-width/2,(boxWidth+1)+width/2]
//             enemyImg.style.left = Math.floor(Math.random() * (box.clientWidth +1 ) - enemyImg.width/2) + "px";

//             //飞机出场时的速度
//             enemyImg.speed = Math.floor(Math.random()*5 + 3);
//             box.appendChild(enemyImg);

//             //飞机动起来
//             run();
//             function run() {
//                 enemyImg.style.top = enemyImg.offsetTop + enemyImg.speed + 'px';
//                 if(enemyImg.offsetTop >= box.clientHeight){
//                     box.removeChild(enemyImg);
//                 }else{
//                     requestAnimationFrame(run);
//                 }
//             }
//         },speed[index])
//     }
//     //我军
//     function airPlan(index,e){
//         let myAirPlan = document.createElement('img');
//         myAirPlan.src = '../img/plane_0.png';
//         myAirPlan.width = 60;
//         myAirPlan.height = 30;
//         myAirPlan.style.top = e.clientY - box.offsetTop - myAirPlan.height/2 + 'px';
//         myAirPlan.style.left = e.clientX - box.offsetLeft - myAirPlan.width/2 + 'px';

//         box.appendChild(myAirPlan);
//     }
// })()



    (function(){
        //获取所有使用的变量信息
        let wrap = document.getElementById('wrap');

        //wrap盒子的宽高
        let wrapWidth = wrap.clientWidth; 
        let wrapHeight = wrap.clientHeight; 
        //动态获取敌军飞机
        let enemyAirPlanes = document.getElementsByClassName('enemy');
        //我方
        let plan = document.getElementsByClassName('plane');
        //获取奖品
        let prize = document.getElementsByClassName('prize');
        // 敌军速度
        let speedEnemy = [400,350,300,200];
        //存储默认敌军信息
        let defaultEnemy = {
            // 大飞机
            big:{
                width:260,
                height:200,
                //血量5格
                strong:5
            },
            // 小飞机
            small:{
                width:108,
                height:80,
                strong:1
            }
        };
        //存储我军飞机
        let defalutMyPlan = {
            big : {
                width:97,
                height:97,
                // 图片路径
                fileName:'plane_1.png'   
            },
            // 小飞机
            small : {
                width:122,
                height:95,
                fileName:'plane_0.png'
            } 
        };

        //初始化页面
        function init () {
            let pattern = ['简单模式','一般模式','困难模式','地狱模式'];
            //创建标签
            let h1 = document.createElement('h1');
            let div = document.createElement('div');
            //添加内容
            h1.innerHTML = '波式飞机大战';
            div.innerHTML = '李波-JS';
            //添加类名
            div.className = 'footer';

            //追加子节点
            wrap.appendChild(h1);
            wrap.appendChild(div);

            //添加模式按钮
            for( let i = 0 ; i < pattern.length ; i ++ ) {

                let div = document.createElement('div');
                div.innerHTML = pattern[i];
                div.className = 'option';
                
                //点击选择模式
                div.onclick = function (e) {
                    //开始游戏
                    startGame(i,e);
                };
                wrap.appendChild(div);
            }

        }
        init();

        //开始游戏函数
        function startGame (index,e) {
            //背景图片
            wrap.className = "bg" + (index + 1);
            //选择模式后清除界面信息
            wrap.innerHTML = '';
            //敌军
            //生成的敌军大小飞机概率不同，采用1:3
            let scale = [ 'small', 'big', 'small', 'small']; 
            // enemy(index);
            // 添加一个wrap盒子的自定义属性，用来处理定时器
            wrap.enemyTimer = setInterval ( ()=> {
                //随机取得scale中数据
                enemy(index,scale[randomEnemy(0,3)]);

            },speedEnemy[index]);
            //我军
            myPlan(index,e,'small'); //我军默认采用小飞机
            
            //开始奖品生成  
            //一段时间循环生成奖品
            wrap.prizeTime =  setInterval (() =>{
                createPrize (['威','增'][randomEnemy(0,1)]); //随机生成奖励
            },5000);

            //统计分数
            showScore();

            //添加背景音乐
            //创建audio标签
            let audio = document.createElement('audio');
            audio.src = './img/game_music.mp3';
            audio.autoplay = true; //自动播放
            audio.loop = true ; //循环播放
            audio.volume = 1; //限制音量大小 0-1
            //添加
            wrap.appendChild(audio);
        }   

        //创建随机数
        function randomEnemy( a, b){
            //要向下取整[a,b],则b+1
            return Math.floor(Math.random() * (b + 1 - a) + a);
        }

        //创建敌军函数
        function enemy (index,specs) { //specs接收scale随机大小飞机
            //创建敌机节点
            let enemyAirPlane = document.createElement('div');
            //创建血条盒子
            let bloodBox = document.createElement('div');
            //创建血条p
            let bloodBar = document.createElement('p');
            //敌军图片
            let enemyImg = document.createElement('img');

            //添加类名
            enemyAirPlane.className = 'enemy ' + specs;
            bloodBox.className = 'blood';

            //随机大小飞机
            enemyImg.src = `./img/enemy_${specs}.png` ; 
            
            //飞机图片的宽度取决于随机的大or小飞机，调用默认飞机模板宽高
            enemyImg.width = defaultEnemy[specs].width; 
            enemyImg.height = defaultEnemy[specs].height;

            //预存敌军类型，以便跟子弹威力相计算
            enemyAirPlane.specs = specs;

            //敌军出现的位置
            enemyAirPlane.style.top = 0; //刚开始全在顶部
            //血量分类(大还是小)自定义
            enemyAirPlane.strong = defaultEnemy[specs].strong;
            //敌军下落速度(自定义属性) 2~4
            enemyAirPlane.speed = randomEnemy(2,4); //传参随机速度


            //父级追加子元素
            wrap.appendChild(enemyAirPlane).appendChild(bloodBox).appendChild(bloodBar);
            enemyAirPlane.appendChild(enemyImg);

            //敌军飞机随机出现的位置
            enemyAirPlane.style.left = randomEnemy(0,wrapWidth-enemyAirPlane.clientWidth) + 'px';
            
            // let audio = document.createElement('audio');
            // audio.src = '../img/enemy2_out.mp3' ;
            // audio.autoplay = true; 
            // audio.loop = false;
            // audio.volume = 1;
            // wrap.appendChild(audio);
            //敌军下落
            flyDown();
            function flyDown() {
                //获取飞机下降的高度
                enemyAirPlane.style.top = enemyAirPlane.offsetTop + enemyAirPlane.speed + 'px';
                //判断高度
                if(enemyAirPlane.offsetTop >= wrapHeight - enemyAirPlane.offsetHeight) {
                    //到达底部删除自己
                    wrap.removeChild(enemyAirPlane);
                }
                //敌军没有到达底部，如果与我方发生碰撞则爆炸
                else {
                    if(plan[0] && isTouch(plan[0],enemyAirPlane)){
                        boom(enemyAirPlane);
                        //我方爆炸 游戏结束 画面静止
                        gameOver();
                    }else {
                        plan[0] && requestAnimationFrame(flyDown);
                    }
                }
                
            }
        };

        //创建我军飞机
        function myPlan (index,e,specs) {
            let maxTop,maxLeft,minTop,minLeft;
            let myAirPlan = document.createElement('div');
            let myPlanImg = document.createElement('img');
            myPlanImg.src = `./img/${defalutMyPlan[specs].fileName}`;
            myPlanImg.width = defalutMyPlan[specs].width;
            myPlanImg.height = defalutMyPlan[specs].height;
            
            //添加类名
            myAirPlan.className = 'plane ' + specs;
            //我军子弹威力、数量
            myAirPlan.strong = 0;  //默认值
            myAirPlan.count = 0; //子弹数量
            myAirPlan.specs = specs;

            //追加节点
            wrap.appendChild(myAirPlan).appendChild(myPlanImg);
            
            //我军图片位置信息
            //图片加载完成开始执行
            myPlanImg.onload = function () {
                //初始位置
                myAirPlan.style.top = e.clientY - wrap.offsetTop - myAirPlan.clientHeight/2 + 'px';
                myAirPlan.style.left = e.clientX - wrap.offsetLeft - myAirPlan.clientWidth/2 + 'px';
                //规定我方运动范围
                maxTop = wrap.clientHeight - myAirPlan.offsetHeight;
                minLeft = - myAirPlan.offsetWidth/2; //自身一半宽度出框
                maxLeft = wrap.clientWidth + minLeft;

            }
            //拖拽飞机
            document.onmousemove  = function (e) {
                let top = e.clientY - wrap.offsetTop - myAirPlan.clientHeight/2;
                let left = e.clientX - wrap.offsetLeft - myAirPlan.clientWidth/2;
                //限制移动范围
                top = Math.max(0,top); //通过最大值限定最小值
                top = Math.min(maxTop,top) //通过最小值限定最大值
                left = Math.max(minLeft,left);
                left = Math.min(maxLeft,left);

                //移动
                myAirPlan.style.top = top + 'px';
                myAirPlan.style.left = left + 'px';

                //每次移动检测是否跟prize发生碰撞，碰就吃掉
                for ( let i = 0 ; i < prize.length ; i ++ ){
                    if (isTouch(myAirPlan,prize[i])){
                        //碰撞吃掉
                        if ( prize[i].attr === '威' ){
                            myAirPlan.strong ++ ;
                        }else if( prize[i].attr === '增') {
                            myAirPlan.count ++ ;
                            //吃多了我军撑死
                            if ( myAirPlan.count > 2 ) {
                                alert('你被撑死了！');
                                gameOver();
                            }
                        }
                        //移除奖品
                        clearTimeout(prize[i].time);
                        wrap.removeChild(prize[i]);
                    }
                }
            };


            
            //不同模式生成子弹的时间
            let speed = [300,250,200,150][index];
            //不同模式子弹运行速度
            let bulletSpeed = [4,5,6,7][index];
            //添加子弹音乐
            let audio = document.createElement('audio');
            
            audio.autoplay = true;
            audio.loop = true;
            wrap.appendChild(audio);
            //biu函数(飞机发射子弹)
            myAirPlan.timer = setInterval( function () {
                //同时出现几个子弹，调动一次一个  0  1  2 
                for ( let i = 0 ; i <= myAirPlan.count ; i++){
                    biu({
                        strong:myAirPlan.strong,
                        count :myAirPlan.count,
                        i : i   //用来确定子弹条数和left位置
                    });
                }
                audio.src ='./img/bullet.mp3';
                
            },speed)

            function biu (obj) {
                //创建我军子弹
                let bullet = document.createElement('img');
                //子弹图片
                bullet.src = './img/fire.png'; 
                //默认
                bullet.className = 'biu strong1' ; 
                //子弹威力(条数)取决于获得的奖品
                bullet.strong = 1 + myAirPlan.strong;
                bullet.count = 1 + myAirPlan.count;
                //追加子弹元素
                wrap.appendChild(bullet);
                //子弹位置
                bullet.style.top = myAirPlan.offsetTop + 'px' ;
               

                //判断子弹条数
                if(obj.count === 0){
                    bullet.style.left = myAirPlan.offsetLeft + myAirPlan.offsetWidth/2 - bullet.offsetWidth/2 + 'px';
                }else if (obj.count === 1){
                    //子弹两条   左右
                    bullet.style.left = [myAirPlan.offsetLeft,myAirPlan.offsetLeft + myAirPlan.offsetWidth - bullet.offsetWidth][obj.i] + 'px';
                }else if( obj.count === 2) {
                    //子弹三条  左中右
                    bullet.style.left = [myAirPlan.offsetLeft,myAirPlan.offsetLeft + myAirPlan.offsetWidth/2 - bullet.offsetWidth/2,myAirPlan.offsetLeft + myAirPlan.offsetWidth - bullet.offsetWidth][obj.i] + 'px';
                }


                //子弹移动
                bulletMove();
                function bulletMove () {
                    //子弹往上移动，top值减小
                    bullet.style.top = bullet.offsetTop - bulletSpeed + 'px';
                    //判断子弹是否出框
                    if ( bullet.offsetTop <= 0 ){
                        wrap.removeChild(bullet);
                    }else {
                        //持续调用
                        bullet.timer = requestAnimationFrame(bulletMove);
                        //检测子弹和飞机碰撞情况
                        //检测当前生成的所有飞机
                        for (let i = 0 ; i < enemyAirPlanes.length ; i ++ ){
                            //判断  敌军存在     并且  子弹和敌军相碰                                                                                                                                                                    
                            if(enemyAirPlanes[i] && isTouch(bullet,enemyAirPlanes[i]) ){
                                //碰撞之后子弹消失/敌军血量减少
                                cancelAnimationFrame(bullet.timer);
                                //删除子弹
                                wrap.removeChild(bullet);
                                
                                enemyAirPlanes[i].strong -= bullet.strong;
                                //动态修改血量，敌人血量减少
                                enemyAirPlanes[i].children[0].children[0].style.width = enemyAirPlanes[i].strong/defaultEnemy[enemyAirPlanes[i].specs].strong * enemyAirPlanes[i].children[0].clientWidth + 'px' ;
                                //血量减完，敌军爆炸消失
                                if ( enemyAirPlanes[i].strong <= 0){
                                    //爆炸后统计计分  small = 1,big = 3
                                    if (enemyAirPlanes[i].specs === 'small') {
                                        wrap.score ++;
                                    }else if (enemyAirPlanes[i].specs === 'big') {
                                        wrap.score += 5;
                                    }
                                    //爆炸
                                    boom(enemyAirPlanes[i]);
                                    
                                    document.getElementsByClassName('score')[0].innerHTML = wrap.score;
                                }
                            }
                        }
                    }
                }
            }
        }
        // 碰撞函数  
        function isTouch (obj1,obj2) { //子弹和敌军
            let top1 = obj1.offsetTop,
                left1 = obj1.offsetLeft,
                right1 = obj1.offsetWidth + left1,
                bottom1 = obj1.offsetHeight + top1,

                top2 = obj2.offsetTop,
                left2 = obj2.offsetLeft,
                right2 = obj2.offsetWidth + left2,
                bottom2 = obj2.offsetHeight + top2;

            //取反false不碰撞
            return !( top1 > bottom2 || left1 > right2 || bottom1 < top2 || right1 < left2 );
        }

        //爆炸函数
        function boom (obj) {
            //爆炸图片替换爆炸飞机
            //参数obj => enemyAirPlans[i]
            //创建爆炸图片
            let boomImg = document.createElement('img');
            //大小敌军对应不同爆炸图片
            boomImg.src = './img/boom_' + obj.specs + '.png' ;
            //设置爆炸图片的宽高和敌军图片宽高一致
            boomImg.width = obj.clientWidth;
            boomImg.height = obj.clientHeight;
            //添加类名
            boomImg.className = 'boom';
            //爆炸图片位置和爆炸敌军位置一致
            boomImg.style.top = obj.offsetTop + 'px';
            boomImg.style.left = obj.offsetLeft + 'px';

            //渲染之前先移除敌军飞机，再替换爆炸图片
            wrap.removeChild(obj);
            wrap.appendChild(boomImg);

            //爆炸图片消失
            boomImg.addEventListener('webkitAnimationEnd',function () {
                wrap.removeChild(this);
            });

            //爆炸声
            let audio = document.createElement('audio');
            audio.src = obj.className === 'enemy' ? './img/enemy3_down.mp3' : './img/game_over.mp3';
            audio.autoplay = true; 
            audio.loop = false;
            audio.volume = 1;

            //监听爆炸音乐结束后删除音乐标签
            audio.addEventListener('ended' , function () {
                wrap.removeChild(this);
            })
            wrap.appendChild(audio);

        };

        //gameOver游戏结束函数
        function gameOver() {
            //注销我军移动事件
            document.onmousemove = null ; 
            //关闭敌军生成函数
            clearInterval(wrap.enemyTimer);

            //关闭生成子弹定时器
            clearInterval(plan[0].timer);
            //清除生成奖品函数
            clearInterval(wrap.prizeTime);

            //添加我军爆炸效果并删除我军飞机
            boom(plan[0]);
            //显示统计计分函数
            setTimeout(score,1000);
        }

        //创建关卡奖励  波=子弹威力strong 钱= 子弹条数
        function createPrize (prize) {
            let div = document.createElement('div');
            div.innerHTML = prize;
            div.className = 'prize';

            //自定义属性标记吃的奖品
            div.attr = prize;
            
            div.style.top = randomEnemy(0,wrapHeight-50) + "px";
            div.style.left = randomEnemy(0,wrapWidth-50) + 'px';
            wrap.appendChild(div);

            //奖品存在时间
            div.time = setTimeout(() => {
                wrap.removeChild(div);
            },5000)
        }

        //计分功能函数
        function score() {
            wrap.innerHTML = '';
            let div = document.createElement('div'); //杀敌计分
            let div2 = document.createElement('div'); //死亡再来一次
            div.className = 'record';
            div.innerHTML = "最终得分：<p>" + wrap.score + "</p>"; //在敌军爆炸后载入
            div2.className = 'btn' ;
            div2.innerHTML = '再来一次';
            div2.onclick = function () {
                wrap.innerHTML = '';
                init();
            }
            wrap.appendChild(div);
            wrap.appendChild(div2);
        }

        //展示计分
        function showScore( ){
            let span = document.createElement('span');
            span.innerHTML = wrap.score = 0 ;
            span.className = 'score' ;
            wrap.appendChild(span);

        }
    })()






