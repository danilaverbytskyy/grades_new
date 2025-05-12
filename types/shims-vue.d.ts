import { ComponentCustomProperties } from 'vue';
import { Router, RouteLocationNormalized } from 'vue-router';
import { ToastServiceMethods } from 'primevue/toastservice';
import { DialogServiceMethods } from 'primevue/dialogservice';
import { TerminalServiceOptions } from 'primevue/terminalservice';
import { ConfirmationServiceMethods } from 'primevue/confirmationservice';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $router: Router;
    $route: RouteLocationNormalized;
    $toast: ToastServiceMethods;
    $dialog: DialogServiceMethods;
    $terminal: TerminalServiceOptions;
    $confirm: ConfirmationServiceMethods;
  }
}