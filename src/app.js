import angular from 'angular';
import react from 'react';
import uirouter from 'angular-ui-router';

import routes from './app.router';

import dasboard from '../locale/en/dasboard.yml';


console.log(react);

console.log(dasboard);

angular.module('DM', [uirouter]).config(routes);
