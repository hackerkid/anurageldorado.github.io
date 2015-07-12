<html>
    <head>
        <title>words game</title>
        <!-- Bootstrap -->
        <link href="style/bootstrap.css" rel="stylesheet">
        <link href="style/bootstrap-theme.min.css" rel="stylesheet">
        <link href="style/bootstrap-social-buttons/bootstrap-social.css" rel="stylesheet">
        <link href="style/bootstrap-social-buttons/font-awesome.css" rel="stylesheet">
        <link rel="stylesheet" href="style/font-awesome/css/font-awesome.css">
        <link href="style/custom.css" rel="stylesheet">
        <link rel='stylesheet' href='words.css'>
        <script src="script.js"></script>
        <script src="timer.js"></script>
        <style>
            body{
                background:#8ec1da url(images/2.jpg) no-repeat center center fixed;
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
            }
        </style>

    </head>
    <body>

<!--
if(isset($session)){
	$_SESSION['token'] = $session->getToken();
   
    $request = (new FacebookRequest( $session, 'GET', '/me' ))->execute();

    $user = $request->getGraphObject()->asArray();
    //echo print_r($user);
    
    $request = (new FacebookRequest( $session, 'GET', '/me/picture?type=large&redirect=false' ))->execute();
    $picture = $request->getGraphObject()->asArray();
    
    echo '
    <header>
        <div class="nav navbar-default fixed-top bar">
            Welcome, '.$user['name'].'
            <div class="img-box pull-right">
                <img src="'.$picture->url.'" class="img-responsive user">
            </div>
            <span class="link">Also try <a href="../">Puzzler</a>.</span>
        </div>
    </header>
    ';
}
else{
     echo '
    <header>
        <div class="nav navbar-default fixed-top bar">
            <a href = ' . $helper->getLoginUrl() . ' class="btn btn-social btn-lg btn-facebook custom-social-btn">
              <i class="fa fa-facebook"></i>
              Connect with Facebook
            </a>
            <span class="link">Also try <a href="../">Puzzler</a>.</span>
        </div>
    </header>
';
}
?>
-->
        <div class="custom-container row">
            <div class="col-sm-6 game">
                <button id='start' class="btn btn-warning">Start Game</button>
                <button id='clear' class="btn btn-danger">Clear Console</button>
                <button id='change' class="btn btn-primary hide">Change String</button>
                <button id='end' class="btn btn-danger hide">End Game</button>
                <div id='words' class="string"></div>
                <input type="text" id="input" class="hide form-control" autocomplete="off">
                <div class="hide" id="points"></div>
                <div class="countdown-timer" id="seconds"></div>
                <div id="instruct" class="text">
                    <i class="fa fa-angle-double-right"></i> You will be given a random string of letters.<br>
                    <i class="fa fa-angle-double-right"></i> Enter any valid word using the string with length greater than 2.<br>
                    <i class="fa fa-angle-double-right"></i> Our exhaustive dictionary Database verifies validity. <br>
                    <i class="fa fa-angle-double-right"></i> Press 0 to change string quickly.<br>
                    <i class="fa fa-angle-double-right"></i> Make maximum possible words before time runs out.<br>
                    <i class="fa fa-angle-double-right"></i> Have fun.
                </div>
            </div>

            <div class="col-sm-6 console" id='console'>
                <div id="response"></div>
            </div>





        </div>

        <!--
        <p class='hide'>What is the frequency of the letters of the alphabet in English?

The inventor of Morse code, Samuel Morse (1791-1872), needed to know this so that he could give the simplest codes to the most frequently used letters. He did it simply by counting the number of letters in sets of printers' type. The figures he came up with were:
12,000 	E 	2,500 	F
9,000 	T 	2,000 	W, Y
8,000 	A, I, N, O, S 	1,700 	G, P
6,400 	H 	1,600 	B
6,200 	R 	1,200 	V
4,400 	D 	800 	K
4,000 	L 	500 	Q
3,400 	U 	400 	J, X
3,000 	C, M 	200 	Z

However, this gives the frequency of letters in English text, which is dominated by a relatively small number of common words. For word games, it is often the frequency of letters in English vocabulary, regardless of word frequency, which is of more interest. We did an analysis of the letters occurring in the words listed in the main entries of the Concise Oxford Dictionary (11th edition revised, 2004) and came up with the following table:
E 	11.1607% 	56.88 	M 	3.0129% 	15.36
A 	8.4966% 	43.31 	H 	3.0034% 	15.31
R 	7.5809% 	38.64 	G 	2.4705% 	12.59
I 	7.5448% 	38.45 	B 	2.0720% 	10.56
O 	7.1635% 	36.51 	F 	1.8121% 	9.24
T 	6.9509% 	35.43 	Y 	1.7779% 	9.06
N 	6.6544% 	33.92 	W 	1.2899% 	6.57
S 	5.7351% 	29.23 	K 	1.1016% 	5.61
L 	5.4893% 	27.98 	V 	1.0074% 	5.13
C 	4.5388% 	23.13 	X 	0.2902% 	1.48
U 	3.6308% 	18.51 	Z 	0.2722% 	1.39
D 	3.3844% 	17.25 	J 	0.1965% 	1.00
P 	3.1671% 	16.14 	Q 	0.1962% 	(1)

The third column represents proportions, taking the least common letter (q) as equal to 1. The letter E is over 56 times more common than Q in forming individual English words.

The frequency of letters at the beginnings of words is different again. There are more English words beginning with the letter 's' than with any other letter. (This is mainly because clusters such as 'sc', 'sh', 'sp', and 'st' act almost like independent letters.) The letter 'e' only comes about halfway down the order, and the letter 'x' unsurprisingly comes last.</p>

        -->

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="javascript/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="javascript/bootstrap.min.js"></script>

        <script src="javascript/custom.js"></script> 

    </body>
</html>
