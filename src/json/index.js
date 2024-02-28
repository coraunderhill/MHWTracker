// Import JSON armor sets
import alloy from './alloy.json';
import anja from './anja.json';
import baan from './baan.json';
import barroth from './barroth.json';
import bone from './bone.json';
import butterfly from './butterfly.json';
import chainmail from './chainmail.json';
import diablos from './diablos.json';
import gajau from './gajau.json';
import galaSuit from './gala-suit.json';
import highMetal from './high-metal.json';
import hunter from './hunter.json';
import jagras from './jagras.json';
import jyura from './jyura.json';
import kadachi from './kadachi.json';
import kestodon from './kestodon.json';
import kulu from './kulu.json';
import leather from './leather.json';
import pukei from './pukei.json';
import rathian from './rathian.json';
import vespoid from './vespoid.json';

/**
 * Array of armor set objects
 */
const imports = [
  alloy,
  anja,
  baan,
  barroth,
  bone,
  butterfly,
  chainmail,
  diablos,
  gajau,
  galaSuit,
  highMetal,
  hunter,
  jagras,
  jyura,
  kadachi,
  kestodon,
  kulu,
  leather,
  pukei,
  rathian,
  vespoid,
];

/**
 * Exported array of armor piece objects
 */
const result = [];

// Iterate over armor set array
imports.map(set => {

  /**
   * Name of the armor set
   * @type {string}
   */
  const name = set.name;

  /**
   * Defensive stats of each armor piece
   * @type {number}
   */
  const { defense, fire, water, thunder, ice, dragon } = set;

  /**
   * Array containing set piece objects
   * @type {Array}
   */
  const items = set.items;

  // Iterate over each item object
  items.map(item => {

    // Add the set information to the object properties...
    item.set = name;
    item.defense = defense;
    item.fire = fire;
    item.water = water;
    item.thunder = thunder;
    item.ice = ice;
    item.dragon = dragon;

    // ... then push it into the result array
    result.push(item);

  });

});

export default result;
