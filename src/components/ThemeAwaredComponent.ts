import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import DefaultTheme from '../themes/default/Theme';
import Theme from '../themes/Theme';

@Component
export default class ThemeAwaredComponent extends Vue {
  @Prop({ default: () => new DefaultTheme() }) theme!: Theme;
}
