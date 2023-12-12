import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  было: DS.attr('number'),
  доступно: DS.attr('number'),
  использовано: DS.attr('number'),
  оказКонсулт: DS.hasMany('i-i-s-kursovaya20-оказ-консульт', { inverse: 'расчетОстВрем', async: false })
});

export let ValidationRules = {
  было: {
    descriptionKey: 'models.i-i-s-kursovaya20-расчет-ост-врем.validations.было.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  доступно: {
    descriptionKey: 'models.i-i-s-kursovaya20-расчет-ост-врем.validations.доступно.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  использовано: {
    descriptionKey: 'models.i-i-s-kursovaya20-расчет-ост-врем.validations.использовано.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оказКонсулт: {
    descriptionKey: 'models.i-i-s-kursovaya20-расчет-ост-врем.validations.оказКонсулт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетОстВремE', 'i-i-s-kursovaya20-расчет-ост-врем', {
    было: attr('', { index: 0 }),
    доступно: attr('', { index: 1 }),
    использовано: attr('', { index: 2 }),
    оказКонсулт: hasMany('i-i-s-kursovaya20-оказ-консульт', '', {
      дата: attr('Дата', { index: 0 }),
      времяКонсульт: attr('Время консульт', { index: 1 }),
      предостУслуга: attr('Предост услуга', { index: 2 })
    })
  });

  modelClass.defineProjection('РасчетОстВремL', 'i-i-s-kursovaya20-расчет-ост-врем', {
    было: attr('', { index: 0 }),
    доступно: attr('', { index: 1 }),
    использовано: attr('', { index: 2 })
  });
};
