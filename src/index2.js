import * as drawlib from "./drawlib.js";
import * as color from "./color.js";

/**
 * @throws {string}
 * @returns {CanvasRenderingContext2D}
 * @param {string} id
 */
function get2DContextById(id) {
  const canvas = document.getElementById(id);
  if (canvas === null) {
    throw "No html element with id `canvas` found";
  }
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw "The selected element is not a canvas";
  }
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      return ctx;
    } else {
      throw "Error when getting the context";
    }
  } else {
    throw "`getContext` is not a property of the element. Please use a modern browser.";
  }
}

const BODY_COLOR = color.grey;

const head = drawlib.group([
  drawlib.polygon(BODY_COLOR, [
    { x: -20, y: -20 },
    { x: -30, y: 0 },
    { x: 0, y: 20 },
    { x: 30, y: 0 },
    { x: 20, y: -20 },
  ]),
  drawlib.move(-10, -10, drawlib.square(color.red, 7)),
  drawlib.move(10, -10, drawlib.square(color.red, 7)),
  drawlib.polygon(color.blue, [
    { x: -4, y: 0 },
    { x: 4, y: 0 },
    { x: 0, y: 3 },
  ]),
  drawlib.move(0, 8, drawlib.rectangle(color.darkGreen, 15, 3)),
]);

const body = drawlib.group([
  drawlib.rectangle(BODY_COLOR, 60, 80),
  drawlib.move(15, -20, drawlib.circle(color.orange, 6)),
]);

const robot = drawlib.group([
  drawlib.move(0, -50, head),
  // neck
  drawlib.move(0, -23, drawlib.rectangle(BODY_COLOR, 10, 15)),
  drawlib.move(0, 25, body),
]);

function main() {
  const context = get2DContextById("canvas");
  drawlib.renderCentered(robot, context);
}
main();
