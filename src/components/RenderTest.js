import { h } from 'vue';

export default {
  render() {
    return h('div', { class: 'container' }, [
      h('h1', 'Hello World!'),
      h('p', 'This is rendered using the h function.')
    ]);
  }
};
