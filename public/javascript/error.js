document.addEventListener('DOMContentLoaded', () => {
    const elements = {
    	canvas: document.getElementById('canvas'),
    };

    const canvas = elements.canvas;
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const [paddle1X, paddle2X] = [0, canvas.width - 10];
    const [paddleWidth, paddleHeight, ballSize, winningScore] = [10, 100, 10, 10];
    let [paddle1Y, paddle2Y, ballX, ballY] = [100, 100, 50, 100];
    let [ballSpeedX, ballSpeedY, ballWidth] = [10, 4, 10];
    let [playerOneScore, playerTwoScore] = [0, 0];
    let [gameOver, win] = [false, false];

    const drawEverything = () => {
        createRectangle(0, 0, canvas.width, canvas.height, 'rgba(20, 20, 20, 1)');
        createRectangle(paddle1X, paddle1Y, paddleWidth, paddleHeight, 'rgb(0, 255, 0)');
        createRectangle(paddle2X, paddle2Y, paddleWidth, paddleHeight, 'rgb(0, 255, 0)');
        createCircle(ballX, ballY, ballWidth, 'rgb(255 208 0)');
        drawText("Player 1", 100, 100, "20px sans-serif", playerOneScore);
        drawText("Computer", canvas.width - 200, 100, "20px sans-serif", playerTwoScore);
        if (gameOver) {
            displayMessage(win ? "YOU WIN" : "GAME OVER");
        }
        for (let i = 0; i < canvas.height; i += 40) {
            createRectangle(canvas.width / 2 - 1, i, 2, 20, 'rgb(0, 255, 0)');
        }
    };

    const moveBall = () => {
        if (gameOver) return;
        chaseTheBall();
        ballX += ballSpeedX;
        ballY += ballSpeedY;
        if (ballX > canvas.width - (ballWidth * 2 + paddleWidth)) {
            if (ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
			    ballSpeedX = -ballSpeedX;
			    const newSpeed = ballY - (paddle2Y + paddleHeight / 2);
			    ballSpeedY = newSpeed * 0.35;
            } else {
			    playerOneScore++;
			    resetBall(playerOneScore);
            }
        }
        if (ballX < ballWidth * 2 + paddleWidth) {
            if (ballY > paddle1Y && ballY < paddle1Y + paddleHeight) {
			    ballSpeedX = -ballSpeedX;
			    const newSpeed = ballY - (paddle1Y + paddleHeight / 2);
			    ballSpeedY = newSpeed * 0.35;
            } else {
			    playerTwoScore++;
			    resetBall(playerTwoScore);
            }
        }
        if (ballY > canvas.height - ballWidth) ballSpeedY = -ballSpeedY;
        if (ballY < ballWidth) ballSpeedY = -ballSpeedY;
    };

    const createRectangle = (posX, posY, width, height, color) => {
        context.fillStyle = color;
        context.fillRect(posX, posY, width, height);
    };

    const createCircle = (posX, posY, radius, color) => {
        context.fillStyle = color;
        context.beginPath();
        context.arc(posX, posY, radius, 0, Math.PI * 2, true);
        context.fill();
    };

    const calculateMousePosition = (event) => {
        const rect = canvas.getBoundingClientRect();
        const root = document.documentElement;
        const mouseX = event.clientX - rect.left - root.scrollLeft;
        const mouseY = event.clientY - rect.top - root.scrollTop;
        return {  x: mouseX, y: mouseY };
    };

    const chaseTheBall = () => {
        const paddle2YCenter = paddle2Y + paddleHeight / 2;
        if (paddle2YCenter < ballY - 35) paddle2Y += 10;
        else if (paddle2YCenter > ballY + 35) paddle2Y -= 10;
    };

    const resetBall = (player) => {
        if (player >= winningScore) {
            win = player > playerTwoScore;
            playerOneScore = 0;
            playerTwoScore = 0;
            gameOver = true;
        }
        ballSpeedX = -ballSpeedX;
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
    };

    const drawText = (name, x, y, font, counter) => {
        context.font = font;
        context.fillStyle = 'rgb(0, 255, 0)';
        context.fillText(name, x, y);
        context.fillText(counter, x, y + 20);
    };

    const displayMessage = (message) => {
        context.font = "50px sans-serif";
        context.fillStyle = 'rgb(0, 255, 0)';
        context.fillText(message, canvas.width / 2 - 100, canvas.height / 3);
        context.font = "25px sans-serif";
        context.fillText("Click to continue", canvas.width / 2 - 100, canvas.height / 2 + 150);
    };

    setInterval(drawEverything, 1000 / 30);
    document.addEventListener('mousemove', event => {
        const mousePosition = calculateMousePosition(event);
        paddle1Y = mousePosition.y - paddleHeight / 2;
    });

    document.addEventListener('mousedown', () => {
        if (gameOver) gameOver = false;
    });
	
    setInterval(moveBall, 1000 / 30);
});