//环境光    环境光颜色与网格模型的颜色进行RGB进行乘法运算
const  ambient = new THREE.AmbientLight(0x444444);
// 点光
const point = new THREE.PointLight(0xffffff)

// 平行光: 平行光是沿着特定方向发射的光。这种光的表现像是无限远,从它发出的光线都是平行的。常常用平行光来模拟太阳光 的效果; 
const direction = new THREE.DirectionalLight(0xffffff)

// 聚光: 聚光灯是从一个方向上的一个点发出，沿着一个圆锥体，它离光越远，它的尺寸就越大。

const spot = new THREE.SpotLight(0xe8dbdb)

const lightTypeMap = {
  ambient: ambient,
  point: point,
  direction: direction,
  spot: spot,
}

function getLight(lightType = 'point') {
  return lightTypeMap[lightType]
}

export {
  getLight
}