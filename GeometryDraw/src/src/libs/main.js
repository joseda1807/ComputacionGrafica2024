// creation of basic elements
var scene = null,
    camera= null,
    renderer = null,
    controls=null;

const size=20,
    division=20;

function startScene() {
    // renderizar Scena,camera
    scene = new THREE.Scene();
    scene.background=new THREE.Color(0x000000);
    camera = new THREE.PerspectiveCamera(75,// anguloded vision(abajo o arriba)
         window.innerWidth / window.innerHeight,//relacion aspecto
          0.1,//mas cerca(no renderiza)
           1000);//mas lejos

    renderer = new THREE.WebGLRenderer({canvas: document.getElementById("app")});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    //orbit Control
    controls=new THREE.OrbitControls(camera,renderer.domElement);
    camera.position.set(0,0,0);
    controls.update();

    //grid Helper
    const gridHelper = new THREE.GridHelper( size, division );
    scene.add( gridHelper );
        
    //create a box
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x800020 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    
    camera.position.z = 5;
    animate();
}

function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render( scene, camera );
}

window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
