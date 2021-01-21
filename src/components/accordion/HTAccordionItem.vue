<template>
  <div
    class="ht-accordion--item"
    :class="cssClasses"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ExpandableDisplayItem from './ExpandableDisplayItem';
import { AccordionActivator } from './AccordionActivator';

@Component({
  components: {
  },
})
export default class HTAccordionItem extends Vue {
  @Prop({ type: Object, default: () => new ExpandableDisplayItem() })
  item!: ExpandableDisplayItem;

  @Prop()
  itemIndex!: number;

  @Prop({ type: Object })
  itemActivator!: AccordionActivator;

  @Prop({ type: Boolean, default: false })
  isExpanded!: boolean;

  private get cssClasses() {
    return {
    };
  }
}
</script>

<style lang="scss" scoped>

</style>
