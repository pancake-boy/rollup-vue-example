<template>
  <dd
    class="ht-accordion--item-content"
    :class="cssClasses"
  >
    <!-- @slot the accordion content -->
    <slot :item="item" />
  </dd>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ExpandableDisplayItem from './ExpandableDisplayItem';

@Component({
  components: {},
})
export default class HTAccordionItemContent extends Vue {
  @Prop({ type: Object, default: () => new ExpandableDisplayItem() })
  item!: ExpandableDisplayItem;

  @Prop()
  itemIndex!: number;

  @Prop({ type: Boolean, default: false })
  isExpanded!: boolean;

  private get cssClasses() {
    return {
      'ht-accordion--item-content-collapsed': !this.isExpanded,
    };
  }
}
</script>

<style lang="scss" scoped>

</style>
