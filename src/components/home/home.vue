<template>
  <div class="place_container marginb100">
    <div class="area_top overhidden">
      <a href="" class="go_back l"></a>
      <p class="area_title">客源地（省内）</p>
    </div>
    <div class="geo" id="geo_china" style="width:100%;height:300px;">

    </div>
    <div class="at_item">
      <div class="at_formdata">
        <div class="at_formdata area_formdata">
          <table class="at_table in_table" cellpadding="0" cellspacing="0">
            <thead>
            <th v-for="hitem in hometlist">{{hitem}}</th>
            </thead>
            <tbody>
              <template v-for="dhitem in hdatalist">
                <tr>
                  <td>{{dhitem.num}}</td>
                  <td>{{dhitem.place}}</td>
                  <td>{{dhitem.visitornum}}</td>
                  <td>{{dhitem.percenge}}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script  type="text/ecmascript-6">
  export default{
    data(){
      return{
        hometlist:["序号","市区","游客数量（万）","占比"],
      datas:[
      {name: '成都市', value: 389.99},
      {name: '绵阳市', value: 289.99},
      {name: '自贡市', value: 279.99},
      {name: '攀枝花市', value: 269.99},
      {name: '泸州市', value: 229.99},
      {name: '德阳市', value: 189.99},
      {name: '广元市', value: 179.99},
      {name: '遂宁市', value: 169.99},
      {name: '内江市', value: 99.99},
      {name: '乐山市', value: 129.99},
      {name: '资阳市', value: 0},
      {name: '宜宾市', value: 0},
      {name: '南充市', value: 0},
      {name: '达州市', value: 0},
      {name: '雅安市', value: 0},
      {name: '阿坝藏族羌族自治州', value: 0},
      {name: '甘孜藏族自治州', value: 0},
      {name: '凉山彝族自治州', value: 0},
      {name: '广安市', value: 0},
      {name: '巴中市', value: 0},
      {name: '眉山市', value: 0}
      ],
        hdatalist:[]
      }
    },
    mounted(){
      this.drawgeo("geo_china");
      this.fetch();
    },
    methods:{
      fetch(){
        var _this = this;
        this.$http.get("static/json/homegeo.json").then(function(res){
          _this.hdatalist = res.data;
        }).catch(function(err){
          console.log("参数错误",err)
        })
      },
      drawgeo(id){
        this.echarts = echarts.init(document.getElementById(id));
       this.echarts.setOption({
          backgroundColor: '#f5f5f5',
          tooltip: {
            trigger: 'item',
            formatter: '{b}'
          },
          visualMap: {
            min: 0,
            max: 400,
            left: 'left',
            top: 'bottom',
            text: ['High', 'Low'],
            inRange: {
              color: ['#e2f5fe', '#03a9f4']
            },
            calculable: true,
            show: false
          },
          series: [
            {
              type: 'map',
              mapType: "四川",
              roam: false,
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  borderColor: 'rgba(0, 0, 0, 0.2)'
                },
                emphasis: {
                  areaColor: null,
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowBlur: 20,
                  borderWidth: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              data:this.datas
            }
          ]
        });
        window.onresize = this.echarts.resize;
      }
    }
  }

</script>
<style>
  .area_top{
    background: #000;
    height:1rem;
    color:#fff;
    font-size:.36rem;

  }
  .area_title{
    height:1rem;
    line-height: 1rem;
    text-align: center;

  }
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
    background: url(./image/arrow_up.png) no-repeat 10px center;
    background-size: 8px 13px;
  }
  .arrow_down{
    background: url(./image/arrow_down.png) no-repeat 10px center;
    background-size: 8px 13px;
  }
</style>
