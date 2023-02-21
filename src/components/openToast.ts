import GToast from './GToast.vue';
import {createApp, h} from 'vue';

interface Options {
  visible?: boolean,
  position: 'top' | 'bottom' | 'middle';
  message: string | Object;
  enableHtml?: boolean
  autoClose?: boolean;
  autoCloseDelay?: number;
  closeButton?: { text: string, callback?: (xxx: any) => void };
}


export const openToast = (options: Options) => {
  function close() {
    app.unmount();
    div.remove();
  }

  const divItems = document.querySelectorAll('div[data-v-app]:not([id])');
  const {message, position, enableHtml, autoClose, autoCloseDelay, closeButton} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(
        GToast,
        {
          visible: true,
          position,
          enableHtml,
          autoClose,
          autoCloseDelay,
          closeButton,
          'onUpdate:visible': () => {
            close();
          },
        },
        {default: message}
      );
    }
  });

  if (divItems.length >= 1) {
    divItems[0].remove();
  }
  app.mount(div);
};