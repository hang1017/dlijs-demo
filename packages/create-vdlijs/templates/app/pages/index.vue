<template>
  <div>
    <h1>vdiljs & vue</h1>
    <h2>{{ hello }}</h2>
    <h3>{{ vdiljsHello }}</h3>

    <div>
      <router-link to="/users/foo">Go to Users Foo</router-link>
    </div>
    <VantDemo />
    <div>
      <h4>useAppData</h4>
      <pre>{{ app }}</pre>
    </div>
    <img src="{{ error }}" alt="测试vite模式错误图片加载" />
  </div>
</template>
<script lang="ts" setup>
import { ref, inject } from "vue";
import { useAppData } from "vdlijs";
import VantDemo from "@/components/VantDemo.vue";

const hello = ref<string>("hello vue");
const app = useAppData();

const vdiljsHello = inject("vdlijs-hello");
</script>
<style lang="less" scoped>
div {
  font-size: 24px;
}
</style>
