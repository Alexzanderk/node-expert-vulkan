tinymce.init({
    selector: "textarea.tinymce",
    branding: false,
    height: 300,
    plugins: 'code print preview fullpage  searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
    toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | code link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent',
    image_advtab: true,
    hidden_input: false,
    setup: function (editor) {
        editor.on('init', function (e) {
            let desc = document.querySelector('input[type=hidden]').value;
            editor.setContent(desc);
        });
    },
    init_instance_callback: function (editor) {
        editor.on('PostProcess', function (e) {
            console.log(editor);
            let content = editor.getBody();
            let desc = document.querySelector('input[type=hidden]');
            desc.value = content.innerHTML;
        });
    }
});

export const tinymceEditor = function() {
    tinymce;
}