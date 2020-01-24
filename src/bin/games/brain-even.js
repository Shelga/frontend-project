#!/usr/bin/games/env node


import { startGame } from '../../logic';
import { brainEven } from '../../logic-even';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

startGame(description, brainEven);
