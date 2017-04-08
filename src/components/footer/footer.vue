<template>
  <div class="footer">
    <ul class="tabBar">
      <router-link class="tabBar_item  itemactive" tag="li" to="/home" active-class="tabBaractive">
        <a href="#">
          <span class="tabBar_item_img1 tabBar_item_img"></span>
          <p class="tabBar_item_text">省地图</p>
        </a>
      </router-link>
      <router-link class="tabBar_item" tag="li" to="/actions" active-class="tabBaractive">
        <a href="#">
          <span class="tabBar_item_img2 tabBar_item_img"></span>
          <p class="tabBar_item_text">实时</p>
        </a>
      </router-link>
      <router-link class="tabBar_item" tag="li" to="/formheader" active-class="tabBaractive">
        <a href="#">
          <span class="tabBar_item_img3 tabBar_item_img"></span>
          <p class="tabBar_item_text">报表</p>
        </a>
      </router-link>
      <router-link class="tabBar_item" tag="li" to="/manager" active-class="tabBaractive">
        <a href="#">
          <span class="tabBar_item_img4 tabBar_item_img"></span>
          <p class="tabBar_item_text">报表2</p>
        </a>
      </router-link>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">


</script>

<style>
  *{margin:0;padding:0;}
  .footer{
    padding:6px 0;
    width:100%;
    position:fixed;
    bottom:0;
    left:0;
    box-sizing: border-box;
    background: #f5f5f5;
    border-top:1px solid #4fc3f7;
  }
  .tabBar{
    font-size:0;
    width:100%;
    box-sizing: border-box;
  }
  .tabBar_item{
    width:25%;
    text-align: center;
    display:inline-block;
    vertical-align: top;
    font-size:14px;
    color:#868686;
  }
  .tabBar_item_img{
    display:inline-block;
    width:26px;
    height:26px;
    margin-bottom:2px;
  }
  .tabBaractive .tabBar_item_img1{
    background: url("./image/at_active.png") no-repeat center;
    background-size:100%;
  }
.tabBar_item_img1{
    background: url("./image/at.png") no-repeat center;
    background-size:100%;
  }
 .tabBar_item_img2{
    background: url("./image/form.png") no-repeat center;
    background-size:100%;

  }
  .tabBaractive .tabBar_item_img2{
    background: url("./image/form_active.png") no-repeat center;
    background-size:100%;
  }
 .tabBar_item_img3{
    background: url("./image/home.png") no-repeat center;
    background-size:100%;

  }
  .tabBaractive .tabBar_item_img3{
    background: url("./image/home_active.png") no-repeat center;
  }
   .tabBar_item_img4{
    background: url("./image/maniger.png") no-repeat center;
    background-size:100%;
  }
  .tabBaractive .tabBar_item_img4{
    background: url("./image/maniger_active.png") no-repeat center;
    background-size:100%;
  }
 .tabBaractive a{
    color:#03a9f4;
  }
</style>
