<script setup lang="ts">
import GButton from './components/Button.vue';
import GButtonGroup from './components/ButtonGroup.vue';
import GInput from './components/Input.vue'
import {ref} from 'vue';

const loading1 = ref(true);
const loading2 = ref(true);
const loading3 = ref(false);
</script>

<template>
  <div class="box">
    <g-button icon="settings" v-model:loading="loading1">你好</g-button>
    <g-button v-model:loading="loading2">你好</g-button>
    <g-button icon="settings" icon-position="right" v-model:loading="loading3">你好</g-button>

    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
  </div>

  <div class="box">
    <g-input value="张三"/>
    <g-input value="李四" disabled/>
    <g-input value="李四" readonly/>
    <div>
      <g-input value="王" error="用户名长度不少于两个字"/>
    </div>
    <div>
      <g-input value="王" success="用户名符合要求"/>
    </div>
  </div>

</template>

<style lang="scss">
.box{
  margin: 10px;
}
</style>
