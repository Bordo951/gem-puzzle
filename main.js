/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/builderHTML.js":
/*!**********************************!*\
  !*** ./assets/js/builderHTML.js ***!
  \**********************************/
/*! exports provided: builderHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "builderHTML", function() { return component; });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./assets/js/helper.js");


let component = {
    createSavedGameHTML: function (savedGame) {
        let innerSavedGameText = this.buildInnerSavedGameText(savedGame);
        return `<button data-state-id="${savedGame.stateId}" class="load-game">${innerSavedGameText}</button>`;
    },

    buildInnerSavedGameText: function(savedGame) {
        let savedAtText = savedGame.savedAt,
            fieldSizeText = savedGame.fieldSize,
            gameTimeText = `${_helper__WEBPACK_IMPORTED_MODULE_0__["helper"].addZero(savedGame.gameTime.min)}:${_helper__WEBPACK_IMPORTED_MODULE_0__["helper"].addZero(savedGame.gameTime.sec)}`,
            gameMovesText = savedGame.gameMoves;

    return `${savedAtText}: ${fieldSizeText}x${fieldSizeText}, time:${gameTimeText}, moves:${gameMovesText}`;
    },

    createIconHTML: function (icon_name, icon_caption) {
        if (icon_caption === undefined) {
            icon_caption = "";
        }
        return `<i class="material-icons">${icon_name}</i>${icon_caption}`;
    },

    createAudioHTML: function (key, src) {
        return `<audio data-key="${key}" src="${src}"></audio>`;
    },

    createSizeOptionHTML: function (fieldSize, currentFieldSize) {
        let selectedAttribute = '';

        if(fieldSize === currentFieldSize) {
            selectedAttribute = 'selected="selected" ';
        }

        return `<option ${selectedAttribute}value="${fieldSize}">${fieldSize}x${fieldSize}</option>`;
    },

    createFieldOptionHTML: function (field, currentField) {
        let selectedField = '';

        if(field === currentField) {
            selectedField = 'selected="selected" ';
        }

        return `<option ${selectedField}value="${field}">${field}</option>`;
    }
}



/***/ }),

/***/ "./assets/js/helper.js":
/*!*****************************!*\
  !*** ./assets/js/helper.js ***!
  \*****************************/
/*! exports provided: helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helper", function() { return component; });
let component = {
    addZero: function(n) {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    },

    getRandomStateGameId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    getRandomInt: function(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}



/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./assets/js/helper.js");
/* harmony import */ var _builderHTML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builderHTML */ "./assets/js/builderHTML.js");



const fieldHTML = document.createElement('div'),
    overlayHTML = document.createElement('div'),
    overlaySavedGamesHTML = document.createElement('div'),
    newGameMenuHTML = document.createElement('button'),
    boardHTML = document.createElement('div'),
    movesHTML = document.createElement('div'),
    pauseGameHTML = document.createElement('button'),
    boxTimeHTML = document.createElement('div'),
    timeHTML = document.createElement('time'),
    gameSoundHTML = document.createElement('button'),
    gameSounds = ['click-cell', 'sound-press'],
    boxFieldSizeHTML = document.createElement('div'),
    fieldSizeHTML = document.createElement('select'),
    fieldSizes = [3, 4, 5, 6, 7, 8],
    gameFields = ['numbers', 'image'],
    saveGameHTML = document.createElement('button'),
    savedGamesHTML = document.createElement('button'),
    savedGamesContainerHTML = document.createElement('div'),
    backButtonHTML = document.createElement('button'),
    postscriptHTML = document.createElement('p'),
    boxGameImageHTML = document.createElement('div'),
    gameImageHTML = document.createElement('select');
let cellEmpty = {},
    fieldSizeForSave = 0,
    fieldSize = 4,
    cellSize = 400 / fieldSize,
    fieldCells = [],
    cellsNumbers = Math.pow(fieldSize, 2) - 1,
    fieldNumbers = [... Array(cellsNumbers).keys()],
    gameMovesHtml = document.getElementsByClassName('game-moves'),
    gameMoves = 0,
    audioContainer = document.createElement('div'),
    isGameSound = true,
    stateId = null,
    gameTime = new Date(0, 0, 0, 0, 0, 0),
    gameTimeCounter,
    isGameTimeCounting = false,
    gameField = 'numbers',
    gameFieldImageId = null;

