<template>
<div class="at_container">
    <div class="area_top">
      <p class="area_title">旅游报表</p>
    </div>
    <div class="at_title">
      <div class="l at_h">游客接待量月报</div>
      <div  class="r at_area pos_relative" >
        <div @click="change"><span>区域:</span><input type="text" class="inpute" v-model="tit"/></div>
        <ul  class="navul pos_absolute" v-show="isshow">
          <li v-for="(litem,index)  in List" @click="ulData(List[index].name,index)">
              {{litem.name}}
          </li>
        </ul>
      </div>
      <div class="currenttime">当前日期:2017.10.08</div>
    </div>
    <div class="at_line" id="rfbar" style="width:98%;height:260px;margin:0 auto;">
  </div>
    <div class="at_item" v-for="(fitem,index)  in List" v-show="matchindex(index)">
      <div class="at_title">月报表（{{fitem.name}}）</div>
      <div class="at_formdata">
        <table class="rf_table at_table" cellpadding="0" cellspacing="0">
          <thead>
          <th v-for="titem in fitem.tlist">{{titem}}</th>
          </thead>
          <tbody>
          <template v-for="ditem in fitem.datas">
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
</template>
<script type="text/ecmascript-6">
  import echarts from "echarts";
  export default{
    data(){
      return{
        isshow:false,
        List:[],
        Listsjson:{},
       /* msg:"",*/
        tit:"全市",
        dataid:0//默认显示第一个
      }
    },
    mounted(){
      this.fetch("rfbar",this.dataid);
    },
    watch:{
      dataid: {
        handler(){
          this.fetch("rfbar",this.dataid);
        },
        deep: true
      }
    },
    methods:{
      change(){
        this.isshow =!this.isshow;
      },
      ulData(meg,id){
      /*  this.msg =meg;*/
        this.tit = meg;
        this.isshow = false;
        this.dataid = id;
        console.log(meg)
      },
      matchindex(index){
          if(index == this.dataid ){
            return true
          }else{
            return false
          }
      },
      fetch(id,inid){
        var _this = this;
        this.$http.get("static/json/formdata.json").then(function(res){
          _this.List = res.data;
          const arrs = [];
          const arr2 = [];
      _this.Listsjson = _this.List[inid] ;
          _this.Listsjson.datas.forEach((data)=>{
            arrs.push(data.mouthes);
            arr2.push(data.totals);
  /*          console.log(arrs);
            console.log(arr2);
            console.log(inid);*/
          });
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
          window.onresize = this.chart.resize;
        }).catch(function(err){
          console.log("参数错误",err)
        });
      }
    }
  }
</script>
<style scoped>
  .inpute{width:60px;height:16px;display: inline-block;background: #fff;color:#000;
    vertical-align: top;border:1px solid #dbdbdb;}
  .at_title div{display:inline-block;}
  .pos_relative{position:relative;}
  .pos_absolute{position:absolute;}
  .navul{top:18px;right:0;width:60px;z-index:33;background:#fff;border:1px solid #dbdbdb; }
  .navul li{text-align: center;height:30px;line-height:30px;border-bottom:1px solid red;}
  .navul li a{color:#000;font-size:14px;}
  .area_title{text-align: center;padding-left:10px;}
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
