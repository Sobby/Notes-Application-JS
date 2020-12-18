showNotes();

// Adding the Notes 

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = " ";


    showNotes();

    console.log(notesObj);
})

function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let blankstring = "";
    notesObj.forEach(function (element, index) {
        blankstring += `
        <div class="noteCard my-2 mx-2 mz-3 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Notes ${index + 1}</h5>
                <p class="card-text">${element} </p>
                <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
                <button id="${index}" onclick="editNotes(this.id)" class="btn btn-primary">Edit Note</button>
            </div>
        </div>`;
    });

    let notesElement = document.getElementById('notes');

    if (notesObj.length != 0) {
        notesElement.innerHTML = blankstring;
    } else {
        notesElement.innerHTML = `No Notes added as of now`;
    }

}

function deleteNotes(index) {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();
}

function editNotes(index) {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let divElements = document.createElement('div');
    let container = document.querySelector('.container');
    let first = document.getElementById('');


    showNotes();
}