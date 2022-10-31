import './App.css';
import { Modal, List, Card, } from 'antd'
import { useState } from 'react';
import items from './data'
import video from './data';

function App() {
  // const [videoItems, setVideoItems] = useState(items)
  const [isOpen, setIsOpen] = useState(false)
  const showModal = (index) => {
    setIsOpen(true);
    // const newVideo = items.filter((item)=> item.id === index);
    // setVideoItems(newVideo)
  };
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  return (
    <div className="App">
      <List
        grid={{
          gutter: 16,
          column: 3,
        }}
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              <img src={item.img} width={'200px'} height={'200px'} alt=''
                onClick={() => showModal(items)} />
              <p>{item.desc}</p>
              {/* <iframe key={item.id} width={600} height={450} src={item.link} frameBorder="0" allowFullScreen title={item.title}/> */}
            </Card>
          </List.Item>
        )}
      />
      <Modal width={750} height={500} title={items.title} open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        {/* <iframe key={items.id} width={600} height={450} src={items.link} frameBorder="0" allowFullScreen title={items.title} destroyonclose='true'/> */}
        {/* {
          items.map((item,index)=>{
            return (
              <iframe key={index} src={item.link} width={600} height={450}
              frameBorder="0" allowFullScreen title={item.title} destroyonclose='true'/>
            )
          })
        } */}
      </Modal>
    </div>
  );
}

export default App;
