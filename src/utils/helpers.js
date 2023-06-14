"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceInSeconds = void 0;
const differenceInSeconds = (date1, date2) => {
    const diffInMs = Math.abs(date1.getTime() - date2.getTime());
    return diffInMs / 1000;
};
exports.differenceInSeconds = differenceInSeconds;
