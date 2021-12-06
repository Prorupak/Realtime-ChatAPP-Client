'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


// ==============================
// Navigation
// ==============================

/* ARIA label for the next button */


// NOTE: props aren't used by default for some getters but consumers may need
// them, this needs to be reflected in the flow type.

/* eslint-disable no-unused-vars */

function getNextLabel(_ref) {
  var currentIndex = _ref.currentIndex,
      views = _ref.views;

  return 'Show slide ' + (currentIndex + 2) + ' of ' + views.length;
}

/* ARIA label for the previous button */
function getPrevLabel(_ref2) {
  var currentIndex = _ref2.currentIndex,
      views = _ref2.views;

  return 'Show slide ' + currentIndex + ' of ' + views.length;
}

/* HTML title for the next button */
function getNextTitle(props) {
  return 'Next (right arrow)';
}

/* HTML title for the previous button */
function getPrevTitle(props) {
  return 'Previous (left arrow)';
}

// ==============================
// Header
// ==============================

/* ARIA label for the close button */
function getCloseLabel(props) {
  return 'Close (esc)';
}
/* ARIA label for the fullscreen button */
function getFullscreenLabel(_ref3) {
  var isFullscreen = _ref3.isFullscreen;

  return isFullscreen ? 'Exit fullscreen (f)' : 'Enter fullscreen (f)';
}

// ==============================
// View
// ==============================

/* alt text for each image in the carousel */
function getAltText(_ref4) {
  var data = _ref4.data,
      index = _ref4.index;

  if (data.alt) {
    if (typeof data.alt !== 'string') {
      console.error('Image ' + (index + 1) + ' had a non-string alt property, which will probably render incorrectly.\nInstead of a plain string it was ', data.alt);
    }

    return data.alt;
  }

  if (data.caption) {
    if (typeof data.caption !== 'string') {
      console.warn('Image ' + (index + 1) + ' has a non-string caption, but no alt\xA0value provided. This will probably make the alt prop unintelligible for screen readers. Is this intentional?');
    }

    return data.caption;
  }

  return 'Image ' + (index + 1);
}

// ==============================
// Exports
// ==============================

exports.default = {
  getAltText: getAltText,
  getNextLabel: getNextLabel,
  getPrevLabel: getPrevLabel,
  getNextTitle: getNextTitle,
  getPrevTitle: getPrevTitle,
  getCloseLabel: getCloseLabel,
  getFullscreenLabel: getFullscreenLabel
};