<template>
  <dl
    class="ht-accordion"
  >
    <HTAccordionItem
      v-for="(item, index) in items"
      :key="index"
      :item-index="index"
      :activator="itemActivator"
    >
      <!-- @click="this.onItemClicked" -->
      <HTAccordionItemHeader
        :item="item"
        :item-index="index"
        v-on="itemActivator"
      >
        <slot
          name="header"
          :item="item"
        >
          {{ item.title }}
        </slot>
      </HTAccordionItemHeader>
      <HTAccordionItemContent
        :item="item"
        :item-index="index"
        :is-expanded="item.isExpanded"
        v-on="itemActivator"
      >
        <slot :item="item">
          {{ item.description }}
        </slot>
      </HTAccordionItemContent>
    </HTAccordionItem>
  </dl>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ExpandableDisplayItem } from '@/models';
import { AccordionActivator } from './AccordionActivator';
import HTAccordionItem from './HTAccordionItem.vue';
import HTAccordionItemHeader from './HTAccordionItemHeader.vue';
import HTAccordionItemContent from './HTAccordionItemContent.vue';

@Component({
  components: {
    HTAccordionItem,
    HTAccordionItemHeader,
    HTAccordionItemContent,
  },
})
export default class HTAccordion extends Vue {
  @Prop({ type: Array, default: () => [] })
  items!: ExpandableDisplayItem[];

  private itemActivator: AccordionActivator = {
    expand: this.onItemExpand,
    collapse: this.onItemCollapse,
  }

  private onItemExpand(index: number): void {
    this.items.forEach((item, i) => {
      item.isExpanded = (i === index);
    });
  }

  private onItemCollapse(index: number): void {
    this.items[index].isExpanded = false;
  }
}
</script>

<style lang="scss" scoped>

</style>
