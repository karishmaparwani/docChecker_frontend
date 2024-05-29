import React from 'react'
import { Viewer, Tooltip, Position } from '@react-pdf-viewer/core';
import {
    highlightPlugin,
    //HighlightArea,
} from '@react-pdf-viewer/highlight';
import ReviewBox from './ReviewBox';
import CardComponent from './CardComponent';
import Img from '../images/sample_photo.png'
import CommentBox from './CommentBox';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import BasicModal from './Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function HighlightDocument({fileUrl}) {
    const [message, setMessage] = React.useState('');
    const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) ?? []);
    let noteId = notes.length;
    const [showModal, setShowModal] = React.useState(false)
    const [modalTitle, setModalTitle] = React.useState('')
    const [modalActions, setModalActions] = React.useState()

    const noteEles = new Map();

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const confirmReviewSubmission = () => {
        localStorage.setItem("notes",JSON.stringify(notes))
        setModalTitle('Your review for rangoli_jain.pdf has been submitted successfully!!!')
        setModalActions(
            <Stack direction="row" sx={{margin: 'auto'}}>
                <Button
                    variant="contained"
                    onClick={closeModal}
                    >
                        Done
                </Button>
            </Stack>
        )
        console.log("Review Submitted")
    }



    const renderHighlightTarget = (props) => (
        <div
            style={{
                background: '#eee',
                display: 'flex',
                position: 'absolute',
                left: `${props.selectionRegion.left}%`,
                top: `${props.selectionRegion.top + props.selectionRegion.height}%`,
                transform: 'translate(0, 8px)',
                zIndex: 1,
            }}
        >
            <Tooltip
                position={Position.TopCenter}
                target={
                        <IconButton aria-label="add comment" onClick={props.toggle} >
<                           svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1976d2"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-2 13.17L18.83 16H4V4h16v13.17zM13 5h-2v4H7v2h4v4h2v-4h4V9h-4z"/></svg>
                        </IconButton>
                }
                content={() => <div style={{ width: '100px' }}>Add a note</div>}
                offset={{ left: 0, top: -8 }}
            />
        </div>
    );

    const getDate = () => {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return today.toLocaleDateString('en-US', options);
    }

    const renderHighlightContent = (props) => {
        const styling = {
            position: 'absolute',
            // left: `${props.selectionRegion.left}%`,
            left: '50%',
            top: `${props.selectionRegion.top + props.selectionRegion.height}%`,
            zIndex: 1,
            width: '25vw'
        }
        const addNote = () => {
            if (message !== '') {
                const note = {
                    id: ++noteId,
                    content: message,
                    highlightAreas: props.highlightAreas,
                    quote: props.selectedText,
                    date: getDate()
                };
                setNotes(notes.concat([note]));
                props.cancel();
            }
        };

        return (
            <CardComponent
                name={"Jack Sparrow"} 
                img={Img}
                styling = {styling}
                getDate={getDate}
            >
                <CommentBox 
                    message={message}
                    setMessage={setMessage}
                    addNote={addNote}
                    cancel={props.cancel}
                />
            </CardComponent>
         );
    };

    const jumpToNote = (note) => {
        if (noteEles.has(note.id)) {
            noteEles.get(note.id).scrollIntoView();
        }
    };


    const renderHighlights = (props) => (
        <div>
            {notes.map((note) => (
                <React.Fragment key={note.id}>
                    {note.highlightAreas
                        .filter((area) => area.pageIndex === props.pageIndex)
                        .map((area, idx) => (
                            <div
                                key={idx}
                                style={Object.assign(
                                    {},
                                    {
                                        background: 'yellow',
                                        opacity: 0.4,
                                    },
                                    props.getCssProperties(area, props.rotation)
                                )}
                                onClick={() => jumpToNote(note)}
                                ref={(ref) => {
                                    noteEles.set(note.id, ref);
                                }}
                            />
                        ))}
                </React.Fragment>
            ))}
        </div>
    );
    
    const onSubmitReview = () => {
        setModalTitle('Are you sure you want to submit the review?')
        setModalActions(<>
            <Stack spacing={2} direction="row" sx={{margin: 'auto'}}>
                <Button
                    variant="contained"
                    onClick={confirmReviewSubmission}
                    >
                        Confirm
                </Button>
                <Button
                    variant="contained"
                    onClick={closeModal}
                    >
                        Cancel
                </Button>
            </Stack>   
            </>);
        openModal()
    }

    
    
    const highlightPluginInstance = highlightPlugin({
        renderHighlightTarget,
        renderHighlightContent,
        renderHighlights,
    });

    const { jumpToHighlightArea } = highlightPluginInstance;


    return (
        <React.Fragment>
            <div
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    borderTop: '0px',
                    display: 'flex',
                    height: '100%',
                   overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        flex: '1 1 0',
                        overflow: 'auto',
                    }}
                >
                    <Typography variant="h5" ml={5} mt={2} mb={2} sx={{ fontWeight: 'bold' }}>
                        rangoli_jain.pdf
                    </Typography>
                    <Viewer fileUrl={fileUrl} plugins={[highlightPluginInstance]} />
                </div>
                <div
                    style={{
                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                        width: '25%',
                        overflow: 'auto',
                    }}
                >
                    <Typography variant="h5" ml={5} mt={2} mb={2} sx={{ fontWeight: 'bold' }} >
                        Reviews
                    </Typography>
                        {notes.length === 0 && <div style={{ textAlign: 'center' }}>There is no note</div>}
                        {notes.map((note) => {
                            return (
                                <CardComponent
                                    key={note.id}
                                    note={note} 
                                    name={"Jack Sparrow"} 
                                    jumpToHighlightArea={jumpToHighlightArea}
                                    img={Img}
                                    styling= {{maxWidth: 345}}
                                    isReviewBox={true}
                                    >
                                    <ReviewBox note={note} />
                                </CardComponent>
            
                            )
                        })}
                </div>
            
            </div>
                <Button
                    variant="contained"
                     sx={{ height: '36px', width: '40vw', left: '30vw'}}
                    onClick={onSubmitReview}
                    >
                        Submit Review
                </Button>
                {showModal && 
                    <BasicModal openModal={openModal}
                    closeModal={closeModal}
                    showModal={showModal}
                    confirmReviewSubmission={confirmReviewSubmission}
                    modalTitle={modalTitle}
                    modalActions={modalActions} />
                }
        </React.Fragment>
       


     )
}

export default HighlightDocument