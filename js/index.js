$(document).ready(function () {
    var geoCoordMap = {
        // '苏州': [120.37,31.19],
        '上海': [121.4648,31.2891],
        '北京': [116.4166,39.9166],
        '深圳': [114.07,22.3333],
        '沈阳': [123.1238,42.1216],
        '广州': [113.1400,23.08],
        '包头': [109.49,40.39],
        '烟台': [121.24,37.32],
        '厦门': [118.06,24.27],
        '太原':[112.53333,37.86667],
        '南昌':[115.90000,28.68333],
        '长沙':[113.00000,28.21667],
        '成都':[ 104.06667,30.66667],
        '哈尔滨':[126.63333,45.75000],

    };
    var BJData = [
        // [{name:'苏州'}, {name:'苏州',value:190}],
        [{name:'苏州'}, {name:'上海',value:160}],
        [{name:'苏州'}, {name:'北京',value:160}],
        [{name:'苏州'}, {name:'沈阳',value:160}],
        [{name:'苏州'}, {name:'深圳',value:160}],
        [{name:'苏州'}, {name:'广州',value:100}],
        [{name:'苏州'}, {name:'包头',value:160}],
        [{name:'苏州'}, {name:'烟台',value:160}],
        [{name:'苏州'}, {name:'厦门',value:160}],
        [{name:'苏州'}, {name:'太原',value:160}],
        [{name:'苏州'}, {name:'南昌',value:160}],
        [{name:'苏州'}, {name:'长沙',value:160}],
        [{name:'苏州'}, {name:'成都',value:160}],
        [{name:'苏州'}, {name:'哈尔滨',value:160}],
    ];
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    var series = [
        { 
            // radius:'100%',
            // center:['200%','200%'],
            // zoom: 5,
            // layoutCenter: ['30%', '30%'],
             // roam: false,
            // zoom: 2.2, 
            name: '苏州',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke',
                scale:'8'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 20;
            },
            itemStyle: {
                normal: {
                    color: '#4670ff',
                    borderWidth: 10
                }
            },
            data: BJData.map(function (dataItem) {
                return {
                    // name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        }
    ];
    option = {
        backgroundColor: '#fff',
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#fff',
                    borderColor: '#c2c1c1'
                },
                emphasis: {
                    areaColor: '#fff'
                }
            }
        },
        series: series
    };
    var chinaMap = echarts.init(document.getElementById('chinaMap'));
    chinaMap.setOption(option);

    $('.content ul li').click(function(){
        $(this).addClass('selected')
        $(this).siblings().removeClass('selected')
        console.log($(this).attr('num'))
        $(`.imgs img:nth-child(${$(this).attr('num')})`).css({display: 'block'})
        $(`.imgs img:nth-child(${$(this).attr('num')})`).siblings().css({display: 'none'})
    })

    // 点击logo
    $('.skip1').click(function(e){
        let scrollTop;
        let n = 0;
        let T = setInterval(function(){
            scrollTop = document.documentElement.scrollTop;
            n ++;
            if(scrollTop > 50){
                document.documentElement.scrollTop = scrollTop - n * 50
            }else{
                document.documentElement.scrollTop = 0
                clearInterval(T)
            }
        },20)
        document.documentElement.scrollTop = 0
    })
    // 点击首页
    $('.skip2').click(function(e){
        document.documentElement.scrollTop = 0
        // $(this).addClass('selected').parent().siblings().children('span').removeClass('selected')
    })

    // 点击产品介绍
    $('.skip3').click(function(e){
        // $(this).addClass('selected').parent().siblings().children('span').removeClass('selected')
        document.documentElement.scrollTop = $('.productInfo').offset().top - 70
    })

    // 点击解决方案
    $('.skip4').click(function(e){
        // $(this).addClass('selected').parent().siblings().children('span').removeClass('selected')
        document.documentElement.scrollTop = $('.solutionCase').offset().top - 70
    })

    // 点击技术优势
    $('.skip5').click(function(e){
        // $(this).addClass('selected').parent().siblings().children('span').removeClass('selected')
        document.documentElement.scrollTop = $('.technical').offset().top - 70
    })

    // 点击服务支持
    $('.skip6').click(function(e){
        // $(this).addClass('selected').parent().siblings().children('span').removeClass('selected')
        document.documentElement.scrollTop = $('.service').offset().top - 70
    })

    // 点击客户介绍
    $('.skip7').click(function(e){
        // $(this).addClass('selected').parent().siblings().children('span').removeClass('selected')
        document.documentElement.scrollTop = $('.customer').offset().top - 70
    })

    // 点击关于我们
    $('.skip8').click(function(e){
        // $(this).addClass('selected').parent().siblings().children('span').removeClass('selected')
        document.documentElement.scrollTop = $('.about').offset().top - 70
    })
    
    window.onscroll = function(){
        scrollFun()
    }
    scrollFun()
    function scrollFun(){
        let scrollTop = document.documentElement.scrollTop;
        if(scrollTop <= $('.productInfo').offset().top - 200){
            $('.skip2').addClass('selected').parent().siblings().children('span').removeClass('selected') 
        }else if(scrollTop > $('.productInfo').offset().top - 200 && scrollTop < $('.solutionCase').offset().top - 200){
            $('.skip3').addClass('selected').parent().siblings().children('span').removeClass('selected')
        }else if(scrollTop > $('.solutionCase').offset().top -200 && scrollTop < $('.technical').offset().top - 200){
            $('.skip4').addClass('selected').parent().siblings().children('span').removeClass('selected')
        }else if(scrollTop > $('.technical').offset().top -200 && scrollTop < $('.service').offset().top - 200){
            $('.skip5').addClass('selected').parent().siblings().children('span').removeClass('selected')
        }else if(scrollTop > $('.service').offset().top -200 && scrollTop < $('.customer').offset().top - 200){
            $('.skip6').addClass('selected').parent().siblings().children('span').removeClass('selected')
        }else if(scrollTop > $('.customer').offset().top -200 && scrollTop < $('.about').offset().top - 200){
            $('.skip7').addClass('selected').parent().siblings().children('span').removeClass('selected')
        }
        if(scrollTop > $('.about').offset().top -400){
            $('.skip8').addClass('selected').parent().siblings().children('span').removeClass('selected')
        }
    }
})
