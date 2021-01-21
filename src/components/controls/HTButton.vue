<template>
  <button
    class="ht-button"
    :class="cssClasses"
    @click="onClick"
  >
    <!-- @slot the button content -->
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import ThemeAwaredComponent from '@/components/ThemeAwaredComponent';

@Component
export default class HTButton extends ThemeAwaredComponent {
  @Prop({ type: Boolean, default: false })
  primary!: boolean;

  @Prop({ type: Boolean, default: false })
  secondary!: boolean;

  @Prop({ type: Boolean, default: false })
  tertiary!: boolean;

  @Prop({ type: Boolean, default: false })
  critical!: boolean;

  private get cssClasses() {
    return {
      'ht-button--primary': this.primary,
      'ht-button--secondary': this.secondary,
      'ht-button--critical': this.critical,
      'ht-button--tertiary': this.tertiary,
    };
  }

  // @Emit()
  private onClick(): void {
    this.$emit('onClick');
  }
}
</script>

<style lang="scss" scoped>
// .ht-button {
//   padding: 12px 16px;
//   border-radius: 6px;

//   &:focus {
//     outline: none;
//   }

//   :not(:first-child) {
//     margin-left: 8px;
//   }
// }

// .ht-button--primary {
//   background-color: #5c45e0;

//   &:hover {
//     background-color: #4534A8;
//   }
//   &:active {
//     background-color: #2E2370;
//   }
// }

// .ht-button--secondary {
//   background-color: #E2E8F4;

//   &:hover {
//     background-color: #C5CDDE;
//   }
//   &:active {
//     background-color: #A9AEB7;
//   }
// }

// .ht-button--critical {
//   background-color: #E74C3C;

//   &:hover {
//     background-color: #AD392D;
//   }
//   &:active {
//     background-color: #73261E;
//   }
// }

// .ht-button--tertiary {
//   background-color: #FFFFFF;

//   &:hover {
//     background-color: #F4F6FB;
//   }
//   &:active {
//     background-color: #E2E8F4;
//   }
// }
</style>
