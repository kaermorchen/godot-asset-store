import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    openPreview(photoswipe, preview) {
      const previews = this.get('model.previews');

      photoswipe.actions.open({ index: previews.indexOf(preview) });
    }
  }
});
