import React, { useState, useEffect } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from "./ComposeMail.module.css";

const MailComponent = () => {
  const [toMail, setToMail] = useState("");
  const [subject, setSubject] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [mailBody, setMailBody] = useState("");
  

  useEffect(() => {
    setMailBody(editorState.getCurrentContent().getPlainText());
  }, [editorState]);

  

  const handleSend = async () => {
    const senderEmail = localStorage.getItem("email");
    const mailData = {
      email:toMail,
      subject:subject,
      message:mailBody,
    };

    try {
      const response = await fetch(
        `https://mail-box-278be-default-rtdb.firebaseio.com//mail-${senderEmail}.json`,
        {
          method: "POST",
          body: JSON.stringify(mailData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    setToMail("");
    setSubject("");
    setMailBody("");
  };
  return (
    <>
      <h2 className={classes.mailHeading}>Compose Email</h2>

      <div className={classes.mail_container}>
        <div className={classes.toMail}>
          <input
            type="email"
            placeholder="To"
            value={toMail}
            onChange={(e) => setToMail(e.target.value)}
          />
        </div>
        <div className={classes.subject}>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          placeholder="Write your message here..."
        />
      </div>

      <button className={classes.send_button} onClick={handleSend}>
        Send
      </button>
    </>
  );
};

export default MailComponent;
