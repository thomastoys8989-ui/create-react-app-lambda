// Wrote by ThomasConway
export default function Scripting() {
  return (
    <div>
      <h1>⚙️ Scripting Guide</h1>

      <div className="section">
        <h2>Introduction</h2>
        <p>PrinterMake supports two types of scripting:</p>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Visual Scripting</h3>
            <p>Easy event-action system. Perfect for beginners.</p>
          </div>
          <div className="feature-card">
            <h3>C# Scripting</h3>
            <p>Full programming language. Advanced interactions.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Visual Scripting</h2>
        
        <h3>How It Works</h3>
        <p>Visual scripts connect Events to Actions:</p>
        <ul>
          <li><strong>Events</strong> - Trigger when something happens</li>
          <li><strong>Actions</strong> - What happens as a result</li>
        </ul>

        <h3>Creating a Visual Script</h3>
        <ol>
          <li>Select an object</li>
          <li>Go to the Script tab in properties</li>
          <li>Click <strong>"+ Visual Script"</strong></li>
          <li>Choose an Event and Action</li>
          <li>Configure parameters</li>
        </ol>

        <h3>Available Events</h3>
        <div className="code-block">
• <strong>onTouch</strong> - Fires when player walks into object<br/>
• <strong>onPress</strong> - Fires when player presses E near object<br/>
• <strong>onTimer</strong> - Fires repeatedly at interval<br/>
• <strong>onStart</strong> - Fires once when game starts<br/>
• <strong>onChat</strong> - Fires when someone sends message<br/>
        </div>

        <h3>Available Actions</h3>
        <div className="code-block">
• <strong>message</strong> - Display text above player<br/>
• <strong>move</strong> - Animate object to new position<br/>
• <strong>rotate</strong> - Spin object by degrees<br/>
• <strong>toggle</strong> - Hide/show object<br/>
• <strong>destroy</strong> - Remove object from scene<br/>
• <strong>teleport</strong> - Move player to position<br/>
• <strong>animate</strong> - Smooth animation<br/>
• <strong>color</strong> - Change object color<br/>
        </div>

        <h3>Example: Collect Item</h3>
        <div className="step">
          <ol>
            <li>Create a Sphere and name it "Coin"</li>
            <li>Go to Script tab</li>
            <li>Click "+ Visual Script"</li>
            <li>Event: <strong>onTouch</strong></li>
            <li>Action: <strong>toggle</strong></li>
            <li>Click Play and walk into the coin to collect it!</li>
          </ol>
        </div>
      </div>

      <div className="section">
        <h2>C# Scripting</h2>
        
        <h3>Getting Started with C#</h3>
        <p>C# scripts give you full programming power for complex interactions.</p>

        <h3>Creating a C# Script</h3>
        <ol>
          <li>Select an object</li>
          <li>Go to Script tab</li>
          <li>Click <strong>"⚙ C# Script"</strong></li>
          <li>Write your C# code</li>
          <li>Click "Save & Apply"</li>
        </ol>

        <h3>Available Methods</h3>
        <div className="code-block">
<strong>Event Methods:</strong><br/>
void OnStart() {'{}'} // Called once at game start<br/>
void OnUpdate() {'{}'} // Called every frame<br/>
void OnTouch(GameObject other) {'{}'} // When player touches<br/>
void OnPress(int key) {'{}'} // When player presses E<br/>
        </div>

        <h3>Available APIs</h3>
        <div className="code-block">
<strong>GameObjects & Transform:</strong><br/>
transform.position = new Vector3(x, y, z);<br/>
transform.Rotate(x, y, z);<br/>
gameObject.SetActive(bool);<br/>
<br/>
<strong>Input:</strong><br/>
Input.GetKey(string key); // "W", "A", "S", "D"<br/>
<br/>
<strong>Output:</strong><br/>
Debug.Log(string message);<br/>
        </div>

        <h3>Example: Door that Opens</h3>
        <div className="code-block">
using PrinterMake.GameObjects;<br/>
using PrinterMake.Events;<br/>
<br/>
public class Door : GameBehavior {'{}'}<br/>
&nbsp;&nbsp;private bool isOpen = false;<br/>
<br/>
&nbsp;&nbsp;void OnPress(int key) {'{}'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;if (!isOpen) {'{}'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Move door up<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform.position += Vector3.up * 5;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isOpen = true;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
&nbsp;&nbsp;{'}'}<br/>
{'}'}
        </div>

        <h3>Best Practices</h3>
        <ul>
          <li>Keep scripts organized and readable</li>
          <li>Use meaningful variable names</li>
          <li>Add comments explaining complex logic</li>
          <li>Test frequently during development</li>
          <li>Use Debug.Log() to troubleshoot</li>
          <li>Remember scripts can impact performance - optimize when needed</li>
        </ul>
      </div>

      <div className="section">
        <h2>Comparison: Visual vs C#</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--line)' }}>
              <th style={{ textAlign: 'left', padding: '8px' }}>Visual Script</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>C# Script</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '8px' }}>Beginner friendly</td>
              <td style={{ padding: '8px' }}>Advanced programming</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '8px' }}>Limited actions</td>
              <td style={{ padding: '8px' }}>Full control</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '8px' }}>No coding knowledge needed</td>
              <td style={{ padding: '8px' }}>Need C# knowledge</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>Quick prototyping</td>
              <td style={{ padding: '8px' }}>Complex systems</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>Debugging Tips</h2>
        <ul>
          <li>Use Debug.Log() to print messages to console</li>
          <li>Check that events are correctly configured</li>
          <li>Make sure scripts are enabled (checkbox in Script tab)</li>
          <li>Test individual scripts one at a time</li>
          <li>Look at console output during play mode</li>
        </ul>
      </div>
    </div>
  );
}
