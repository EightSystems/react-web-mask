import * as Masks from "./masks";

var maskKeys = Object.keys(Masks);

export default class MaskResolver {
  static resolve(kind) {
    let maskKey = maskKeys.filter(m => {
      var handler = Masks[m];
      return handler && handler.getType && handler.getType() === kind;
    })[0];

    let handler = Masks[maskKey];

    if (!handler) {
      throw new Error("Mask type not supported.");
    }

    return new handler();
  }
}
