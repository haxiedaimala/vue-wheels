<script setup lang="ts">
import GButton from './components/GButton.vue';
import GButtonGroup from './components/GButtonGroup.vue';
import GInput from './components/GInput.vue';
import GRow from './components/GRow.vue';
import GCol from './components/GCol.vue';
import GContainer from './components/GContainer.vue';
import GHeader from './components/GHeader.vue';
import GMain from './components/GMain.vue';
import GAside from './components/GAside.vue';
import GFooter from './components/GFooter.vue';
import GPopover from './components/GPopover.vue';
import {openToast} from './components/openToast';
import {ref} from 'vue';

const loading1 = ref(true);
const loading2 = ref(true);
const loading3 = ref(false);
const visible = ref(true);
const value = ref('王五');

const showToast = (position: 'top' | 'bottom' | 'middle') => {
  openToast({
    message: `<p>您的智商是 ${Math.floor(Math.random() * 100) + 1}。您需要进行充值</p>`,
    position: position,
    enableHtml: true,
    autoClose: false,
    autoCloseDelay: 3,
    closeButton: {
      text: '已充值',
      callback() {
        console.log('用户知道了');
      }
    }
  });
};
const showToast1 = () => {
  showToast('top');
};
const showToast2 = () => {
  showToast('middle');
};
const showToast3 = () => {
  showToast('bottom');
};
</script>

<template>

  <div style="overflow:hidden;margin: 100px;padding: 20px;">
    <g-popover>
      <template #content>
        这是一段 popover 文字
      </template>
      <g-button>click</g-button>
    </g-popover>
    <g-popover>
      <template #content>
        这是一段 popover 文字
      </template>
      <g-button>click</g-button>
    </g-popover>
  </div>

  <button @click="showToast1">top</button>
  <button @click="showToast2">middle</button>
  <button @click="showToast3">bottom</button>
  <!--  <div class="box">-->
  <!--    <g-container style="height:100vh">-->
  <!--      <g-header class="demo">header</g-header>-->
  <!--      <g-container>-->
  <!--        <g-aside class="demo" style="width: 200px;">aside</g-aside>-->
  <!--        <g-container>-->
  <!--          <g-main class="demo">main</g-main>-->
  <!--          <g-footer class="demo">footer</g-footer>-->
  <!--        </g-container>-->
  <!--      </g-container>-->
  <!--    </g-container>-->
  <!--  </div>-->

  <div class="box">
    <g-container style="height:100vh">
      <g-aside v-model:visible="visible" class="demo" style="width: 200px;">aside</g-aside>
      <g-container>
        <g-header class="demo">header</g-header>
        <g-main class="demo">main</g-main>
        <g-footer class="demo">footer</g-footer>
      </g-container>
    </g-container>
  </div>

  <!--  <div class="box">-->
  <!--    <g-container style="height:100vh">-->
  <!--      <g-header class="demo">header</g-header>-->
  <!--      <g-container>-->
  <!--        <g-aside class="demo" style="width: 200px;">aside</g-aside>-->
  <!--        <g-main class="demo">main</g-main>-->
  <!--      </g-container>-->
  <!--      <g-footer class="demo">footer</g-footer>-->
  <!--    </g-container>-->
  <!--  </div>-->

  <div class="box">
    <g-row>
      <g-col span="8" :sm="{span:12}" :md="{span:8}"/>
      <g-col span="8" :sm="{span:12}" :md="{span:8}"/>
      <g-col span="8" :sm="{span:12}" :md="{span:8}"/>
    </g-row>
  </div>

  <div class="box">
    <g-row>
      <g-col :xs="{span:8}" :sm="{span:6}" :md="{span:4}" :lg="{span:3}" :xl="{span:1}"/>
      <g-col :xs="{span:4}" :sm="{span:6}" :md="{span:8}" :lg="{span:9}" :xl="{span:11}"/>
      <g-col :xs="{span:4}" :sm="{span:6}" :md="{span:8}" :lg="{span:9}" :xl="{span:11}"/>
      <g-col :xs="{span:8}" :sm="{span:6}" :md="{span:4}" :lg="{span:3}" :xl="{span:1}"/>
    </g-row>
  </div>

  <div class="box">
    <g-row>
      <g-col span="6"/>
      <g-col span="6"/>
      <g-col span="6"/>
    </g-row>
    <g-row justify="center">
      <g-col span="6"/>
      <g-col span="6"/>
      <g-col span="6"/>
    </g-row>
    <g-row justify="end">
      <g-col span="6"/>
      <g-col span="6"/>
      <g-col span="6"/>
    </g-row>
    <g-row justify="space-between">
      <g-col span="6"/>
      <g-col span="6"/>
      <g-col span="6"/>
    </g-row>
    <g-row justify="space-around">
      <g-col span="6"/>
      <g-col span="6"/>
      <g-col span="6"/>
    </g-row>
  </div>

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
.demo {
  border: 1px solid red;
  min-height: 50px;
}
</style>
