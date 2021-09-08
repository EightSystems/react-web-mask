import MaskResolver from "./MaskResolver";

export default class MaskService {
  static toMask(type, value, settings) {
    return MaskResolver.resolve(type).getValue(value, settings);
  }

  static isValid(type, value, settings) {
    return MaskResolver.resolve(type).validate(value, settings);
  }
  static toRawValue(type, maskedValue, settings) {
    return MaskResolver.resolve(type).getRawValue(maskedValue, settings);
  }
}
