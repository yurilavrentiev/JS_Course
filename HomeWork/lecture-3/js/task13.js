// const test1 = (0 || 2 || null) && (3 || '') && false; => 2 && 3 && false => первое ложное => false
// const test2 = ('Sam' || '' || false) && (0 || 9) && 111; => 'Sam' && 9 && 111 => ложного нет, возвращает последнее истинное => 111
// const test3 = (null || '' || undefined || 0) && (NaN || 9) && 111; => если нет истинного || возвращает последнее ложное => 0 && 9 && 111 => первое ложное => 0
// const test4 = (null || 99) && (undefined || NaN) && (NaN || 9) && 111; => 99 && NaN && 9 => NaN
// const test5 = (null || 100 || undefined || NaN) && ( NaN || 9) && 'string';=> 100 && 9 && 'string' => 'string'
// const test6 = ({name: 'Sam'} || '' || undefined || NaN) && (NaN || [1, 2]) && 111; => {name: 'Sam'} && [1,2] && 111 => 111
// const test7 = (null || '' || {} || NaN) && [] && 111; => приоритет у выражения в скобках => {} && [] && 111 => 111
// const test2 = 'Sam' || '' || false && 0 || 9 && 111; => 'Sam' || '' || false || 111 => первое истинное значение => 'Sam'
// const test3 = null || '' || undefined || 0 && NaN || 9 && 111; => null || '' || undefined || 0 || 111 => 111
// const test4 = null || 99 && undefined || NaN && NaN || 9 && 111; => null || undefined || NaN || 111 => 111
// const test5 = null || 100 || undefined || NaN && NaN || 9 && 'string'; => null || 100 || undefined || NaN || 'string' => 100
// const test6 = {name: 'Sam'} || '' || undefined || NaN && NaN || [1, 2] && 111; => {name: 'Sam'} || '' || undefined || NaN || 111 => {name: 'Sam'}
// const test7 = null || '' || {} || NaN && [] && 111; => null || '' || {} || NaN => {}
