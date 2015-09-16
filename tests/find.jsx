import React from 'react'
import { expect } from 'chai';

import TestComponent from './component'
import TinyComponent from './tiny-component'

import Test from '../src/legit-tests'
import {Find} from '../src/middleware'

describe('Find middleware', () => {

  it('should find div', () => {
    Test(<TestComponent/>)
    .use(Find, 'div')
    .test(function() {
      expect(this.helpers.elements.div[0].props.children).to.be.equal(undefined)
    })
  });

  it('should find p tag with class', () => {
    Test(<TestComponent/>)
    .use(Find, '.box')
    .test(function() {
      expect(this.helpers.elements.box.props.children).to.be.equal('found me!')
    })
  });

  it('should find a rendered component', () => {
    Test(<TestComponent/>)
    .use(Find, TinyComponent)
    .test(function() {
      expect(this.helpers.elements.TinyComponent).to.be.ok;
    });
  });
});
