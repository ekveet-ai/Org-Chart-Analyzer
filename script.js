const { useState, useRef, useEffect } = React;

// Lucide React icons as functions
const Upload = () => React.createElement('svg', {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }),
    React.createElement('polyline', { points: '17,8 12,3 7,8' }),
    React.createElement('line', { x1: 12, y1: 3, x2: 12, y2: 15 })
);

const Search = () => React.createElement('svg', {
    width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('circle', { cx: 11, cy: 11, r: 8 }),
    React.createElement('path', { d: 'm21 21-4.35-4.35' })
);

const ZoomIn = () => React.createElement('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('circle', { cx: 11, cy: 11, r: 8 }),
    React.createElement('path', { d: 'm21 21-4.35-4.35' }),
    React.createElement('line', { x1: 9, y1: 11, x2: 13, y2: 11 }),
    React.createElement('line', { x1: 11, y1: 9, x2: 11, y2: 13 })
);

const ZoomOut = () => React.createElement('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('circle', { cx: 11, cy: 11, r: 8 }),
    React.createElement('path', { d: 'm21 21-4.35-4.35' }),
    React.createElement('line', { x1: 9, y1: 11, x2: 13, y2: 11 })
);

const RotateCcw = () => React.createElement('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('polyline', { points: '1,4 1,10 7,10' }),
    React.createElement('path', { d: 'M3.51 15a9 9 0 1 0 2.13-9.36L1 10' })
);

const FileText = () => React.createElement('svg', {
    width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('path', { d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' }),
    React.createElement('polyline', { points: '14,2 14,8 20,8' }),
    React.createElement('line', { x1: 16, y1: 13, x2: 8, y2: 13 }),
    React.createElement('line', { x1: 16, y1: 17, x2: 8, y2: 17 }),
    React.createElement('polyline', { points: '10,9 9,9 8,9' })
);

const Users = () => React.createElement('svg', {
    width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }),
    React.createElement('circle', { cx: 9, cy: 7, r: 4 }),
    React.createElement('path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }),
    React.createElement('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
);

const ChevronDown = () => React.createElement('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('polyline', { points: '6,9 12,15 18,9' })
);

const ChevronRight = () => React.createElement('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('polyline', { points: '9,18 15,12 9,6' })
);

const Eye = () => React.createElement('svg', {
    width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('path', { d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' }),
    React.createElement('circle', { cx: 12, cy: 12, r: 3 })
);

const AlertCircle = () => React.createElement('svg', {
    width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('circle', { cx: 12, cy: 12, r: 10 }),
    React.createElement('line', { x1: 12, y1: 8, x2: 12, y2: 12 }),
    React.createElement('line', { x1: 12, y1: 16, x2: 12.01, y2: 16 })
);

const CheckCircle = () => React.createElement('svg', {
    width: 48, height: 48, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' }),
    React.createElement('polyline', { points: '22,4 12,14.01 9,11.01' })
);

const Loader = () => React.createElement('svg', {
    width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
    className: 'animate-spin'
}, 
    React.createElement('line', { x1: 12, y1: 2, x2: 12, y2: 6 }),
    React.createElement('line', { x1: 12, y1: 18, x2: 12, y2: 22 }),
    React.createElement('line', { x1: 4.93, y1: 4.93, x2: 7.76, y2: 7.76 }),
    React.createElement('line', { x1: 16.24, y1: 16.24, x2: 19.07, y2: 19.07 }),
    React.createElement('line', { x1: 2, y1: 12, x2: 6, y2: 12 }),
    React.createElement('line', { x1: 18, y1: 12, x2: 22, y2: 12 }),
    React.createElement('line', { x1: 4.93, y1: 19.07, x2: 7.76, y2: 16.24 }),
    React.createElement('line', { x1: 16.24, y1: 7.76, x2: 19.07, y2: 4.93 })
);

const Download = () => React.createElement('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }),
    React.createElement('polyline', { points: '7,10 12,15 17,10' }),
    React.createElement('line', { x1: 12, y1: 15, x2: 12, y2: 3 })
);

const Edit3 = () => React.createElement('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('path', { d: 'M12 20h9' }),
    React.createElement('path', { d: 'M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' })
);

const Save = () => React.createElement('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('path', { d: 'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z' }),
    React.createElement('polyline', { points: '17,21 17,13 7,13 7,21' }),
    React.createElement('polyline', { points: '7,3 7,8 15,8' })
);

const X = () => React.createElement('svg', {
    width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('line', { x1: 18, y1: 6, x2: 6, y2: 18 }),
    React.createElement('line', { x1: 6, y1: 6, x2: 18, y2: 18 })
);

const Plus = () => React.createElement('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('line', { x1: 12, y1: 5, x2: 12, y2: 19 }),
    React.createElement('line', { x1: 5, y1: 12, x2: 19, y2: 12 })
);

const Trash2 = () => React.createElement('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('polyline', { points: '3,6 5,6 21,6' }),
    React.createElement('path', { d: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' }),
    React.createElement('line', { x1: 10, y1: 11, x2: 10, y2: 17 }),
    React.createElement('line', { x1: 14, y1: 11, x2: 14, y2: 17 })
);

const Copy = () => React.createElement('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('rect', { x: 9, y: 9, width: 13, height: 13, rx: 2, ry: 2 }),
    React.createElement('path', { d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' })
);

const FileImage = () => React.createElement('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('path', { d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' }),
    React.createElement('polyline', { points: '14,2 14,8 20,8' }),
    React.createElement('circle', { cx: 10, cy: 13, r: 2 }),
    React.createElement('path', { d: 'm20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22' })
);

const FileJson = () => React.createElement('svg', {
    width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round'
}, 
    React.createElement('path', { d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' }),
    React.createElement('polyline', { points: '14,2 14,8 20,8' }),
    React.createElement('path', { d: 'M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1' }),
    React.createElement('path', { d: 'M14 12a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1 1 1 0 0 0-1 1v1a1 1 0 0 1-1 1' })
);

const OrgChartAnalyzer = () => {
    const [pdfFile, setPdfFile] = useState(null);
    const [extractedText, setExtractedText] = useState('');
    const [pdfImages, setPdfImages] = useState([]);
    const [orgData, setOrgData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [zoomLevel, setZoomLevel] = useState(100);
    const [selectedNode, setSelectedNode] = useState(null);
    const [expandedNodes, setExpandedNodes] = useState(new Set());
    const [isProcessing, setIsProcessing] = useState(false);
    const [processingStatus, setProcessingStatus] = useState('');
    const [pdfError, setPdfError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editingNode, setEditingNode] = useState(null);
    const [showExportMenu, setShowExportMenu] = useState(false);
    const [editForm, setEditForm] = useState({
        name: '',
        title: '',
        department: '',
        email: '',
        phone: '',
        description: ''
    });
    const fileInputRef = useRef(null);
    const exportMenuRef = useRef(null);

    const sampleOrgData = {
        id: 'ceo',
        name: 'Tim Rose',
        title: 'Chief Executive Officer',
        department: 'Executive',
        email: 'tim.rose@mountisa.qld.gov.au',
        phone: '+61 7 4747 3200',
        description: 'CEO of Mount Isa City Council (until 31/12/25)',
        children: [
            {
                id: 'director-infrastructure',
                name: 'Andrew Hobbs',
                title: 'Director Infrastructure Services',
                department: 'Infrastructure',
                email: 'andrew.hobbs@mountisa.qld.gov.au',
                phone: '+61 7 4747 3201',
                description: 'Oversees infrastructure services (until 12/05/2029)',
                children: [
                    {
                        id: 'manager-water',
                        name: 'Geoffrey Smart',
                        title: 'Manager Water and Sewer',
                        department: 'Water & Sewer',
                        email: 'geoffrey.smart@mountisa.qld.gov.au',
                        phone: '+61 7 4747 3202',
                        description: 'Acting manager for water and sewer operations'
                    },
                    {
                        id: 'manager-projects',
                        name: 'Rithy Poch',
                        title: 'Manager Major Projects',
                        department: 'Major Projects',
                        email: 'rithy.poch@mountisa.qld.gov.au',
                        phone: '+61 7 4747 3203',
                        description: 'Manages major infrastructure projects (until 22/01/27)'
                    }
                ]
            },
            {
                id: 'director-corporate',
                name: 'Kelvin Tytherleigh',
                title: 'Director Corporate Services',
                department: 'Corporate Services',
                email: 'kelvin.tytherleigh@mountisa.qld.gov.au',
                phone: '+61 7 4747 3204',
                description: 'Oversees corporate services (until 19/05/2029)',
                children: [
                    {
                        id: 'manager-finance',
                        name: 'Aaron Motsi',
                        title: 'Manager Corporate and Financial Services',
                        department: 'Finance',
                        email: 'aaron.motsi@mountisa.qld.gov.au',
                        phone: '+61 7 4747 3205',
                        description: 'Manages finance and corporate services (until 08/01/2027)'
                    }
                ]
            },
            {
                id: 'director-community',
                name: 'Chad King',
                title: 'Director Community Services',
                department: 'Community Services',
                email: 'chad.king@mountisa.qld.gov.au',
                phone: '+61 7 4747 3206',
                description: 'Oversees community services (until 13/08/27)',
                children: [
                    {
                        id: 'manager-strategy',
                        name: 'Natasha Hydon',
                        title: 'Manager Strategy, Policy and Regulation',
                        department: 'Strategy & Policy',
                        email: 'natasha.hydon@mountisa.qld.gov.au',
                        phone: '+61 7 4747 3207',
                        description: 'Manages strategy and policy (until 05/07/2027)'
                    }
                ]
            }
        ]
    };

    const getMaxDepth = (node) => {
        if (!node || !node.children || node.children.length === 0) return 1;
        return 1 + Math.max(...node.children.map(child => getMaxDepth(child)));
    };

    const countNodes = (node) => {
        if (!node) return 0;
        let count = 1;
        if (node.children) {
            count += node.children.reduce((sum, child) => sum + countNodes(child), 0);
        }
        return count;
    };

    const getDepartments = (node, departments = new Set()) => {
        if (!node) return Array.from(departments);
        departments.add(node.department);
        if (node.children) {
            node.children.forEach(child => getDepartments(child, departments));
        }
        return Array.from(departments);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (exportMenuRef.current && !exportMenuRef.current.contains(event.target)) {
                setShowExportMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (window.pdfjsLib) {
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        }
    }, []);

    useEffect(() => {
        const initializeApp = () => {
            setOrgData(sampleOrgData);
            setExpandedNodes(new Set(['ceo', 'director-infrastructure', 'director-corporate', 'director-community']));
        };
        setTimeout(initializeApp, 100);
    }, []);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setPdfFile(file);
            setPdfError(null);
            setIsProcessing(true);
            setProcessingStatus('Loading PDF...');
            
            try {
                const arrayBuffer = await file.arrayBuffer();
                await processPDF(arrayBuffer, file.name);
            } catch (error) {
                console.error('Error processing PDF:', error);
                setPdfError(`Error processing PDF: ${error.message}`);
                setIsProcessing(false);
            }
        } else {
            setPdfError('Please select a valid PDF file');
        }
    };

    const processPDF = async (arrayBuffer, fileName) => {
        if (!window.pdfjsLib) {
            throw new Error('PDF.js library not loaded');
        }

        setProcessingStatus('Parsing PDF document...');
        
        try {
            const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const numPages = pdf.numPages;
            
            let allText = '';
            const images = [];
            
            for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                setProcessingStatus(`Processing page ${pageNum} of ${numPages}...`);
                const page = await pdf.getPage(pageNum);
                
                const textContent = await page.getTextContent();
                const pageText = textContent.items.map(item => item.str).join(' ');
                allText += `\n--- Page ${pageNum} ---\n${pageText}\n`;
                
                const viewport = page.getViewport({ scale: 1.5 });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                
                await page.render({ canvasContext: context, viewport: viewport }).promise;
                const imageDataUrl = canvas.toDataURL('image/png');
                images.push({
                    pageNumber: pageNum,
                    imageUrl: imageDataUrl,
                    width: viewport.width,
                    height: viewport.height
                });
            }
            
            setProcessingStatus('Analysis complete!');
            setExtractedText(allText);
            setPdfImages(images);
            setOrgData(createEnhancedSampleData(fileName, allText));
            setExpandedNodes(new Set(['root']));
            
            setTimeout(() => {
                setIsProcessing(false);
                setProcessingStatus('');
            }, 1000);
            
        } catch (error) {
            throw new Error(`Failed to process PDF: ${error.message}`);
        }
    };

    const createEnhancedSampleData = (fileName, extractedText) => {
        const wordCount = extractedText.split(/\s+/).length;
        const pageCount = (extractedText.match(/--- Page \d+ ---/g) || []).length;
        
        // Try to extract CEO and director information from the text
        const ceoMatch = extractedText.match(/CHIEF EXECUTIVE OFFICER\s+([A-Z\s]+)/i);
        const ceoName = ceoMatch ? ceoMatch[1].trim() : 'Document Analysis';
        
        return {
            id: 'root',
            name: ceoName,
            title: 'Chief Executive Officer',
            department: 'Executive',
            email: 'ceo@mountisa.qld.gov.au',
            phone: '+61 7 4747 3200',
            description: `Extracted from ${fileName} - ${pageCount} pages, ${wordCount} words extracted.`,
            children: [
                {
                    id: 'infrastructure',
                    name: 'Infrastructure Services',
                    title: 'Director Infrastructure Services',
                    department: 'Infrastructure',
                    email: 'infrastructure@mountisa.qld.gov.au',
                    phone: '+61 7 4747 3201',
                    description: 'Infrastructure and operations department',
                    children: []
                },
                {
                    id: 'corporate',
                    name: 'Corporate Services',
                    title: 'Director Corporate Services',
                    department: 'Corporate',
                    email: 'corporate@mountisa.qld.gov.au',
                    phone: '+61 7 4747 3202',
                    description: 'Corporate services and finance department',
                    children: []
                },
                {
                    id: 'community',
                    name: 'Community Services',
                    title: 'Director Community Services',
                    department: 'Community',
                    email: 'community@mountisa.qld.gov.au',
                    phone: '+61 7 4747 3203',
                    description: 'Community services and development department',
                    children: []
                }
            ]
        };
    };

    const exportToJSON = () => {
        const dataToExport = {
            exportDate: new Date().toISOString(),