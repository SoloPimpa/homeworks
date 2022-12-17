const API_URL  = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';

export function getContacts(){
    return fetch(API_URL).then((res) => res.json());
}

// export function updateItem(updatedItem){
//     return fetch(API_URL + updatedItem.id,{
//         method: 'PUT',
//         body: JSON.stringify(updatedItem),
//         headers:{
//             'Content-Type': 'application/json',
//         },
//     }).then((res) => res.json());
// }

export function removeItem(id){
    return fetch(API_URL + id,{
        method: 'DELETE',
    }).then((res) => res.json());
}

export function createItem(newContact){
    return fetch(API_URL,{
        method: 'POST',
        body: JSON.stringify(newContact),
        headers:{
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}