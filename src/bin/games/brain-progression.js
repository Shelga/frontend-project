#!/usr/bin/games/env node


import { startGame } from '../../logic';
import { brainProgression } from '../../logic-progression';


const description = 'What number is missing in the progression?';

startGame(description, brainProgression);
