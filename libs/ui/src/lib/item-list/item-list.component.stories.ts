import { text, object } from '@storybook/addon-knobs';
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
    items: object('items', [{code: 'blanket', description: 'fancy blanket'}]),
  }
})
