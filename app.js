//•	Gauti duomenis (GET): https://jsonplaceholder.typicode.com/posts

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

// Gauti vieną įrašą, detales (GET): https://jsonplaceholder.typicode.com/posts/{ID}

// document.getElementById("showData").addEventListener("click", function (args) {
//     if (args.target.classList.contains("e-rowcell")) {
//         let rowInfo = grid.getRowInfo(args.target);
//         // Get row information
//         console.log(rowInfo.rowData);

function getData() {
    // let row = this.dataItem
    // document.getElementById('showData').querySelectorAll('.row-data')
}

// Pridėti naują įrašą (POST, šis endpoint nepridės įrašo serveryje, o grąžins jums tą, kurį siuntėte): https://jsonplaceholder.typicode.com/posts
function addData() {
    window.open('https://jsonplaceholder.typicode.com/posts')
}