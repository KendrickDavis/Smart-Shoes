<!DOCTYPE html>
<html lang="en">
<head>
    <!--
        Author: Kendrick Davis
        Date: 10/31/22
       -->

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Smart Shoes</title>
    <link href="home.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
<?php include 'databaseConnection.php'; ?>
    <header>
        <a href="home.php"><img src="shoe.png" alt="Smart Shoes" id="logoimg"/></a>
        <h6>
        ..
        </h6>
        <div class="navbar">
            <a id="a1" href="home.php">Home</a>
            <a id ="a1" href="searchPage.php?filter=men">Men</a>
            <a id="a1" href="searchPage.php?filter=women">Woman</a>
            <a id="a1" href="searchPage.php?filter=kids">Kids</a>
            <a id="a1" href="paymentPage.php">Cart</a>
            <div class="subnav">
                <button class="subbut">Contact<i class="fa fa-caret-down"></i></button>
                <div class="content">
                    <ul>
                    <li id="p1">Phone: 337-666-000</li>
                    <li id="p1">Email: smartshoe@webmail.com</li>
                    <li id="p1"><a href="contactPage.html">Ticket Submission</a></li>
                </ul>
                </div>
            </div>
        </div>
    </header>
    <div class="searchbar">
        <form action="searchPage.php" method="GET">
            <div class="searchbar"> <!--Searchbar-->
                <input type="text" placeholder="Search..." name="search" value="<?php if(isset($_GET['search'])){echo $_GET['search'];} ?>">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    <div class="picture">
        <img src="main.jpg" style="width: 90%">
    </div>
    <div>
        <h1>Popular Products</h1>
    </div>
    <div class="row">
        <div class="column">
            <a href="searchPage.php"><img src="popular1.jpg" style="width:100%"></a>
        </div>
        <div class="column">
            <a href="searchPage.php"><img src="popular2.jpg" style="width:100%"></a>
        </div>
        <div class="column">
            <a href="searchPage.php"><img src="popular3.jpg" style="width:100%"></a>
        </div>
        <div class="column">
            <a href="searchPage.php"><img src="popular4.jpg" style="width:100%"></a>
        </div>
    </div>
    <footer>
        Smart Shoes &copy; 2022 All Rights Reserved
    </footer>
</body>
</html>