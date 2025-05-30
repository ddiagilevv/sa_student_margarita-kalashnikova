import * as THREE from 'three';

// Параметрическая функция для формы сердца
function createParametricHeartShape(segments = 200, scale = 1) {
  const shape = new THREE.Shape();

  for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t);

    const point = new THREE.Vector2(x * scale, y * scale);

    if (i === 0) {
      shape.moveTo(point.x, point.y);
    } else {
      shape.lineTo(point.x, point.y);
    }
  }

  return shape;
}



// Сцена
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Камера
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 100;

// Рендерер
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Сердце
const heartShape = createParametricHeartShape(200, 2); // масштаб = 2
const geometry = new THREE.ExtrudeGeometry(heartShape, {
  depth: 10,
  bevelEnabled: true,
  bevelSegments: 2,
  steps: 2,
  bevelSize: 1,
  bevelThickness: 1
});
geometry.center();

//берем цвет из файла css
const cssColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--heart-color')
  .trim(); // ← убираем пробел

const material = new THREE.MeshPhongMaterial({
  color: cssColor,
  emissive: cssColor,
  shininess: 100
});

const heart = new THREE.Mesh(geometry, material);
scene.add(heart);

// Освещение
scene.add(new THREE.AmbientLight(0xffffff, 0.4));

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(150, 150, 150);
scene.add(pointLight);

function animate() {
  requestAnimationFrame(animate);
  heart.rotation.y += 0.01;
  renderer.render(scene, camera); // ВАЖНО: без этого ничего не видно
}

animate();


// Один кадр (если не нужна анимация)
//renderer.render(scene, camera);

// Адаптация к окну
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

