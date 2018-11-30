module.exports = { 
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    "color-hex-length": "long",
    "max-nesting-depth": 2,
    // 去掉小数点前面的 0
    "number-leading-zero": "never",
    "no-duplicate-selectors": true,
    // 使用双引号
    "string-quotes": "double",
    // 属性值为 0 后面不加单位
    "length-zero-no-unit": true,
  } 
}