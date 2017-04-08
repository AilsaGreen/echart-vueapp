<template>
  <div class="at_container">
    <div class="area_top">
      <p class="area_title">旅游报表</p>
    </div>
  <div class="at_title">
    <div class="l at_h">游客接待量月报</div>
    <div  class="r at_area pos_relative" >
    <div @click="change"><span>区域:</span><input type="text" class="inpute" v-model="tit"/></div>
      <ul class="navul pos_absolute" v-show="isshow">
         <li v-for="(litem,index)  in List" @click="ulData(List[index].name)">
            <keep-alive><router-link :to="'/forms/'+litem.id">
              {{litem.name}}
            </router-link></keep-alive>
         </li>
       </ul>
    </div>
    <div class="currenttime">当前日期:2017.10.08</div>
  </div>
    </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data(){
      return{
        isshow:false,
        List:[],
        tit:''
      }
    },
    mounted(){
      this.fetch()
    },
    methods:{
      change(even){
        this.isshow =!this.isshow;
        console.log(even)
      },
      ulData(inputvalue){
        this.tit =inputvalue;
        console.log(this.tit)
      },
      fetch(){
        var _this = this;
        this.$http.get("static/json/formdata.json").then(function(res){
          _this.List = res.data;
             _this.tit =  _this.List.name
        }).catch(function(err){
          console.log("参数错误",err)
        })
      }
    }
  }


</script>

<style scoped>
.inpute{width:60px;height:16px;display: inline-block;background: #fff;color:#000;
  vertical-align: top;border:1px solid #dbdbdb;}
  .at_select{display:inline-block;width:100px;}
  .at_title div{display:inline-block;}
  .pos_relative{position:relative;}
  .pos_absolute{position:absolute;}
  .navul{top:18px;right:0;width:60px;z-index:33;background:#fff;border:1px solid #dbdbdb; }
.navul li{text-align: center;height:30px;line-height:30px;border-bottom:1px solid red;}
.navul li a{color:#000;font-size:14px;}
</style>
