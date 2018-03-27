import { regex } from './functions/regexForm';
import { regexPolyfill } from './functions/regexPolyfillForm';
import { tab } from './functions/tab';
import { menuMobile } from './functions/menuMobile';
import { menuCatalog } from './functions/productCatalogMenu';
import { Controller, Model, View, save, load } from './cart';
import { adminAddProps } from './adminAddProps';
import { Editor } from './editorQuillJs';
// import { tinymceEditor } from './editorTinymce';



if (document.getElementById('admin-products') && document.getElementById('add-props')) {
    adminAddProps();
}

if (document.getElementById('headerCart')) {
    const state = load();
    
    const model = new Model(state || undefined);
    model.on('change', state => save(state));
    
    const view = new View();
    const controller = new Controller(model, view);
}



if (document.querySelector('.tinymce')) {
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
}


// Quilljs

// if (document.getElementById('form-create-product')) {
//     let editor = new Editor('form-create-product', '#editor-container', {
//         modules: {
//             toolbar: '#toolbar-container',
//             clipboard: {
//                 matchVisual: false
//             }
//         },
//         placeholder: 'Полное описание товара',
//         readOnly: false,
//         theme: 'snow'
//     });

// // editor.enable(false);
// }
