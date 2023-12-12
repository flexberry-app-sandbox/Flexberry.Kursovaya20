import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya20.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya20.title'),
          children: [{
            link: 'i-i-s-kursovaya20-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.kursovaya20.i-i-s-kursovaya20-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya20.i-i-s-kursovaya20-расчет-ост-врем-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-kursovaya20-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya20.i-i-s-kursovaya20-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya20.i-i-s-kursovaya20-клиент-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya20-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.kursovaya20.i-i-s-kursovaya20-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya20.i-i-s-kursovaya20-дир-отд-по-раб-с-кл-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kursovaya20-перечень-услуг-l',
            caption: i18n.t('forms.application.sitemap.kursovaya20.i-i-s-kursovaya20-перечень-услуг-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya20.i-i-s-kursovaya20-перечень-услуг-l.title'),
            children: null
          }, {
            link: 'i-i-s-kursovaya20-затр-время-l',
            caption: i18n.t('forms.application.sitemap.kursovaya20.i-i-s-kursovaya20-затр-время-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya20.i-i-s-kursovaya20-затр-время-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-kursovaya20-договор-l',
            caption: i18n.t('forms.application.sitemap.kursovaya20.i-i-s-kursovaya20-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya20.i-i-s-kursovaya20-договор-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})