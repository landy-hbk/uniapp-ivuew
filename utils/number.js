export const formatFloat = function (f, digit) {
	// 获取幂的倍数
    var m = Math.pow(10, digit);
    return Math.round(f * m, 10) / m;
}