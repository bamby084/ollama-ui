import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import { NewChatView } from "./features/chat/pages/new-chat-view";
import { ChatView } from "./features/chat/pages/chat-view";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <NewChatView/>
      },{
        path: "chat/:chatId",
        element: <ChatView/>
      }
    ]
  }
]);