newGameMenuHTML.addEventListener('click', startGame);
pauseGameHTML.addEventListener('click', pauseGame);
gameSoundHTML.addEventListener('click', turnOffSound);
fieldSizeHTML.addEventListener('change', handleFieldSizeChange);
saveGameHTML.addEventListener('click', saveGame);
savedGamesHTML.addEventListener('click', handleClickOnSavedGames);
backButtonHTML.addEventListener('click', handleClickOnBackButton);
gameImageHTML.addEventListener('change', handleGameFieldChange);

function setRandomGameFieldImage() {
    let newGameFieldImageId = gameFieldImageId;

    while(gameFieldImageId === newGameFieldImageId){
        newGameFieldImageId = _helper__WEBPACK_IMPORTED_MODULE_0__["helper"].getRandomInt(150);
    }

    gameFieldImageId = newGameFieldImageId;
}

function handleGameFieldChange() {
    gameField = this.value;
    setRandomGameFieldImage();
}

function handleClickOnBackButton() {
    overlaySavedGamesHTML.remove();
    overlayHTML.classList.remove('hidden');
}

function getSavedGameByStateId(stateId) {
    let savedGames = JSON.parse(localStorage.getItem('savedGames')),
        result = null;

    savedGames.forEach(function (savedGame) {
        if(savedGame.stateId === stateId) {
            result = savedGame;
        }
    });

    return result;
}

function handleClickOnSavedGame() {
    let savedGame = getSavedGameByStateId(this.dataset.stateId);

    resumeGame();
    fieldCells = savedGame.fieldCells;
    fieldNumbers = savedGame.fieldNumbers;

    pauseGameHTML.disabled = false;

    gameMoves = savedGame.gameMoves;
    gameMovesHtml[0].innerHTML = savedGame.gameMoves;

    fieldSize = savedGame.fieldSize;
    cellSize = 400 / fieldSize;
    fieldCells = [];
    cellsNumbers = Math.pow(fieldSize, 2) - 1;

    removeCells();
    createCells();

    isGameTimeCounting = true;
    gameTime = new Date(0, 0, 0, 0, 0, 0);
    gameTime.setMinutes(savedGame.gameTime.min);
    gameTime.setSeconds(savedGame.gameTime.sec);

    clearTimeout(gameTimeCounter);
    showTime();

    overlaySavedGamesHTML.remove();
    overlayHTML.remove();

    removeCells();
    createCells();
}

function handleClickOnSavedGames() {
    overlayHTML.classList.add('hidden');

    overlaySavedGamesHTML.className = 'overlay';
    fieldHTML.append(overlaySavedGamesHTML);

    savedGamesContainerHTML.className = 'saved-games-container';
    savedGamesContainerHTML.innerHTML = getSavedGamesHTML();
    overlaySavedGamesHTML.append(savedGamesContainerHTML);

    let loadGamesElements = document.getElementsByClassName('load-game');

    for (let loadGamesElement of loadGamesElements) {
        loadGamesElement.addEventListener('click', handleClickOnSavedGame);
    }

    backButtonHTML.classList.add('menu-item');
    backButtonHTML.classList.add('back-button');
    backButtonHTML.innerHTML = _builderHTML__WEBPACK_IMPORTED_MODULE_1__["builderHTML"].createIconHTML('arrow_back', 'Back');
    overlaySavedGamesHTML.append(backButtonHTML);
}

function getSavedGamesHTML() {
    let savedGamesHTML = '',
        savedGames = JSON.parse(localStorage.getItem('savedGames'));

    if(savedGames === null) {
        savedGames = [];
    }

    savedGames.forEach(function (savedGame) {
        savedGamesHTML += _builderHTML__WEBPACK_IMPORTED_MODULE_1__["builderHTML"].createSavedGameHTML(savedGame);
    });

    if(savedGames.length === 0) {
        savedGamesHTML = '<p class="plain-text">No saved games</p>'
    }

    return savedGamesHTML;
}

