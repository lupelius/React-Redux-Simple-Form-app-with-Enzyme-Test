import React from 'react';
import {filterValidation, filterRegexp} from './utils';
import questions from './components/organisms/questions/questions.json'

describe('Utility Functions', () => {
  it('Should validate correct regexp', () => {
    expect(filterRegexp(
      questions[0].validation[0].regexp,
      "Serdar"
      )).toBe(true);
  });

  it('Should invalidate incorrect regexp', () => {
    expect(filterRegexp(
      questions[0].validation[0].regexp,
      "abc0%"
      )).toBe(false);
  });

  it('Should validate correct regexp for q2', () => {
    expect(filterRegexp(
      questions[1].validation[0].regexp,
      22
      )).toBe(true);
  });

  it('Should invalidate incorrect regexp for q2', () => {
    expect(filterRegexp(
      questions[1].validation[0].regexp,
      "abc"
      )).toBe(false);
  });

  it('Should validate correct age of 22', () => {
    expect(
      filterValidation(
        questions[1].comparisonValidation[0],
        "filterParameter",
        questions[1].comparisonValidation[0].filterCondition,
        22
      )).toBe(true);
  });

  it('Should validate correct age again of 18', () => {
    expect(
      filterValidation(
        questions[1].comparisonValidation[0],
        "filterParameter",
        questions[1].comparisonValidation[0].filterCondition,
        18
      )).toBe(true);
  });

  it('Should invalidate incorrect age of 17', () => {
    expect(
      filterValidation(
        questions[1].comparisonValidation[0],
        "filterParameter",
        questions[1].comparisonValidation[0].filterCondition,
        17
      )).toBe(false);
  });

  it('Should validate correct old age of 64', () => {
    expect(
      filterValidation(
        questions[1].comparisonValidation[1],
        "filterParameter",
        questions[1].comparisonValidation[1].filterCondition,
        64
      )).toBe(true);
  });

  it('Should invalidate incorrect old age of 65', () => {
    expect(
        filterValidation(
        questions[1].comparisonValidation[1],
        "filterParameter",
        questions[1].comparisonValidation[1].filterCondition,
        65
      )).toBe(false);
  });
});