<template>
  <div class="at_container">
<!--    <formheader></formheader>-->
    <div class="area_top">
      <p class="area_title"  onclick="window.history.go(-1)"><img class="images" src="./images/arrow.png"></p>
    </div>
    <div class="at_line" id="rfbar" style="width:98%;height:260px;margin:0 auto;">
    </div>
    <div>
      <div class="at_item">
        <div class="at_title">月报表（{{Lists.name}}）</div>
        <div class="at_formdata">
          <table class="rf_table at_table" cellpadding="0" cellspacing="0">
              <thead>
                <th v-for="titem in Lists.tlist">{{titem}}</th>
              </thead>
            <tbody>
            <template v-for="ditem in Lists.datas">
              <tr>
                <td>{{ditem.mouthes}}</td>
                <td>{{ditem.totals}}</td>
                <td>{{ditem.inprivince}}</td>
                <td>{{ditem.incountry}}</td>
                <td>{{ditem.outer}}</td>
              </tr>
            </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import echarts from "echarts";
  import formheader from './formheader.vue';
//这样就导致了传递的值没有及时的传递，只是说每次都是上一次的值
  export default{
    data(){
      return {
        Lists: {}
      }
    },
    mounted(){
      this.fetchData('rfbar',this.$route.params.id);
    /*  this.$nextTick(function(){

      });*/
/*      this.drawPie('rfbar',this.$route.params.id);*/
    },
    watch:{
      $route(to){
        var reg=/forms\/\d+/;
        if(reg.test(to.path)){
          var Id=this.$route.params.id || 0;
          this.fetchData(Id);
        }
      }
    },
    methods:{
      fetchData(id,ed){
        var _this = this;
        this.$http.get("static/json/formdata.json").then(function (res) {
          _this.Lists = res.data[ed - 1];
          const arrs = [];
          const arr2 = [];
          _this.Lists.datas.forEach((data)=>{
            arrs.push(data.mouthes);
            arr2.push(data.totals);
            console.log(arrs);
            console.log(arr2);
          })
          _this.chart = echarts.init(document.getElementById(id));
          _this.chart.setOption({
            title: {//标题
              textStyle: {
                color:'#90fffe',
                fontSize:30
              }
            },
            xAxis:  {
              type: 'category',
              data:arrs,
              axisLine:{
                lineStyle:{//设置底部坐标的宽和颜色
                  width:1,
                  color:'#999'
                }
              },
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
                lte: 400,
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
                data:arr2
              }
            ]
          });
          window.onresize = this.echarts.resize;
        }).catch(function (err) {
          console.log("参数错误", err)
        })
      }
  },
    components:{
      formheader
    }
  }
/*export default{
  props: {
    rvlist: {
      type: Array
    }
  },
  data(){
    return {
      Lists:{}
    }
  },
  mounted(){
    this.fetchData('rfbar', this.$route.params.id);
  },
  watch:{
    $route(to)
    {
      var reg = /forms\/\d+/;
      if (reg.test(to.path)) {
        var Id = this.$route.params.id || 0;
        this.fetchData(Id);
      }
    }
  },
  methods:{
    fetchData(id, ed)
    {
      var _this = this;
      console.log(this.rvlist)//undefind
      this.$http.get("static/formdata.json").then(function (res) {
        _this.Lists = res.data[ed - 1];
        console.log(_this.rvlist)
        const arrs = [];
        const arr2 = [];
        _this.Lists.datas.forEach((data)=> {
          arrs.push(data.mouthes);
          arr2.push(data.totals);
          console.log(arrs);
          console.log(arr2);
        })
        _this.chart = echarts.init(document.getElementById(id));
        _this.chart.setOption({
          title: {//标题
            textStyle: {
              color: '#90fffe',
              fontSize: 30
            }
          },
          xAxis: {
            type: 'category',
            data: arrs,
            axisLine: {
              lineStyle: {//设置底部坐标的宽和颜色
                width: 1,
                color: '#999'
              }
            },
            axisTick: {
              show: false//刻度消失
            },
            nameTextStyle: {
              fontSize: '12px'
            }
          },
          yAxis: {
            type: 'value',
            name: "万人次",
            nameTextStyle: {
              fontWeight: "bold"
            },
            axisTick: {
              show: false//不显示刻度线
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#999999',
                width: 1,
                type: 'solid',
                opacity: .5
              }
            },
            data: [0, 50, 100, 150, 200],
            axisLine: {
              lineStyle: {
                width: 1,
                color: '#999999'
              }
            }
          },
          grid: {
            top: '14%',
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
              lte: 400,
              color: '#03a9f4'
            }],
            show: false
          },
          series: [
            {
              type: 'bar',
              barWidth: 10,
              itemStyle: {
                normal: {
                  color: '#94d8ff'
                }
              },
              data: arr2
            }
          ]
        })
      }).catch(function (err) {
        console.log("参数错误", err)
      })
    }
  }
}*/
</script>

<style scoped>
  .area_title{text-align: left;padding-left:10px;}
  .images{vertical-align: middle;}
  .rf_table th,tr{
    width:20%;
  }
  .rf_table th{
    border-right:1px solid #eeeeee;
  }
  .rf_table th:nth-last-child{
    border-right:none;
  }
  .rf_table td:nth-last-child{
    border-right:none;
  }
  .rf_table td{
    padding:6px 0;
    border-right:1px solid #eeeeee;
  }
  .rf_table td:nth-child(2){
    color:#03a9f4;
  }
</style>
