// Wrote by ThomasConway
export default function Studio() {
  return (
    <div>
      <h1>🎨 Studio Editor Guide</h1>

      <div className="section">
        <h2>Editor Layout</h2>
        <p>The Studio Editor is divided into three main sections:</p>
        <div className="step">
          <h3>Left Panel - Explorer</h3>
          <p>Shows the hierarchy of all objects in your scene organized into folders. Click to select objects, right-click to delete them quickly.</p>
        </div>
        <div className="step">
          <h3>Center - 3D Viewport</h3>
          <p>Where you build your game. Use mouse and keyboard to navigate and modify objects.</p>
        </div>
        <div className="step">
          <h3>Right Panel - Properties & Scripts</h3>
          <p>Edit selected object properties or add scripts. Two tabs: Properties and Script.</p>
        </div>
      </div>

      <div className="section">
        <h2>Working with Objects</h2>
        
        <h3>Adding Objects</h3>
        <p>Use the <strong>Insert</strong> menu to add:</p>
        <ul>
          <li><strong>Part (Box)</strong> - Basic cube shape</li>
          <li><strong>Sphere</strong> - Ball-shaped object</li>
          <li><strong>Cylinder</strong> - Pipe-shaped object</li>
          <li><strong>Mirror</strong> - Special reflective surface</li>
          <li><strong>Spawn Point</strong> - Where players spawn when joining the game</li>
        </ul>

        <h3>Selecting Objects</h3>
        <p>Click on an object in the viewport or in the Explorer to select it. The selected object appears highlighted.</p>

        <h3>Moving Objects</h3>
        <p>Use the <strong>Transform</strong> mode buttons in the toolbar to switch between:</p>
        <ul>
          <li><strong>Select</strong> - Just select objects</li>
          <li><strong>Move</strong> - Drag to reposition</li>
          <li><strong>Scale</strong> - Drag to resize</li>
          <li><strong>Rotate</strong> - Drag to rotate</li>
        </ul>

        <h3>Object Properties</h3>
        <p>In the Properties tab, edit:</p>
        <ul>
          <li><strong>Name</strong> - Identifier for the object</li>
          <li><strong>Color</strong> - RGB color picker</li>
          <li><strong>Material</strong> - Surface type (Metal, Wood, Glass, etc.)</li>
          <li><strong>Texture</strong> - Upload custom images</li>
          <li><strong>Opacity</strong> - Transparency (0-1)</li>
          <li><strong>Position</strong> - X, Y, Z coordinates (read-only, drag to move)</li>
          <li><strong>Scale</strong> - Size multiplier</li>
          <li><strong>Anchored</strong> - Checkbox to enable/disable physics</li>
          <li><strong>Locked</strong> - Prevent accidental selection and movement</li>
        </ul>
      </div>

      <div className="section">
        <h2>Textures</h2>
        
        <h3>Adding a Texture</h3>
        <ol>
          <li>Select an object</li>
          <li>Go to Properties tab</li>
          <li>In the Appearance section, click <strong>"+ Upload Texture"</strong></li>
          <li>Select an image file (PNG or JPG recommended)</li>
          <li>The texture preview will appear below</li>
        </ol>

        <h3>Texture Best Practices</h3>
        <ul>
          <li>Use high-quality images for best appearance</li>
          <li>Square images (512x512, 1024x1024) work best</li>
          <li>PNG format supports transparency</li>
          <li>Textures work best with Metal, Wood, and SmoothPlastic materials</li>
        </ul>
      </div>

      <div className="section">
        <h2>Viewport Navigation</h2>
        
        <h3>In Edit Mode</h3>
        <ul>
          <li><strong>Right Click + Drag</strong> - Rotate camera view</li>
          <li><strong>Mouse Wheel</strong> - Zoom in/out</li>
          <li><strong>Middle Click + Drag</strong> - Pan view</li>
        </ul>

        <h3>In Play Mode</h3>
        <ul>
          <li><strong>WASD</strong> - Move player</li>
          <li><strong>Mouse Wheel</strong> - Zoom (third-person ↔ first-person)</li>
          <li><strong>Right Click + Drag</strong> - Rotate camera (third-person only)</li>
          <li><strong>Space</strong> - Jump</li>
          <li><strong>E</strong> - Interact</li>
        </ul>
      </div>

      <div className="section">
        <h2>Templates</h2>
        
        <h3>Starter Scene</h3>
        <p>Includes a pre-built scene with:</p>
        <ul>
          <li>A house with doors and lights</li>
          <li>Interactive objects (coins, buttons, platforms)</li>
          <li>Example scripts showing how events work</li>
          <li>Spawn point and checkpoints</li>
        </ul>

        <h3>Flat Baseplate</h3>
        <p>A blank canvas with just a baseplate. Perfect for starting from scratch.</p>
      </div>

      <div className="section">
        <h2>Menus</h2>
        
        <h3>File Menu</h3>
        <ul>
          <li><strong>New Project</strong> - Choose template for new game</li>
          <li><strong>Import Roblox XML</strong> - Import from Roblox .rbxlx files</li>
          <li><strong>Import PrinterMake (.prmk)</strong> - Load saved .prmk files</li>
          <li><strong>Export PrinterMake (.prmk)</strong> - Save as .prmk file</li>
          <li><strong>Publish to PrinterMake</strong> - Make game public</li>
        </ul>

        <h3>Edit Menu</h3>
        <ul>
          <li><strong>Undo/Redo</strong> - Revert or redo changes</li>
          <li><strong>Duplicate</strong> - Copy selected object</li>
          <li><strong>Delete</strong> - Remove selected object</li>
        </ul>

        <h3>Insert Menu</h3>
        <ul>
          <li>Add new objects to your scene</li>
        </ul>

        <h3>Test Menu</h3>
        <ul>
          <li><strong>Play (F5)</strong> - Start testing your game</li>
          <li><strong>Stop (Shift+F5)</strong> - Exit play mode</li>
        </ul>
      </div>
    </div>
  );
}
