// https://jsonplaceholder.typicode.com/posts/

fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(res =>{
        res.json()
            .then(data =>{
                console.log(data);
                if (data.length > 0){
                    let temp = '';

                    data.forEach((u)=>{
                        temp += '<tr>';
                        temp += '<td>'+u.userId+'</td>';
                        temp += '<td>'+u.id+'</td>';
                        temp += '<td>'+u.title+'</td>';
                        temp += '<td>'+u.body+'</td></tr>';
                    })
                    document.getElementById('data').innerHTML = temp;
                }
            })
    })


// let url = 'https://jsonplaceholder.typicode.com/posts/';
//
// async function tableData() {
//     let response = await fetch(url);
//     let data = await response.json();
//     let { userId, id, title, body } = data;
//     console.log(userId);
//     console.log(id);
//     console.log(title);
//     console.log(body);
//     // console.log(data.userId);
//     // console.log(data.id);
//     // console.log(data.title);
//     // console.log(data.body);
// }
//
// tableData();

