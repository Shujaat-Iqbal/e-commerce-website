// Reselect Import
import { createSelector } from 'reselect';

// Input Selector
export const selectDirectory = state => state.directory;

// Output Selector
export const selectSections = createSelector(
  [selectDirectory],
  directory => directory.sections
);