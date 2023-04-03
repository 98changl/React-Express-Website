import { useState } from 'react';
import { Document, Page } from 'react-pdf';

import './ViewPDF.module.css';

function ViewPDF(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function removeTextLayerOffset() {
        const textLayers = document.querySelectorAll('.react-pdf__Page__textContent');
        textLayers.forEach(layer => {
            const { style } = layer;
            style.top = '0';
            style.left = '0';
            style.transform = '';
        });
    }

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    const { pdf } = props;

    return (
        <div>
            <Document
                file={pdf}
                options={{ workerSrc: 'pdf.worker.js' }}
                onLoadSuccess={onDocumentLoadSuccess}
                renderMode='canvas'
            >
                <Page
                    pageNumber={pageNumber}

                />
            </Document>
            <div>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <button type='button' disabled={pageNumber <= 1} onClick={previousPage}>
                    Previous
                </button>
                <button type='button' disabled={pageNumber >= numPages} onClick={nextPage}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default ViewPDF;