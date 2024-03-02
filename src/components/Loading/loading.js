import React, { useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./loading.css";

// function usePrevPropValue(value) {
//     const ref = useRef();
//     useEffect(() => {
//         ref.current = value;
//     })
//     return ref.current;
// }

const Loading = ({ nextShow }) => {
    const [show, /*setShow*/] = useState(false)
    const prevShowRef = useRef(show)
    

    if (nextShow !== prevShowRef.current) {
        prevShowRef.current = nextShow;
    }
    const prevShow = prevShowRef.current
    console.log(show)
    

    // componentDidUpdate(nextProps) {
    //     if (nextProps.show !== this.state.show) {
    //         this.setState({show: nextProps.show})
    //     }
    //     console.log({show: nextProps.show})
    // }
    console.log({show})
    return (
        <>
            { 
                prevShow ? (
                    <div id="loading-backdrop">
                        <Spinner animation="border" variant="primary" />
                    </div>
                ) : null
            }
        </>
    );
}

export default Loading;