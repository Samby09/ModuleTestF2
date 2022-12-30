import data from "./data.json" assert {type: 'json'};
console.log(data);

let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchBtn");

let sortAZ = document.getElementById("sortByAZ");
let sortZA = document.getElementById("sortByZA");
let sortMarks = document.getElementById("sortByMarks");
let sortPassing = document.getElementById("sortByPassing");
let sortClass = document.getElementById("sortByClass");
let sortGender = document.getElementById("sortByGender");
let femaleTable = document.getElementById("femaleTable");
let maleTable = document.getElementById("maleTable");


function mapData(data) {
    tableBody.innerHTML = "";

    data.map((item) => {
        let tableItem = document.createElement("tr");
        tableItem.innerHTML =
        `
            <td>${item.id}</td>
            <td><img src="${item.img_src}"/> ${item.first_name} ${item.last_name}</td>
            <td>${item.gender}</td>
            <td>${item.class}</td>
            <td>${item.marks}</td>
            <td>${item.passing ? "passed" : "failed"}</td>
            <td>${item.email}</td>
        `
        tableBody.append(tableItem);
    });
    
}
mapData(data);


window.searchTables = function searchTables() {
    let search = searchInput.value;
    let copyData = data.filter((item)=>{
        return item.first_name.toLowerCase().includes(search.toLowerCase()) || item.last_name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase())
    });
    mapData(copyData);
}



// Sorted in ascending order
window.sortAZ = function sortAZ() {
    let ascendingData = data.sort((a, b) => {
        if ((a.first_name < b.first_name)) {
            return -1;
        }
        else if ((a.first_name > b.first_name)) {
            return 1;
        }
        else{
            return a.last_name.localeCompare(b.last_name);
        }
    })
    mapData(ascendingData);
}



// Sorted in descending order
window.sortZA = function sortZA() {
    let descendingData = data.sort((a, b) => {
        if ((a.first_name > b.first_name)) {
            return -1;
        }
        else if ((a.first_name < b.first_name)) {
            return 1;
        }
        else{
            return b.last_name.localeCompare(a.last_name);
        }
    })
    mapData(descendingData);
}



// Sorted marks in ascending order
window.sortMarks = function sortMarks() {
    let increasingMarks = data.sort((a, b) => {
        if (a.marks < b.marks) {
            return -1;
        }
            })
    mapData(increasingMarks);
}



// Sorting for passed students
window.sortPassing = function sortPassing() {
    let passedStudent = data.filter((item)=>{
        return item.passing;
    })
    mapData(passedStudent);
}



// Sorted Class in ascending order
window.sortClass = function sortClass() {
    let classSort = data.sort((a, b) => {
        if ((a.class < b.class)) {
            return -1;
         }
        })
    mapData(classSort);
}



window.sortGender = function sortGender(){
    let maleSort = data.filter((item)=>{
        return item.gender === "Male"
    })
    mapData(maleSort);
    
    let femaleSort = data.filter((item)=>{
        return item.gender === "Female"
    })
    mapData(femaleSort);
}