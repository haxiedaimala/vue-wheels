<script setup lang="ts">
import GIcon from './Icon.vue';
import {computed} from 'vue';

const props = defineProps({
  value: String,
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  error: String,
  success: String
});
defineEmits<{
  (e: 'update:value', value: string): void
}>();
const inputTips = computed(() => {
  if (props.error) return {type: 'error', value: props.error};
  if (props.success) return {type: 'success', value: props.success};
  return false;
});
</script>

<template>
  <div class="gulu-input-wrapper">
    <input type="text" :class="{'gulu-input-error':error}" :value="value"
           @input="$emit('update:value',$event.target.value)"
           :disabled="disabled" :readonly="readonly">
    <template v-if="inputTips && inputTips.type">
      <g-icon :name="inputTips.type" :class="`gulu-icon-${inputTips.type}`"/>
      <span :class="`gulu-${inputTips.type}-message`"> {{ inputTips.value }}</span>
    </template>
  </div>
</template>

<style lang="scss">
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, .5);
$red: #f1453d;
$green: #67c23a;

.gulu-input-wrapper {
  display: inline-flex;
  align-items: center;
  font-size: $font-size;

  :not(:last-child) {
    margin-right: .5em;
  }

  > input {
    font-size: inherit;
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }

    &[disabled], &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }

  > .gulu-icon-error {
    fill: $red;
  }

  > .gulu-icon-success {
    fill: $green;
  }

  > .gulu-error-message {
    color: $red;
  }

  > .gulu-success-message {
    color: $green;
  }

  > .gulu-input-error {
    border-color: $red;
  }
}
</style>