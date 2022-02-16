
// 球体 参数：半径60  经纬度细分数40,40
const sphereGeometry = new THREE.SphereGeometry(60,40,40)
// 长方体 参数：长，宽，高
const boxGeometry = new THREE.BoxGeometry(100, 100, 100); 

// 圆柱  参数：圆柱面顶部、底部直径50,50   高度100  圆周分段数
const cylinderGeometry = new THREE.CylinderGeometry( 50, 50, 200, 25 );

// 正八面体
const octahedronGeometry = new THREE.OctahedronGeometry(50);

// 正十二面体
const dodecahedronGeometry = new THREE.DodecahedronGeometry(100);

// 正二十面体
const icosahedronGeometry = new THREE.IcosahedronGeometry(100);

// 
const geometryMap = {
  sphere: sphereGeometry,
  box: boxGeometry,
  cylinder: cylinderGeometry
}

const materialMap = {
  sphere: {
    color: '0x0000ff',
    transparent: false,
    opacity: 0
  },
  box: {
    color: '0xff00ff',
    transparent: true,
    opacity: 0.7
  },
  cylinder: {
    color: '0xffff00',
    transparent: true,
    opacity: 0.5
  }
}

// const lambertMaterial = new THREE.MeshLambertMaterial({color: '', transparent: false,opacity:0})
// 添加高光效果: 对于three.js而言漫反射、镜面反射分别对应两个构造函数MeshLambertMaterial()、MeshPhongMaterial(),
// const sphereMaterial=new THREE.MeshPhongMaterial({
//     color:0x0000ff,
//     specular:0x4488ee,
//     shininess:12
// });

export const getMesh=(scene, geo='box')=>{
  // 创建网格模型mesh: 基于geometry 和 material,最后添加到 scene 中
  //创建一个立方体几何对象Geometry
  const geometry = geometryMap[geo]
  console.log(geometry);
  console.log('geometry.isBufferGeometry',geometry.isBufferGeometry);
  console.log('几何体顶点位置数据',geometry.attributes.position);
  console.log('几何索引',geometry.index);
  // 创建球体
  // const geometry = sphereGeometry
  // MeshLambertMaterial()实现漫反射进行渲染
  // const material = new THREE.MeshLambertMaterial(
  //   {
  //     color: materialMap[geo].color,
  //     transparent: materialMap[geo].transparent,
  //     opacity: materialMap[geo].opacity,
  //     // wireframe: true  // 将几何图形渲染成线框
  //   }
  // )
  const material=new THREE.MeshPhongMaterial({
    color:0x0000ff,
    specular:0x4488ee,
    shininess:12
});

  //材质对象Material, lambert: 亮度单位
  // const material = lambertMaterial
  // lambertMaterial.color = materialMap[geo].color
  // material.transparent = materialMap[geo].transparent
  // material.opacity = materialMap[geo].opacity

  //网格模型添加到场景中
  const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  return mesh
}

