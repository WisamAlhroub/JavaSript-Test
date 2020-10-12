<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style href="styles.css"></style>
</head>
<body>
    <div>
        <form id="form">
            <label for="gsearch">Search for student</label>
            <input type="search" id="search" name="search">
            <input type="button" onclick="searchStudents()" value="Submit">
            <br>
            <p id="result"></p>

            <br><br>
            <label for="name">Student Name</label>
            <input type=text id="name" name="name" required><br>

            <label for="id">Student ID</label>
            <input type="text" id="id" name="id" required><br>

            <label for="major">Student Major</label>
            <select name="major" id="major">
                <option >Select</option>
                <option >Computer system Engineering</option>
                <option >Computer Science</option>
                <option >Informatoin Technology</option>
            </select><br>
            <label for="sort">Select how to sort the list</label>
            <select name="sort" id="sort">
                <option value="0">A-Z</option>
                <option value="1">Z-A</option>
            </select>
            <br><br>
            <input type="button" onclick="myFunction()" value="Submit">
        </form>
    </div>
    <div>
        <p id="panel"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>