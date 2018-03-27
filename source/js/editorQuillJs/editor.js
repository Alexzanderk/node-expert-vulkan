import Quill from 'quill'

class Editor extends Quill {
    constructor(idForm, container, options) {
        super(container, options);
        this.idForm = idForm;
        this.form = document.getElementById(this.idForm);
        this.url = this.form.getAttribute('action');
        this.method = this.form.getAttribute('method');
        this.buttonsSubmit = this.form.querySelectorAll('[type=submit]');
        this.formName = this.form.getAttribute('name');
        this.data;


        
        
        this.buttonsSubmit.forEach(btn => btn.addEventListener('click', (event) => {
            event.preventDefault();
            this.createFormData(this.formName);
            
            return this.fetchSendForm(this.method, this.url, this.data);
        }));

    }

    fetchSendForm(method, url, body) {
        let options = {
            method: method,
            credentials: "same-origin",
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json',
                'Accept-Charset': 'utf-8',
                'X-Requested-With': 'XMLHttpRequest'
            },
            mode: 'cors',
            body: JSON.stringify(body)

        };
        const req = new Request(url, options);

        fetch(req)
            .then(res => console.log(res))
            .catch(error => new Error('Ошибка в отправке'));
    }

    createFormData(formName) {
        let forms = [...document.forms];
        let forma;
        forms.forEach(form => {
            if (form.getAttribute('name') === formName) {
                forma = form;
            }
        });

        
        let g = this.getContents();
        console.log(editor.root);
        this.data = new FormData(forma);
        g.forEach(ga => {
            console.log(ga.insert)});
    }

    get getFormData() {
        return this.data;
    }


}

export default Editor;