<script setup lang="ts">
import GIcon from './Icon.vue';

defineProps({
  value: String,
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  error: String
});
</script>

<template>
  <div class="gulu-input-wrapper">
    <input type="text" :class="{'gulu-input-error':error}" :value="value" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <g-icon name="error" class="gulu-icon-error"/>
      <span class="gulu-error-message"> {{ error }}</span>
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

  > .gulu-error-message {
    color: $red;
  }

  > .gulu-input-error {
    border-color: $red;
  }
}
</style>