import { SEARCH_FOCUS, SEARCH_BLUR } from '../contants';

const search_focus = () => ({
  type: SEARCH_FOCUS,
});

const search_blur = () => ({
  type: SEARCH_BLUR,
});

export {
  search_focus,
  search_blur,
}