import Theme from '../Theme';
import { ThemeConfig } from '../ThemeConfig';

import './global.scss';
// import '../harbortech/app.scss';

export default class DefaultTheme extends Theme {
  public readonly themeConfig: ThemeConfig = {
    TextField: { outlined: true },
  };
}