function prepareGameForSave() {
    saveGameHTML.disabled = false;
    stateId = _helper__WEBPACK_IMPORTED_MODULE_0__["helper"].getRandomStateGameId();
    fieldSizeForSave = fieldSize;
}

function saveGame() {
    saveGameHTML.innerHTML = _builderHTML__WEBPACK_IMPORTED_MODULE_1__["builderHTML"].createIconHTML('check_circle_outline', 'Game is saved!');
    let currentParamsGame = getParamsForSaveGame();
    saveParamsToStorage(currentParamsGame);
    setTimeout(() => {  saveGameHTML.disabled = true; }, 1500);

}

function getParamsForSaveGame() {
    return {
        stateId: stateId,
        gameTime: {
            min: gameTime.getMinutes(),
            sec: gameTime.getSeconds()
        },
        gameMoves: gameMoves,
        fieldSize: fieldSizeForSave,
        fieldNumbers: fieldNumbers,
        fieldCells: fieldCells,
        savedAt: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    };
}

function saveParamsToStorage(params) {
    let savedGames = JSON.parse(localStorage.getItem('savedGames')),
        isReadyForSave = true;

    if(savedGames === null) {
        savedGames = [];
    }

    savedGames.forEach(function (saveGame) {
        if (saveGame.stateId === stateId) {
            isReadyForSave = false;
        }
    });

    if (isReadyForSave) {
        savedGames.push(params);
        localStorage.setItem('savedGames', JSON.stringify(savedGames));
    }
}

function handleFieldSizeChange() {
    fieldSize = parseInt(this.value);
    cellSize = 400 / fieldSize;
    cellsNumbers = Math.pow(fieldSize, 2) - 1;
    fieldNumbers = [... Array(cellsNumbers).keys()]
        .sort(() => Math.random() - 0.5);
}

function turnOffSound () {
    playSoundByKey('sound-press');

    gameSoundHTML.innerHTML = _builderHTML__WEBPACK_IMPORTED_MODULE_1__["builderHTML"].createIconHTML("volume_off");
    isGameSound = false;

    gameSoundHTML.removeEventListener('click', turnOffSound, false);
    gameSoundHTML.addEventListener('click', turnOnSound);
}

function turnOnSound() {
    isGameSound = true;
    gameSoundHTML.innerHTML = _builderHTML__WEBPACK_IMPORTED_MODULE_1__["builderHTML"].createIconHTML("volume_up");

    gameSoundHTML.removeEventListener('click', turnOnSound, false);
    gameSoundHTML.addEventListener('click', turnOffSound);

    playSoundByKey('sound-press');
}

function showTime() {
    let min = gameTime.getMinutes(),
        sec = gameTime.getSeconds();

    // Output Time
    timeHTML.innerHTML = `${_helper__WEBPACK_IMPORTED_MODULE_0__["helper"].addZero(min)}<span>:</span>${_helper__WEBPACK_IMPORTED_MODULE_0__["helper"].addZero(sec)}`;
    updateTime();
    gameTimeCounter = setTimeout(showTime, 500);
}

function updateTime() {
    if(isGameTimeCounting) {
        gameTime.setMilliseconds(gameTime.getMilliseconds() + 500);
    }
}

function playSoundByKey(key) {
    let currentAudio;

    if (isGameSound) {
        currentAudio = document.querySelector('audio[data-key=' + key + ']');
        currentAudio.currentTime = 0;
        currentAudio.play();
    }
}

function createAudio() {
    let audioHtml = '';

    gameSounds.forEach(function (sound) {
        let src = `./media/sound/${sound}.mp3`,
            key = `${sound}`;

        audioHtml += _builderHTML__WEBPACK_IMPORTED_MODULE_1__["builderHTML"].createAudioHTML(key, src);
    });

    return audioHtml;
}

function resumeGame() {
    pauseGameHTML.innerHTML = _builderHTML__WEBPACK_IMPORTED_MODULE_1__["builderHTML"].createIconHTML('pause_circle_outline', 'Pause Game');
    isGameTimeCounting = true;
    pauseGameHTML.removeEventListener('click', resumeGame, false);
    pauseGameHTML.addEventListener('click', pauseGame);
    overlayHTML.remove();
}

