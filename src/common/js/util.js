/**
 * 解析 url
 * @example ?id=1234&a=callback
 * @return {id: 1234, a: callback}
 */
export const urlParse = () => {
    let url = window.location.search;
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    if(arr) {
        arr.forEach((item) => {
            let itemArr = item.substr(1).split('=');
            let key = itemArr[0];
            let value = itemArr[1];
            obj[key] = value;
        });
    }
    return obj;
}