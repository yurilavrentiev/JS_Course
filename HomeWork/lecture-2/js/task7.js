function whatType(x) {
    return typeof x;
}
const a = 1;
const b = "hello";
const c = true;
const d = {};
const e = null;
const f = undefined;
const g = [];
alert(whatType(a) + " " + whatType(b) + " " + whatType(c) + " " +  whatType(d) +
         " " + whatType(e) + " " +  whatType(f) + " " + whatType(g));