const $ = window.jQuery;

export default function jQueryInit() {
  $(document).ready(function () {
    console.log('jQuery is ready!');

    jQuery(document).on('gform_confirmation_loaded', function (event, formId) {
      $('#form').hide();
      $('#confirmation').show();
    });



  });
}
