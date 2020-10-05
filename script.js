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
        viewed : true
    });

    ctr++; 
    students.forEach(element => {
        if(element.viewed)
            document.getElementById("panel").innerHTML += `Student No. ${ctr}:<br>` + element.stdName + '<br>' + element.stdId + '<br>' + element.stdMajor + '<br><br>';
        element.viewed = false;
    });

    students.sort(function(a, b){
        let x = a.stdName.toLowerCase();
        let y = b.stdName.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
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


