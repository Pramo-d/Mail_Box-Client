import React, { useState, useEffect } from 'react';
 import classes from './ComposeMail.module.css';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const ComposeMail = (props) => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [mailBody, setMailBody] = useState("");
  

  useEffect(()=>{
    setMailBody(editorState.getCurrentContent().getPlainText());
}, [editorState]);

  const senderEmail= localStorage.getItem('email');

  const handleSend = async() => {
    
  const changedSenderMail= senderEmail.replace(/[@.]/g, "")
    const mailData = {
        to: to,
        subject: subject,
        message: mailBody,
      };

      try{
        const response = await fetch(
            `https://email-box-37daa-default-rtdb.firebaseio.com//${changedSenderMail}SentMail.json`,
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
      }catch(err){
        console.log(err);
      }

      try {
        const mail = to.replace(/[@.]/g, "");
        const response = await fetch(
          `https://email-box-37daa-default-rtdb.firebaseio.com//${mail}Inbox.json`,
          {
            method: "POST",
            body: JSON.stringify({
              from: senderEmail,
              subject: subject,
              message: mailBody,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        let data = await response.json();
        console.log(data);
       
      } catch (err) {
        alert(err);
      }

     setTo("");
     setSubject("");
     setEditorState(EditorState.createEmpty());
  };
  return (
    <>
      <h2 className={classes.mailHeading}>Compose Email</h2>

      <div className={classes.mail_container}>
        <div className={classes.to}>
          <input
            type="email"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
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

export default ComposeMail;
