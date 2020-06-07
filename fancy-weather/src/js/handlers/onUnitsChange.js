import htmlElements from '../constants/htmlElements';

export default function onChangeUnits(controller, units) {
  function changeUnits(event) {
    htmlElements.queryLoader.style.display = 'block';
    htmlElements.metricUnitsButton.removeEventListener('click', changeUnits);
    htmlElements.imperialUnitsButton.removeEventListener('click', changeUnits);
    htmlElements.metricUnitsButton.setAttribute('metricUnitsButton-changeUnits-click', 'false');
    htmlElements.imperialUnitsButton.setAttribute('imperialUnitsButton-changeUnits-click', 'false');

    controller.model.vars.changeVars({ units: event.target.id });
  }

  if (units === 'imperial' && htmlElements.metricUnitsButton.getAttribute('metricUnitsButton-changeUnits-click') !== 'true') {
    htmlElements.metricUnitsButton.classList.remove('active');
    htmlElements.imperialUnitsButton.classList.add('active');
    htmlElements.metricUnitsButton.addEventListener('click', changeUnits);
    htmlElements.metricUnitsButton.setAttribute('metricUnitsButton-changeUnits-click', 'true');
  }

  if (units === 'metric' && htmlElements.imperialUnitsButton.getAttribute('imperialUnitsButton-changeUnits-click') !== 'true') {
    htmlElements.metricUnitsButton.classList.add('active');
    htmlElements.imperialUnitsButton.classList.remove('active');
    htmlElements.imperialUnitsButton.addEventListener('click', changeUnits);
    htmlElements.imperialUnitsButton.setAttribute('imperialUnitsButton-changeUnits-click', 'true');
  }
}
