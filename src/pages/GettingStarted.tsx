// Wrote by ThomasConway
export default function GettingStarted() {
  return (
    <div>
      <h1>🚀 Getting Started</h1>

      <div className="section">
        <h2>Installation</h2>
        <ol>
          <li>Download the PrinterMake installer from the website</li>
          <li>Run the installer and follow the setup wizard</li>
          <li>Create a PrinterMake account or sign in with Google</li>
          <li>Launch the app!</li>
        </ol>
      </div>

      <div className="section">
        <h2>Your First Game</h2>
        <div className="step">
          <h3>Step 1: Create a New Project</h3>
          <p>Click the <strong>Create</strong> tab to start a new project. You'll be prompted to choose a template:</p>
          <ul>
            <li><strong>Starter Scene</strong> - Comes with example objects and scripts to learn from</li>
            <li><strong>Flat Baseplate</strong> - Blank canvas for building from scratch</li>
          </ul>
        </div>

        <div className="step">
          <h3>Step 2: Explore the Editor</h3>
          <p>The Studio Editor has three main areas:</p>
          <ul>
            <li><strong>Left Panel</strong> - Explorer tree showing all objects in your scene</li>
            <li><strong>Center</strong> - 3D viewport where you build your game</li>
            <li><strong>Right Panel</strong> - Properties and scripting controls</li>
          </ul>
        </div>

        <div className="step">
          <h3>Step 3: Add Objects</h3>
          <p>Use the <strong>Insert</strong> menu to add objects:</p>
          <ul>
            <li>Box, Sphere, Cylinder (basic shapes)</li>
            <li>Mirror, SpawnPoint (special objects)</li>
          </ul>
        </div>

        <div className="step">
          <h3>Step 4: Add Interactivity</h3>
          <p>Select an object and go to the <strong>Script</strong> tab in the properties panel to add:</p>
          <ul>
            <li>Visual scripts (event-action system)</li>
            <li>C# scripts (advanced programming)</li>
          </ul>
        </div>

        <div className="step">
          <h3>Step 5: Test Your Game</h3>
          <p>Click the <strong>Play</strong> button (▶) to test your game. Use:</p>
          <ul>
            <li><strong>WASD</strong> - Move around</li>
            <li><strong>Mouse Wheel</strong> - Zoom (third-person to first-person)</li>
            <li><strong>Right Click + Drag</strong> - Rotate camera (third-person only)</li>
            <li><strong>E Key</strong> - Interact with objects</li>
            <li><strong>Space</strong> - Jump</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>Controls Reference</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--line)' }}>
              <th style={{ textAlign: 'left', padding: '8px' }}>Control</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '8px' }}><code>W / A / S / D</code></td>
              <td style={{ padding: '8px' }}>Move forward / left / back / right</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '8px' }}><code>Space</code></td>
              <td style={{ padding: '8px' }}>Jump</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '8px' }}><code>Shift</code></td>
              <td style={{ padding: '8px' }}>Sprint (hold while moving)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '8px' }}><code>Mouse Wheel</code></td>
              <td style={{ padding: '8px' }}>Zoom camera in/out</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '8px' }}><code>Right Click + Drag</code></td>
              <td style={{ padding: '8px' }}>Rotate camera (third-person)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}><code>E</code></td>
              <td style={{ padding: '8px' }}>Interact with nearby objects</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>UI Overview</h2>
        <div className="code-block">
        <strong>Main Menu Tabs:</strong><br/>
        • <strong>Home</strong> - See friends and available games<br/>
        • <strong>Create</strong> - Start new projects or edit existing ones<br/>
        • <strong>Social</strong> - Friend requests and direct messaging<br/>
        </div>
      </div>

      <div className="section">
        <h2>Tips for Beginners</h2>
        <ul>
          <li>Start with the Starter Scene template to see examples</li>
          <li>Lock objects you don't want to accidentally move by checking the "Locked" checkbox</li>
          <li>Use the right-click context menu in the Explorer to quickly delete objects</li>
          <li>Test your game frequently during development</li>
          <li>Add textures to make your game look more polished</li>
          <li>Check out the Examples section for inspiration</li>
        </ul>
      </div>
    </div>
  );
}
