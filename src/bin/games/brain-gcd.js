#!/usr/bin/games/env node

import { startGame } from '../../logic';
import { brainGcd } from '../../logic-gcd';

const description = 'Find the greatest common divisor of given numbers.';


startGame(description, brainGcd);
