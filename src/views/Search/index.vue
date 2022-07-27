<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      @input="inputFn"
    />
    <!-- 热门搜索 -->
    <template v-if="this.value == ''">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          color="#ccc"
          size="large"
          plain
          round
          type="primary"
          v-for="(item, index) in Tag"
          :key="index"
          @click="clickFn(item.first)"
          style="margin: 4px 4px"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>
    <template v-else>
      <van-cell title="最佳匹配" />
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <SongItem
          v-for="(item,index) in Search"
          :key="index"
          :name="item.name"
          :author="item.ar[0].name"
          :id='item.id'
        ></SongItem>
      </van-list>
    </template>
  </div>
</template>

<script>
import { getSearchTagApi,getSearchListApi } from '@/apis';
// import { getSearchListApi } from '@/apis';
import SongItem from '@/components/SongItem';
export default {
  name: 'VueMusicIndex',
  components: {
    SongItem,
  },
  data() {
    return {
      value: '',
      Tag: [],
      Search: [],
      loading: false,
      finished: false,
      page: 1,
      limit: 20,
      timer: null,
    };
  },
  created() {
    this.getTag();
  },

  mounted() {},

  methods: {
    async getTag() {
      try {
        const res = await getSearchTagApi({});
        console.log(res);
        this.Tag = res.data.result.hots;
      } catch (e) {
        console.log('热门搜索获取失败');
      }
    },
    async getListFn() {
      try {
        const res = await getSearchListApi({
          keywords: this.value,
          limit: this.limit,
          offset: (this.page - 1) * this.limit,
        });
        console.log(res);
        return res.data.result.songs || [];
      } catch (e) {
        console.log('搜索获取失败');
        return [];
      }
    },
    async clickFn(val) {
      (this.page = 1), (this.finished = false), (this.value = val);
      this.Search = await this.getListFn();
    },
    async onLoad() {
      this.page++;
      const res = await this.getListFn();
      if (res.length == 0) {
        this.finished = true;
        this.loading = false;
        return;
      }
      this.Search = [...this.Search, ...res];
      this.loading = false;
    },
    inputFn() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(async () => {
        (this.page = 1), (this.finished = false);
        if (!this.value.trim()) {
          this.Search = [];
          return;
        }
        this.Search = await this.getListFn();
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped></style>
