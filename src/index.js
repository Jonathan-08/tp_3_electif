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

/**
 * @param {number} dilation
 * @returns {drawlib.Shape}
 */
function eye(dilation) {
  const clampedDilation = Math.max(0, Math.min(1, dilation));
  return drawlib.group([
    drawlib.circle(color.white, 20),
    drawlib.circle(color.black, 19 * clampedDilation),
  ]);
}

const smile = drawlib.group([
  drawlib.circle(color.yellow, 150),
  drawlib.move(-60, -50, eye(0.8)),
  drawlib.move(50, -70, eye(0.3)),
  // nose
  drawlib.square(color.black, 20),
  // mouth
  drawlib.move(20, 80, drawlib.circle(color.black, 40)),
]);

function main() {
  const context = get2DContextById("canvas");
  drawlib.renderCentered(smile, context);
}
main();
