<template>
  <div>
  <div class="at_item" v-for="litem in List">
    <div class="at_title">月报表（{{litem.name}}）</div>
    <div class="at_formdata">
      <table class="rf_table at_table" cellpadding="0" cellspacing="0">
        <thead>
        <th v-for="titem in litem.tlist">{{titem}}</th>
        </thead>
        <tbody>

           <template v-for="ditem in litem.datas">
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
  export default{
    data(){
      return{
        tlist:["月份","总接待量","省内游客","省外游客","国外游客"],
        List:[]
      }
    },
    watch:{
      $route(to){
        //console.log(to);
        var reg=/forms\/\d+/;
        if(reg.test(to.path)){
          var Id=this.$route.params.id || 0;
          this.fetch(Id);
        }
      }
    },
    mounted(){
      this.fetch(this.$route.params.id);
      console.log(this.$route.params.id)
    },
    methods:{
      fetch(id){
        var _this = this;
        this.$http.get("static/formdata.json").then(function(res){
          _this.List = res.data[id];
          console.log(res.data[id])
        }).catch(function(err){
          console.log("参数错误",err)
        })
      }
    }
  }
</script>
<style scoped>
  .rf_table{width:100%;}
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
