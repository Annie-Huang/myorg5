import { text, number, boolean } from '@storybook/addon-knobs';
import { ItemListComponent } from './item-list.component';

export default {
  title: 'ItemListComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ItemListComponent,
  props: {
    items: text('items', ),
  }
})
