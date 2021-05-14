window.onload = function(){

    (function(){

        var length = 5*5*5;
        // console.log( length )
        var oUL = document.getElementById('list').children[0]
        // console.log( oUL )
        var aLi =oUL.children;
        // console.log( aLi )
        for( var i = 0;i<length;i++ ){

            // console.log( i )

            var oli = document.createElement("li")
            oli.innerHTML = i;

            /*
                定义成二维坐标：【x,y】
                oli[1].x = 50px;
                oli[1].y = 100px;
                oli[2].x = 50px;
                oli[2].y = 100px;
            */

            //0 1 2 3 4  
            oli.x = i % 5;//取余/取模
            // i % 25; 分清元素在第几排
            // /5 判断在第几行
            oli.y = Math.floor( i%25/5 );
            oli.z = Math.floor( i/25 )

            var tX = Math.random()*6000 - 2000 ;//[-2000,4000)
            var tY = Math.random()*6000 - 2000 ;
            var tZ = Math.random()*6000 - 2000 ;

            // oli.style.transform = `translate3D( ${x}px, ${y}px , ${z}px )`; 
            oli.style.transform = `translate3D( ${tX}px, ${tY}px , ${tZ}px )`
            oUL.appendChild( oli )

            // console.log( aLi )
            
        };

        // Grid()
        setTimeout( Sphere , 200 );

        //事件触发：
        (function(){

            //保存UL的初始值;
            var trZ = -1800,
                roX = 0,
                roY = 0;

            // console.log( 123 )
            document.onselectstart = function(){
                return false;
            }
            document.ondrag = function(){
                return false;
            }

            document.onmousedown = function(e){

                var sX = e.clientX;
                var sY = e.clientY;
                // console.log( sX , sY )
                //用户有可能只按下而不拖拽
                var rX = roX;
                var rY = roY;
                document.onmousemove = function(e){
                    
                    var chaX = e.clientX - sX;
                    var chaY = e.clientY - sY;
                    // console.log( chaX , chaY )

                    rX = roX - chaY*0.2
                    rY = roY + chaX*0.2

                    // transform: translateZ(-1500px) rotateX(0deg) rotateY(0deg);
                    oUL.style.transform = `translateZ(${trZ}px) rotateX(${rX}deg) rotateY(${rY}deg)`

                }
                document.onmouseup = function(e){
                    roX = rX;
                    roY = rY;
                    this.onmousemove = null

                }


            };

            (function( fn ){

                // console.log( fn )
                if( document.onmousewheel === undefined ){

                    //火福;  
                    document.addEventListener( "DOMMouseScroll" , function( e ){

                        var d = -e.detail/3;  // -1 , 1
                        console.log( this )
                        fn.call( this,d )  


                    },false)


                }else{

                    //非火福;
                    // console.log( 32 )

                    document.onmousewheel = function( e ){

                        //120
                        var d = e.wheelDelta/120;
                        fn.call( this , d )


                    }



                }



                //d为方向，方向有正负;  -d , +d  滚轮的上滚或下滚
                //原本我们封装的函数的是this指向是指向window，我现在改变this的指向，使this指向document;
            })( function (d){

                // console.log( this )
                trZ += d*100;  //1800  + 100 +100+ 100 + 100 - 100 - 100
                //改变值之后，同时来赋值给CSS的样式;
                oUL.style.transform = `translateZ(${trZ}px) rotateX(${roX}deg) rotateY(${roY}deg)`

            } );


        })();

        //点击事件;
        (function(){

            var aBtn = document.getElementById("btn").getElementsByTagName( "li" )
            // console.log( aBtn )
            var arr = [ Table , Sphere ,Helix , Grid ];

            for( var i = 0;i<aBtn.length;i++ ){

                (function( i ){

                    // aBtn[i].onclick = function(){
                    //     alert( i )
                    // }
                    aBtn[i].onclick = arr[i]

                })( i )

            }
            
        })();

        //三维矩形;
        // Grid()
        function Grid(){

            var disX = 300;
            var disY = 300;
            var disZ = 800;

            for( var i = 0 ;i<length;i++ ){
                // console.log( i )
                var oli = aLi[i];
                // console.log( oli[i] )
                // console.log(oli)
                // ( -2 , -1 , 0 , 1 ,2 ) => ( -600 , 300 , 0 , 300 , 600 )
                var x = (oli.x - 2 )*disX;  // (0 1 2 3 4) *300  //0 300 600 900 1200
                var y = (oli.y - 2 )*disY;
                var z = (oli.z - 2 )*disZ;
                // console.log( x , y )


                // // transform: translateZ(-1500px) rotateX(0deg) rotateY(0deg); 
                // //translate3D( 0px, 0px , 0px )
                oli.style.transform = `translate3D( ${x}px, ${y}px , ${z}px )`; 

            }


        }

        //元素周期表
        function Table(){
            //前18不规律，需要标记他们的位置;
            var arr = [
                {x:0,y:0},  //arr.x   arr.y
                {x:17,y:0},
                {x:0,y:1},
                {x:1,y:1},
                {x:12,y:1},
                {x:13,y:1},
                {x:14,y:1},
                {x:15,y:1},
                {x:16,y:1},
                {x:17,y:1},
                {x:0,y:2},
                {x:1,y:2},
                {x:12,y:2},
                {x:13,y:2},
                {x:14,y:2},
                {x:15,y:2},
                {x:16,y:2},
                {x:17,y:2},
            ];
            //其它规律，直接找规律;
            var disX = 180;      // 【每个元素】横坐标的距离
            var disY = 210;     // 【每个元素】纵坐标的距离
            var midX = 18/2;   // 横坐标的中间值;
            var n = length/18 //总共有排成多少行;
            var midY = n / 2 ; //纵坐标的中间值;

            for( var i = 0;i<length;i++ ){

                var x , y ; //标记每一个元素的x,y坐标;
                if( i<18 ){
                    //前18个元素; 0 - 17
                    x = arr[i].x;  // x = arr[5]= 13      
                    y = arr[i].y;                    
                }else{

                    x = i%18;  // 0 1 2 3 4 5 6 7 8 9  .... 17
                    y = Math.floor( i/18 ) + 2  //0

                }
                aLi[i].style.transform = `translate3D( ${(x-midX)*disX}px, ${(y-midY)*disY}px , 0px )`

            }


        }

        // Helix()
        //螺旋形
        function Helix(){

            var h = 4; //行数
            var num = length / h  ; //每一行的个数;
            var deg = 360 / num ;  // 平均度数值;
            var tY = 7; // 每一个元素的占位;
            var mid = length/2  //取中间值;

            for( var i = 0;i<length;i++ ){

                // `translateZ(${trZ}px) rotateX(${roX}deg) rotateY(${roY}deg)` 
                aLi[i].style.transform = `rotateY(${i*deg}deg) translateY(${(i-mid)*tY}px) translateZ(800px)`

            }


        }

        //球状体
        function Sphere(){

            //
            var arr = [1,3,7,9,11,14,21,16,12,10,9,7,4,1];  //所有数加起来等于125
            //numC处于哪一层   numG处于哪一个位置
            for( var i = 0;i<length;i++ ){   // for循环第一层取的就是0 - 124个li元素 
                var numC = 0,numG = 0,arrSum = 0;
                for( var j = 0;j<arr.length;j++ ){  //第二层for循环遍历的是数组的长度14 下标 0-13 
                    arrSum += arr[j]  // arr[0] + arr[1] + arr[6] ... + arr[13]

                    
                    if( arrSum > i ){  //arrSum = 66   i = 55
                        numC = j;   // 6
                        numG = arr[j] - ( arrSum - i );
                        break;
                    }
                }
                var ydeg = 360 / arr[numC];   //算出每一层旋转的度数；
                var xdeg = 180/(arr.length - 1);
                aLi[i].innerHTML = numC + "层，" + numG + "个" ;
                aLi[i].style.transform = `rotateY(${(numG-
                    1.3)*ydeg}deg) rotateX(${90-numC*xdeg}deg) translateZ(800px)`
            }


        }

    })()



}