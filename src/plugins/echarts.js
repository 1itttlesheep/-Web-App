import echarts from "echarts"
import nameMap from "./name"

const install = function(Vue){
    Object.defineProperties(Vue.prototype,{
        $echarts:{
            get(){
                return {
                    chinaMap: function(id,data){
                        var chartDom = document.getElementById(id)
                        var myChart = echarts.init(chartDom)
                        var option = {
                            tooltip:{
                                triggerOn: "click",
                                enterable: true,
                                formatter(data){
                                    // console.log(data);
                                    return `<a href='/#/city/${ data.name }' style='color:#fff'>${ data.name }省<br>病例：${data.value}</a>`
                                    
                                }
                            },
                            visualMap:{
                                orient:"vertical",
                                typr: "piecewise",
                                pieces:[
                                    {min:0, max:0, color: "#fff"},
                                    {min:1, max:10, color: "#fdfdcf"},
                                    {min:10, max:100, color: "#fe9e83"},
                                    {min:100, max:1000, color: "#e55a4e"},
                                    {min:1000, max:1000000, color: "#4f070d"},
                                ]
                            },
                            series:[{
                                name:"中国地图",
                                type: "map",
                                map: "china",
                                roam: false,
                                zoom: 1.2,
                                label:{
                                    normal:{
                                        show:true,
                                        textStyle:{
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle:{
                                    normal:{
                                        areaColor: "rgba(0, 255, 236, 0)",
                                        borderColor: "rgba(0,0,0,0,2)"
                                    },
                                    emphasis:{
                                        areaColor:"rgba(255,180,0,0.8)",
                                        shadowOffsetX:0,
                                        shadowOffsetY:0,
                                        shadowBlur:20,
                                        borderWidth:0,
                                    }
                                },
                                data
                            }]
                        }
                        myChart.setOption(option)
                    },
                    worldMap: function(id,data){
                        var chartDom = document.getElementById(id)
                        var myChart = echarts.init(chartDom)
                        var option = {
                            tooltip:{
                                triggerOn: "click",
                                enterable: true,
                                formatter(data){
                                    return data.name + "<br>" + data.value
                                }
                            },
                            visualMap:{
                                orient:"vertical",
                                typr: "piecewise",
                                pieces:[
                                    {min:0, max:0, color: "#fff"},
                                    {min:1, max:100, color: "#fdfdcf"},
                                    {min:100, max:10000, color: "#fe9e83"},
                                    {min:10000, max:1000000, color: "#e55a4e"},
                                    {min:1000000, max:1000000000, color: "#4f070d"},
                                ]
                            },
                            series:[{
                                name:"世界地图",
                                type: "map",
                                map: "world",
                                roam: false,
                                zoom: 1.2,
                                label:{
                                    normal:{
                                        show:false,
                                        textStyle:{
                                            fontSize: 8
                                        }
                                    }
                                },
                                nameMap:nameMap,
                                itemStyle:{
                                    normal:{
                                        areaColor: "rgba(0, 255, 236, 0)",
                                        borderColor: "rgba(0,0,0,0,2)"
                                    },
                                    emphasis:{
                                        areaColor:"rgba(255,180,0,0.8)",
                                        shadowOffsetX:0,
                                        shadowOffsetY:0,
                                        shadowBlur:20,
                                        borderWidth:0,
                                    }
                                },
                                data
                            }]
                        }
                        myChart.setOption(option)
                    },
                    cityMap: function(id,data,cityName){
                        var chartDom = document.getElementById(id)
                        var myChart = echarts.init(chartDom)
                        var option = {
                            tooltip:{
                                triggerOn: "click",
                                enterable: true,
                                formatter(data){
                                    return data.name + "<br>" + data.value
                                }
                            },
                            visualMap:{
                                orient:"vertical",
                                typr: "piecewise",
                                pieces:[
                                    {min:0, max:0, color: "#fff"},
                                    {min:1, max:10, color: "#fdfdcf"},
                                    {min:10, max:100, color: "#fe9e83"},
                                    {min:100, max:1000, color: "#e55a4e"},
                                    {min:1000, max:1000000, color: "#4f070d"},
                                ]
                            },
                            series:[{
                                name:"中国地图",
                                type: "map",
                                map: cityName,
                                roam: false,
                                zoom: 1.2,
                                label:{
                                    normal:{
                                        show:true,
                                        textStyle:{
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle:{
                                    normal:{
                                        areaColor: "rgba(0, 255, 236, 0)",
                                        borderColor: "rgba(0,0,0,0,2)"
                                    },
                                    emphasis:{
                                        areaColor:"rgba(255,180,0,0.8)",
                                        shadowOffsetX:0,
                                        shadowOffsetY:0,
                                        shadowBlur:20,
                                        borderWidth:0,
                                    }
                                },
                                data
                            }]
                        }
                        myChart.setOption(option)
                    },
                }
            }
        }
    })

}

export default install