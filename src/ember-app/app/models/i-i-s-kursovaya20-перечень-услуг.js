import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПереченьУслугMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya20-перечень-услуг';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПереченьУслугMixin, Validations, {
});

defineProjections(Model);

export default Model;
