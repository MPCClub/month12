class Bubble{
    constructor(selector){
        this.element = document.querySelector(selector);
        this.x = Math.floor(Math.random() * window.innerWidth);
        this.y = Math.floor(Math.random() * window.innerHeight);
        this.size = Math.floor(Math.random() * 10 + 1);
        this.count =200;
        this.arr;
        this.init();
        this.loop();
    }

    init(){
        if(window.innerWidth < 570)
            this.count = 30;
        for(let i = 1; i < this.count; i++){
            this.x = Math.floor(Math.random() * window.innerWidth);
            this.y = Math.floor(Math.random() * window.innerHeight);
            this.size = Math.floor(Math.random() * 10 + 1);
            this.create();
        }
        this.arr= document.querySelectorAll('.bubble');
    }

    loop(){

        for(let i = 0; i < this.arr.length; i++){
             this.y = +this.arr[i].style.top.substr(0,this.arr[i].style.top.length-2) + 1;
            if(this.y >= window.innerHeight -3-7){
                this.x = Math.floor(Math.random() * window.innerHeight) -10;
                this.y = 1;
                this.arr[i].style.left = this.x;
            }
            this.arr[i].style.top =  this.y + 'px';

        }

         setTimeout(()=>this.loop(),1);
    }

    update(){
       this.y++;
        if(this.y >= window.innerHeight){
            this.y = 0;
            this.x = Math.floor(Math.random * window.innerWidth);
        }

    }

    create(){
        this.bubble = document.createElement('i');
        this.bubble.style.position = "absolute"
        this.bubble.style.left = this.x + 'px';
        this.bubble.style.top = this.y + 'px';
        this.bubble.style.width = this.size +'px';
        this.bubble.style.height = this.size + 'px';
        this.bubble.classList.add("bubble");
        this.element.appendChild(this.bubble);

    }
}

var bubble = new Bubble(".bubbles");


