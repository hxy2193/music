$(function () {
    var audio=$("audio").get(0);
    var play=$(".play");
    var line=$(".tiao");
    var  cir=$(".cir");
    var  ed=$(".ed");
    var  next=$(".next");
    var  prev=$(".prev");
    var  singlist=$(".sing-list");
    var name=$(".name");
    var singer=$(".singer");
    cmt=$(".cmt");
    var tl=$(".top-list");
    var toplist=$(".top-list").get(0);
    var volume=$(".cm");
    var cir2=$(".cir2");
    var jiantou=$(".jiantou");
    var down=$(".downs");
    var  middle=$(".middle")
    var dn=$(".downs").get(0)
    var x=$(".x")
    var  ser=$(".ser")
    var  cmtiao=$(".cmtiao")
    var  img=$(".img")
    var  jinyin=$(".yinliang")
    var  sousuokuang=$(".sousuokuang")
    var  lyric=$(".lyric")
    var  lyrics=$(".lyrics")
    var  x=$(".x")
    var  tu=$(".tu")
    index=1;
    img.on("click",function () {
        lyric.css("display","block");
       
        $('.top').css("display","none")
        $('.middle').css("display","none")
        $('.bottom').css({display:'block',background:'black',opacity:'0.8'})
        animate(lyric.get(0),{top:0},0)
    })
    x.on("click",function () {
        lyric.css("display","none");
        $('.top').css("display","block")
        $('.middle').css("display","block")
        animate(lyric.get(0),{top:1000},0)
    })
    play.on("click",function ing() {

        if (audio.paused){
            play.removeClass("play").addClass("playing");

            audio.play()
        } else{
            play.removeClass("playing").addClass("play");
            audio.pause()
        }

    })

    line.on("click",false);
    line.on("click",function (e) {

        cir.css({left:e.offsetX-3})
        ed.css({width:e.offsetX-3})
        audio.currentTime=audio.duration*(e.offsetX/line.eq(0).width());
        console.log(audio.currentTime)
    })
    audio.oncanplay=function () {
        var now=Math.floor(audio.currentTime)
        var all=Math.floor(audio.duration)

        var am=Math.floor(all/60);
        var as=(all)%60;
        var nm=Math.floor(now/60);
        var ns=(now)%60;
        $(".all").text("0"+am+":"+as);
        $(".now").text("0"+nm+":"+ns+"/");
    }
    audio.ontimeupdate = function () {
        var now=Math.floor(audio.currentTime)
        var all=Math.floor(audio.duration)

        var am=Math.floor(all/60);
        var as=(all)%60;
        var nm=Math.floor(now/60);
        var ns=(now)%60;
        if (ns<10){ $(".now").text("0"+nm+":"+"0"+ns+"/");}
        else { $(".now").text("0"+nm+":"+ns+"/");}


        var  t=(line.eq(0).offsetWidth*(audio.currentTime/audio.duration)-8)

        cir.css({left:line.get(0).offsetWidth*(audio.currentTime/audio.duration)-9})
        ed.css({width:line.get(0).offsetWidth*(audio.currentTime/audio.duration)-8})
        name.text(songlist[index-1].name+"-");
        singer.text(songlist[index-1].singer);
        // sname.text(songlist[index].name);
        ser.text(songlist[index].singer);

        $(lyricx).each(function (i,v) {

            if(index==1){
            if( lyricx[i].time==$(".now").text().slice(0,-1))
            {
                // console.log(i)
                for (var b=0;b<lyricx.length;b++){
                lyrics.html("")
                for(a=i;a<lyricx.length;a++){
                $('<li>').text(lyricx[a].ci).appendTo(lyrics)}
                    $('.lyrics li').eq(0).css({"font-size":"20px",color:"yellow","text-shadow":" 0 0 .1em, 0 0 .3em"})
                }
            }
            // {console.log(v.ci)}
            }else{
                lyrics.html("")
                $('<li>').text("未搜索到歌词").appendTo(lyrics)
            }
        })
    }
    audio.onended=function () {
        index++;
        if (index==4){
            index=0;
        }
        audio.src=(songlist[index-1].src);
        audio.play();
        li.eq(index).addClass("act")
        li.filter(".act").removeClass("act")
        li.eq(index).addClass("act")
        return index;
    }
    var songlist=[

        {name:'演员',src:'./sing/演员.mp3',singer:'薛之谦',time:'04:21'},
        {name:'一步之遥',src:'./sing/一步之遥.mp3',singer:'sdmesfe',time:'02:14'},
        {name:'出埃及记',src:'./sing/出埃及记.mp3',singer:'马克西姆',time:'03:10'},
        {name:'就是我',src:'./sing/就是我.mp3',singer:'林俊杰',time:'03:14'},
        {name:'我是我的情人',src:'./sing/我是我的情人.mp3',singer:'阿悄',time:'04:13'},


        {name:'走着走着就散了',src:'./sing/走着走着就散了.mp3',singer:'庄心妍',time:'04:28'},

    ]
    var lyricx=[
        { time:'00:00',ci:'演员 - 薛之谦'},
        {time:'00:01',ci:'词:薛之谦'},
        {time:'00:02',ci:'曲:薛之谦'},
        {time:'00:04',ci:'  '},
        {time:'00:21',ci:'简单点说话的方式简单点'},
        {time:'00:28',ci:''},
        {time:'00:30',ci:'递进的情绪请省略'},
        {time:'00:33',ci:'你又不是个演员'},
        {time:'00:36',ci:'别设计那些情节'},
        {time:'00:39',ci:''},
        {time:'00:41',ci:'没意见我只想看看你怎么圆'},
        {time:'00:50',ci:''},
        {time:'00:51',ci:'你难过的太表面 像没天赋的演员'},
        {time:'00:57',ci:'观众一眼能看见'},
        {time:'01:00',ci:''},

        {time:'01:02',ci:'该配合你演出的我演视而不见'},
        {time:'01:07',ci:'在逼一个最爱你的人即兴表演'},
        {time:'01:12',ci:'什么时候我们开始收起了底线'},
        {time:'01:18',ci:'顺应时代的改变看那些拙劣的表演'},
        {time:'01:23',ci:'可你曾经那么爱我干嘛演出细节'},
        {time:'01:28',ci:'我该变成什么样子才能延缓厌倦'},
        {time:'01:33',ci:'原来当爱放下防备后的这些那些'},
        {time:'01:33',ci:''},
        {time:'01:39',ci:'才是考验'},
        {time:'01:41',ci:''},
        {time:'01:44',ci:'没意见你想怎样我都随便'},
        {time:'01:52',ci:''},
        {time:'01:54',ci:'你演技也有限'},
        {time:'01:57',ci:'又不用说感言'},
        {time:'02:00',ci:'分开就平淡些'},

        {time:'02:02',ci:''},
        {time:'02:05',ci:'该配合你演出的我演视而不见'},
        {time:'02:10',ci:'别逼一个最爱你的人即兴表演'},
        {time:'02:15',ci:'什么时候我们开始没有了底线'},
        {time:'02:21',ci:'顺着别人的谎言被动就不显得可怜'},
        {time:'02:26',ci:'可你曾经那么爱我干嘛演出细节'},
        {time:'02:31',ci:'我该变成什么样子才能配合出演'},
        {time:'02:36',ci:'原来当爱放下防备后的这些那些'},
        {time:'02:41',ci:'都有个期限'},
        {time:'02:44',ci:''},
        {time:'02:47',ci:'其实台下的观众就我一个'},
        {time:'02:53',ci:'其实我也看出你有点不舍'},
        {time:'02:58',ci:'场景也习惯我们来回拉扯'},
        {time:'03:02',ci:'还计较着什么'},
        {time:'03:07',ci:''},
        {time:'03:08v',ci:'其实说分不开的也不见得'},

        {time:'03:14',ci:'其实感情最怕的就是拖着'},
        {time:'03:14',ci:'越演到重场戏越哭不出了'},
        {time:'03:24',ci:'是否还值得'},
        {time:'03:28',ci:''},
        {time:'03:29',ci:'该配合你演出的我尽力在表演'},
        {time:'03:34',ci:'像情感节目里的嘉宾任人挑选'},
        {time:'03:39',ci:'如果还能看出我有爱你的那面'},
        {time:'03:44',ci:'请剪掉那些情节让我看上去体面'},
        {time:'03:50',ci:'可你曾经那么爱我干嘛演出细节'},
        {time:'03:55',ci:'不在意的样子是我最后的表演'},
        {time:'04:01',ci:'是因为爱你我才选择表演 这种成全'},
        
    ]
    $(songlist).each(function (i,v) {

        $("<li>").addClass('scen').appendTo(singlist).html('<div class="geming">'+v.name+
            '</div><div class="geshou">'+v.singer+'</div><div class="shichang">'+v.time+'</div>')
        // $(".geming").text(v.name).appendTo("li");
    })
    var  li=singlist.find("li")
    console.log(li.length);
    li.eq(1).addClass("act");
    next.on("click",function ing(){

        index++;
        if (index==7){
            index=1;
        }
        audio.src=(songlist[index-1].src);
        audio.play();
        play.removeClass("play").addClass("playing");
        li.filter(".act").removeClass("act")
        li.eq(index).addClass("act")
        return index;
    })
    prev.on("click",function () {

        index--;
        if (index==0){
            index=6;
        }
        audio.src=(songlist[index-1].src);
        audio.play();
        play.removeClass("play").addClass("playing");
        li.filter(".act").removeClass("act")
        li.eq(index).addClass("act")
        return index;
    })
    singlist.on("click","li",function () {
        li.filter(".act").removeClass("act")
        $(this).addClass("act");
        index=$(this).index();
        audio.src=(songlist[index-1].src);
        audio.play();
        // name.text(songlist[index].name+"-");
        // singer.text(songlist[index].singer);
        // sname.text(songlist[i].name);

        play.removeClass("play").addClass("playing");
    })
    var bb;
    
    volume.on("click",function (e) {
       cmt.toggle(".cmtb")
cmtiao.on("click",function (e) {
    console.log(e.offsetY)
    cir2.css({top:e.offsetY})
    audio.volume=(80-e.offsetY)/80;
    console.log(audio.volume)
    aa=(80-e.offsetY)/80;
    bb=aa
})
        // console.log(e.offsetY)
        // cir2.css({top:e.offsetY})
        // audio.volume=e.offsetX/300;
        // aa=e.offsetX/300;
        // bb=aa
    })
    jinyin.on("click",function () {

        if (audio.volume==0 ){
            jinyin.removeClass("yinliang").addClass("jin")

        }else{
            jinyin.removeClass("jin").addClass("yinliang")
            cir2.css({left:300*bb})
        }

    })

})