// rem 适配，改变根元素字体大小，把设备屏幕的宽度分成10份来计算根元素字体的大小
/**
 * 
 * 假设设备宽度 375 那就把这个宽度分成10份，37.5一份，那假设一个元素是设备宽度的一半
 * 187.5占几份，很显然，37.5* 5 = 187.5占5份，那就是5rem
 */
function Rem () {
  // 获取设备宽度
  const width = document.documentElement.clientWidth
  // 计算根元素字体大小
  const fontSize = width / 10
  document.documentElement.style = `font-size:${fontSize}px`
}
Rem()