// You can write your own logic here to determine the actual url
window.app2Url = "http://localhost:3002"
window.app3Url = "http://localhost:5173"

// Use dynamic import here to allow webpack to interface with module federation code
import("./bootstrap");
