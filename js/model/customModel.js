

/* 球体网格模型 */
export function sphereModel(R,x,y,z) {
  var geometry = new THREE.SphereGeometry(R, 25, 25);
  var material = new THREE.MeshPhongMaterial({
    color: 0x0000ff
  });
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  return mesh;
}

export function cylinderModel(R,h,x,y,z) {
  const geometry = new THREE.CylinderGeometry(R,R,h,25,25)
  const material = new THREE.MeshPhongMaterial( {
    color: 0x0000ff
  })
  const model = new THREE.Mesh(geometry, material);
  model.position.set(x, y, z);
  return model
}