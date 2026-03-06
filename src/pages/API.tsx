// Wrote by ThomasConway
export default function API() {
  return (
    <div>
      <h1>🔌 API Reference</h1>

      <div className="section">
        <h2>Backend API Endpoints</h2>
        <p>Base URL: <code>https://api.printermake.com</code></p>

        <h3>Authentication</h3>
        <p>All requests require a Bearer token in the Authorization header:</p>
        <div className="code-block">
Authorization: Bearer {'<token>'}
        </div>

        <h3>User Endpoints</h3>
        <div className="code-block">
<strong>POST /api/sync-user</strong><br/>
Sync user profile with backend<br/>
Body: {'{ username: string }'}
        </div>

        <h3>Friends Endpoints</h3>
        <div className="code-block">
<strong>GET /api/friends</strong><br/>
Get list of friends<br/>
Response: Friend[]<br/>
<br/>
<strong>POST /api/friends/request</strong><br/>
Send friend request<br/>
Body: {'{ receiverUsername: string }'}
        </div>

        <h3>Games Endpoints</h3>
        <div className="code-block">
<strong>GET /api/games</strong><br/>
Get all games<br/>
Response: Game[]<br/>
<br/>
<strong>POST /api/games/publish</strong><br/>
Publish a new game<br/>
Body: {'{ title: string, description: string, imageUrl?: string, data: GameObject[] }'}
        </div>

        <h3>Sessions Endpoints</h3>
        <div className="code-block">
<strong>GET /api/sessions/active/list</strong><br/>
Get active friend sessions<br/>
Response: Session[]<br/>
<br/>
<strong>POST /api/sessions/:sessionId/join</strong><br/>
Join a friend's game session<br/>
Response: {'{ success: boolean }'}
        </div>

        <h3>Chat Endpoints</h3>
        <div className="code-block">
<strong>GET /api/messages/:friendId</strong><br/>
Get conversation with friend<br/>
Response: Message[]<br/>
<br/>
<strong>POST /api/messages/:friendId</strong><br/>
Send direct message<br/>
Body: {'{ message: string }'}
        </div>
      </div>

      <div className="section">
        <h2>C# Game API</h2>

        <h3>GameBehavior Base Class</h3>
        <div className="code-block">
public class GameBehavior {'{}'}<br/>
&nbsp;&nbsp;// Your game logic here<br/>
{'}'}
        </div>

        <h3>GameObject</h3>
        <div className="code-block">
<strong>Properties:</strong><br/>
gameObject.name: string<br/>
gameObject.active: boolean<br/>
gameObject.transform: Transform<br/>
<br/>
<strong>Methods:</strong><br/>
gameObject.SetActive(bool): void<br/>
gameObject.GetComponent&lt;T&gt;(): T
        </div>

        <h3>Transform</h3>
        <div className="code-block">
<strong>Properties:</strong><br/>
transform.position: Vector3<br/>
transform.rotation: Quaternion<br/>
transform.scale: Vector3<br/>
<br/>
<strong>Methods:</strong><br/>
transform.Translate(Vector3): void<br/>
transform.Rotate(Vector3): void<br/>
transform.LookAt(Vector3): void
        </div>

        <h3>Vector3</h3>
        <div className="code-block">
// Creating vectors<br/>
new Vector3(x, y, z);<br/>
Vector3.up; // (0, 1, 0)<br/>
Vector3.down; // (0, -1, 0)<br/>
Vector3.forward; // (0, 0, 1)<br/>
Vector3.back; // (0, 0, -1)<br/>
<br/>
// Operations<br/>
vector.magnitude; // Length<br/>
vector.normalized; // Unit vector<br/>
Vector3.Distance(a, b); // Distance<br/>
Vector3.Lerp(a, b, t); // Linear interpolation
        </div>

        <h3>Input</h3>
        <div className="code-block">
Input.GetKey(string key): boolean<br/>
// Supported keys: "W", "A", "S", "D", "Space", "E"<br/>
<br/>
if (Input.GetKey("W")) {'{}'}<br/>
&nbsp;&nbsp;// Player pressing W<br/>
{'}'}
        </div>

        <h3>Debug</h3>
        <div className="code-block">
Debug.Log(string message): void<br/>
Debug.LogWarning(string message): void<br/>
Debug.LogError(string message): void
        </div>

        <h3>Time</h3>
        <div className="code-block">
Time.deltaTime: float; // Frame delta in seconds<br/>
Time.time: float; // Time since start
        </div>
      </div>

      <div className="section">
        <h2>Common Patterns</h2>

        <h3>Movement</h3>
        <div className="code-block">
void OnUpdate() {'{}'}<br/>
&nbsp;&nbsp;if (Input.GetKey("W")) {'{}'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;transform.Translate(Vector3.forward * 5 * Time.deltaTime);<br/>
&nbsp;&nbsp;{'}'}<br/>
{'}'}
        </div>

        <h3>Distance Check</h3>
        <div className="code-block">
if (Vector3.Distance(transform.position, targetPos) &lt; 1.0f) {'{}'}<br/>
&nbsp;&nbsp;// Player is close to target<br/>
{'}'}
        </div>

        <h3>Rotation</h3>
        <div className="code-block">
transform.LookAt(targetPosition);<br/>
transform.Rotate(0, 45, 0); // Rotate 45 degrees on Y axis
        </div>

        <h3>Animation</h3>
        <div className="code-block">
Vector3 targetPos = transform.position + Vector3.up * 5;<br/>
transform.position = Vector3.Lerp(transform.position, targetPos, Time.deltaTime);<br/>
        </div>
      </div>

      <div className="section">
        <h2>Error Handling</h2>
        <p>Always wrap API calls in try-catch:</p>
        <div className="code-block">
try {'{}'}<br/>
&nbsp;&nbsp;// API call<br/>
{'}'}  catch (Exception e) {'{}'}<br/>
&nbsp;&nbsp;Debug.LogError(e.Message);<br/>
{'}'}
        </div>
      </div>
    </div>
  );
}
