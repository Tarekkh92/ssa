import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HeroCardIcon from "../../images/headerCardIcon.svg";
import Herogif from "../../images/heraderGif.gif";
import { Row, Col } from "antd";
import FtrText from "../../images/ftrText.png";
import about from "../../images/about.png";
import Shape from "../../images/shape-p.webp";
import teamImg1 from "../../images/teamImg1.png";
import teamImg2 from "../../images/teamImg2.png";
import { Collapse } from "antd";
import teamImg3 from "../../images/teamImg3.jpg";
import SLogo from "../../images/sLogo.svg";
import { BsDiscord } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";

import "./Home.scss";
const { Panel } = Collapse;
function Home() {
  const [show, setShow] = useState(false);
  const [showTabs, setShowTabs] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function callback(key) {
    console.log(key);
  }
  const handleScroll = () => {
    setShow(window.pageYOffset > 140);
  };
  const text1 = `
  November 19th at 9 PM EST / 8 PM CST
`;
  const text2 = `.44 SOL`;
  const text3 = `999 Unique Secret Squirrels`;
  const text4 = `Our site will support Phantom, Sollet.io, and SolFlare`;
  const text51 = `Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically.`;
  const text52 = `NFTs are different from cryptocurrencies because they’re not interchangeable. Think of Pokémon cards: You can trade them, but a Gastly is not the same as a holographic Charizard. But a bitcoin is indistinguishable from another bitcoin.`;
  const text61 = `One reason to buy an NFT is for its emotional value, which isn’t so different from physical objects...unless you’re a total utilitarian. No one buys lip gloss because they need it. They buy it for the way it makes them feel. The same can be true for a GIF, image, video, or other digital asset.`;
  const text62 = `The other reason is because you think it’s valuable...and will only increase in value. And yes, you can make money off of an NFT by buying and reselling it for more.`;
  const text71 = `NFT ownership is recorded on the blockchain, and that entry acts as a digital pink slip. Our NFTs will be encoded using Metaplex's smart contract on the Solana Blockchain.`;
  const text81 = `We offer a number of wallet connections for minting, but Phantom is the recommended wallet.`;
  const text91 = `We will be using a smart contract deployed on the Solana chain to distribute the Secret Squirrel Association. The tokens can be verified on the blockchain and our smart contract code can be audited by the Solana core devs.`;
  {
    console.log(showTabs);
  }
  return (
    <div className="home__area">
      {show ? (
        <div className={show ? "show" : ""}>
          <NavBar />
        </div>
      ) : (
        ""
      )}

      <div className="">
        <div className="wrapped__home__area">
          <div className="space">
            <div>
              <NavBar />
            </div>
          </div>
          <div className="space">
            <div className="hero__area">
              <div className="container mt-4 pt-5">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-6 col-md-12 hero__top__content me-xl-auto me-lg-auto">
                    <h1 className="text-white head__title">
                      Secret Squirrel <br className="title__break" />
                      Association
                    </h1>
                    <h5 className="mt-4 sub__title">
                      999 Secret Squirrels residing on the Solana Blockchain
                    </h5>
                    <div className="hero__card me-lg-5">
                      <h5
                        style={{ fontSize: "19.2px", fontWeight: "700" }}
                        className="text-white pt-3"
                      >
                        SSA Mint - .44 SOL per mint
                      </h5>
                      <small
                        style={{ fontStyle: "italic", fontSize: "16px" }}
                        className="d-block "
                      >
                        <b>395 left</b>
                      </small>
                      <button className="mt-4">SELECT WALLET</button>
                      <div className="hero__card__text text-center mt-5 ">
                        <p className="d-inline-block">
                          Minting on the
                          <img src={SLogo} alt="" />
                          Solana Network - Learn How to Mint
                        </p>
                      </div>
                    </div>
                    <div className="hero__social__icon d-flex mt-5 justify-content-lg-start">
                      <div className="icn">
                        <BsDiscord />
                      </div>
                      <div className="icn">
                        <AiOutlineTwitter />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 mt-3 me-lg-4">
                    <div className="hero__gif__img">
                      <img className="img-fluid" src={Herogif} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about__area">
          <div className="space">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                  <div className="about__lft__content">
                    <img className="img-fluid" src={about} alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about__rgt__content mt-3">
                    <h1>About</h1>
                    <p className="pt-4">
                      The Secret Squirrel Association is the cutest, most
                      relatable collection of 999 algorithmically generated NFTs
                      residing on the Solana blockchain. Not only is each
                      Squirrel unique in it's own way, but they will all grant
                      their owners with several benefits and perks. Multiple
                      Squirrels will come with a sweet surprise post-mint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="minting">
          <div className="container">
            <div className="space">
              <div className="d-flex justify-content-center">
                <div className="minting__header text-center text-white pb-5">
                  <h1 className="text-white text-center">MINTING</h1>
                  <p className="mt-5">
                    The Squirrels will be available at a fixed and fair price.
                    Everyone will have an equal opportunity to become a member
                    of The Secret Squirrel Association. It will be first come,
                    first serve with no bonding curve and no bidding wars.
                  </p>
                </div>
              </div>
              <div className="minting__mid__content">
                <div className="row g-3">
                  <div className="col-lg-3 p-lg-0 col-md-5 mt-4  text-white">
                    <div className="red__dot">
                      <h6 className="text-white">
                        <b>Minting Begins</b>
                      </h6>
                      <p
                        style={{
                          color: "#97afd5",
                          fontFamily: "roboto, sans-serif",
                        }}
                        className="mt-2"
                      >
                        Nov 20 2021 02:00:00 GMT
                      </p>
                      <button className="mt-3">
                        <small>CONVERT TO YOUR TIME</small>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-3 p-lg-0 col-md-3 mt-4   text-white">
                    <div className="red__dot">
                      <h6 className="text-white">
                        <b>Total Mints</b>
                      </h6>
                      <h2 className="text-white">999</h2>
                    </div>
                  </div>
                  <div className="col-lg-2 p-lg-0  col-md-3 mt-4   text-white">
                    <div className="red__dot">
                      <h6 className="text-white">
                        <b>Price per Mint</b>
                      </h6>
                      <h2 className="text-white">.44 SOL</h2>
                    </div>
                  </div>
                  <div className="col-md-12 p-lg-0 col-lg-4 text-white mt-4 ">
                    <div className="minting__mid__card">
                      <h6 className="text-white">
                        Keep up with our launch updates
                      </h6>
                      <div className="social__icon d-flex mt-5">
                        <div className="icn">
                          <BsDiscord />
                        </div>
                        <div className="icn">
                          <AiOutlineTwitter />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="roadmap__area">
                <h1 className="text-white text-center">Our Roadmap</h1>
                <div className="roadmap__wrapped">
                  <div className="roadmap__line"></div>
                  <div className="row d-flex justify-content-center">
                    <div className="roadmap__steps col-sm-10 cl-md-10 col-lg-12">
                      <div className="roadmap__step__right">
                        <div className=" roadmap__card">
                          <h6 className="text-white-50">STAGE 1</h6>
                          <h4 className="text-white">Charity</h4>
                          <p>
                            10% of the initial mint will be donated to the
                            National Alliance on Mental Illness (NAMI).
                          </p>
                        </div>
                      </div>
                      <div className="roadmap__step__lft">
                        <div className=" roadmap__card ">
                          <h6 className="text-white-50">STAGE 1</h6>
                          <h4 className="text-white">SSA DAO</h4>

                          <p>
                            - The DAO will be created with specific channels
                            where everyone will be able to vote towards future
                            plans and ideas.
                          </p>
                          <p>
                            - 50% of all secondary royalties will be allocated
                            to the DAO wallet.
                          </p>
                          <p>
                            - The community will vote on which Blue Chip
                            project's floor we will be sweeping.
                          </p>
                          <p>
                            - These purchased assets can be used for several
                            things, including: Giveaways, Burning,
                            Fractionalization, etc.
                          </p>
                        </div>
                      </div>
                      <div className="roadmap__step__right">
                        <div className=" roadmap__card">
                          <h6 className="text-white-50">STAGE 1</h6>
                          <h4 className="text-white">SSA Merch</h4>
                          <p>
                            The SSA merch store will be opened with frequent
                            giveaways for 100% off coupons in the DAO channels.
                          </p>
                        </div>
                      </div>
                      <div className="roadmap__step__lft">
                        <div className=" roadmap__card ">
                          <h6 className="text-white-50">STAGE 1</h6>
                          <h4 className="text-white">Partnerships</h4>

                          <p>
                            We will always be on the lookout for partnering with
                            upcoming projects, aiming to secure the Squirrel
                            holders with airdrops, presales, and WL spots.
                          </p>
                        </div>
                      </div>
                      <div className="roadmap__step__right">
                        <div className=" roadmap__card">
                          <h6 className="text-white-50">STAGE 1</h6>
                          <h4 className="text-white">$NUTS</h4>
                          <p>
                            - $NUTS is a community/utility token, initially
                            rewarded to select blue chip projects' holders, and
                            minters of Secret Squirrels.
                          </p>
                          <p>
                            - This token can be used in the future for a
                            multitude of things, such as breeding,
                            customization, gamification, merch, etc.
                          </p>
                          <p>
                            - Each action that uses your $NUTS will result in
                            the $NUTS being burnt (ouch)
                          </p>
                          <p>
                            - The team will also periodically do burns to
                            further decrease the supply of available $NUTS.
                          </p>
                        </div>
                      </div>
                      <div className="roadmap__step__lft mb-5">
                        <div className=" roadmap__card ">
                          <h6 className="text-white-50">STAGE 1</h6>
                          <h4 className="text-white">
                            Stake your Squirrel(s) & Fractionalization
                          </h4>
                          <p className="m-0">Staking</p>
                          <p>
                            - We will be building and deploying our own staking
                            contract, where if you stake your Squirrel(s) for x
                            amount of days, you will receive $NUTS in return.
                          </p>
                          <p className="mb-0">Fractionalization</p>
                          <p>
                            - Another one of our goals is to build the first
                            fractionalization platform on Solana.{" "}
                          </p>
                          <p>
                            - On this platform, ANYONE will be able to create
                            their own Vault + Token.{" "}
                          </p>
                          <p>
                            - (We can use some of our purchased assets to place
                            in one of our vaults!)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="our__team">
                <h1 className="text-white text-center">OUR TEAM</h1>
                <div className="teams__cards">
                  <Row className="d-flex justify-content-center mt-5">
                    <Col
                      lg={6}
                      md={12}
                      className="d-flex flex-column align-items-center"
                    >
                      <div className="outer">
                        <div className="team__img">
                          <img className="img-fluid" src={teamImg1} alt="" />
                        </div>
                      </div>
                      <div className="team__content mt-3 text-center">
                        <h6 className="text-white">Ruby</h6>
                        <p className="text-danger text-center">
                          Project Lead / Community
                          <br className="line__brack" /> Manager
                        </p>
                      </div>
                    </Col>
                    <Col
                      lg={6}
                      md={12}
                      className="d-flex flex-column align-items-center"
                    >
                      <div className="outer">
                        <div className="team__img">
                          <img className="img-fluid" src={teamImg2} alt="" />
                        </div>
                      </div>

                      <div className="team__content mt-3 text-center">
                        <h6 className="text-white">Coco </h6>
                        <p className="text-danger">Artist</p>
                      </div>
                    </Col>
                    <Col
                      lg={6}
                      md={12}
                      className="d-flex flex-column align-items-center"
                    >
                      <div className="outer">
                        <div className="team__img">
                          <img className="img-fluid" src={teamImg3} alt="" />
                        </div>
                      </div>

                      <div className="team__content mt-3 text-center">
                        <h6 className="text-white">Nova Launch </h6>
                        <p className="text-danger">Dev Team</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fga">
          <div className="container">
            <div className="title">
              <h1 className=" text-center" title="FAQS">
                FREQUENTLY ASKED <br /> QUESTIONS
              </h1>
            </div>
            <div className="question">
              <div className="row d-flex justify-content-center mt-5 pt-5">
                <div className="col-lg-7 col-md-10">
                  <Row>
                    <Col span={12}>
                      <div className="tab__btn text-center ">
                        <button
                          onClick={() => setShowTabs(true)}
                          className={showTabs ? "btn__lft" : ""}
                        >
                          About this Project
                        </button>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="text-center ">
                        <button
                          onClick={() => setShowTabs(false)}
                          className={!showTabs ? "btn__lft" : ""}
                        >
                          About NFTs
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="faq__qus mt-3 row d-flex justify-content-center">
              <div className="col-lg-7  col-md-10 ">
                <div className="faq__qus__btn">
                  <Collapse
                    expandIconPosition={"right"}
                    defaultActiveKey={["1"]}
                    onChange={callback}
                    bordered={false}
                    style={{ color: "#2066b1" }}
                  >
                    {showTabs ? (
                      <>
                        <Panel header="Mint Date" key="1">
                          <h6 style={{ color: "2066b1" }}>{text1}</h6>
                        </Panel>
                        <Panel header="Mint Price" key="2">
                          <h6>{text2}</h6>
                        </Panel>
                        <Panel header="Mint Supply" key="3">
                          <h6>{text3}</h6>
                        </Panel>
                        <Panel header="Which wallet can I use?" key="4">
                          <h6>{text4}</h6>
                        </Panel>
                      </>
                    ) : (
                      <>
                        <Panel header="What is an NFT?" key="5">
                          <h6>{text51}</h6>
                          <h6>{text52}</h6>
                        </Panel>
                        <Panel
                          header="Why would I want to own an NFT? Can I make money on it?"
                          key="6"
                        >
                          <h6>{text61}</h6>
                          <h6>{text62}</h6>
                        </Panel>
                        <Panel
                          header="How do you know your NFT is authentic?"
                          key="7"
                        >
                          <h6>{text71}</h6>
                        </Panel>
                        <Panel
                          header="Which wallets will I be able to use to mint an NFT?"
                          key="8"
                        >
                          <h6>{text81}</h6>
                        </Panel>
                        <Panel
                          header="How can you ensure distribution of mints is random?"
                          key="10"
                          key="9"
                        >
                          <p style={{ fontSize: "16px" }}>{text91}</p>
                        </Panel>
                      </>
                    )}
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="follow">
          <div className="follow__wrapped">
            <div className="container stayup">
              <h3 className="text-white text-center">
                Stay up to date with our project
              </h3>
              <p className="text-center">
                Join us on Discord and follow our Twitter.
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <div className="social__icon d-flex justify-content-center">
              <div className="icn">
                <BsDiscord />
              </div>
              <div className="icn">
                <AiOutlineTwitter />
              </div>
            </div>
            <p className="mt-5 mb-0 text-center">
              Copyright © 2021, Secret Squirrel Association.
            </p>
            <p className="mt-0 text-center">
              All trademarks and copyrights belong to their respective owners.
            </p>
            <a href="" className="">
              <div className="btm__img">
                <a href="">
                  {" "}
                  <img src={FtrText} alt="" />
                </a>
              </div>
              <p>
                Powered by Nova Launch - The Premier Partner in NFTs on Solana
              </p>
            </a>
            <a href="">
              <div className="btm__text">
                <p>Built on the</p>
                <div className="btm__text__img">
                  <img src={SLogo} alt="" />
                </div>
                <p>Solana blockchain.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
