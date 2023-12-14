import * as Color from "./color.js";

/**
 * @typedef { Color.Color} Color
 * 
 * The following type definition is meant to be "opaque".
 * That mean that users of `drawlib` will be able to use the `Shape` type
 * but are discouraged to build shapes directly as this representation
 * in terms of `Square/Circle/Group` might change in the future 
 * (and actually, it will! See the part 2 of the homework!)
 * 
 * Users of the lib should build the shapes with helper functions such as
 * `square`, `circle` or `group`.
 * @typedef {
   | {kind: "Square";color: Color;side : number; xCenter: number; yCenter:number }
   | {kind: "Circle";radius: number;color: Color; xCenter: number; yCenter: number}
   | {kind: "Group"; shapes : Array<Shape>}
   } Shape
*/

/**
 * @param {Color} color
 * @param {number} side
 * @returns {Shape}
 */
export function square(color, side) {
  return { kind: "Square", color, side, xCenter: 0, yCenter: 0 };
}

/**
 * @param {Color} color
 * @param {number} radius
 * @returns {Shape}
 */
export function circle(color, radius) {
  return { kind: "Circle", radius, color, xCenter: 0, yCenter: 0 };
}

/**
 * @param {Array<Shape>} shapes
 * @returns {Shape}
 */
export function group(shapes) {
  return { kind: "Group", shapes };
}

/**
 * Add `dx` and `dy` respectively to the `x` and `y` of
 * the shape. Apply this to all the sub shapes if the given one
 * is a "Group"
 * @param {number} dx
 * @param {number} dy
 * @param {Shape} shape
 * @returns {Shape}
 */
export function move(dx, dy, shape) {
  switch (shape.kind) {
    // TODO 1
    case "Square":
    case "Circle":
      shape.xCenter += dx;
      shape.yCenter += dy;
      break;
    case "Group":
      for(let item of shape.shapes){
        move(dx, dy, item);
      }
      break;
    default:
      throw "Unexpected! Some case is missing2";
  }
  return shape;
}

/**
 * @param {CanvasRenderingContext2D} context
 * @param {Shape} shape
 * @returns {void}
 */
export function renderCentered(shape, context) {
  const width = context.canvas.width;
  const height = context.canvas.height;
  render(move(width / 2, height / 2, shape), context);
}

/**
 * @param {CanvasRenderingContext2D} context
 * @param {Shape} shape
 * @returns {void}
 */
function render(shape, context) {
  switch (shape.kind) {
    case "Circle":
      renderCircle(
        shape.color,
        shape.xCenter,
        shape.yCenter,
        shape.radius,
        context
      );
      break;
    case "Square":
      renderSquare(
        shape.color,
        shape.xCenter,
        shape.yCenter,
        shape.side,
        context
      );
      break;
    case "Group":
      shape.shapes.forEach((shape) => render(shape, context));
      break;
    default:
      throw "Unexpected! Some case is missing3";
  }
}

/**
 * @param {Color} color
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {CanvasRenderingContext2D} context
 */
function renderCircle(color, xCenter, yCenter, radius, context) {
  // TODO 2
  // (search for how to draw an "ellipse" in canvas)
    context.beginPath();
    context.ellipse(xCenter, yCenter, radius, radius, 0, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = Color.render(color);
    context.fill();
    context.closePath();
}

/**
 * @param {Color} color
 * @param {number} side
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {CanvasRenderingContext2D} context
 */
function renderSquare(color, xCenter, yCenter, side, context) {
  // Note: we could have used `context.rect` but the following
  // code will be more easily translatable to draw polygon
  // (see part 2 of the homework)
  const path = new Path2D();
  const halfSide = side / 2;
  path.moveTo(xCenter - halfSide, yCenter - halfSide);
  path.lineTo(xCenter + halfSide, yCenter - halfSide);
  path.lineTo(xCenter + halfSide, yCenter + halfSide);
  path.lineTo(xCenter - halfSide, yCenter + halfSide);
  path.closePath();
  context.fillStyle = Color.render(color);
  context.fill(path);
}