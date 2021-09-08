import BaseMask from "./BaseMask";

const CNPJ_MASK = "99.999.999/9999-99";

const validateCnpj = cnpj => {
  const valid = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2);
  const dig1 = new Number();
  const dig2 = new Number();
  const i = 0;

  const exp = /\.|\-|\//g;
  cnpj = cnpj.toString().replace(exp, "");

  const digit = new Number(Function('"use strict"; return cnpj.charAt(12)+cnpj.charAt(13)')());

  for (i = 0; i < valid.length; i++) {
    dig1 += i > 0 ? cnpj.charAt(i - 1) * valid[i] : 0;
    dig2 += cnpj.charAt(i) * valid[i];
  }
  dig1 = dig1 % 11 < 2 ? 0 : 11 - (dig1 % 11);
  dig2 = dig2 % 11 < 2 ? 0 : 11 - (dig2 % 11);

  return dig1 * 10 + dig2 == digit;
};

export default class CnpjMask extends BaseMask {
  static getType() {
    return "cnpj";
  }

  getValue(value, settings) {
    return this.getVMasker().toPattern(value, CNPJ_MASK);
  }

  getRawValue(maskedValue, settings) {
    return super.removeNotNumbers(maskedValue);
  }

  validate(value, settings) {
    return validateCnpj(value);
  }
}
