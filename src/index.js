import * as MB from "mathbox"
import * as THREE from "three"

const mathbox = MB.mathBox({
  plugins: ["core", "cursor"],
  camera: {
    fov: 45,
  },
});
const three = mathbox.three;

three.camera.position.set(-0.15, 0.15, 3.6);
three.renderer.setClearColor(new THREE.Color(0xffffff), 1.0);

const colors = {
  x: new THREE.Color(0xff4136),
  y: new THREE.Color(0x2ecc40),
  z: new THREE.Color(0x0074d9),
};

const view = mathbox
  .set({
    scale: 720,
    focus: 1,
  })
  .cartesian({
    range: [
      [-2, 2],
      [-1, 1],
      [-1, 1],
    ],
    scale: [2, 1, 1],
  });
view.axis({
  color: colors.x,
});
view.axis({
  axis: 2, // "y" also works
  color: colors.y,
});
view.axis({
  axis: 3,
  color: colors.z,
});

console.group("x-Axis was passed color:")
console.log(colors.x)
console.log("with constructor", colors.x.constructor.name)
console.groupEnd()

console.group("x-axis is using color:")
console.log(mathbox.select("axis")[0].props.color)
console.log("with constructor", mathbox.select("axis")[0].props.color.constructor.name)
console.groupEnd()