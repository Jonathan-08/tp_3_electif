/**
 *  @typedef {{red: number;green: number;blue: number;}} Color
 */

/**
 * @returns {Color}
 * @param {number} r
 * @param {number} g
 * @param {number} b
 */
function rgb(r, g, b) {
  return { red: r, green: g, blue: b };
}

export const lightYellow = rgb(0xfc, 0xe9, 0x4f);

export const yellow = rgb(0xed, 0xd4, 0x00);

export const darkYellow = rgb(0xc4, 0xa0, 0x00);

export const lightOrange = rgb(0xfc, 0xaf, 0x3e);

export const orange = rgb(0xf5, 0x79, 0x00);

export const darkOrange = rgb(0xce, 0x5c, 0x00);

export const lightBrown = rgb(0xe9, 0xb9, 0x6e);

export const brown = rgb(0xc1, 0x7d, 0x11);

export const darkBrown = rgb(0x8f, 0x59, 0x02);

export const lightGreen = rgb(0x8a, 0xe2, 0x34);

export const green = rgb(0x73, 0xd2, 0x16);

export const darkGreen = rgb(0x4e, 0x9a, 0x06);

export const lightBlue = rgb(0x72, 0x9f, 0xcf);

export const blue = rgb(0x34, 0x65, 0xa4);

export const darkBlue = rgb(0x20, 0x4, 0xa87);

export const lightPurple = rgb(0xad, 0x7f, 0xa8);

export const purple = rgb(0x75, 0x50, 0x7b);

export const darkPurple = rgb(0x5c, 0x35, 0x66);

export const lightRed = rgb(0xef, 0x29, 0x29);

export const red = rgb(0xcc, 0x00, 0x00);

export const darkRed = rgb(0xa4, 0x00, 0x00);

export const lightGrey = rgb(0xee, 0xee, 0xec);

export const grey = rgb(0xd3, 0xd7, 0xcf);

export const darkGrey = rgb(0xba, 0xbd, 0xb6);

export const lightCharcoal = rgb(0x88, 0x8a, 0x85);

export const charcoal = rgb(0x55, 0x57, 0x53);

export const darkCharcoal = rgb(0x2e, 0x34, 0x36);

export const white = rgb(0xff, 0xff, 0xff);

export const black = rgb(0x00, 0x00, 0x00);

/**
 * @param {Color} color
 * @returns {string}
 */
export function render(color) {
  return `rgb(${color.red}, ${color.green}, ${color.blue})`;
}