function pauseGame() {
    isGameTimeCounting = false;
    addOverlay();
    pauseGameHTML.innerHTML = _builderHTML__WEBPACK_IMPORTED_MODULE_1__["builderHTML"].createIconHTML('play_circle_outline', 'Resume Game');

    prepareGameForSave();

    pauseGameHTML.removeEventListener('click', pauseGame, false);
    pauseGameHTML.addEventListener('click', resumeGame);
}

function startGame() {
    resumeGame();
    fieldCells = [];
    fieldNumbers = [... Array(cellsNumbers).keys()]
        .sort(() => Math.random() - 0.5);
    pauseGameHTML.disabled = false;
    gameMoves = 0;
    gameMovesHtml[0].innerHTML = 0;

    if (isGameImage()) {
        setRandomGameFieldImage();
    }

    removeCells();
    createCells();

    isGameTimeCounting = true;
    gameTime = new Date(0, 0, 0, 0, 0, 0);
    clearTimeout(gameTimeCounter);
    showTime();
}

function increaseGameMovesHtml() {
    gameMovesHtml[0].innerHTML = ++gameMoves;
}

function getOptionsHTML() {
    let optionsHTML = '';

    fieldSizes.forEach(function (field_size) {
        optionsHTML += _builderHTML__WEBPACK_IMPORTED_MODULE_1__["builderHTML"].createSizeOptionHTML(field_size, fieldSize);
    });

    return optionsHTML;
}

function getGameFieldOptionsHTML() {
    let gameFieldHTML = '';

    gameFields.forEach(function (field) {
        gameFieldHTML += _builderHTML__WEBPACK_IMPORTED_MODULE_1__["builderHTML"].createFieldOptionHTML(field, gameField);
    });

    return gameFieldHTML;
}

function isGameImage() {
    return gameField === 'image';
}

function addOverlay() {
    saveGameHTML.disabled = true;
    saveGameHTML.classList.add('menu-item');
    saveGameHTML.classList.add('save-game');
    saveGameHTML.innerHTML = _builderHTML__WEBPACK_IMPORTED_MODULE_1__["builderHTML"].createIconHTML('save', 'Save this game');
    overlayHTML.append(saveGameHTML);

    newGameMenuHTML.className = 'menu-item';
    newGameMenuHTML.innerHTML = 'New Game';
    overlayHTML.append(newGameMenuHTML);

    boxFieldSizeHTML.className = 'field-option';
    boxFieldSizeHTML.innerHTML = '<span class="field-option-title">Field size</span>';
    overlayHTML.append(boxFieldSizeHTML);
    fieldSizeHTML.className = 'field-option-select';
    fieldSizeHTML.innerHTML = getOptionsHTML();
    boxFieldSizeHTML.append(fieldSizeHTML);

    boxGameImageHTML.className = 'field-option';
    boxGameImageHTML.innerHTML = '<span class="field-option-title">Game field</span>';
    overlayHTML.append(boxGameImageHTML);
    gameImageHTML.className = 'field-option-select';
    gameImageHTML.innerHTML = getGameFieldOptionsHTML();
    boxGameImageHTML.append(gameImageHTML);


    savedGamesHTML.className = 'menu-item';
    savedGamesHTML.innerHTML = _builderHTML__WEBPACK_IMPORTED_MODULE_1__["builderHTML"].createIconHTML('history', 'Saved games');
    overlayHTML.append(savedGamesHTML);

    postscriptHTML.className = 'postscript';
    postscriptHTML.innerHTML = 'Attention: The minimum width for the correct display of the application design is 414px. Below this value, the application may behave incorrectly.';
    overlayHTML.append(postscriptHTML);

    overlayHTML.className = 'overlay';
    fieldHTML.append(overlayHTML);
}

