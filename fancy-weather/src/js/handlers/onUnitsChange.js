import $on from '../viewUtils/setListener';
import constants from './constants';

export default function onChangeUnits(controller, units) {
  function changeUnits(event) {
    constants.queryLoader.style.display = 'block';
    constants.metricUnitsButton.removeEventListener('click', changeUnits);
    constants.imperialUnitsButton.removeEventListener('click', changeUnits);
    constants.metricUnitsButton.setAttribute('metricUnitsButton-changeUnits-click', 'false');
    constants.imperialUnitsButton.setAttribute('imperialUnitsButton-changeUnits-click', 'false');

    controller.model.vars.changeVars({ units: event.target.id });
  }

  if (units === 'imperial' && constants.metricUnitsButton.getAttribute('metricUnitsButton-changeUnits-click') !== 'true') {
    constants.metricUnitsButton.classList.remove('active');
    constants.imperialUnitsButton.classList.add('active');
    $on(constants.metricUnitsButton, 'click', changeUnits);
    constants.metricUnitsButton.setAttribute('metricUnitsButton-changeUnits-click', 'true');
  }

  if (units === 'metric' && constants.imperialUnitsButton.getAttribute('imperialUnitsButton-changeUnits-click') !== 'true') {
    constants.metricUnitsButton.classList.add('active');
    constants.imperialUnitsButton.classList.remove('active');
    $on(constants.imperialUnitsButton, 'click', changeUnits);
    constants.imperialUnitsButton.setAttribute('imperialUnitsButton-changeUnits-click', 'true');
  }
}
