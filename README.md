# THREE-JS-DomEvents
DomMesh is a THREE.JS extention that builds on the THREE.Mesh and THREE.Sprite  modules which enables the use of Native DOMEvents on your 3D objects and sprites.
Currently DomMesh module supports [mousedown](https://www.quirksmode.org/dom/events/click.html) (and other alternatives such as click), [mouseenter and mouseleave](https://www.quirksmode.org/dom/events/mouseover.html). Additionally this module also includes the ```<a>``` element. 

# Example

# Install
To use this module on your code you can simply download the [DomMesh.js](https://github.com/Tozturk18/THREE-JS-DomEvents-for-Mesh/edit/main/DomMesh.js) file and import it at the very top of your JavaScript file.
  
```javascript
import { DomMesh, DomSprite } from './DomMesh.js';
```

# Instructions
Once you donwload the DomMesh module and imported it, the usage is very similar to creating a new THREE.Mesh.

First we need to create a DomMesh Object, let's call the object, mesh1.

```javascript

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const meshGeomerty = new THREE.SphereGeometry(1);

const meshMaterial = new THREE.MeshBasicMaterial( { 
      color: 0xffffff, 
} );

// DomMesh Object needs the geometry and the material of the object and the camera used in the scene to raytrace from.
const mesh1 = new DomMesh( meshGeomerty, meshMaterial, camera );

```

The same way goes true for creating DomMesh Sprite Objects that enables the use of Native DOMEvents on Sprites. Let's call the sprite, sprite1.

```javascript

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const material = new THREE.SpriteMaterial( {
  map: new THREE.textureLoader.load( './sprite.jpeg' ),
  color: 0xffffff,
} );

const sprite1 = new DomSprite( material, camera );

```

Once we create a new instance of a DomMesh element we can now tell it to do specific DOMEvents. I have created it using modules,
hence you can easily access the options with only one parameter needed.

```javascript

// To create a click, mousedown, mouseup, dblclick event you can use the .MouseDown module
mesh1.MouseDown( (event) => {
  console.log("Clicked!");
} );

// To create a mouseenter, mouseover event you can use the .MouseEnter module
mesh1.MouseEnter( (event) => {
  console.log("Hovering!");
} );

// To create a mouseleave, mouseout event you can use the .MouseLeave module
mesh1.MouseLeave( (event) => {
  console.log("Left the Object!");
} );

```

The same scripting can be used with sprites too!

```javascript

// To create a click, mousedown, mouseup, dblclick event you can use the .MouseDown module
sprite1.MouseDown( (event) => {
  console.log("Clicked!");
} );

// To create a mouseenter, mouseover event you can use the .MouseEnter module
sprite1.MouseEnter( (event) => {
  console.log("Hovering!");
} );

// To create a mouseleave, mouseout event you can use the .MouseLeave module
sprite1.MouseLeave( (event) => {
  console.log("Left the Sprite!");
} );

```

## DOMEvents() Parameters
For ```MouseDown```, ```MouseEnter```, and ```MouseLeave``` events the only parameter is:
* ```function()```: is any function that you want to run when the events happens.

```javascript

// To create a link event you can use the .MeshLink module
// MeshLink takes a URL, a default color and a highlight color as parameters
mesh1.MeshLink( "https://github.com/Tozturk18/", 0xffffff, 0x555555 );

sprite1.MeshLink( "https://github.com/Tozturk18/", 0xffffff, 0x555555 );

```
## MeshLink() Parameters
For ```MeshLink``` event the parameter are:
* ```url```: a string containing a link (a url).
* ```defaultColor```: a hexidecimal color that defines the default (before mouseover) color of the mesh object.
* ```highlightColor```: a hexidecimal color that defines the highlight (during mouseover) color of the mesh object.

# Additionaly
For Safari on IOS devices ``` window.open(url, "_blank"); ``` does not work and it requires redirect using ``` window.location.href = url ```. Moreover, to comply with IOS Safari rules I have added the ``` window.confirm() ``` before redirecting the user to the given url.

Please contact me if you want me to add more to this module or if there is anything that I need to fix.
