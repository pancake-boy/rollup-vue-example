import { ThemeConfig } from './ThemeConfig';

export default abstract class Theme {
  public abstract get themeConfig(): ThemeConfig;
}
