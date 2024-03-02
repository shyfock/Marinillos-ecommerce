import styled from "styled-components";
import { ChevronLeft, ChevronRight, ImageBox, ImageCaption, NavButton, Thumbnail, ThumbnailList } from "./SlideshowElements";
import slideItems from "./data";
import { useState } from "react";

const View = () => <Slideshow items={slideItems}/>;

const Slideshow = (props) => {
    const [{ items, activeIndex }, setState] = useState({
        items: props.items,
        activeIndex: 0, //begin with the first item
    });

    const moveTo = (newIndex) => () => {
        if (newIndex === -1) {
            // jump from the first image to the last
            setState((s) => ({ ...s, activeIndex: items.length - 1 }));
            return;
        }
        if (newIndex === items.length) {
            // jump from the last image to the first
            setState((s) => ({ ...s, activeIndex: 0 }));
            return;
        }

        setState((s) => ({ ...s, activeIndex: newIndex }));
    };

    return (
        <SlideWrapper>
            <ImageBox>
                <img alt={items[activeIndex].caption} src={items[activeIndex].image} />
                <NavButton position="left" onClick={moveTo(activeIndex - 1)}>
                    <ChevronLeft />
                </NavButton>
                <NavButton position="right" onClick={moveTo(activeIndex + 1)}>
                    <ChevronRight />
                </NavButton>
                <ImageCaption>{items[activeIndex].caption}</ImageCaption>
            </ImageBox>
            <ThumbnailList>
                {items.map((item, index) => (
                    <Thumbnail active={activeIndex === index} src={item.image} onClick={moveTo(index)} key={item.caption}/>
                ))}
            </ThumbnailList>
        </SlideWrapper>
    )
};

const SlideWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;

export default View;