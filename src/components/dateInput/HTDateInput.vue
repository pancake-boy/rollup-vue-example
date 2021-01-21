<template>
  <div>
    <label>{{ label }}</label>
    <v-menu
      v-model="menuOpened"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          :value="formattedDate"
          label=""
          :outlined="theme.themeConfig.TextField.outlined"
          readonly
          hide-details
          style="margin-bottom: 2rem;"
          data-test="pickedDate"
          v-on="on"
        />
      </template>
      <v-date-picker
        ref="picker"
        v-model="value"
        no-title
        :max="maxDateString"
        :min="minDateString"
        @input="onInput"
      />
    </v-menu>
  </div>
</template>

<script lang="ts">
import { VDatePicker, VTextField, VMenu } from 'vuetify/lib';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { DateTime } from 'luxon';
import ThemeAwaredComponent from '../ThemeAwaredComponent';

@Component({
  components: {
    VDatePicker,
    VTextField,
    VMenu,
  },
})
export default class HTDateInput extends ThemeAwaredComponent {
  @Prop({ type: String, default: '' }) label!: string;

  @Prop({ type: Date }) initialValue: Date | undefined;

  @Prop({ type: Date }) min: Date | undefined;

  @Prop({ type: Date }) max: Date | undefined;

  @Prop({ type: String, default: 'yyyy-MM-dd' }) dateFormat!: string;

  private value = '';

  private menuOpened = false;

  get formattedDate(): string {
    return this.value ? DateTime.fromJSDate(new Date(this.value)).toFormat(this.dateFormat) : '';
  }

  get minDateString(): string | undefined {
    return this.min ? DateTime.fromJSDate(this.min).toFormat('yyyy-MM-dd') : undefined;
  }

  get maxDateString(): string | undefined {
    return this.max ? DateTime.fromJSDate(this.max).toFormat('yyyy-MM-dd') : undefined;
  }

  created(): void {
    if (this.initialValue) {
      this.value = DateTime.fromJSDate(this.initialValue).toFormat('yyyy-MM-dd');
    }
  }

  @Watch('menuOpened') onMenuOpen(val: boolean): void {
    if (val) {
      this.$nextTick(() => {
        const datePicker = this.$refs.picker as Vue & { activePicker: string };
        datePicker.activePicker = 'YEAR';
      });
    }
  }

  onInput(v: Date): void {
    this.menuOpened = false;
    this.$emit('input', v);
  }
}
</script>
