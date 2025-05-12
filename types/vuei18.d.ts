/** Проброс типов для компонентов, чтобы во sfc при обращении к this.$tm и this.$i18 не было ошибок */
import i18 from 'vue-i18n';
import {LocaleMessageValue} from 'vue-i18n';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $i18n: i18
        $tm: (key: string) => LocaleMessageValue<VueMessageType>
        $t: (key: string) => LocaleMessageValue<VueMessageType>
    }
}