
    //原型继承
    function extend (element){
        function Li(){};
        Li.prototype = element.prototype;
        return new Li();
    };

    function Tab(tabDOM,contentDOM){
        this.tabDOM = tabDOM;
        this.contentDOM = contentDOM;
        this.len = tabDOM.length;
        this.index = 0; //当前显示的图片
        //执行tabClick函数
        this.tabClick();

    };
    //原型绑定tabClick公有点击事件
    Tab.prototype.tabClick = function(){
        //当前this赋值给变量This，是由变量This后续操作
        let This = this; //this指向tabClick
        This.tabDOM.forEach((ele,index) => {
            ele.onclick = function() {
                // 清除所有active类
                // for(let i = 0 ; i < This.len ; i++){
                //     //当前显示页面
                //     let option = i === index?"add":"remove";
                //     This.tabDOM[i].classList[option]("active");
                //     This.contentDOM[i].classList[option]("active");
                // }

                // 清除所有active类
                // This.tabDOM[This.index].classList.remove("active");
                // This.contentDOM[This.index].classList.remove("active");
                
                // This.index = index;
                // //给当前index页面添加active类
                // This.tabDOM[This.index].classList.add("active");
                // This.contentDOM[This.index].classList.add("active");
                
                This.changes(index);
            }
        });
    }
    Tab.prototype.changes = function(index){
        this.tabDOM[this.index].classList.remove("active");
        this.contentDOM[this.index].classList.remove("active");
        
        this.index = index;
        //给当前index页面添加active类
        this.tabDOM[this.index].classList.add("active");
        this.contentDOM[this.index].classList.add("active");
    }

    //继承出新的左右按钮
    function BtnArrow(tabDOM,contentDOM,btnDOM){
        Tab.call(this,tabDOM,contentDOM);
        this.btnDOM = btnDOM;
        this.btnClick();
    };
    BtnArrow.prototype = extend(Tab);
    BtnArrow.prototype.btnClick = function(){
        let This = this;
        this.btnDOM.forEach((ele,i) =>{
            ele.onclick = function(){
                let index;
                if(i){
                    index = This.index+1;
                    if(index >= This.len)index = 0;
                }else{
                    index = This.index - 1;
                    if(index < 0) index = This.len - 1;
                }
                This.changes(index);
            }
        })
    };

    //自动轮播,添加定时器  继承BtnArrow

    function BtnArrowAuto(tabDOM,contentDOM,btnDOM,btnArrowAuto){
        BtnArrow.call(this,tabDOM,contentDOM,btnDOM);
        this.btnArrowAuto = btnArrowAuto;
        this.auto();
    };
    BtnArrowAuto.prototype = extend(BtnArrow);
    BtnArrowAuto.prototype.auto = function(){
        let This = this;
        let timer;
        function auto() {
            timer = setInterval(()=>{
                let index = This.index + 1;
                if(index >= This.len)index = 0;
                This.changes(index);
            },2000)
        };
        auto();

        //鼠标移入清除定时器
        This.btnArrowAuto.onmouseenter = function(){
            clearInterval(timer);
        };

        //鼠标离开启动定时器
        This.btnArrowAuto.onmouseleave = function(){
            auto();
        }
    }

    new Tab(
        //传参tabDOM/contentDOM
        document.querySelectorAll("#tab .tab li"),
        document.querySelectorAll("#tab .content li")

    );
    new Tab(
        //传参tabDOM/contentDOM
        document.querySelectorAll("#tab2 .tab2 li"),
        document.querySelectorAll("#tab2 .img li")

    );
    new BtnArrow(
        //传参tabDOM/contentDOM
        document.querySelectorAll("#tab3 .tab2 li"),
        document.querySelectorAll("#tab3 .img li"),
        document.querySelectorAll("#tab3 .arrow li")
    );
    new BtnArrowAuto(
        //传参tabDOM/contentDOM
        document.querySelectorAll("#tab4 .tab2 li"),
        document.querySelectorAll("#tab4 .img li"),
        document.querySelectorAll("#tab4 .arrow li"),
        document.querySelector("#tab4")
    ) 