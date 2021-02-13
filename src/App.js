import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID = "add54722-27f0-4007-bae6-3e9a2f798d8a"
            userName = "franksauer"
            userSecret = "123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;