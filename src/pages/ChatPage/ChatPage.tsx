import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard'
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import ChatBody from '../../components/ChatBody/ChatBody'
import ChatFooter from '../../components/ChatFooter/ChatFooter';

function ChatPage(){
    return(
        <>
        <HeaderDashboard />
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
        </>
    )
}

export default ChatPage;