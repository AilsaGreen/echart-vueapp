<template>
  <div class="at_line" id="rfbar" style="width:98%;height:260px;margin:0 auto;">

  </div>
</template>
<script type="text/ecmascript-6">
  import echarts from "echarts";
    export default {
      data () {
        return {
          lists :{},
          option:'',
          datac:0
        }
      },
  methods:{
    fetchData(id){
      var _this = this;
      this.$http.get("static/formdata.json").then(function(res){
        _this.lists = res.data[id];
        console.log(_this.Lists)
        _this.lists.datas.forEach((data)=>{
          this.option = data.mouthes;
          this.datac = data.totals
        })
        console.log(id)
      }).catch(function(err){
        console.log("参数错误",err)
      })
    },
    getdata(){
      this.List.forEach((datas)=>{
        console.log("data"+datas)
      })
    },
    drawPie(id){
      this.chart = echarts.init(document.getElementById(id));
      this.chart.setOption({
        title: {//标题
          textStyle: {
            color:'#90fffe',
            fontSize:30
          }
        },
        xAxis:  {
          type: 'category',
          data:this.option ,
          axisLine:{
            lineStyle:{//设置底部坐标的宽和颜色
              width:1,
              color:'#999'
            }
          },
          /*   axisLabel:{
           interval:0,
           formatter:function(val){//设置字体自动换行
           return val.split("").join("\n");
           }
           },*/
          axisTick:{
            show:false//刻度消失
          },
          nameTextStyle:{
            fontSize:'12px'
          }
        },
        yAxis:{
          type:'value',
          name:"万人次",
          nameTextStyle:{
            fontWeight:"bold"
          },
          axisTick:{
            show:false//不显示刻度线
          },
          splitLine:{
            show:true,
            lineStyle:{
              color:'#999999',
              width:1,
              type:'solid',
              opacity:.5
            }
          },
          data:[0,50,100,150,200],
          axisLine:{
            lineStyle:{
              width:1,
              color:'#999999'
            }
          }
        },
        grid: {
          top:'14%',
          left: '3%',
          right: '5%',
          bottom: '4%',
          containLabel: true
        },
        //视觉组件设置小于50不同颜色
        visualMap: {
          pieces: [{
            gt: 0,
            lte: 50,
            color: '#ff9900'
          }, {
            gt: 50,
            lte: 200,
            color: '#03a9f4'
          }],
          show:false
        },
        series: [
          {
            type: 'bar',
            barWidth:10,
            itemStyle:{
              normal:{
                color:'#94d8ff'
              }
            },
            data: this.datac
          }
        ]
      })
    },
    fetch(id){
      var _this = this;
      this.$http.get("static/formdata.json").then(function(res){
        _this.List = res.data[id];
        console.log(res.data)

      }).catch(function(err){
        console.log("参数错误",err)
      })
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.drawPie('rfbar');
    })
  }
  }

</script>

<style>
</style>
