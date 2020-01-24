#!/usr/bin/games/env node

import { startGame } from '../../logic';
import { brainCalc } from '../../logic-calc';

const description = 'What is the result of the expression?';

startGame(description, brainCalc);
