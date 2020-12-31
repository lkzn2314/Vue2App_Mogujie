// 防抖函数
 export function debounce(func, delay) {
 	let timer = null
 	return function(...args) {
 		if (timer) clearTimeout(timer)
 		timer = setTimeout(() => {
 			func.apply(this, args)
 		}, delay)
 	}
 }

 //时间格式输出函数
 export function formatDate(date, fmt) {
 	//年份处理
 	if (/(y+)/.test(fmt)) {
 		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
 	}
 	let o = {
 		'M+': date.getMonth() + 1, //月
 		'd+': date.getDate(), //日   getDay()返回的是一周中的星期几
 		'h+': date.getHours(),
 		'm+': date.getMinutes(),
 		's+': date.getSeconds()
 	};
 	for (let k in o) {
 		if (new RegExp(`(${k})`).test(fmt)) {
 			let str = o[k] + '';
 			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
 		}
	}	
 		return fmt;
};
function padLeftZero(str) {
	return ('00' + str).substr(str.length);
}
