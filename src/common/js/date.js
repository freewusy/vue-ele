export const formatDate = (date, format) => {
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    let time = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };

    for (let key in time) {
        if (new RegExp(`(${key})`).test(format)) {
            let str = time[key] + '';
            format = format.replace(RegExp.$1, RegExp.$1 === 1 ? str : padLeftZero(str));
        }
    }
    return format;
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}
