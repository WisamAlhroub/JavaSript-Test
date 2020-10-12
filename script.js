let students = [];
let ctr = 0;
function myFunction(){
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let major = document.getElementById("major").value;
    
    students.push({
        stdName : name,
        stdId : id,
        stdMajor : major,
    });

    z_a = document.getElementById("sort").value;

    if(!z_a)
        students.sort((a, b) => a.stdName.localeCompare(b.stdName, undefined, { caseFirst: "upper" }));
    else students.sort((a, b) => b.stdName.localeCompare(a.stdName, undefined, { caseFirst: "upper" }));

    document.getElementById("panel").innerHTML = ``;
    

    students.forEach(element => {
        document.getElementById("panel").innerHTML += `Student No. ${ctr}:<br>` + element.stdName + '<br>' + element.stdId + '<br>' + element.stdMajor + '<br><br>';
        ctr++;
    });
    ctr = 0;
}

function searchStudents(){
    let name = document.getElementById("search").value;
    let isFound = false;
    students.forEach(element => {
        if (element.stdName.indexOf(name) !== -1){
            isFound = true;
            document.getElementById("result").innerHTML = "Results are: " + element.stdName + '<br>' + element.stdId + '<br>' + element.stdMajor + '<br><br>';
        }
    });
    if(!isFound)
        document.getElementById("result").innerHTML = "No Results!!";
}


