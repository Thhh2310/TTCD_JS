
//sự kiện
function handleClickAdd(){
    var objectInfo = {
        fullName: "",
        dateBirth: "",
        genderOption: "",
        phoneNumber: "",
        email: "",
        address: "",
        faculty: "",
        classNameOtion: "",
    }

     objectInfo.fullName = document.getElementById("Name").value;
     objectInfo.dateBirth = document.getElementById("DateBirth").value;
     objectInfo.genderOption = document.getElementById("Gender").value;
     objectInfo.phoneNumber = document.getElementById("PhoneNumber").value;
     objectInfo.email = document.getElementById("Email").value;
     objectInfo.address = document.getElementById("Address").value;
     objectInfo.faculty = document.getElementById("Faculty").value;
     objectInfo.classNameOtion = document.getElementById("Class").value;

    // var gender = "";
    // var className = "";
    // if(objectInfoclassNameOtion == "0") className="IT1";
    // else if(objectInfoclassNameOtion == "1") className="IT2";
    // else if(objectInfoclassNameOtion == "2") className="IT3";

    var htmlTbody = `<tr class="align-middle">
        <th scope="row">2</th>
        <td>000</td>
        <td>${objectInfo.fullName}</td>
        <td>${objectInfo.classNameOtion}</td>
        <td>${objectInfo.faculty}</td>
        <td>${objectInfo.address}</td>
        <td>${objectInfo.phoneNumber}</td>
        <td>${objectInfo.email}</td>
        <td class="d-flex justify-content-evenly">
            <button type="button" class="btn btn-outline-primary">
                <i class="bi bi-eye"></i>
                Details
            </button>
            <button type="button" class="btn btn-outline-info"
                style="margin:0 0.5rem 0 0.5rem;">
                <i class="bi bi-arrow-repeat"></i>
                Update
            </button>
            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <i class="bi bi-trash3"></i>
                Delete
            </button>
        </td>
    </tr>`;

    //thêm bản ghi vào html
    document.querySelector("tbody").innerHTML += htmlTbody;

    // $("tbody").append(htmlTbody);

    //reset form
    handleClickReset();
    document.querySelector(".student-details").classList.remove("student-details-show");
    console.log(objectInfo);
}


function handleClickReset(){
    document.getElementById("Name").value = "";
    document.getElementById("DateBirth").value = "";
    document.getElementById("Gender").value = "";
    document.getElementById("PhoneNumber").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Address").value = "";
    document.getElementById("Faculty").value = "";
    document.getElementById("Class").value = "";
}

document.querySelector(".details").addEventListener('click', function(){
    // alert("ok");
    document.querySelector(".student-details").classList.view("student-details-show");
});

document.querySelector(".add-new").addEventListener('click', function(){
    // alert("ok");
    document.querySelector(".student-details").classList.add("student-details-show");
});

// // jquery- $("#id").click(function()...)
// $(".add-new").click(function(){
//     $(".student-details").addClass("student-details-show");
//     // $(".student-details").css("background-color","violet");
// });

document.querySelector(".btn-cancel").addEventListener('click', function(){

    document.querySelector(".student-details").classList.remove("student-details-show");
});

// $(".btn-cancel").click(function(){
//     $(".student-details").removeClass("student-details-show");
//     // $(".student-details").css("background-color","violet");
// });



