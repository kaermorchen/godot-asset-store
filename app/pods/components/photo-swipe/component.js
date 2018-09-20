import PhotoSwipe from 'ember-photoswipe/components/photo-swipe';

export default PhotoSwipe.extend({
  itemProperties: ['html'], // eslint-disable-line
  history: false,
  bgOpacity: 0.7
});
