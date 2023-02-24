<script setup lang="ts">
import GCollapseItem from './GCollapseItem.vue';
import {useSlots} from 'vue';

interface Props {
  visible?: string | string[],
  accordion?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  visible: '',
  accordion: false
});
const emits = defineEmits<{
  (e: 'update:visible', value: string | string[]): void
}>();
const defaults = useSlots().default!();
defaults.forEach(node => {
  if (node.type !== GCollapseItem) {
    throw new Error('GCollapse 组件的子组件名必须是 GCollapseItem');
  }
});
const toggleCollapse = (value: string) => {
  let arr = [];
  for (let visible of props.visible) {
    arr.push(visible);
  }
  if (props.accordion) {
    arr.indexOf(value) === -1 ? arr.splice(0, 1, value) : arr.splice(0, 1);
  } else {
    arr.indexOf(value) === -1 ? arr.push(value) : (arr = arr.filter(num => num !== value));
  }
  emits('update:visible', arr);
};

</script>

<template>
  <div class="gulu-collapse-wrapper">
    <div class="gulu-collapse" v-for="(c,index) in defaults" :key="index">
      <div class="gulu-collapse-title" @click="toggleCollapse(c.props.name)">
        {{ c.props.title }}
      </div>
      <div class="gulu-collapse-content" :class="{visible:props.visible.indexOf(c.props.name)>=0}">
        <component :is="c"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$grey: #ddd;
$border-raiuds: 4px;

.gulu-collapse-wrapper {
  border: 1px solid $grey;
  border-radius: $border-raiuds;

  .gulu-collapse {
    padding: 0 1em;

    &-title {
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 1em 0;
      border-bottom: 1px solid $grey;
      cursor: pointer;
    }

    &-content {
      width: 100%;
      height: 0;
      overflow: hidden;
      transition: all 250ms;

      &.visible {
        border-bottom: 1px solid $grey;
        padding: 1em 0;
        height: auto;
      }
    }

    &:last-child {
      .gulu-collapse-title {
        border-bottom: none;
      }

      .gulu-collapse-content {
        border-bottom: none;

        &.visible {
          border-top: 1px solid $grey;
        }
      }
    }
  }
}

</style>