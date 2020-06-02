import onSearch from './onSearch';
import onUnitsChange from './onUnitsChange';
import onLangChange from './onLangChange';
import onBackgroundUpdate from './onBackgroundUpdate';

export default (controller, view, units, lang) => {
  onSearch(controller);
  onUnitsChange(controller, units);
  onLangChange(controller, lang);
  onBackgroundUpdate(controller, view);
};
