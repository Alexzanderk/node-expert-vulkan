// export const sendContacts = (function() {
//     function sendContacts() {
//         const url = 'http://localhost:3001/client';
//         const body = {
//             contactName: document.getElementById('inputName').value,
//             contactPhone: document.getElementById('inputPhone').value,
//             date: new Date()
//         };
//         const options = {
//             method: 'POST',
//             mode: 'cors',
//             headers: {
//                 'Accept': 'application/json, text/plain',
//                 'Content-Type': 'application/json',
//                 'X-Requested-With': 'XMLHttpRequest'
//             },
//             body: JSON.stringify(body)
//         };
//         const req = new Request(url, options);
    
//         fetch(req)
//             // .then(response => {
//             //     if(response.status === 200) window.location.href = 'http://localhost:3001/';
//             // })
//             .catch(error => console.error(error));
//     }

//     const buttonSendContats = document.getElementById('customerContacts');
    
//     if (buttonSendContats) buttonSendContats.addEventListener('click', sendContacts);

// })();