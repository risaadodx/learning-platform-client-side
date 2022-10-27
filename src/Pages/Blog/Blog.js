import React from "react";
import Card from "react-bootstrap/Card";

const Blog = () => {
  return (
    <div>
      <Card className="mx-auto mb-3" style={{ width: "58rem" }}>
        <Card.Body>
          <Card.Title>what is cors?</Card.Title>
          <Card.Text>
            Cross-origin resource sharing (CORS) is a browser mechanism which
            enables controlled access to resources located outside of a given
            domain. It extends and adds flexibility to the same-origin policy
            (SOP). However, it also provides potential for cross-domain attacks,
            if a website's CORS policy is poorly configured and implemented.
            CORS is not a protection against cross-origin attacks such as
            cross-site request forgery (CSRF).
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mx-auto mb-3" style={{ width: "58rem" }}>
        <Card.Body>
          <Card.Title>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Card.Title>
          <Card.Text>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more. Other option we have to implement
            authentication:OneLogin,Amazon
            Cognito,Auth0,Authress,Frontegg,Keycloak etc.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mx-auto mb-3" style={{ width: "58rem" }}>
        <Card.Body>
          <Card.Title>How does the private route work?</Card.Title>
          <Card.Text>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mx-auto mb-3" style={{ width: "58rem" }}>
        <Card.Body>
          <Card.Title> What is Node? How does Node work?</Card.Title>
          <Card.Text>
            Node. js is a JavaScript runtime environment that achieves low
            latency and high throughput by taking a “non-blocking” approach to
            serving requests. In other words, Node. js wastes no time or
            resources on waiting for I/O requests to return.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
