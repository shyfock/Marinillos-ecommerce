import React from "react";
import { useEffect, useState, useRef } from "react";


const URL = process.env.REACT_APP_API_URL + '/upload';

function UploadImages({ productId }) {
    const [files, setFiles] = useState([]);
    const [/*imgList,*/ setImgList] = useState(new FormData());
    //const [productId, setProductId] = useState("");
    
    const ref = useRef(null)

    useEffect(() => {
        
        function imagePreview(placeToInsertImagePreview) {
            console.log(files)
            cleanImgContainer()
            if (files) {
                let filesAmount = files.length;
                const imgContainer = document.getElementById(placeToInsertImagePreview)
                for (let i = 0; i < filesAmount; i++) {
                    let reader = new FileReader();
                    reader.onload = function(event) {
                        const img = document.createElement("img");
                        img.setAttribute("src", event.target.result);
                        img.setAttribute("class", "image-preview")
                        imgContainer.insertAdjacentElement("afterbegin", img);
                        event.options = false
                    };
                    reader.readAsDataURL(files[i]);
                }
            }
        };
        
        const element = ref.current

        element.addEventListener('change', imagePreview("preview"))
        return () => {
            //element.removeEventListener('change', imagePreview("preview"))
        }
    }, [files])

    function handleChange() {
        let images = document.getElementById("input-files")
        let data = new FormData()
        for (const file of images.files) {
            data.append('file', file, file.name)
        }

        setImgList(() => data)
        setFiles(() => images.files)
    }

    function cleanImgContainer() {
        document.getElementById("preview").innerHTML = "";
        //document.getElementById("input-files").innerHTML = "";
        // while (imgList.hasChildNodes()) {
        //     imgList.removeChild(imgList.firstChild);
        // }
    }

    // function handleClick() {
    //     console.log(imgList)
    //     fetch(URL, {
    //         method: "POST",
    //         mode: "cors",
    //         cache: "no-cache",
    //         credentials: "same-origin",
    //         // headers: {
    //         //     "Content-Type": "application/json"
    //         // },
    //         redirect: "follow",
    //         referrerPolicy: "no-referrer",
    //         body: imgList,
    //     })
    // }
    
    return (
        <div className="container">
            <div className="form-group mt-3">
                <h4>Subir imágenes del producto</h4>
                <form
                    className="mt-4"
                    action={`${URL}/${productId}`}
                    method="POST"
                    encType="multipart/form-data"
                    target="_blank"
                >
                    <div className="form-group mb-3">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon9">Product ID</span>
                            <input className="form-control" type="text" name="text" value={productId} readOnly />
                        </div>
                        <label className="col-sm-2 control-label">Imágenes</label>
                        <input 
                            ref={ref}
                            type="file"
                            multiple
                            accept="image/jpeg, image/png"
                            name="file"
                            id="input-files"
                            className="form-control"
                            aria-describedby="basic-addon9"
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={cleanImgContainer}>Enviar imágenes</button>
                </form>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-12">
                    <div className="preview-images" id="preview"></div>
                </div>
            </div>
            <hr/>
            {/* <div className="card">
                <img src={message.url} alt={message.name}/>
                <p>{message.url}, {message.name}</p>
            </div> */}
        </div>
    );
}

export default UploadImages;