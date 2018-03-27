// export default (function () {
// tinymce.init({
//     selector: 'textarea',
//     height: 500,
//     menubar: false,
//     plugins: [
//         'emoticons',
//         'advlist autolink lists link image charmap print preview anchor textcolor',
//         'searchreplace visualblocks code fullscreen',
//         'insertdatetime media table contextmenu paste code help wordcount'
//     ],
//     toolbar: 'insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
//     content_css: [
//         '//fonts.googleapis.com/css?family=Roboto',
//         '//www.tinymce.com/css/codepen.min.css']
// });

tinymce.init({
    selector: "textarea.tinymce",  // change this value according to your HTML
    branding: false,
    height: 300,
    plugins: 'code print preview fullpage  searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
    toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | code link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent',
    image_advtab: true,
    hidden_input: false,
    
    init_instance_callback: function (editor) {
        editor.on('Change', function (e) {
            console.log('CHanges');
        });
        editor.on('PostProcess', function (e) {
            let content = editor.getBody();
            let desc = document.querySelector('input[name=description]');
            desc.value = content.innerHTML;
        });
    }
});

// })();

module.exports = tinymce;