// Wrote by ThomasConway
export default function Publishing() {
  return (
    <div>
      <h1>🎮 Publishing Your Game</h1>

      <div className="section">
        <h2>Getting Ready to Publish</h2>
        <p>Before publishing, make sure your game is polished and tested:</p>
        <div className="step">
          <h3>Testing</h3>
          <ul>
            <li>Play through your entire game multiple times</li>
            <li>Test all interactive elements</li>
            <li>Check for bugs and glitches</li>
            <li>Ensure scripts work as expected</li>
          </ul>
        </div>

        <div className="step">
          <h3>Polish</h3>
          <ul>
            <li>Add textures to make visuals appealing</li>
            <li>Adjust lighting and colors</li>
            <li>Place objects with care</li>
            <li>Add feedback messages for player actions</li>
          </ul>
        </div>

        <div className="step">
          <h3>Prepare Details</h3>
          <ul>
            <li>Decide on a catchy game title</li>
            <li>Write a brief description of your game</li>
            <li>Choose a thumbnail image (optional)</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>Publishing Steps</h2>
        <ol>
          <li>Open your game in the Studio Editor</li>
          <li>Click <strong>File → Publish to PrinterMake</strong></li>
          <li>Fill in the publish dialog:
            <ul>
              <li><strong>Title</strong> - Name of your game</li>
              <li><strong>Description</strong> - What your game is about</li>
              <li><strong>Thumbnail</strong> - Optional game preview image</li>
            </ul>
          </li>
          <li>Click <strong>Publish</strong></li>
          <li>Wait for upload to complete</li>
        </ol>
      </div>

      <div className="section">
        <h2>After Publishing</h2>
        
        <h3>Your Game is Live!</h3>
        <p>Once published, your game appears in the community and your friends can discover it.</p>

        <h3>Managing Your Game</h3>
        <p>Go to the Home tab and find your published game. Click "Manage" to:</p>
        <ul>
          <li>Edit the title and description</li>
          <li>Change the thumbnail image</li>
          <li>Update the game in Studio</li>
          <li>Delete the game if you want</li>
        </ul>

        <h3>Updates</h3>
        <p>Made improvements? You can update your game:</p>
        <ol>
          <li>Edit your game in Studio</li>
          <li>Click "Manage" from the Home tab</li>
          <li>Click "Edit in Studio" to open for editing</li>
          <li>Make your changes</li>
          <li>Republish to push updates</li>
        </ol>
      </div>

      <div className="section">
        <h2>Tips for Success</h2>
        <ul>
          <li><strong>Good Title</strong> - Make it catchy and descriptive</li>
          <li><strong>Clear Description</strong> - Explain what your game is and how to play</li>
          <li><strong>Great Thumbnail</strong> - First impression matters! Show off your best visuals</li>
          <li><strong>Test Before Release</strong> - Make sure everything works</li>
          <li><strong>Keep Updating</strong> - Add new features based on feedback</li>
          <li><strong>Share with Friends</strong> - Let people discover your game</li>
        </ul>
      </div>

      <div className="section">
        <h2>Distribution Formats</h2>
        
        <h3>Save Formats</h3>
        <ul>
          <li><strong>.prmk (PrinterMake)</strong> - Native format with all game data</li>
          <li><strong>Roblox XML</strong> - Import/export from Roblox</li>
        </ul>

        <h3>Exporting Your Game</h3>
        <p>You can also save your game locally:</p>
        <ol>
          <li>Click <strong>File → Export PrinterMake (.prmk)</strong></li>
          <li>Choose location and filename</li>
          <li>The .prmk file contains all your game data</li>
          <li>Share with others or backup locally</li>
        </ol>
      </div>
    </div>
  );
}
