import GToast from './GToast.vue';
import {createApp, h, VNode} from 'vue';

interface Options {
  visible?: boolean,
  message: string | VNode;
  enableHtml?: boolean
  autoClose?: boolean;
  autoCloseDelay?: number;
  closeButton?: { text: string, callback?: (xxx: any) => void };
}

export const openToast = (options: Options) => {
  const {message,autoClose, autoCloseDelay, closeButton} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(
        GToast,
        {
          visible: true,
          autoClose,
          autoCloseDelay,
          closeButton,
          'onUpdate:visible': () => {
            app.unmount();
            div.remove();
          },
        },
        {default: message}
      );
    }
  });
  app.mount(div);
};