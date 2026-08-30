export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  methodology: string;
  techStack: string[];
  domain: string;
  featured: boolean;
  
  // Section 1: Overview
  overview: string;
  businessProblem: string;
  myRole: string;
  
  // Section 2: Requirements & Elicitation
  elicitationDetails: string;
  coreConstraints: {
    title: string;
    description: string;
    icon: string;
  }[];
  
  // Section 3: Architecture & Workflow
  architectureOverview: string;
  umlLanes?: {
    lane: string;
    responsibilities: string[];
  }[];
  
  // Section 4: Data Contracts & Technical Specs
  contractTitle: string;
  contractType: 'json' | 'sql';
  contractSnippet: string;
  contractDescription: string;
  
  // Section 5: BDD Acceptance Criteria (Gherkin)
  gherkinFeatureTitle: string;
  gherkinScenarios: {
    title: string;
    type: 'happy' | 'exception';
    given: string[];
    when: string;
    then: string[];
  }[];
  
  // Section 6: Delivery & Business Impact
  impactMetrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  impactSummary: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    proficiency: 'Expert' | 'Advanced' | 'Proficient';
    barFill: number;
    experience: string;
    tags: string[];
  }[];
}

export interface CareerExperience {
  period: string;
  title: string;
  company: string;
  location?: string;
  officialTitle?: string;
  highlights: string[];
  technologies: string[];
}

export const BIO_DATA = {
  name: "Mohammed Zaid",
  title: "Technical Business Analyst",
  tagline: "5 Years of Experience in Requirements Gathering, Stakeholder Management, & Agile Delivery",
  phone: "9108123622",
  email: "md.zaid2705@gmail.com",
  linkedin: "https://www.linkedin.com/in/mxzaid",
  github: "https://github.com/mohammed-zaid",
  location: "Dubai, UAE / Remote",
  yearsExperience: "5 Years",
  status: "Available for Technical Business Analyst Roles",
  education: {
    institution: "AMC Engineering College",
    degree: "Electrical and Electronics Engineering",
    period: "2016 – 2020"
  },
  summary: "Business Analyst with 5 years of experience in requirements gathering, stakeholder management, and end-to-end delivery across complex enterprise domains. Proven track record of managing the requirement development process from initiation to closure for global collaborative teams, ensuring defect-free and unambiguous specifications. Expert in eliciting business, stakeholder, and solution requirements, establishing traceability to the business vision, and translating them into user stories and acceptance criteria.",
  quickStats: [
    { label: "Years BA Experience", value: "5 Years" },
    { label: "Report Speed Increase", value: "80%" },
    { label: "B2B Cart Min Enforced", value: "500 AED" },
    { label: "Page Load Improvement", value: "50%" },
  ]
};

