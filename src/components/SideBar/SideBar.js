import "./SideBar.scss";
import { RiMenu2Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { Drawer, Button, Space } from "antd";
import React, { useState } from "react";
function SideBar() {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();

  const showLargeDrawer = () => {
    setSize("default");
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <Space>
        {visible ? (
          <button className="menu__icon" onClick={showLargeDrawer}>
            <GrClose />
          </button>
        ) : (
          <Button className="menu__icon" onClick={showLargeDrawer}>
            <RiMenu2Line />
          </Button>
        )}
      </Space>
      <Drawer
        placement="left"
        // size={size}
        width="50%"
        // className="d-flex flex-column justify-content-evenly"
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <div className="dwr__link bdr__btm">
          <a href="">HOME</a>
        </div>
        <div className="dwr__link bdr__btm">
          <a href="">RARITY</a>
        </div>
        <div className="dwr__link bdr__btm">
          <a href="">ABOUT</a>
        </div>
        <div className="dwr__link bdr__btm">
          <a href="">ROADMAP</a>
        </div>
        <div className="dwr__link bdr__btm">
          <a href="">TEAM</a>
        </div>
        <div className="dwr__link bdr__btm">
          <a href="">FAQ</a>
        </div>
        <div className="dwr__link bdr__btm">
          <a href="">
            <BsDiscord />
          </a>
        </div>
        <div className="dwr__link">
          <a href="">
            <AiOutlineTwitter />
          </a>
        </div>
        <div className="dwr__btn">
          <a href="">MINT NOW</a>
        </div>
      </Drawer>
    </div>
  );
}

export default SideBar;
// export default class SideBar extends Component {
//   state = { visible: false, placement: "left" };

//   showDrawer = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   onClose = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   render() {
//     const { placement, visible } = this.state;
//     return (
//       <>
//         <Space>
//           {visible ? (
//             <button className="sider__btn" onClick={this.showDrawer}>
//               <GrClose />
//             </button>
//           ) : (
//             <button
//               className="sider__btn"
//               type="primary"
//               onClick={this.showDrawer}
//             >
//               <RiMenu2Line />
//             </button>
//           )}
//         </Space>
//         <Drawer
//           title="Basic Drawer "
//           className="dwr my-drawer"
//           placement={placement}
//           closable={false}
//           onClose={this.onClose}
//           visible={visible}
//           key={placement}
//           size={"default"}
//         >
//           <div className="dwr__link bdr__btm">
//             <a href="">HOME</a>
//           </div>
//           <div className="dwr__link bdr__btm">
//             <a href="">RARITY</a>
//           </div>
//           <div className="dwr__link bdr__btm">
//             <a href="">ABOUT</a>
//           </div>
//           <div className="dwr__link bdr__btm">
//             <a href="">ROADMAP</a>
//           </div>
//           <div className="dwr__link bdr__btm">
//             <a href="">TEAM</a>
//           </div>
//           <div className="dwr__link bdr__btm">
//             <a href="">FAQ</a>
//           </div>
//           <div className="dwr__link bdr__btm">
//             <a href="">
//               <BsDiscord />
//             </a>
//           </div>
//           <div className="dwr__link">
//             <a href="">
//               <AiOutlineTwitter />
//             </a>
//           </div>
//           <div className="dwr__btn">
//             <a href="">MINT NOW</a>
//           </div>
//         </Drawer>
//       </>
//     );
//   }
// }
