import { Serializer as РасчетОстВремSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya20-расчет-ост-врем';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РасчетОстВремSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
