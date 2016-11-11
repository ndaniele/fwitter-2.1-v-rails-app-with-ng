(function() {

  'use strict';

  var pane = {
    // need transclustion
    transclude: true,
    // require a parent component(tabs)
    require: {
      TabsControler: '^tabs'
    },
    // title = '@'
    bindings: {
      title: '@'
    },
    // controller for this component
    controller: PaneController,
    // template URL
    templateUrl: 'components/tab-component/pane.html'
  }


// upon initialization add a pane to the parent tabs component

  function PaneController() {
      this.$onInit = function() {
        this.TabsControler.addPane(this)
      } 

  }

  angular
    .module('fwitter')
    .component('pane', pane)


}());