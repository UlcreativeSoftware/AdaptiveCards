"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Constants = require("./constants");
var inputcontrol_1 = require("./inputcontrol");
var CheckBox = (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._label = "";
        _this._checkboxElement = null;
        _this._spanElement = null;
        return _this;
    }
    CheckBox.createId = function () {
        var result = CheckBox.creationIndex;
        CheckBox.creationIndex++;
        return result;
    };
    CheckBox.prototype.changed = function () {
        if (this.onChange) {
            this.onChange(this);
        }
    };
    CheckBox.prototype.keyDown = function (e) {
        switch (e.keyCode) {
            case Constants.KEY_ENTER:
                this.isChecked = !this.isChecked;
                break;
        }
    };
    CheckBox.prototype.attach = function (rootElement) {
        var _this = this;
        _super.prototype.attach.call(this, rootElement);
        rootElement.className = "ms-ctrl ms-ctrl-checkbox";
        rootElement.tabIndex = 0;
        var labelAttribute = rootElement.attributes["label"];
        if (labelAttribute) {
            this._label = labelAttribute.value;
        }
        var isCheckedAttribute = rootElement.attributes["ischecked"];
        if (isCheckedAttribute) {
            this._isChecked = isCheckedAttribute.value === "true";
        }
        this._checkboxElement = document.createElement("input");
        this._checkboxElement.id = "ms-ctrl-checkbox-" + CheckBox.createId();
        this._checkboxElement.type = "checkbox";
        this._checkboxElement.style.position = "absolute";
        this._checkboxElement.checked = this.isChecked;
        this._checkboxElement.onchange = function (e) { _this.changed(); };
        var labelElement = document.createElement("label");
        labelElement.htmlFor = this._checkboxElement.id;
        this._spanElement = document.createElement("span");
        this._spanElement.innerText = this._label;
        labelElement.appendChild(this._spanElement);
        rootElement.innerHTML = "";
        rootElement.appendChild(this._checkboxElement);
        rootElement.appendChild(labelElement);
    };
    Object.defineProperty(CheckBox.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
            if (this._spanElement) {
                this._spanElement.innerText = this._label;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBox.prototype, "isChecked", {
        get: function () {
            return this._isChecked;
        },
        set: function (value) {
            if (this._isChecked != value) {
                this._isChecked = value;
                if (this._checkboxElement) {
                    this._checkboxElement.checked = this._isChecked;
                }
                this.changed();
            }
        },
        enumerable: true,
        configurable: true
    });
    return CheckBox;
}(inputcontrol_1.InputControl));
// Used to generate unique Ids
CheckBox.creationIndex = 0;
exports.CheckBox = CheckBox;
//# sourceMappingURL=checkbox.js.map