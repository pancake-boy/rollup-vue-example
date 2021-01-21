<template>
  <div>
    <HTDateInput label="Birthday" />
    <HTDateInput
      label="Birthday"
      :initial-value="initialValue"
    />
    <HTDateInput
      label="Birthday"
      :max="max"
      :min="min"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
/* eslint-disable import/no-extraneous-dependencies */
import { DateTime } from 'luxon';
import { action } from '@storybook/addon-actions';
import HTDateInput from '@/components/inputs/HTDateInput.vue';

@Component({
  components: { HTDateInput },
})
export default class HTDateInputPlain extends Vue {
  initialValue = new Date('1999-1-1');

  dateFormat = 'yy/MM/dd';

  max = new Date();

  min = DateTime.fromJSDate(new Date()).minus({ year: 1 }).toJSDate();

  log() {
    action('onClick')();
  }
}
</script>
