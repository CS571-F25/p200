import { Card, Row, Col } from "react-bootstrap";
import { memo, useState } from "react";
import ImageEditor from "./ImageEditor";

function SubscriptionItemBar(props) {

    const [croppedImage, setCroppedImage] = useState(null);
    const [showEditor, setShowEditor] = useState(false);

    // prefer cropped image (data URL) if present, otherwise props.imgUrl
    const imgSrc = croppedImage || props.imgUrl;

    return (
        
        <Card style={{
            backgroundColor: props.color,
            marginBottom: "1rem",
            width: "600px",
            height: "150px",
            alignContent: "center",
            border: "6px outset #000000ff",
            textAlign:"center",
        }}>
            <Row style={{alignItems: "center"}}>
                <Col xs="auto" style={{ paddingLeft: 12 }}>
                    {imgSrc ? (
                        <div style={{ position: "relative", display: "inline-block" }}>
                            <img
                                style={{
                                    height: "120px",           // 80% of 150px
                                    width: "120px",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    borderRadius: 12,
                                }}
                                src={imgSrc}
                                alt={`${props.title} logo`}
                            />
                            <button
                                onClick={() => setShowEditor(true)}
                                title="Edit image"
                                style={{
                                    position: "absolute",
                                    left: 6,
                                    top: 6,
                                    background: "rgba(0,0,0,0.6)",
                                    color: "white",
                                    border: "none",
                                    padding: "4px 6px",
                                    borderRadius: 6,
                                    cursor: "pointer",
                                    fontSize: 12
                                }}
                            >
                                Edit
                            </button>
                        </div>
                    ) : (
                        <div
                            onClick={() => setShowEditor(true)}
                            style={{
                                height: "120px",
                                width: "120px",
                                background: "#eee",
                                borderRadius: 12,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#aaa",
                                cursor: "pointer"
                            }}
                        >
                            Add Image
                        </div>
                    )}
                </Col>

                <Col>
                    <div style={{ fontWeight: "bold", fontSize: 24 }}>{props.title}</div>
                    <div style={{ fontSize: 14 }}>Renews {props.renewCycleTime}</div>
                    <div style={{ fontSize: 14 }}>Next: {props.renewDate}</div>
                </Col>

                <Col xs="auto" style={{ textAlign: "right", paddingRight: 12 }}>
                    <div style={{ fontSize: 20, }}>{props.price}</div>
                </Col>
            </Row>

            <ImageEditor
                show={showEditor}
                imgUrl={imgSrc || props.imgUrl}
                onSave={(dataUrl) => {
                    setCroppedImage(dataUrl);
                    // if parent wants to persist changes, call provided callback
                    props.onImageChange && props.onImageChange(dataUrl);
                }}
                onClose={() => setShowEditor(false)}
            />
        </Card>
    );
}

export default memo(SubscriptionItemBar);