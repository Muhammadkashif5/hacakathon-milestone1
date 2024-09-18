function showhide() {
    var _a, _b, _c;
    var exists = (_a = document.getElementById("hobbies")) === null || _a === void 0 ? void 0 : _a.classList.contains("show-hobbies");
    if (exists) {
        (_b = document.getElementById("hobbies")) === null || _b === void 0 ? void 0 : _b.classList.remove("show-hobbies");
    }
    else {
        (_c = document.getElementById("hobbies")) === null || _c === void 0 ? void 0 : _c.classList.add("show-hobbies");
    }
}
