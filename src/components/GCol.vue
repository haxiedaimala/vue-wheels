<script setup lang="ts">
import {computed} from 'vue';

const {span, offset, xs, sm, md, lg, xl} = defineProps({
  span: {
    type: [String, Number]
  },
  offset: {
    type: [String, Number]
  },
  xs: {
    type: Object,
    validator: (value: Object) => {
      let keys = Object.keys(value);
      keys.forEach(key => {
        if (['span', 'offset'].indexOf(key) === -1) return false;
      });
      return true;
    }
  },
  sm: {
    type: Object,
    validator: (value: Object) => {
      let keys = Object.keys(value);
      keys.forEach(key => {
        if (['span', 'offset'].indexOf(key) === -1) return false;
      });
      return true;
    }
  },
  md: {
    type: Object,
    validator: (value: Object) => {
      let keys = Object.keys(value);
      keys.forEach(key => {
        if (['span', 'offset'].indexOf(key) === -1) return false;
      });
      return true;
    }
  },
  lg: {
    type: Object,
    validator: (value: Object) => {
      let keys = Object.keys(value);
      keys.forEach(key => {
        if (['span', 'offset'].indexOf(key) === -1) return false;
      });
      return true;
    }
  },
  xl: {
    type: Object,
    validator: (value: Object) => {
      let keys = Object.keys(value);
      keys.forEach(key => {
        if (['span', 'offset'].indexOf(key) === -1) return false;
      });
      return true;
    }
  }
});
const colClass = computed(() => {
  return {
    [`span-${span}`]: span,
    [`offset-${offset}`]: offset,
    [`xs-span-${xs?.span}`]: xs && xs.span,
    [`xs-offset-${xs?.offset}`]: xs && xs.offset,
    [`sm-span-${sm?.span}`]: sm && sm.span,
    [`sm-offset-${sm?.offset}`]: sm && sm.offset,
    [`md-span-${md?.span}`]: md && md.span,
    [`md-offset-${md?.offset}`]: md && md.offset,
    [`lg-span-${lg?.span}`]: lg && lg.span,
    [`lg-offset-${lg?.offset}`]: lg && lg.offset,
    [`xl-span-${xl?.span}`]: xl && xl.span,
    [`xl-offset-${xl?.offset}`]: xl && xl.offset,

  };
});
</script>

<template>
  <div class="gulu-layout-col" :class="colClass">
    <slot/>
  </div>
</template>

<style lang="scss">
.gulu-layout-col {
  min-height: 50px;
  width: 50%;
  background: grey;
  border: 1px solid red;

  $class-prefix: span-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: calc(#{$n} / 24 * 100%);
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: calc(#{$n} / 24 * 100%);
    }
  }


  $class-prefix: xs-span-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: calc(#{$n} / 24 * 100%);
    }
  }
  $class-prefix: xs-offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: calc(#{$n} / 24 * 100%);
    }
  }

  @media (min-width: 768px) {
    $class-prefix: sm-span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc(#{$n} / 24 * 100%);
      }
    }
    $class-prefix: sm-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc(#{$n} / 24 * 100%);
      }
    }
  }

  @media (min-width: 992px) {
    $class-prefix: md-span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc(#{$n} / 24 * 100%);
      }
    }
    $class-prefix: md-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc(#{$n} / 24 * 100%);
      }
    }
  }

  @media (min-width: 1200px) {
    $class-prefix: lg-span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc(#{$n} / 24 * 100%);
      }
    }
    $class-prefix: lg-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc(#{$n} / 24 * 100%);
      }
    }
  }

  @media (min-width: 1920px) {
    $class-prefix: xl-span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc(#{$n} / 24 * 100%);
      }
    }
    $class-prefix: xl-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc(#{$n} / 24 * 100%);
      }
    }
  }
}
</style>