function createGameHTML() {
    audioContainer.innerHTML = createAudio();
    document.body.append(audioContainer);

    boardHTML.className = 'board';
    document.body.append(boardHTML);

    addOverlay();

    boxTimeHTML.className = 'boxTime';
    boxTimeHTML.innerHTML = '<span class="descriptionTime">Time</span>'
    boardHTML.append(boxTimeHTML);
    timeHTML.id = 'time';
    timeHTML.innerHTML = '00:00';
    boxTimeHTML.append(timeHTML);

    movesHTML.className = 'moves';
    boardHTML.append(movesHTML);

    pauseGameHTML.disabled = true;
    pauseGameHTML.className = 'pauseGame';
    pauseGameHTML.innerHTML = _builderHTML__WEBPACK_IMPORTED_MODULE_1__["builderHTML"].createIconHTML('pause_circle_outline', 'Pause Game');
    boardHTML.append(pauseGameHTML);

    movesHTML.innerHTML = '<span class="description">Moves</span><span class="game-moves"></span>';
    gameMovesHtml[0].innerHTML = 0;

    fieldHTML.className = 'field';
    document.body.append(fieldHTML);

    gameSoundHTML.className = 'sound';
    gameSoundHTML.innerHTML = _builderHTML__WEBPACK_IMPORTED_MODULE_1__["builderHTML"].createIconHTML("volume_up");
    document.body.append(gameSoundHTML);
}

function move(index) {
    const cell = fieldCells[index];
    const leftDiff = Math.abs(cellEmpty.left - cell.left);
    const topDiff = Math.abs(cellEmpty.top - cell.top);

    if (leftDiff+topDiff > 1) {
        return;
    }

    cell.element.style.left = `${cellEmpty.left * cellSize}px`;
    cell.element.style.top = `${cellEmpty.top * cellSize}px`;

    const cellEmptyLeft = cellEmpty.left;
    const cellEmptyTop = cellEmpty.top;
    cellEmpty.left = cell.left;
    cellEmpty.top = cell.top;
    cell.left = cellEmptyLeft;
    cell.top = cellEmptyTop;

    increaseGameMovesHtml();
    playSoundByKey('click-cell');

    const isFinished = fieldCells.every(cell => {
        if(cell.value > 0) {
            return cell.value - 1 === cell.top * fieldSize + cell.left;
        } else {
            return true;
        }
    });

    if(isFinished) {
        let min = gameTime.getMinutes(),
            sec = gameTime.getSeconds(),
            finishedTime = `${_helper__WEBPACK_IMPORTED_MODULE_0__["helper"].addZero(min)}:${_helper__WEBPACK_IMPORTED_MODULE_0__["helper"].addZero(sec)}`,
            finishedMoves = gameMoves;

        isGameTimeCounting = false;

        alert(`Hurrah! You solved the puzzle in ${finishedTime} and ${finishedMoves} moves.`);
    }
}

function createCells() {
    for (let i = 0; i < cellsNumbers; i++) {
        const cell = document.createElement('div');
        const value = fieldNumbers[i] + 1;
        cell.classList.add('cell');
        cell.innerHTML = value;
        cell.style.height = `${cellSize}px`;
        cell.style.width = `${cellSize}px`;

        const left = i % fieldSize;
        const top = (i - left) / fieldSize;

        if(isGameImage()) {
            cell.classList.add('cell-image');
            cell.style.backgroundImage = `url('./media/fields/${gameFieldImageId}.jpg')`;

            const leftValue = fieldNumbers[i] % fieldSize;
            const topValue = Math.trunc(fieldNumbers[i] / fieldSize);

            cell.style.backgroundPositionX = `${-leftValue * cellSize}px`;
            cell.style.backgroundPositionY = `${-topValue * cellSize}px`;
        }

        fieldCells.push({
            value: value,
            left: left,
            top: top,
            element: cell
        });

        cell.style.left = `${left * cellSize}px`;
        cell.style.top = `${top * cellSize}px`;

        fieldHTML.append(cell);

        cell.addEventListener('click', () => {
            move(i);
        })
    }

    cellEmpty = {
        value: 0,
        top: fieldSize - 1,
        left: fieldSize - 1
    };

    fieldCells.push(cellEmpty);
}

function removeCells() {
    fieldHTML.innerHTML = '';
}

function createGame() {
    createGameHTML();
    createCells();
}

createGame();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map