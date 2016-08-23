import {config} from "../src/util/Configuration"

/**
 * We have to define the module in its own file because import statements are always executed first
 */
config.MODULE = angular.module("example", []);