import styled from "styled-components";


const Main = (props) => {
    return (
        <Container>
            <ShareBox>Share
            <div style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 16px 0px 16px"
                       

                    }}>
                <img src="/images/user.svg" alt="" style={{
                        width: "48px",
                        borderRadius: "50%",
                        marginRight: "8px"
                    }}/>
                <button style={{
                        outline: "none",
                        color: "rgba(0, 0, 0, 0.6)",
                        fontSize: "15px",
                        lineHeight: "1.5",
                        minHeight: "48px",
                        background: "transparent",
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "600",
                        margin: "4px 0",
                        flexGrow: "1",
                        borderRadius: "35px",
                        paddingLeft: "16px",
                        border: "1px solid rgb(0, 0, 0, 0.15)",
                        backgroundColor: "white",
                        textAlign: "left",
                       

                    }}>Start a post</button>
            </div>
            <div style={{
                marginTop: "40px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                paddingBottom: "4px"
            }}>
                <button style={{
                        border: "none",
                        outline: "none",
                        color: "rgba(0, 0, 0, 0.6)",
                        fontSize: "15px",
                        lineHeight: "1.5",
                        minHeight: "48px",
                        background: "transparent",
                        alignItems: "center",
                        fontWeight: "600",
                       

                    }}>
                    <img src="/images/photo1.svg" alt="" />
                    <span style={{color: "#70b5f9"}}>Photo</span>
                </button>
                <button style={{
                        border: "none",
                        outline: "none",
                        color: "rgba(0, 0, 0, 0.6)",
                        fontSize: "15px",
                        lineHeight: "1.5",
                        minHeight: "48px",
                        background: "transparent",
                        alignItems: "center",
                        fontWeight: "600",

                    }}>
                    <img src="/images/video.svg" alt="" />
                    <span style={{color: "#70b5f9"}}>Video</span>
                </button>
                <button style={{
                        border: "none",
                        outline: "none",
                        color: "rgba(0, 0, 0, 0.6)",
                        fontSize: "15px",
                        lineHeight: "1.5",
                        minHeight: "48px",
                        background: "transparent",
                        alignItems: "center",
                        fontWeight: "600",
                       

                    }}>
                    <img src="/images/event.svg" alt="" />
                    <span style={{color: "#70b5f9"}}>Event</span>
                </button>
                <button style={{
                        border: "none",
                        outline: "none",
                        color: "rgba(0, 0, 0, 0.6)",
                        fontSize: "15px",
                        lineHeight: "1.5",
                        minHeight: "48px",
                        background: "transparent",
                        alignItems: "center",
                        fontWeight: "600",

                       

                    }}>
                    <img src="/images/article.svg" alt="" />
                    <span style={{color: "#70b5f9"}}>Write article</span>
                </button>
            </div>
            </ShareBox>
            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src="/images/user.svg" alt="" />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <img src="/images/point.png" alt="" style={{width: "30px"}}/>
                        </button>
                    </SharedActor>
                    <Description>
                        Description
                    </Description>
                    <SharedImg>
                        <a>
                            <img src="/images/pays.jpeg" alt="" />
                        </a>
                    </SharedImg>
                    <SocialCounts>
                        <li>
                            <button>
                                <img src="/images/like.svg" alt="" />
                                <img src="/images/clap.svg" alt="" />
                                <span>69</span>
                            </button>
                        </li>
                        <li>
                            <a>
                                1 comment
                            </a>
                        </li>
                    </SocialCounts>
                    <SocialAction>
                        <button>
                            <img src="/images/like.svg" alt="" />
                            <span>Like</span>
                        </button>
                        <button>
                            <img src="images/comment.svg" alt="" />
                            <span>Comments</span>
                        </button>
                        <button>
                            <img src="images/share.svg" alt="" />
                            <span>Share</span>
                        </button>
                        <button>
                            <img src="images/send.svg" alt="" />
                            <span>Send</span>
                        </button>
                    </SocialAction>
                    
                </Article>
            </div>
        </Container>
    );
};

const Container = styled.div`
    grid-area: main;
`;

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);


`;

const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;

    
`;

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;

`;

const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    a{
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img{
            width: 48px;
            height: 48px;
        }

        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            span{
                text-align: left;
                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                }
                &:nth-child(n + 1) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }
    button {
        position: absolute;
        right: 12px;
        top: 0;
        background: transparent;
        border: none;
        outline: none;
    }
`;

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgb(0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;
`;

const SharedImg = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #f9fafb;
    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;

const SocialCounts = styled.ul`
    line-height: 1.3;
    display: flex;
    align-items: flex-start;
    overflow: auto;
    margin: 0 16px;
    padding: 8px 0;
    border-bottom: 1px solid #e9e5df;
    list-style: none;
    li{
        margin-right: 7px;
        font-size: 12px;
        button{
            display: flex;
            font-size: 16px;
        }
    }
`;

const SocialAction = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin: 0;
    min-height: 30px;
    padding: 4px 8px;

    button{
        display: inline-flex;
        align-items: center;
        padding: 8px;
        color: #0a66c2;

        @media (min-width: 768px)
        {
            span{
                margin-left: 8px;
            }
        }
    }

`;

export default Main;