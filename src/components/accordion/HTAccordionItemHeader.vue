<template>
  <dt class="ht-accordion--item-header">
    <span
      v-if="!item.isExpanded"
      class="ht-accordion--item-header-expand"
      @click="onExpand"
    />
    <span
      v-if="item.isExpanded"
      class="ht-accordion--item-header-collapse"
      @click="onCollapse"
    />
    <!-- @slot the accordion header -->
    <span
      class="ht-accordion--item-header-text"
      :class="cssText"
    >
      <slot
        :item="item"
      />
    </span>
  </dt>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ExpandableDisplayItem from './ExpandableDisplayItem';

@Component({
  components: {
  },
})
export default class HTAccordionItemHeader extends Vue {
  @Prop({ type: Object, default: () => new ExpandableDisplayItem() })
  item!: ExpandableDisplayItem;

  @Prop()
  itemIndex!: number;

  private get cssText() {
    return {
      'ht-accordion--item-header-text-expanded': this.item.isExpanded,
    };
  }

  private onExpand(): void {
    this.$emit('expand', this.itemIndex);
  }

  private onCollapse(): void {
    this.$emit('collapse', this.itemIndex);
  }
}
</script>

<style lang="scss" scoped>

</style>
