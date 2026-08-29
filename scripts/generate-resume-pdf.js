const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const doc = new PDFDocument({ margin: 40, size: 'A4' });
const outputPath = path.join(__dirname, '../public/Mohammed_Zaid_Resume.pdf');

doc.pipe(fs.createWriteStream(outputPath));

// Colors
const primaryColor = '#0f172a'; // Slate 900
const accentColor = '#059669';  // Emerald 600
const textDark = '#1e293b';     // Slate 800
const textMuted = '#64748b';    // Slate 500

// Header
doc.fillColor(primaryColor).fontSize(22).font('Helvetica-Bold').text('Mohammed Zaid', { align: 'center' });
doc.fillColor(accentColor).fontSize(13).font('Helvetica-Bold').text('Technical Business Analyst', { align: 'center' });
doc.moveDown(0.3);

doc.fillColor(textMuted).fontSize(9).font('Helvetica')
   .text('md.zaid2705@gmail.com  |  +91 9108123622  |  www.linkedin.com/in/mxzaid', { align: 'center' });

doc.moveDown(0.8);
doc.strokeColor('#e2e8f0').lineWidth(1).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
doc.moveDown(0.8);

// Profile Summary Section
doc.fillColor(primaryColor).fontSize(12).font('Helvetica-Bold').text('PROFILE SUMMARY');
doc.moveDown(0.3);
doc.fillColor(textDark).fontSize(9.5).font('Helvetica').lineGap(3);

const summaryLines = [
  "• Business Analyst with 5 years of experience in requirements gathering, stakeholder management, and end-to-end delivery across complex enterprise domains.",
  "• Proven track record of managing the requirement development process from initiation to closure for global collaborative teams, ensuring defect-free and unambiguous specifications.",
  "• Expert in eliciting business, stakeholder, and solution requirements, establishing traceability to the business vision, and translating them into user stories and acceptance criteria.",
  "• Hands-on experience in account/client lifecycle management systems and driving Agile/Scrum delivery utilizing Jira and Confluence to create sustainable business value."
];

summaryLines.forEach(line => doc.text(line));

doc.moveDown(0.8);
doc.strokeColor('#e2e8f0').lineWidth(1).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
doc.moveDown(0.8);

// Skills Section
doc.fillColor(primaryColor).fontSize(12).font('Helvetica-Bold').text('SKILLS');
doc.moveDown(0.3);

const skills = [
  { label: 'Business Analysis', value: 'Stakeholder Management, Business Requirements Gathering & Analysis, User Stories & Acceptance Criteria, Impact Assessment & Problem Solving, BRD/FRD.' },
  { label: 'Domain & Delivery', value: 'Client Lifecycle Management (CLM), Agile / Scrum Delivery, Process Improvement, Change Management, End-to-End Delivery Support.' },
  { label: 'Tools & Technologies', value: 'JIRA, Confluence, SQL, REST APIs, Data Analysis, React.js, Python, PostgreSQL, Azure.' }
];

skills.forEach(s => {
  doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold').text(`• ${s.label}: `, { continued: true })
     .fillColor(textDark).font('Helvetica').text(s.value);
  doc.moveDown(0.2);
});

doc.moveDown(0.8);
doc.strokeColor('#e2e8f0').lineWidth(1).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
doc.moveDown(0.8);

// Professional Experience Section
doc.fillColor(primaryColor).fontSize(12).font('Helvetica-Bold').text('PROFESSIONAL EXPERIENCE');
doc.moveDown(0.5);

