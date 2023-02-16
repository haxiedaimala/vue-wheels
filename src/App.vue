<script setup lang="ts">
import GButton from './components/Button.vue';
import GButtonGroup from './components/ButtonGroup.vue';
import {ref} from 'vue';

const loading1 = ref(true);
const loading2 = ref(true);
const loading3 = ref(false);
</script>

<template>
  <g-button icon="settings" v-model:loading="loading1">你好</g-button>
  <g-button v-model:loading="loading2">你好</g-button>
  <g-button icon="settings" icon-position="right" v-model:loading="loading3">你好</g-button>

  <g-button-group>
    <g-button icon="left">上一页</g-button>
    <g-button>更多</g-button>
    <g-button icon="right" icon-position="right">下一页</g-button>
  </g-button-group>

</template>
