import GToast from './GToast.vue';
import {createApp, h} from 'vue';

interface Options {
  message: string;
}

export const openToast = (options: Options) => {
  const {message} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  console.log(message);
  createApp({
    render() {
      return h(GToast, {}, {default: message});
    }
  }).mount(div);
};