const experiences = [
  {
    company: 'Nada Al Rabee Frozen Foods – Dubai, UAE',
    role: 'Technical Business Analyst (Contract)',
    period: '05/2026 – 07/2026',
    bullets: [
      'Gathered requirements directly from stakeholders to understand functional goals, defining the MVP scope and prioritizing product features based on feasibility and business value for a B2B/B2C web application.',
      'Managed the Agile product backlog, designed user workflows, and authored user stories with comprehensive acceptance criteria to support rapid software development.'
    ]
  },
  {
    company: 'Cloud Collab (Client: Mobileum)',
    role: 'Technical Business Analyst (Official Title: Software Development Engineer 2)',
    period: '07/2025 – 04/2026',
    bullets: [
      'Managed the requirements lifecycle from initiation to closure for global telecom platforms, ensuring alignment between business stakeholders and technology delivery teams.',
      'Obtained stakeholder buy-in and signoff on requirements, translating complex business needs into clear user stories and precise acceptance criteria in Jira.',
      'Conducted detailed impact assessments and facilitated sprint planning, contributing to process improvements that delivered an 80% increase in enterprise report generation speed.',
      'Ensured defect-free requirements through rigorous elicitation, acting as a critical communication bridge between business domains and engineering.'
    ]
  },
  {
    company: 'Appiness Interactive',
    role: 'IT Business Analyst (Official Title: Software Developer Web)',
    period: '09/2024 – 07/2025',
    bullets: [
      'Seido — B2B Data Intelligence: Employed comprehensive requirement elicitation techniques to develop business and solution requirements for a large-scale data intelligence platform, ensuring specifications were unambiguous and suitable for developers.',
      'Life\'s On — Manipal Hospitals: Led discussions with project teams to establish traceability to the business vision, authoring functional specifications for role-based workflows across 10+ hospital departments.'
    ]
  },
  {
    company: 'Freelance',
    role: 'Technical Consultant & Analyst (Contract)',
    period: '07/2023 – 08/2024',
    bullets: [
      'Facilitated stakeholder discussions to clearly identify results needed to achieve business goals, translating them into scalable solutions and defining the MVP scope.',
      'Proactively suggested system improvements and designed workflows to create sustainable business value, navigating ambiguity to drive successful outcomes from concept to implementation.'
    ]
  },
  {
    company: 'MathCo',
    role: 'Front End Developer',
    period: '06/2022 – 06/2023',
    bullets: [
      'Contributed to the end-to-end delivery of an Account Lifecycle Management (CLM) application, collaborating with diverse teams to translate complex business logic into practical UI building blocks.',
      'Implemented role-based access control and data visualizations to solve complex business problems and meet strict stakeholder needs.'
    ]
  },
  {
    company: 'Sirapatech',
    role: 'Front End Developer',
    period: '03/2021 – 06/2022',
    bullets: [
      'Redesigned an e-commerce platform, evaluating legacy systems to recommend and implement enhancements that reduced initial page load time by 50%.'
    ]
  }
];

experiences.forEach(exp => {
  doc.fillColor(primaryColor).fontSize(10.5).font('Helvetica-Bold').text(exp.company, { continued: true });
  doc.fillColor(textMuted).fontSize(9).font('Helvetica').text(`  (${exp.period})`, { align: 'right' });
  
  doc.fillColor(accentColor).fontSize(9.5).font('Helvetica-Oblique').text(exp.role);
  doc.moveDown(0.2);

  doc.fillColor(textDark).fontSize(9).font('Helvetica').lineGap(2);
  exp.bullets.forEach(b => {
    doc.text(`• ${b}`);
  });

  doc.moveDown(0.6);
});

doc.moveDown(0.4);
doc.strokeColor('#e2e8f0').lineWidth(1).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
doc.moveDown(0.8);

// Education Section
doc.fillColor(primaryColor).fontSize(12).font('Helvetica-Bold').text('EDUCATION');
doc.moveDown(0.3);
doc.fillColor(primaryColor).fontSize(10).font('Helvetica-Bold').text('AMC Engineering College', { continued: true });
doc.fillColor(textMuted).fontSize(9).font('Helvetica').text('  (2016 – 2020)', { align: 'right' });
doc.fillColor(textDark).fontSize(9.5).font('Helvetica-Oblique').text('Electrical and Electronics Engineering');

doc.end();
console.log('PDF Resume regenerated with updated LinkedIn URL.');
