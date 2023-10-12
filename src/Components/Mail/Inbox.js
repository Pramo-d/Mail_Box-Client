import React, { useCallback, useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

const Inbox = () => {
  const [receivedData, setReceivedData] = useState([]);
  const [sentData, setSentData] = useState([]);

  const email = localStorage.getItem("email");
  const changedMail = email.replace(/[@.]/g, "");

  const fetchData = useCallback(async () => {
    try {
      const receivedResponse = await fetch(
        `https://email-box-37daa-default-rtdb.firebaseio.com/${changedMail}Inbox.json`
      );

      if (receivedResponse.ok) {
        const receivedData = await receivedResponse.json();
        if (receivedData) {
          const receivedEmails = Object.values(receivedData);
          setReceivedData(receivedEmails);
        }
      }

      const sentResponse = await fetch(
        `https://email-box-37daa-default-rtdb.firebaseio.com/${changedMail}SentMail.json`
      );

      if (sentResponse.ok) {
        const sentData = await sentResponse.json();
        if (sentData) {
          const sentEmails = Object.values(sentData);
          setSentData(sentEmails);
        }
      }
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  }, [changedMail]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Card bg="light">
        <h2 style={{ textAlign: "center" }}>Inbox</h2>
        <ListGroup>
          {receivedData.length === 0 && sentData.length === 0 && (
            <h5 style={{ textAlign: "center", margin: "1rem auto" }}>
              No Mails in Inbox!!
            </h5>
          )}
          {receivedData.length > 0 &&
            receivedData.map((email, index) => (
              <ListGroup.Item
                key={index}
                style={{
                  cursor: "pointer",
                  backgroundImage: "linear-gradient(to right, white, grey)",
                }}
              >
                <span>
                  <b>From:</b> {email.from}
                </span>
                <br />
                <span>
                  <b>Subject: </b> {email.subject}
                </span>
                <br />
                <span>
                  <b>Message: </b> {email.message}
                </span>
                <br />
              </ListGroup.Item>
            ))}
          {sentData.length > 0 &&
            sentData.map((email, index) => (
              <ListGroup.Item
                key={index}
                style={{
                  cursor: "pointer",
                  backgroundImage: "linear-gradient(to right, white, grey)",
                }}
              >
                <span>
                  <b>To:</b> {email.to}
                </span>
                <br />
                <span>
                  <b>Subject: </b> {email.subject}
                </span>
                <br />
                <span>
                  <b>Message: </b> {email.message}
                </span>
                <br />
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Card>
    </>
  );
};

export default Inbox;