export const FEATURED_PROJECTS: CaseStudy[] = [
  {
    id: "nada-al-rabee-b2b",
    title: "B2B Wholesale Digital Ordering Platform",
    subtitle: "Self-Service B2B Wholesale Ordering & Real-Time Credit Management",
    client: "Nada Al Rabee Frozen Foods",
    role: "Technical Business Analyst (Contract)",
    methodology: "Agile / Scrum",
    techStack: ["Requirements Gathering", "MVP Scoping", "BDD Gherkin", "UML 2.5 Diagrams", "REST APIs", "PostgreSQL", "Jira", "Confluence", "Figma"],
    domain: "Wholesale FMCG & Supply Chain",
    featured: true,
    
    overview: "Nada Al Rabee, a regional wholesale food distributor, was bottlenecked by a manual, offline ordering process. Corporate clients placed bulk orders via phone and email, causing severe inventory sync delays, manual credit limit calculation errors, and an inability to scale.",
    businessProblem: "Wholesale e-commerce involves high logic complexity: corporate clients have dynamic pricing tiers, strict Net-30 credit limits, and require real-time inventory locking for volatile frozen stock.",
    myRole: "Gathered requirements directly from stakeholders to understand functional goals, defining the MVP scope and prioritizing product features based on feasibility and business value.",
    
    elicitationDetails: "Led requirement elicitation workshops to translate broad operational needs into strict digital business rules.",
    coreConstraints: [
      {
        title: "Minimum Order Thresholds",
        description: "The system must strictly enforce a minimum B2B cart value of 500 AED before permitting progression to checkout flow.",
        icon: "ShoppingCart"
      },
      {
        title: "Credit Line Management",
        description: "The platform must execute real-time credit limit validation against the client's account status before authorizing a transaction.",
        icon: "CreditCard"
      },
      {
        title: "Inventory Volatility Handling",
        description: "The system cannot allow backorders for out-of-stock SKUs; partial shortages require immediate UI auto-adjustment prompts.",
        icon: "PackageX"
      }
    ],
    
    architectureOverview: "Mapped critical cross-system handoffs using UML 2.5 Activity Diagrams across a 3-lane architecture (User, Frontend UI, Backend/DB).",
    umlLanes: [
      {
        lane: "Lane 1: B2B User",
        responsibilities: [
          "Selects Frozen SKUs & verifies cart total >= 500 AED",
          "Initiates Checkout & requests Account Credit authorization",
          "Handles session token recovery or zero-state empty state UI"
        ]
      },
      {
        lane: "Lane 2: Frontend UI (React.js + Tailwind)",
        responsibilities: [
          "Enforces minimum order threshold UI validation guard",
          "Passes JWT Authorization headers on restricted views",
          "Renders ISO 8601 formatted date tables with currency separation"
        ]
      },
      {
        lane: "Lane 3: Backend / Database (REST API + PostgreSQL)",
        responsibilities: [
          "Validates active JWT token session authenticity",
          "Executes atomic query checking available Net-30 credit limit",
          "Locks real-time warehouse inventory for frozen stock"
        ]
      }
    ],
    
    contractTitle: "Technical API Contract: Invoice History Payload",
    contractType: "json",
    contractDescription: "Required the backend database to enforce ISO 8601 date formatting and separate currency markers from numerical values to allow for immediate, frictionless table sorting in frontend components.",
    contractSnippet: `[
  {
    "invoice_id": 1,
    "invoice_number": 52314,
    "date_of_invoice": "2026-08-26",
    "total_amount": 12550.00,
    "currency": "AED",
    "status": "PAID"
  },
  {
    "invoice_id": 2,
    "invoice_number": 52316,
    "date_of_invoice": "2026-08-26",
    "total_amount": 14350.00,
    "currency": "AED",
    "status": "UNPAID"
  }
]`,
    
    gherkinFeatureTitle: "Feature: B2B Invoice History Retrieval",
    gherkinScenarios: [
      {
        title: "Scenario 1: Successful Data Retrieval (Happy Path)",
        type: "happy",
        given: [
          "the B2B user is authenticated with a valid session token",
          "the user has at least one past invoice record in the database"
        ],
        when: "the user clicks the \"Invoice History\" navigation link",
        then: [
          "the system queries the invoice API payload",
          "the system renders the invoice data table displaying: Invoice Number, Date, Total Amount, and Status."
        ]
      },
      {
        title: "Scenario 2: Zero-State UI (Exception Flow)",
        type: "exception",
        given: [
          "a newly registered B2B user is authenticated with a valid session token",
          "the user has zero past invoice records in the database"
        ],
        when: "the user clicks the \"Invoice History\" navigation link",
        then: [
          "the system queries the invoice API",
          "the API returns an empty array []",
          "the system renders a zero-state UI displaying the message: \"No Invoice History found.\""
        ]
      }
    ],
    
    impactMetrics: [
      { label: "Engineering Velocity", value: "+40%", detail: "Rework eliminated between React & DB teams" },
      { label: "Minimum Cart Rule", value: "500 AED", detail: "Strictly enforced before checkout" },
      { label: "QA Testing Automation", value: "100%", detail: "BDD Gherkin scripts passed directly to QA" }
    ],
    impactSummary: [
      "Accelerated Engineering Velocity: By translating abstract business goals into highly technical, sprint-ready architectural blueprints, drastically reduced developer rework and eliminated UI/DB misalignment.",
      "Scalable Architecture: Established JSON data contracts and UML documentation created a sustainable, standardized framework for the application's future feature integrations.",
      "Seamless QA Automation: Adoption of strict BDD acceptance criteria directly accelerated the QA testing lifecycle, minimizing defect leakage into production."
    ]
  },
  {
    id: "cloud-collab-data-migration",
    title: "Enterprise Data Migration & Analytics Optimization",
    subtitle: "High-Performance PostgreSQL to ClickHouse Analytics Migration",
    client: "Cloud Collab (Client: Mobileum)",
    role: "Technical Business Analyst (Software Development Engineer 2)",
    methodology: "Agile / Scrum",
    techStack: ["Impact Assessment", "GAP Analysis", "PostgreSQL", "ClickHouse", "Change Data Capture (CDC)", "SQL", "Jira", "Confluence"],
    domain: "Global Telecom & Enterprise Workspace",
    featured: true,
    
    overview: "Cloud Collab's enterprise reporting dashboard was suffering from severe performance degradation. The application relied entirely on a monolithic PostgreSQL database to handle both transactional workloads (OLTP) and complex analytical reporting (OLAP).",
    businessProblem: "As data volumes scaled past 100 million rows, generating monthly utilization reports for enterprise clients took over 15 minutes, leading to timeout errors and critical client dissatisfaction. Target: migrate analytical reporting to ClickHouse column-oriented storage engine.",
    myRole: "Conducted detailed impact assessments and facilitated sprint planning, contributing to process improvements that delivered an 80% increase in enterprise report generation speed.",
    
    elicitationDetails: "Applied structured business analysis frameworks to evaluate schemas for ClickHouse compatibility, ensuring defect-free requirements through rigorous elicitation.",
    coreConstraints: [
      {
        title: "Zero-Downtime Requirement",
        description: "The migration could not interrupt core application functionality. Transactional writes had to remain on PostgreSQL.",
        icon: "ShieldCheck"
      },
      {
        title: "Data Latency Limits",
        description: "Enterprise clients required near real-time dashboard updates, necessitating a continuous CDC streaming pipeline rather than nightly batch uploads.",
        icon: "Zap"
      },
      {
        title: "Schema Transformation",
        description: "PostgreSQL row-based storage and B-tree indexes had to be translated into ClickHouse's denormalized wide-table MergeTree engine.",
        icon: "Database"
      }
    ],
    
    architectureOverview: "Mapped clear separation of concerns from a unified database to a decoupled OLTP/OLAP architecture across 3 distinct layers.",
    umlLanes: [
      {
        lane: "Layer 1: Operational Layer (PostgreSQL)",
        responsibilities: [
          "Retains all transactional workloads (OLTP)",
          "Enforces ACID compliance & referential integrity",
          "Handles active user writes and account session states"
        ]
      },
      {
        lane: "Layer 2: The Bridge (Change Data Capture - CDC)",
        responsibilities: [
          "Implements CDC via PostgreSQL logical replication protocol",
          "Establishes continuous, low-latency data event stream",
          "Streams WAL changes directly into ClickHouse staging tables"
        ]
      },
      {
        lane: "Layer 3: Analytical Layer (ClickHouse)",
        responsibilities: [
          "Serves exclusively as the read-replica for reporting queries",
          "Executes vectorized columnar aggregations on 100M+ rows",
          "Orders analytics data using MergeTree sorting keys"
        ]
      }
    ],
    
    contractTitle: "Technical Data Contract: Event Analytics DDL Schema Mapping",
    contractType: "sql",
    contractDescription: "Authored strict schema mapping contract requiring the database engineering team to abandon standard primary keys in favor of MergeTree sorting keys optimized for time-series aggregation.",
    contractSnippet: `-- Source: PostgreSQL (Transactional)
CREATE TABLE workspace_events (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    event_type VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Target: ClickHouse (Analytical)
-- BA Directive: Denormalize and utilize MergeTree for heavy aggregation
CREATE TABLE workspace_events_analytics (
    user_id UUID,
    event_type String,
    created_at DateTime
) ENGINE = MergeTree()
ORDER BY (created_at, event_type);`,
    
    gherkinFeatureTitle: "Feature: Zero-Downtime Data Reconciliation & Query Execution",
    gherkinScenarios: [
      {
        title: "Scenario 1: Sub-Second Report Generation (Happy Path)",
        type: "happy",
        given: [
          "the CDC pipeline is actively replicating PostgreSQL write logs into ClickHouse",
          "an enterprise user requests a 30-day utilization report on a 100M+ row dataset"
        ],
        when: "the reporting dashboard queries the ClickHouse analytical read-replica",
        then: [
          "ClickHouse executes vectorized columnar aggregation",
          "the system returns dashboard results in sub-second duration (< 1 second)",
          "no locks or performance degradation occur on the PostgreSQL transactional database."
        ]
      },
      {
        title: "Scenario 2: Transactional Fallback & Integrity Guard (Exception Flow)",
        type: "exception",
        given: [
          "a temporary network latency occurs in the CDC replication bridge"
        ],
        when: "a user executes a real-time transactional write to PostgreSQL",
        then: [
          "PostgreSQL processes the write with full ACID compliance",
          "the reporting engine displays a subtle 'Data updating...' status badge",
          "the transaction completes with 0% data loss or application timeout."
        ]
      }
    ],
    
    impactMetrics: [
      { label: "Report Speed Increase", value: "80%", detail: "Delivered via ClickHouse analytics" },
      { label: "Query Execution Time", value: "< 1 Sec", detail: "Down from 15+ minutes" },
      { label: "Storage Footprint Drop", value: "5-10x", detail: "Columnar compression savings" }
    ],
    impactSummary: [
      "Query Performance: Reduced enterprise report generation time from 15+ minutes to sub-second query responses, delivering an 80% increase in report generation speed.",
      "Infrastructure Cost Reduction: Exploiting ClickHouse's columnar compression reduced analytical storage footprint by 5-10x compared to original PostgreSQL tables.",
      "Operational Stability: Cleanly separating OLTP and OLAP workloads prevented slow analytical queries from locking critical transactional tables."
    ]
  },
  {
    id: "manipal-patient-portal",
    title: "Enterprise Patient Portal & Appointment Booking Engine",
    subtitle: "Real-Time Doctor Scheduling & Concurrency-Safe Appointment System",
    client: "Manipal Hospitals (via Appiness Interactive)",
    role: "IT Business Analyst (Software Developer Web)",
    methodology: "Agile / Scrum",
    techStack: ["Requirements Gathering", "Functional Specifications", "REST APIs", "JSON Contracts", "BDD Gherkin", "React.js", "Jira", "Confluence", "Figma"],
    domain: "Healthcare & Digital Patient Experience",
    featured: true,
    
    overview: "Manipal Hospitals required a modernized, high-performance digital patient portal to manage a massive volume of daily outpatient consultations. The existing workflow relied heavily on manual call-center bookings, resulting in high patient friction, scheduling conflicts, and limited visibility into doctor availability across multiple hospital branches.",
    businessProblem: "The objective was to architect and deliver a responsive web application that allowed patients to discover specialists, view real-time calendar availability, and book confirmed appointments autonomously — while enforcing strict healthcare concurrency rules to prevent double-booking collisions.",
    myRole: "Acting as a hybrid Business Analyst and Web Developer, my role involved eliciting strict healthcare scheduling rules, managing the Agile backlog, authoring comprehensive functional specifications, and designing the API data contracts to power the frontend interface.",
    
    elicitationDetails: "Healthcare scheduling requires strict adherence to business rules regarding doctor availability, slot durations, and multi-location management. Authored comprehensive functional specifications to govern the booking engine.",
    coreConstraints: [
      {
        title: "Dynamic Slot Generation",
        description: "Doctor availability had to be calculated in real-time, factoring in emergency block-outs and varying consultation durations (e.g., 15 mins for general, 30 mins for specialists).",
        icon: "Clock"
      },
      {
        title: "Multi-Branch Mapping",
        description: "Patients needed to filter doctors by specific hospital locations, requiring a strict relational mapping between Doctor_ID and Facility_ID.",
        icon: "MapPin"
      },
      {
        title: "Concurrency & Session Lock",
        description: "Designed the requirement for a 10-minute temporary lock on an appointment slot once a patient initiated checkout to prevent double-booking collisions.",
        icon: "ShieldCheck"
      }
    ],
    
    architectureOverview: "Mapped the end-to-end appointment booking flow across 3 distinct layers — patient-facing UI, scheduling middleware, and hospital backend systems.",
    umlLanes: [
      {
        lane: "Lane 1: Patient (Web Portal)",
        responsibilities: [
          "Searches for specialists by department, location, and availability",
          "Selects an available time slot and initiates appointment checkout",
          "Receives booking confirmation with reference number"
        ]
      },
      {
        lane: "Lane 2: Scheduling Middleware (REST API)",
        responsibilities: [
          "Calculates real-time slot availability from doctor calendar data",
          "Applies 10-minute temporary session lock on selected slot",
          "Validates patient insurance eligibility and appointment type"
        ]
      },
      {
        lane: "Lane 3: Hospital Backend (Database)",
        responsibilities: [
          "Stores doctor schedules with facility-level granularity",
          "Manages concurrent slot state (AVAILABLE / LOCKED / BOOKED)",
          "Triggers SMS/email confirmation upon successful booking"
        ]
      }
    ],
    
    contractTitle: "Technical API Contract: Appointment Booking Payload",
    contractType: "json",
    contractDescription: "Specified the exact REST API structure for the POST /api/v1/appointments/book endpoint to ensure the engineering team had a clear, defect-free target for the sprint.",
    contractSnippet: `{
  "endpoint": "POST /api/v1/appointments/book",
  "headers": {
    "Authorization": "Bearer {session_token}",
    "Content-Type": "application/json"
  },
  "payload": {
    "patient_id": "P-983475",
    "doctor_id": "DOC-2049",
    "facility_id": "BLR-OLD-AIRPORT",
    "appointment_type": "IN_PERSON",
    "slot": {
      "date": "2026-09-02",
      "start_time": "14:30:00Z",
      "duration_minutes": 15
    }
  },
  "expected_response": {
    "status": 201,
    "booking_reference": "MNPL-883-XC",
    "confirmation_status": "CONFIRMED"
  }
}`,
    
    gherkinFeatureTitle: "Feature: Real-Time Appointment Slot Concurrency Lock",
    gherkinScenarios: [
      {
        title: "Scenario 1: Prevent Double-Booking During Active Checkout (Happy Path)",
        type: "happy",
        given: [
          "the patient selects an available 14:30 slot for DOC-2049",
          "the patient proceeds to the appointment confirmation screen"
        ],
        when: "the system processes the slot selection request",
        then: [
          "the system must temporarily lock the 14:30 slot for 10 minutes",
          "the slot must display as UNAVAILABLE to all other concurrent users",
          "the patient receives a booking reference number upon confirmation."
        ]
      },
      {
        title: "Scenario 2: Release Slot Upon Session Timeout (Exception Flow)",
        type: "exception",
        given: [
          "the patient has a locked slot at 14:30",
          "10 minutes elapse without confirmation"
        ],
        when: "the session timeout threshold is reached",
        then: [
          "the system must release the lock automatically",
          "the slot must display as AVAILABLE in the master schedule",
          "the patient is shown a session expired notification."
        ]
      }
    ],
    
    impactMetrics: [
      { label: "Digital Adoption", value: "High", detail: "Shifted bookings from call center to portal" },
      { label: "Double-Booking", value: "0%", detail: "Eliminated via 10-min session lock" },
      { label: "Patient Discovery", value: "Instant", detail: "Optimized specialist search & filters" }
    ],
    impactSummary: [
      "Digital Adoption: Successfully shifted a significant percentage of daily bookings from the manual call center to the automated digital portal.",
      "Concurrency Resolution: The implementation of the temporary session-lock logic entirely eliminated appointment collisions during high-traffic booking windows.",
      "Accelerated Patient Discovery: The modernized UI and optimized search filters allowed patients to find relevant specialists and available slots instantly, vastly improving the patient experience."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Business Analysis",
    icon: "FileCode",
    description: "Core requirements engineering, stakeholder alignment, and specification authoring.",
    skills: [
      { name: "Stakeholder Management", proficiency: "Expert", barFill: 98, experience: "5 yrs", tags: ["Requirement Elicitation", "Stakeholder Alignment"] },
      { name: "Requirements Gathering & Analysis", proficiency: "Expert", barFill: 98, experience: "5 yrs", tags: ["Defect-Free Specs", "Vision Traceability"] },
      { name: "User Stories & Acceptance Criteria", proficiency: "Expert", barFill: 96, experience: "5 yrs", tags: ["BDD Gherkin", "Jira", "Confluence"] },
      { name: "Impact Assessment & Problem Solving", proficiency: "Advanced", barFill: 94, experience: "5 yrs", tags: ["GAP Analysis", "Process Improvement"] },
      { name: "BRD / FRD Authoring", proficiency: "Expert", barFill: 96, experience: "5 yrs", tags: ["Business Specs", "Functional Specs"] }
    ]
  },
  {
    category: "Domain & Delivery",
    icon: "Users",
    description: "Client Lifecycle Management (CLM), Agile/Scrum delivery, and change management.",
    skills: [
      { name: "Client Lifecycle Management (CLM)", proficiency: "Advanced", barFill: 94, experience: "4 yrs", tags: ["CLM Systems", "Account Lifecycle"] },
      { name: "Agile / Scrum Delivery", proficiency: "Expert", barFill: 98, experience: "5 yrs", tags: ["Sprint Planning", "Jira", "Confluence"] },
      { name: "Process Improvement & Change Management", proficiency: "Advanced", barFill: 94, experience: "5 yrs", tags: ["80% Report Speedup", "Zero Defect"] },
      { name: "End-to-End Delivery Support", proficiency: "Expert", barFill: 96, experience: "5 yrs", tags: ["Initiation to Closure", "Engineering Bridge"] }
    ]
  },
  {
    category: "Tools & Technologies",
    icon: "Database",
    description: "Essential business analysis tools, data analysis, REST APIs, and database technologies.",
    skills: [
      { name: "JIRA & Confluence", proficiency: "Expert", barFill: 98, experience: "5 yrs", tags: ["Backlog Grooming", "Acceptance Criteria"] },
      { name: "SQL & PostgreSQL Data Analysis", proficiency: "Advanced", barFill: 94, experience: "5 yrs", tags: ["Data Specs", "PostgreSQL", "ClickHouse"] },
      { name: "REST APIs & Data Payload Specs", proficiency: "Advanced", barFill: 94, experience: "5 yrs", tags: ["ISO 8601", "JSON Contracts", "OpenAPI"] },
      { name: "Data Analysis & Python", proficiency: "Proficient", barFill: 88, experience: "4 yrs", tags: ["Data Modeling", "ETL Specs"] },
      { name: "Azure & Cloud Platforms", proficiency: "Proficient", barFill: 85, experience: "4 yrs", tags: ["Cloud Analytics", "Enterprise Deployments"] }
    ]
  }
];

export const CAREER_HISTORY: CareerExperience[] = [
  {
    period: "05/2026 – 07/2026",
    title: "Technical Business Analyst (Contract)",
    company: "Nada Al Rabee Frozen Foods",
    location: "Dubai, UAE",
    highlights: [
      "Gathered requirements directly from stakeholders to understand functional goals, defining the MVP scope and prioritizing product features based on feasibility and business value for a B2B/B2C web application.",
      "Managed the Agile product backlog, designed user workflows, and authored user stories with comprehensive acceptance criteria to support rapid software development."
    ],
    technologies: ["Requirements Gathering", "Stakeholder Elicitation", "MVP Scoping", "User Stories", "Acceptance Criteria", "BRD/FRD", "JIRA", "Confluence", "REST APIs", "SQL"]
  },
  {
    period: "07/2025 – 04/2026",
    title: "Technical Business Analyst",
    officialTitle: "Software Development Engineer 2",
    company: "Cloud Collab (Client: Mobileum)",
    highlights: [
      "Managed the requirements lifecycle from initiation to closure for global telecom platforms, ensuring alignment between business stakeholders and technology delivery teams.",
      "Obtained stakeholder buy-in and signoff on requirements, translating complex business needs into clear user stories and precise acceptance criteria in Jira.",
      "Conducted detailed impact assessments and facilitated sprint planning, contributing to process improvements that delivered an 80% increase in enterprise report generation speed.",
      "Ensured defect-free requirements through rigorous elicitation, acting as a critical communication bridge between business domains and engineering."
    ],
    technologies: ["Requirements Gathering", "Stakeholder Management", "Impact Assessment", "Sprint Planning", "JIRA", "Confluence", "SQL", "PostgreSQL", "ClickHouse", "REST APIs"]
  },
  {
    period: "09/2024 – 07/2025",
    title: "IT Business Analyst",
    officialTitle: "Software Developer Web",
    company: "Appiness Interactive",
    highlights: [
      "Seido — B2B Data Intelligence: Employed comprehensive requirement elicitation techniques to develop business and solution requirements for a large-scale data intelligence platform, ensuring specifications were unambiguous and suitable for developers.",
      "Life's On — Manipal Hospitals: Led discussions with project teams to establish traceability to the business vision, authoring functional specifications for role-based workflows across 10+ hospital departments."
    ],
    technologies: ["Requirement Elicitation", "BRD/FRD Authoring", "Traceability Mapping", "Role-Based Workflows", "Stakeholder Management", "JIRA", "Confluence", "Data Analysis"]
  },
  {
    period: "07/2023 – 08/2024",
    title: "Technical Consultant & Analyst (Contract)",
    company: "Freelance",
    highlights: [
      "Facilitated stakeholder discussions to clearly identify results needed to achieve business goals, translating them into scalable solutions and defining the MVP scope.",
      "Proactively suggested system improvements and designed workflows to create sustainable business value, navigating ambiguity to drive successful outcomes from concept to implementation."
    ],
    technologies: ["Stakeholder Elicitation", "MVP Scoping", "Workflow Design", "Process Improvement", "Change Management", "JIRA", "Confluence"]
  },
  {
    period: "06/2022 – 06/2023",
    title: "Front End Developer",
    company: "MathCo",
    highlights: [
      "Contributed to the end-to-end delivery of an Account Lifecycle Management (CLM) application, collaborating with diverse teams to translate complex business logic into practical UI building blocks.",
      "Implemented role-based access control and data visualizations to solve complex business problems and meet strict stakeholder needs."
    ],
    technologies: ["Client Lifecycle Management (CLM)", "Role-Based Access Control", "Data Visualization", "Business Logic Translation", "End-to-End Delivery Support"]
  },
  {
    period: "03/2021 – 06/2022",
    title: "Front End Developer",
    company: "Sirapatech",
    highlights: [
      "Redesigned an e-commerce platform, evaluating legacy systems to recommend and implement enhancements that reduced initial page load time by 50%."
    ],
    technologies: ["Legacy System Evaluation", "Process Improvement", "Impact Assessment", "Performance Analysis"]
  }
];

export const SAMPLE_SQL_QUERIES = [
  {
    id: "query-1",
    name: "Nada Al Rabee B2B Minimum Cart & Credit Line Check Spec",
    sql: `-- B2B Credit Validation & Cart Threshold Guard Query (PostgreSQL)
SELECT 
    c.client_id,
    c.company_name,
    c.credit_limit_aed,
    c.current_balance_aed,
    (c.credit_limit_aed - c.current_balance_aed) AS available_credit_aed,
    CASE 
        WHEN :cart_total_aed < 500.00 THEN 'REJECTED_MINIMUM_CART_THRESHOLD'
        WHEN (c.current_balance_aed + :cart_total_aed) > c.credit_limit_aed THEN 'REJECTED_CREDIT_EXCEEDED'
        ELSE 'AUTHORIZED'
    END AS transaction_status
FROM b2b_clients c
WHERE c.client_id = :authenticated_client_id
  AND c.account_status = 'ACTIVE';`,
    description: "Enforces 500 AED minimum B2B order threshold and Net-30 real-time credit limit validation."
  },
  {
    id: "query-2",
    name: "Cloud Collab (Mobileum) ClickHouse Analytics 80% Speedup Spec",
    sql: `-- Target ClickHouse Columnar Table DDL (Authored by Mohammed Zaid)
CREATE TABLE workspace_events_analytics (
    user_id UUID,
    event_type String,
    created_at DateTime
) ENGINE = MergeTree()
ORDER BY (created_at, event_type);

-- Sub-second ClickHouse Query Delivering 80% Report Speed Increase
SELECT 
    event_type,
    toStartOfMonth(created_at) AS report_month,
    count() AS total_events
FROM workspace_events_analytics
WHERE created_at >= '2026-01-01'
GROUP BY event_type, report_month
ORDER BY report_month DESC;`,
    description: "ClickHouse DDL delivering 80% report speed increase for global telecom platform."
  },
  {
    id: "query-3",
    name: "Manipal Hospitals Appointment Slot Concurrency Lock Spec",
    sql: `-- Appointment Slot Concurrency Lock & Availability Query (PostgreSQL)
-- BA Directive: Enforce 10-minute temporary session lock to prevent double-booking

SELECT 
    ds.slot_id,
    ds.doctor_id,
    ds.facility_id,
    ds.slot_date,
    ds.start_time,
    ds.duration_minutes,
    CASE 
        WHEN ds.status = 'LOCKED' 
             AND ds.locked_at + INTERVAL '10 minutes' > NOW()
        THEN 'UNAVAILABLE'
        WHEN ds.status = 'BOOKED' THEN 'BOOKED'
        ELSE 'AVAILABLE'
    END AS availability_status
FROM doctor_slots ds
WHERE ds.doctor_id = :selected_doctor_id
  AND ds.facility_id = :selected_facility_id
  AND ds.slot_date = :selected_date
ORDER BY ds.start_time ASC;`,
    description: "Enforces 10-minute concurrency lock on appointment slots to prevent double-booking across multi-branch hospital system."
  }
];
