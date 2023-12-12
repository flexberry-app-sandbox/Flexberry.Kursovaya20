import {
  defineNamespace,
  defineProjections,
  Model as ОказКонсультMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya20-оказ-консульт';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОказКонсультMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
