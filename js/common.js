//반응형 바로보기
const windowFeatures = "left=100,top=100,width=375,height=667";
            function iphoneSE() {
                $('.se').on('click', function(){
                    window.open("https://sozzii.github.io/antieannes-clone/", "", windowFeatures);
                })
            }

            iphoneSE();

// top click
$('.topBtn').on('click', function () {
    $('html').animate({ scrollTop: 0 }, 800);
});

// top 나타나기
function scrollTop() {
    let sectionTop;

    $(window).on('scroll', function () {
        sectionTop = $(window).scrollTop();

        if (680 < sectionTop) {
            $('.topBtn').addClass('active');
        } else {
            $('.topBtn').removeClass('active');
        }
    });
}

$(window).on('load', scrollTop);

// main plus,minor click
let backColor = document.getElementById('index.html');

$('.plus').on('click', function () {
    $('.clickRemove').fadeOut();
    $('.clickMenu').fadeIn();
    document.body.style.backgroundColor = '#FAF8F6';
});

$('.plusMenu').on('click', function () {
    $('.clickMenu').fadeOut();
    $('.clickRemove').fadeIn();
    document.body.style.backgroundColor = '#FBF4E4';
});

// 카톡 답장 
function katalk() {
    for (let i = 0; i < 8; i++) {
        setTimeout(function () {
            $('.katalk li').eq(i).addClass('active');
        }, 1000 * i)
    }
}

$(window).on('scroll', function () {
    let katalkPlay = $(window).scrollTop();
    if (680 < katalkPlay) {
        katalk();
    } else {
        $('.katalk').removeClass('active');
    }
})

//mouseover
/*
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let c = {x:0,y:0,dx:0,dy:0,a:0,r:6};
let state = true;
canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;

function cursorFn(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath();
    ctx.fillStyle = "#2A31A0";
    ctx.globalAlpha = 0.5;
    ctx.arc(c.x,c.y,c.r,0,Math.PI*2,false);
    ctx.fill();

    requestAnimationFrame(cursorFn);
    
}
cursorFn();

window.addEventListener('mousemove',function(e){
    c.x = e.clientX + 10 ;
    c.y = e.clientY;
    state=true;            
});

window.addEventListener('mouseover',function(e){
    if(   e.target.tagName  == 'A'  ){
        c.r = 30;
    }else{
        c.r = 6;
    }
});
*/









//scroll > 각 섹션 title 나타나기
function title() {
    let y;
    let h = $(window).height();
    let titleScroll;

    $(window).on('scroll', function () {
        titleScroll = $(window).scrollTop();

        $('.scroll').each(function (i) {
            y = $('.scroll').eq(i).offset().top;

            if (y - h < titleScroll) {
                $('.scroll').eq(i).addClass('active');
            }
        })
    })
}

$(window).on('load', title);

    // works 더보기 버튼 (5개 이상부터 펼쳐짐)


