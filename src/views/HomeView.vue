<template>
  <div class="home">
    <Header />
    <CovidInfo :covid19Info="covid19Info" />
    <CaseNum :caseNum="caseNum" />

    <Map />
    <MySwiper />
    <Trip />
    <News :news="news"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import CovidInfo from "@/components/CovidInfo.vue";
import CaseNum from "@/components/CaseNum.vue";
import api from "../api/index";
import Map from "@/components/Map.vue";
import MySwiper from "@/components/MySwiper.vue";
import Trip from "@/components/Trip.vue";
import News from "@/components/News.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    CovidInfo,
    CaseNum,
    Map,
    MySwiper,
    Trip,
    News,
  },

  data() {
    return {
      covid19Info: {},
      caseNum: {},
      news: [],
    };
  },
  mounted() {
    api
      .getNcov({
        key: "62e34ad34025d5d5127135efa58d4ca8",
      })
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data)
          this.covid19Info = {
            note1: "病毒名称",
          }
          this.caseNum = {
            // 更新时间戳
            modifyTime: res.data.newslist[0].desc.modifyTime,
            // 现存确诊人数
            currentConfirmedCount:
              res.data.newslist[0].desc.currentConfirmedCount,
            // 累计确诊人数
            confirmedCount: res.data.newslist[0].desc.confirmedCount,
            // 累计境外输入人数
            suspectedCount: res.data.newslist[0].desc.suspectedCount,
            // 累计治愈人数
            curedCount: res.data.newslist[0].desc.curedCount,
            // 累计死亡人数
            deadCount: res.data.newslist[0].desc.deadCount,
            // 现存无症状人数
            seriousCount: res.data.newslist[0].desc.seriousCount,
            // 新增境外输入人数
            suspectedIncr: res.data.newslist[0].desc.suspectedIncr,
            // 相比昨天现存确诊人数
            currentConfirmedIncr:
              res.data.newslist[0].desc.currentConfirmedIncr,
            // 相比昨天累计确诊人数
            confirmedIncr: res.data.newslist[0].desc.confirmedIncr,
            // 相比昨天新增治愈人数
            curedIncr: res.data.newslist[0].desc.curedIncr,
            // 相比昨天新增死亡人数
            deadIncr: res.data.newslist[0].desc.deadIncr,
            // 相比昨天现存无症状人数
            seriousIncr: res.data.newslist[0].desc.seriousIncr,
          }
          
          this.news = res.data.newslist[0].news
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
