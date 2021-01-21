<template>
  <div>
    <div style="padding: 16px">
      <h2>default style</h2>
      <div>
        <!-- v-slot="{ item }" -->
        <HTAccordion
          :items="items"
        />
      </div>
    </div>
    <div style="padding: 16px">
      <h2>override default slot</h2>
      <div>
        <HTAccordion
          :items="items"
        >
          <template
            v-slot:default="{ item }"
          >
            <p
              v-for="(line, index) in splitNewLines(item.description)"
              :key="index"
            >
              {{ line }}
            </p>
          </template>
        </HTAccordion>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { HTAccordion, HTAccordionItem, HTAccordionItemHeader, HTAccordionItemContent } from '@/components';

@Component({
  components: {
    HTAccordion,
    HTAccordionItem,
    HTAccordionItemHeader,
    HTAccordionItemContent,
  },
})
export default class HTAccordionPlain extends Vue {
  items = [
    {
      title: 'Facts and knowledge about COVID-19',
      description: 'Social distance, quarantine and insolation.',
      isExpanded: false,
    },
    {
      title: 'For the public',
      description: `Social distance, quarantine and insolation.\n
      Hand hygiene, cough etiquette, cleaning and laundry.\n
      When children have acute respiratory tract infections.`,
      isExpanded: true,
    },
    {
      title: 'Facts and knowledge about COVID-19',
      description: 'When children have acute respiratory tract infections.',
      isExpanded: false,
    },
  ];

  splitNewLines(text: string): string[] {
    return text.split('\n');
  }
}
</script>

<style lang="scss" scoped>
</style>
