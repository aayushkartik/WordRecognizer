import React,{useState} from 'react';
import Tesseract from 'tesseract.js';
import ProBar from './proBar.js';
import './InputForm.css';
const InputForm = () =>{
    const[original,uploadedfile] = useState("");
    const[selectedLanguage,language] = useState("");
    const[completedProgress,progress] = useState(0);
    const[Word,Extracted] = useState("");

    const ImageAcceptor = (event) =>{
        uploadedfile(event.target.files[0]);
    } 
const Extraction=()=>{
    if(selectedLanguage!==""){
    Tesseract.recognize(
       original,
        selectedLanguage,
        { logger: m => {
        progress(m.progress)} }
      ).then(({ data: { text } }) => {
        Extracted(text);
      })
    }
    else{
        alert('language not selected please select language');
    }
}
const LanguageSelector = (event) => {
    language(event.target.value);
    console.log(event.target.value);
}
    return(
        <div className="form-border">

        <h1> Image text extractor</h1>
        <div className="inputFields">
         <div class="input-group container-sm">
         <input type="file" className="form-control"   onChange={ImageAcceptor}/>
         <select aria-label="Last name" className="form-control" placeholder="Select language" onChange={LanguageSelector} required>
             <option value="">Select language of text in image</option>
             <option value="eng">English</option>
             <option value="hin">Hindi</option>
             <option value="pan">Punjabi</option>
             <option value="kan">Kannada</option>
             <option value="mal">Malayalam</option>
             <option value="tam">Tamil</option>
             <option value="ben">Bengali</option>
             <option value="san">Sanskrit</option>
            </select>
         <button className="btn btn-primary" type="button" id="inputGroupFileAddon04" onClick={Extraction}>Extract</button>
         
        </div>
        {/* <ProBar prog={completedProgress}></ProBar> */}
         {completedProgress>0 &&(
             <>
             <ProBar prog={completedProgress}>progress</ProBar>
            </>
         )}
         </div>
         { completedProgress!=0 && Word!=="" &&(
             <>
             <div className="form-group container">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="12" value={Word}></textarea>
            </div>
             </>
         )}
        </div>
    )
}
export default InputForm;