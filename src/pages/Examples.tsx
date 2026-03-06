// Wrote by ThomasConway
export default function Examples() {
  return (
    <div>
      <h1>💡 Examples & Tutorials</h1>

      <div className="section">
        <h2>Example 1: Collecting Items</h2>
        
        <div className="step">
          <h3>Objective</h3>
          <p>Create a coin that disappears when the player walks into it.</p>
        </div>

        <div className="step">
          <h3>Steps</h3>
          <ol>
            <li>Create a new project with Flat Baseplate template</li>
            <li>Insert → Sphere to create a coin</li>
            <li>Select the coin and in Properties:
              <ul>
                <li>Name: "Coin"</li>
                <li>Scale: (1, 0.2, 1)</li>
                <li>Color: Gold/Yellow</li>
              </ul>
            </li>
            <li>Go to Script tab and click "+ Visual Script"</li>
            <li>Event: onTouch</li>
            <li>Action: toggle</li>
            <li>Press Play and walk into the coin!</li>
          </ol>
        </div>
      </div>

      <div className="section">
        <h2>Example 2: Interactive Door</h2>
        
        <div className="step">
          <h3>Objective</h3>
          <p>Create a door that opens when the player presses E.</p>
        </div>

        <div className="step">
          <h3>Steps</h3>
          <ol>
            <li>Create a Box and scale it to look like a door (thin, tall, wide)</li>
            <li>Position it in a doorway</li>
            <li>Go to Script tab and add a Visual Script</li>
            <li>Event: onPress</li>
            <li>Action: move</li>
            <li>Offset: (0, 5, 0) to move it up</li>
            <li>Test it! Press E when near the door</li>
          </ol>
        </div>
      </div>

      <div className="section">
        <h2>Example 3: Color-Changing Platform</h2>
        
        <div className="step">
          <h3>Objective</h3>
          <p>Platform changes color when you stand on it.</p>
        </div>

        <div className="step">
          <h3>Steps</h3>
          <ol>
            <li>Create a Box and scale it as a platform</li>
            <li>Add a Visual Script with:
              <ul>
                <li>Event: onTouch</li>
                <li>Action: color</li>
                <li>Color: Choose a bright color (red, blue, etc.)</li>
              </ul>
            </li>
            <li>Walk on the platform to see it change color!</li>
          </ol>
        </div>
      </div>

      <div className="section">
        <h2>Example 4: Welcome Message</h2>
        
        <div className="step">
          <h3>Objective</h3>
          <p>Show a message when the player enters the game.</p>
        </div>

        <div className="step">
          <h3>Steps</h3>
          <ol>
            <li>Create a Box (it can be invisible)</li>
            <li>Add a Visual Script:
              <ul>
                <li>Event: onStart</li>
                <li>Action: message</li>
                <li>Text: "Welcome to My Game!"</li>
              </ul>
            </li>
            <li>When you press Play, the message appears above your head!</li>
          </ol>
        </div>
      </div>

      <div className="section">
        <h2>Example 5: Teleport Pad (C# Version)</h2>
        
        <div className="step">
          <h3>Objective</h3>
          <p>Advanced: Use C# to teleport player to a specific location.</p>
        </div>

        <div className="step">
          <h3>Code</h3>
          <div className="code-block">
using PrinterMake.GameObjects;<br/>
<br/>
public class TeleportPad : GameBehavior {'{}'}<br/>
&nbsp;&nbsp;void OnStart() {'{}'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Debug.Log("Teleport pad ready!");<br/>
&nbsp;&nbsp;{'}'}<br/>
<br/>
&nbsp;&nbsp;void OnTouch(GameObject other) {'{}'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;// When player touches, teleport them<br/>
&nbsp;&nbsp;&nbsp;&nbsp;// Target position<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Vector3 targetPos = new Vector3(10, 2, 10);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Debug.Log("Teleporting player!");<br/>
&nbsp;&nbsp;{'}'}<br/>
{'}'}
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Example 6: Obstacle Course</h2>
        
        <div className="step">
          <h3>Build a Complete Mini-Game</h3>
          <ol>
            <li>Create a starting platform</li>
            <li>Add obstacles (moving platforms, spinning objects)</li>
            <li>Create collectible items along the path</li>
            <li>Add a finish line with a checkpoint message</li>
            <li>Test and refine the difficulty</li>
          </ol>
        </div>

        <div className="step">
          <h3>Script Ideas</h3>
          <ul>
            <li>Use onTimer to make platforms move back and forth</li>
            <li>Use message action to encourage players</li>
            <li>Use toggle to hide/show objects</li>
            <li>Use teleport to reset player if they fall</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>Best Practices</h2>
        <ul>
          <li><strong>Start Simple</strong> - Build small examples first</li>
          <li><strong>Test Often</strong> - Play test frequently</li>
          <li><strong>Use Feedback</strong> - Add messages to guide players</li>
          <li><strong>Polish Visuals</strong> - Colors, materials, and textures matter</li>
          <li><strong>Balance Difficulty</strong> - Make challenges fun, not frustrating</li>
          <li><strong>Add Sound Cues</strong> - Consider message alerts for events</li>
        </ul>
      </div>

      <div className="section">
        <h2>Next Steps</h2>
        <ul>
          <li>Try building the examples above</li>
          <li>Combine multiple examples into one game</li>
          <li>Publish your first game!</li>
          <li>Explore advanced C# scripting</li>
          <li>Experiment with different game mechanics</li>
          <li>Share your games with friends</li>
        </ul>
      </div>
    </div>
  );
}
