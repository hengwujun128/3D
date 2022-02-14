

/**
 * @description 操作相机
 * 把一个相机对象作为参数的时候，执行代码new THREE.OrbitControls(camera,renderer.*domElement)，浏览器会自动检测鼠标键盘的变化， 并根据鼠标和键盘的变化更新相机对象的参数
 * 比如你拖动鼠标左键，浏览器会检测到鼠标事件，把鼠标平移的距离按照一定算法转化为相机的的旋转角度 ,你可以联系生活中相机拍照,即使景物没有变化，你的相机拍摄角度发生了变化，自然渲染器渲染出的结果就变化了
 * 
 * @param {*} param0 
 * 缩放：滚动—鼠标中键
 * 旋转：拖动—鼠标左键
 * 平移：拖动—鼠标右键
 */
export const orbitControls = ({camera='',renderer=''})=>{
  //创建控件对象
  var orbitControls = new THREE.OrbitControls(camera,renderer.domElement);
  return orbitControls
}