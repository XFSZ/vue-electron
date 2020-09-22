<template>
  <div >
    <div class="title-left">
      <img :src="imgUrl" class="block-img" />
      <p class="titlename">{{ titleName }}</p>
    </div>
    <!-- <p class="titlename">值班兵力</p> -->
    <div class="hr">
      <hr />
      <!-- <el-divider></el-divider> -->
      <div class="deom_hr"></div>
      <hr />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  props: ['imgUrl', 'titleName']
};
</script>

<style scoped>
@font-face {
  font-family: "Zhongheijian"; /* 这个名字可以自己定义 */
  src: url("../../../assets/font/Zhongheijian.ttf");
}
.titlename {
 font-family: "Zhongheijian";
  font-size: 18px;
  height: 8px;
  margin-left: 4px;
  color: white;
}

.title-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  /* margin-bottom: 4px; */
  margin-top: 20px;
}
.deom_hr {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
}
.hr {
  height: 0.5px;
  /* width: 100%; */
  margin-left: 27px;
  margin-right: 27px;
  margin-bottom: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.block-img {
  height: 20px;
  margin-top: 18px;
  margin-left: 15px;
  margin-bottom: 4px;
}
</style>
