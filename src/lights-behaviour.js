import _ from 'lodash';
class LightsBehaviour {
  constructor() {
    let axisStatus;
    this.refreshTime = 4000;
  }

  changeLights() {

    _updateAxisStatus(this.axisStatus);

    _goLightsByAxis(this.axisStatus.goAxis);
    _alertLightsByAxis(this.axisStatus.alertAxis);
    _stopLightsByAxis(this.axisStatus.stopAxis);

    setTimeout(function(thisObj) { thisObj.changeLights(); }, this.refreshTime, this);
  }

  start() {
    this.axisStatus = _calculateAxisToStart();
    _goLightsByAxis(this.axisStatus.goAxis);
    _stopLightsByAxis(this.axisStatus.stopAxis);
    setTimeout(function(thisObj, refreshTime) { thisObj.changeLights(this.refreshTime); }, this.refreshTime, this);
  }

}

function _updateAxisStatus(axisStatus) {
  if(axisStatus.alertAxis === null) {
    axisStatus.alertAxis = axisStatus.goAxis;
    axisStatus.goAxis = null;
  } else {
    axisStatus.goAxis = axisStatus.stopAxis;
    axisStatus.stopAxis = axisStatus.alertAxis;
    axisStatus.alertAxis = null;
  }
}

function _calculateAxisToStart() {
  const goAxis = (parseInt(Math.random() * 2 + 1) > 1) ? "NS" : "WS";
  const stopAxis = goAxis === "NS" ? "WS" : "NS";
  return {
    goAxis: goAxis,
    alertAxis: null,
    stopAxis: stopAxis
  };
}

function _goLightsByAxis(axis) {
  _.map(_getElementByAxis(axis), (element) => {
    element.firstChild.classList.remove('disabled-light');
    element.lastChild.classList.remove('red-light');

    element.firstChild.classList.add('green-light');
    element.lastChild.classList.add('disabled-light');

    element.childNodes[1].classList.remove('yellow-light');
    element.childNodes[1].classList.add('disabled-light');
  });
}

function _stopLightsByAxis(axis) {
  _.map(_getElementByAxis(axis), (element) => {
    element.lastChild.classList.remove('disabled-light');
    element.firstChild.classList.remove('green-light');

    element.lastChild.classList.add('red-light');
    element.firstChild.classList.add('disabled-light');

    element.childNodes[1].classList.remove('yellow-light');
    element.childNodes[1].classList.add('disabled-light');
  });
}

function _alertLightsByAxis(axis) {
  _.map(_getElementByAxis(axis), (element) => {
    element.childNodes[1].classList.remove('disabled-light');
    element.childNodes[1].classList.add('yellow-light');
    element.firstChild.classList.remove('green-light');
    element.firstChild.classList.add('disabled-light');
    element.lastChild.classList.remove('red-light');
  });
}

function _getElementByAxis(axis) {
  return document.getElementsByClassName(axis + "-lights");
}


module.exports = LightsBehaviour;
