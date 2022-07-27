<template>
  <div>
    <van-cell :label="`${author}-${name}`" :title="name" center>
      <template>
        <van-icon color="#000" name="play-circle-o" size="28" @click="goPlay" />
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'VueMusicSongItem',
  props: {
    author: String,
    name: String,
    id: Number,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {
    goPlay() {
      this.$router.push({
        path: '/play',
        query:{
            id: this.id
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
