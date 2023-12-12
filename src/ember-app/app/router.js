import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya20-дир-отд-по-раб-с-кл-l');
  this.route('i-i-s-kursovaya20-дир-отд-по-раб-с-кл-e',
  { path: 'i-i-s-kursovaya20-дир-отд-по-раб-с-кл-e/:id' });
  this.route('i-i-s-kursovaya20-дир-отд-по-раб-с-кл-e.new',
  { path: 'i-i-s-kursovaya20-дир-отд-по-раб-с-кл-e/new' });
  this.route('i-i-s-kursovaya20-договор-l');
  this.route('i-i-s-kursovaya20-договор-e',
  { path: 'i-i-s-kursovaya20-договор-e/:id' });
  this.route('i-i-s-kursovaya20-договор-e.new',
  { path: 'i-i-s-kursovaya20-договор-e/new' });
  this.route('i-i-s-kursovaya20-затр-время-l');
  this.route('i-i-s-kursovaya20-затр-время-e',
  { path: 'i-i-s-kursovaya20-затр-время-e/:id' });
  this.route('i-i-s-kursovaya20-затр-время-e.new',
  { path: 'i-i-s-kursovaya20-затр-время-e/new' });
  this.route('i-i-s-kursovaya20-клиент-l');
  this.route('i-i-s-kursovaya20-клиент-e',
  { path: 'i-i-s-kursovaya20-клиент-e/:id' });
  this.route('i-i-s-kursovaya20-клиент-e.new',
  { path: 'i-i-s-kursovaya20-клиент-e/new' });
  this.route('i-i-s-kursovaya20-перечень-услуг-l');
  this.route('i-i-s-kursovaya20-перечень-услуг-e',
  { path: 'i-i-s-kursovaya20-перечень-услуг-e/:id' });
  this.route('i-i-s-kursovaya20-перечень-услуг-e.new',
  { path: 'i-i-s-kursovaya20-перечень-услуг-e/new' });
  this.route('i-i-s-kursovaya20-расчет-ост-врем-l');
  this.route('i-i-s-kursovaya20-расчет-ост-врем-e',
  { path: 'i-i-s-kursovaya20-расчет-ост-врем-e/:id' });
  this.route('i-i-s-kursovaya20-расчет-ост-врем-e.new',
  { path: 'i-i-s-kursovaya20-расчет-ост-врем-e/new' });
});

export default Router;
