import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/theme/eclipse.css'; 
import 'codemirror/theme/yeti.css'// Example for the Solarized theme
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'



function Editor(props) {
  const [open,setOpen]=useState(true);
    const {
        value,
        displayName,
        onChange,
        language
    } = props;

    function handleChange(editor, data, value) {
        onChange(value);
    }

    return (
      <>
        <div className={`editor-container bg-dark-4 ${open ? " ":'collapsed'}`}>
            <div className='editor-title bg-dark-9 text-dark-4'>
                {displayName}
                <button
                    type="button"
                    className="expand-collapse-btn"
                    onClick={() => setOpen(prev => !prev)}>
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material-darker',
                    lineNumbers: true
                }} 
            />
        </div>
      </>
    );
}

export default Editor;

