#!/usr/bin/games/env node


import { startGame } from '../../logic';
import { brainPrime } from '../../logic-prime';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

startGame(description, brainPrime);
