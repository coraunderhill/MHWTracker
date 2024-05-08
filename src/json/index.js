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
 * Imported armor set objects
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

/** List of individual armor pieces */
const items = [];

/** List of armor set names */
const sets = [];

// Iterate over each armor set
imports.map(set => {

  const {
    name,
    defense,
    fire,
    water,
    thunder,
    ice,
    dragon
  } = set;

  sets.push(name);

  // Iterate over each item in the set
  set.items.map(item => {

    // Add the set information to the item's properties...
    item.set = name;
    item.defense = defense;
    item.fire = fire;
    item.water = water;
    item.thunder = thunder;
    item.ice = ice;
    item.dragon = dragon;

    // ... then push it into the result array
    items.push(item);

  });

});

// Exports a single array containing every item from all sets
export { items, sets };
