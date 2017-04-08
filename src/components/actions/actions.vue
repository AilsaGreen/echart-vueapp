<template>
  <div class="at_container">
    <div class="area_top">
      <p class="area_title">实时看数</p>
    </div>
    <div class="at_item">
      <div class="at_title">实时游客接待量（全市）</div>
      <div class="at_line" id="at_doline" style="width:100%;height:220px">

      </div>
    </div>
    <div class="at_item">
      <div class="at_title">各区域游客实时接待量</div>
      <div class="at_formdata">
        <table class="at_table" cellpadding="0" cellspacing="0">
          <thead>
          <th v-for="aitem in alist">{{aitem}}</th>
          </thead>
          <tbody>
          <template v-for="aditem in Adata">
            <tr>
              <td>{{aditem.area}}</td>
              <td>{{aditem.currnum}}</td>
              <td>{{aditem.yesterdaynum}}</td>
              <td :class="{'arrow_up':(aditem.currnum-aditem.yesterdaynum) > 0,'arrow_down':(aditem.currnum-aditem.yesterdaynum)<0}">{{aditem.apercent}}</td>
            </tr>
          </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import echarts from "echarts";
  export default{
    data(){
      return{
        data1:['10.01','10.02','10.03','10.04','10.05','10.06','10.07'],
        alist:["地域","今日值","昨日值","环比"],
        Adata:[]
      }
    },
    mounted(){
      this.$nextTick(function(){
        this.drawPie("at_doline")
      });
      this.fetch();
    },
    methods:{
      fetch(){
        var _this = this;
        this.$http.get("static/json/action.json").then(function(res){
          _this.Adata = res.data;
          console.log(_this.Adata);
        }).catch(function(err){
          console.log("参数错误",err)
        })
      },
      drawPie(id){
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
          title: {
          },
          tooltip: {

          },
          legend: {
            data:['本期','上年同期','上月同期'],
            width:300,
            height:30,
            bottom:5,
            left:'8%',
            orient:'vertical',
            itemWidth:40,
            itemHeight:20,
            inactiveColor:'#999',
            align:'auto',
            data: [{
              name: '本期',
              icon: 'roundRect',
              textStyle: {
                color: '#03a9f4'
              }
            }, {
              name: '上年同期',
              icon: 'roundRect',
              textStyle: {
                color: '#ff9800'
              }
            },
              {
                name: '上月同期',
                icon: 'roundRect',
                textStyle: {
                  color: '#66ba60'
                }
              }],
            selected: {
              '本期': true,
              '上年同期': false,
              '上月同期': false
            }
          },
          grid: {
            top:'10%',
            left: '3%',
            right: '5%',
            bottom: '22%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.data1,
            axisLine:{
              lineStyle:{//设置底部坐标的宽和颜色
                width:1,
                color:'#333333'
              }
            },
            splitLine:{
              show:true
              //轴线的分线
            },
            axisTick:{
              show:false//不显示刻度线
            }
          },
          yAxis: {
            type: 'value',
            data:[0,5,10,15,20,25,30],
            axisLabel: {
              formatter: '{value}K'
            },
            splitLine:{
              show:false
            },
            axisTick:{
              show:false//不显示刻度线
            }
          },
          series: [

            {
              name:'本期',
              type:'line',
              stack: null,
              /* silent:true,
               //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。*/
              data:[15, 18, 20, 19, 21, 23, 17],
              itemStyle:{
                normal:{
                  color:'#03a9f4'
                }
              }
            },
            {
              name:'上年同期',
              type:'line',
              stack: null,
              data:[13, 14, 15, 14.5, 16, 19, 23],
              itemStyle:{
                normal:{
                  color:'#ff9800'
                }
              }
            },
            {
              name:'上月同期',
              type:'line',
              stack: null,
              data:[11, 16, 15, 14, 15, 16, 17],
              itemStyle:{
                normal:{
                  color:'#66ba60'
                }
              }
            }
          ]
        })
      }

    }

  }

</script>

<style>
  .at_container{
    margin-bottom:100px;
  }
  .at_title{
    border-left:.1rem solid #03a9f4;
    width:100%;
    box-sizing: border-box;
    background: #f5f5f5;
    padding:6px 0 6px 6px;
  }
  .at_title span{
    overflow: hidden;
    display:inline-block;
    vertical-align: top;
  }
  .at_h{
    width:27.8%;
    text-align: left;
  }
  .at_area{
    width:33.2%;
    text-align: right;
  }
  .currenttime{
    width:39%;
    text-align: center;
  }
  .at_table{
    width:100%;
  }

  .at_table th,tr{
    width:25%;
    text-align: center;

  }
  .at_table th{
    font-weight: 400;
    font-size:12px;
  }
  .at_table td,th{
    height:.6rem;
    line-height: .6rem;
    border-bottom:1px solid #eeeeee;
  }
  .at_table td{
    color:#868686;
  }
  .arrow_up{
    width:8px;
    height:13px;
    margin-top:6.5px;
    padding-right:2px;
  }
  .arrow_up{
    background: url(./images/arrow_up.png) no-repeat 10px center;
    background-size: 8px 13px;
  }
  .arrow_down{
    background: url(./images/arrow_down.png) no-repeat 10px center;
    background-size: 8px 13px;
  }
</style>
