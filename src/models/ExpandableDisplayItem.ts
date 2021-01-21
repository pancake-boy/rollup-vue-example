export default class ExpandableDisplayItem {
  constructor(
    readonly title: string = '',
    readonly description: string = '',
    isExpanded = false,
  ) {
    this.isExpanded = isExpanded;
  }

  isExpanded: boolean;
}
