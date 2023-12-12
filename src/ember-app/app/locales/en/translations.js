import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya20ДирОтдПоРабСКлLForm from './forms/i-i-s-kursovaya20-дир-отд-по-раб-с-кл-l';
import IISKursovaya20ДоговорLForm from './forms/i-i-s-kursovaya20-договор-l';
import IISKursovaya20ЗатрВремяLForm from './forms/i-i-s-kursovaya20-затр-время-l';
import IISKursovaya20КлиентLForm from './forms/i-i-s-kursovaya20-клиент-l';
import IISKursovaya20ПереченьУслугLForm from './forms/i-i-s-kursovaya20-перечень-услуг-l';
import IISKursovaya20РасчетОстВремLForm from './forms/i-i-s-kursovaya20-расчет-ост-врем-l';
import IISKursovaya20ДирОтдПоРабСКлEForm from './forms/i-i-s-kursovaya20-дир-отд-по-раб-с-кл-e';
import IISKursovaya20ДоговорEForm from './forms/i-i-s-kursovaya20-договор-e';
import IISKursovaya20ЗатрВремяEForm from './forms/i-i-s-kursovaya20-затр-время-e';
import IISKursovaya20КлиентEForm from './forms/i-i-s-kursovaya20-клиент-e';
import IISKursovaya20ПереченьУслугEForm from './forms/i-i-s-kursovaya20-перечень-услуг-e';
import IISKursovaya20РасчетОстВремEForm from './forms/i-i-s-kursovaya20-расчет-ост-врем-e';
import IISKursovaya20ДирОтдПоРабСКлModel from './models/i-i-s-kursovaya20-дир-отд-по-раб-с-кл';
import IISKursovaya20ДоговорModel from './models/i-i-s-kursovaya20-договор';
import IISKursovaya20ЗатрВремяModel from './models/i-i-s-kursovaya20-затр-время';
import IISKursovaya20КлиентModel from './models/i-i-s-kursovaya20-клиент';
import IISKursovaya20ОказКонсультModel from './models/i-i-s-kursovaya20-оказ-консульт';
import IISKursovaya20ПереченьУслугModel from './models/i-i-s-kursovaya20-перечень-услуг';
import IISKursovaya20РасчетОстВремModel from './models/i-i-s-kursovaya20-расчет-ост-врем';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya20-дир-отд-по-раб-с-кл': IISKursovaya20ДирОтдПоРабСКлModel,
    'i-i-s-kursovaya20-договор': IISKursovaya20ДоговорModel,
    'i-i-s-kursovaya20-затр-время': IISKursovaya20ЗатрВремяModel,
    'i-i-s-kursovaya20-клиент': IISKursovaya20КлиентModel,
    'i-i-s-kursovaya20-оказ-консульт': IISKursovaya20ОказКонсультModel,
    'i-i-s-kursovaya20-перечень-услуг': IISKursovaya20ПереченьУслугModel,
    'i-i-s-kursovaya20-расчет-ост-врем': IISKursovaya20РасчетОстВремModel
  },

  'application-name': 'Kursovaya20',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya20',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya20',
          title: 'Kursovaya20'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kursovaya20: {
          caption: 'Kursovaya20',
          title: 'Kursovaya20',
          'i-i-s-kursovaya20-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-kursovaya20-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-kursovaya20-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-kursovaya20-перечень-услуг-l': {
            caption: 'Перечень услуг',
            title: ''
          },
          'i-i-s-kursovaya20-затр-время-l': {
            caption: 'Затр время',
            title: ''
          },
          'i-i-s-kursovaya20-договор-l': {
            caption: 'Договор',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya20-дир-отд-по-раб-с-кл-l': IISKursovaya20ДирОтдПоРабСКлLForm,
    'i-i-s-kursovaya20-договор-l': IISKursovaya20ДоговорLForm,
    'i-i-s-kursovaya20-затр-время-l': IISKursovaya20ЗатрВремяLForm,
    'i-i-s-kursovaya20-клиент-l': IISKursovaya20КлиентLForm,
    'i-i-s-kursovaya20-перечень-услуг-l': IISKursovaya20ПереченьУслугLForm,
    'i-i-s-kursovaya20-расчет-ост-врем-l': IISKursovaya20РасчетОстВремLForm,
    'i-i-s-kursovaya20-дир-отд-по-раб-с-кл-e': IISKursovaya20ДирОтдПоРабСКлEForm,
    'i-i-s-kursovaya20-договор-e': IISKursovaya20ДоговорEForm,
    'i-i-s-kursovaya20-затр-время-e': IISKursovaya20ЗатрВремяEForm,
    'i-i-s-kursovaya20-клиент-e': IISKursovaya20КлиентEForm,
    'i-i-s-kursovaya20-перечень-услуг-e': IISKursovaya20ПереченьУслугEForm,
    'i-i-s-kursovaya20-расчет-ост-врем-e': IISKursovaya20РасчетОстВремEForm
  },

});

export default translations;
