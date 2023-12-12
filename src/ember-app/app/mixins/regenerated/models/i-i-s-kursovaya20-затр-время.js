import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('number')
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-kursovaya20-затр-время.validations.время.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗатрВремяE', 'i-i-s-kursovaya20-затр-время', {
    время: attr('Время', { index: 0 })
  });

  modelClass.defineProjection('ЗатрВремяL', 'i-i-s-kursovaya20-затр-время', {
    время: attr('Время', { index: 0 })
  });
};
