import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОказКонсультMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya20-оказ-консульт';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОказКонсультMixin, Validations, {
});

defineProjections(Model);

export default Model;
