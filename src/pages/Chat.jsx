import AsideHeaderBlock from "../components/AsideHeaderBlock";

const Chat = () => {
  return (
    <div className="page chat">
      <div className="aside">
        <div className="chats">
          <AsideHeaderBlock />
          <div className="chats__items">
            <div className="chats__item"></div>
          </div>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
};

export default Chat;
