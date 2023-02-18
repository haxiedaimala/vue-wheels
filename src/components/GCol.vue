<script lang="ts">
const validator = (value: Object): boolean => {
  let valid = true;
  let keys = Object.keys(value);
  keys.forEach(key => {
    if (['span', 'offset'].indexOf(key) === -1) valid = false;
  });
  return valid;
};
export default validator;
</script>
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
    validator
  },
  sm: {
    type: Object,
    validator
  },
  md: {
    type: Object,
    validator
  },
  lg: {
    type: Object,
    validator
  },
  xl: {
    type: Object,
    validator
  }
});
const createClasses = (obj: any, str: string = ''): string[] => {
  if (!obj) return [];
  let array = [];
  if (obj.span) {
    array.push(`${str}span-${obj.span}`);
  }
  if (obj.offset) {
    array.push(`${str}offset-${obj.offset}`);
  }
  return array;
};
const colClass = computed(() => {
  return [
    ...createClasses({span, offset}),
    ...createClasses(xs, 'xs-'),
    ...createClasses(sm, 'sm-'),
    ...createClasses(md, 'md-'),
    ...createClasses(lg, 'lg-'),
    ...createClasses(xl, 'xl-'),
  ];
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