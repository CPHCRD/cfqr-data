'use strict';

const expect = require('chai').expect;

const questionnaireData = require('../index.js');

describe('questionnaire module', () => {
  const questionnaireCount = 4;

  it('should return an object', () => {
    expect(questionnaireData).to.be.defined;
    expect(questionnaireData).to.be.an.object;
  });

  it('should return the package version', () => {
    expect(questionnaireData.version).to.be.defined;
    expect(questionnaireData.version).to.be.a.string;
  });

  it('should provide questionnaire elements', () => {
    expect(questionnaireData.elements).to.be.defined;
    expect(questionnaireData.elements).to.be.an.object;
    expect(Object.keys(questionnaireData.elements).length).to.be.equal(questionnaireCount);
  });

  it('should provide questionnaire scores', () => {
    expect(questionnaireData.scores).to.be.defined;
    expect(questionnaireData.scores).to.be.an.object;
    expect(Object.keys(questionnaireData.scores).length).to.be.equal(questionnaireCount);
  });

  it('should provide questionnaire translations', () => {
    expect(questionnaireData.translations).to.be.defined;
    expect(questionnaireData.translations).to.be.an.object;
  });

  it('should include translations for each questionnaire inside each language', () => {
    Object.keys(questionnaireData.translations).forEach(locale => {
      let translation = questionnaireData.translations[locale];
      expect(Object.keys(translation).length).to.be.equal(questionnaireCount);
    });
  });

  it('should provide questionnaire config', () => {
    expect(questionnaireData.config).to.be.defined;
    expect(questionnaireData.config).to.be.an.object;
    expect(Object.keys(questionnaireData.config).length).to.be.equal(questionnaireCount);
  });

});