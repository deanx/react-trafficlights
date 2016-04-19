jest.unmock('../src/lights-behaviour.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Cross from '../src/components/cross.jsx';
import LightsBehaviour from '../src/lights-behaviour.js';

describe('Check lights at the start', () => {
  const lightsBehaviour = new LightsBehaviour();
  lightsBehaviour.start();

  it('goAxis must have a value', () => {

    let status = lightsBehaviour.axisStatus;
    expect(status.goAxis).not.toBe(null);
  });

  it('stopAxis must have a value', () => {
    let status = lightsBehaviour.axisStatus;
    expect(status.stopAxis).not.toBe(null);
  });

  it('alertAxis must have no value', () => {
    let status = lightsBehaviour.axisStatus;
    expect(status.alertAxis).toBe(null);
  });
});


describe('Check lights after one change', () => {
  const lightsBehaviour = new LightsBehaviour();
  lightsBehaviour.start();
  lightsBehaviour.changeLights()

  it('goAxis must have a value', () => {
    let status = lightsBehaviour.axisStatus;
    expect(status.goAxis).toBe(null);
  });

  it('stopAxis must have a value', () => {
    let status = lightsBehaviour.axisStatus;
    expect(status.stopAxis).not.toBe(null);
  });

  it('alertAxis must have a value', () => {
    let status = lightsBehaviour.axisStatus;
    expect(status.alertAxis).not.toBe(null);
  });
});
