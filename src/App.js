import React from 'react';
import './style.css';
// import IMMessage from '@zohoim/chat-components/es/IMMessage/IMMessage';
import useMessageBubbleAction from '@zohoim/chat-components-hooks/es/MessageBubble/useMessageBubbleAction';

export default function App() {
  let { isRenderMessageAction, onMouseLeave, onMouseEnter } =
    useMessageBubbleAction({ needMessageActions: false });
  function handleRenderMessage() {
    return <div>Text</div>;
  }
  function handleRenderMessageFooter() {
    return <div>10:00AM</div>;
  }

  console.log(isRenderMessageAction, onMouseLeave, onMouseEnter);

  return (
    <div onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>
        {/* <IMMessage
          direction="OUT"
          isActive
          needSender
          isShowSender
          // senderSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6EPfyQc2GY8cnUWiymumHgmo7ePdAF_xvT2ldg7MTNg&s"
          senderTitle="Ravi"
          senderName="Ravikumar"
          needMessageBox={true}
          renderMessage={handleRenderMessage}
          messageActions={[{ id: 'REPLY' }, { id: 'COPY' }]}
          actionsDefaultShowCount={3}
          messageStatus="SENT"
          statusTitle="Sent"
          renderMessageFooter={handleRenderMessageFooter}
        /> */}
      </div>
      {isRenderMessageAction ? <div>Actions</div> : null}
    </div>
  );
}
