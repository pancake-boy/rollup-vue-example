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
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class HTButton extends Vue {
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
</style>
