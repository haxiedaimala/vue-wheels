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
@mixin span-offset-classes($class-prefix-span:span-,$class-prefix-offset:offset-) {
  @for $n from 1 through 24 {
    &.#{$class-prefix-span}#{$n} {
      width: calc(#{$n} / 24 * 100%);
    }
    &.#{$class-prefix-offset}#{$n} {
      margin-left: calc(#{$n} / 24 * 100%);
    }
  }
}

.gulu-layout-col {
  min-height: 50px;
  width: 50%;
  background: grey;
  border: 1px solid red;

  @include span-offset-classes(span-, offset-);
  @include span-offset-classes(xs-span-, xs-offset-);

  @media (min-width: 768px) {
    @include span-offset-classes(sm-span-, sm-offset-);
  }

  @media (min-width: 992px) {
    @include span-offset-classes(md-span-, md-offset-);
  }

  @media (min-width: 1200px) {
    @include span-offset-classes(lg-span-, lg-offset-);
  }

  @media (min-width: 1920px) {
    @include span-offset-classes(xl-span-, xl-offset-);
  }
}
</style>