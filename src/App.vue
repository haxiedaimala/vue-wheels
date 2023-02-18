<script setup lang="ts">
import GButton from './components/GButton.vue';
import GButtonGroup from './components/GButtonGroup.vue';
import GInput from './components/GInput.vue';
import GRow from './components/GRow.vue';
import GCol from './components/GCol.vue';
import {ref} from 'vue';

const loading1 = ref(true);
const loading2 = ref(true);
const loading3 = ref(false);
const value = ref('王五');
</script>

<template>
  <div class="box">
    <g-row>
      <g-col/>
      <g-col/>
      <g-col/>
    </g-row>
    <g-row>
      <g-col span="2"/>
      <g-col span="18"></g-col>
      <g-col span="4"></g-col>
    </g-row>
    <g-row gutter="20">
      <g-col/>
      <g-col/>
      <g-col/>
      <g-col/>
    </g-row>
    <g-row>
      <g-col span="4"></g-col>
      <g-col span="8" offset="2"></g-col>
      <g-col span="8" offset="2"></g-col>
    </g-row>
  </div>

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
    <br>
    <g-input value="王" error="用户名长度不少于两个字"/>
    <br>
    <g-input value="赵四" success="用户名符合要求"/>
    <br>
    <g-input v-model:value="value"/>
    <span>{{ value }}</span>
  </div>

</template>

<style lang="scss">
.box {
  margin: 10px;
}
</style>
