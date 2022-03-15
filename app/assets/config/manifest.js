//= link_tree ../images
//= link_directory ../stylesheets .css

//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .


$(document).on('turbolinks:load', function() {
    $('.ui.dropdown') .dropdown();
})

