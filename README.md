Cognitive Skills & Student Performance Dashboard

It combines data analysis (Python) and a full-stack dashboard (Next.js) to explore how students’ cognitive skills impact academic performance.

🔗 Live Dashboard: student-dashboard-igebra.vercel.app

📊 Features Implemented
🧪 Data Analysis (Python + Jupyter Notebook)

Created a synthetic dataset (students_processed.json)

Performed exploratory data analysis

Visualized distributions of cognitive skills

Checked correlations between skills and assessment scores

Trained a Linear Regression model to predict assessment scores

MSE: 32.98

R² Score: 0.44

Identified performance clusters and learning patterns

💻 Interactive Dashboard (Next.js + Recharts)

Overview Stats Cards: total students, average assessment score, top-performing class

Interactive Charts

Bar Chart: Skill vs assessment score

Scatter Chart: Attention vs performance

Radar Chart: Individual student profile

Student Table

Search by name

Sort by name or score

Scrollable table for large datasets

Insights Section

Key findings from analysis

ML model metrics (MSE & R²)

Responsive Design: desktop and mobile screens

🏗 Architecture Diagram

                    +-----------------+
           |  Synthetic Data |
           |  students.json  |
           +--------+--------+
                    |
                    v
           +-----------------+
           | Jupyter Notebook|
           | Data Analysis & |
           |  ML Model       |
           +--------+--------+
                    |
                    v
           +-----------------+
           |  Processed Data |
           | (JSON for Web)  |
           +--------+--------+
                    |
                    v
           +------------------+
           |  Next.js Frontend|
           | (React + Tailwind|
           |   + Recharts)    |
           +---------+--------+
                    |
     +--------------+---------------+
     |                              |
     v                              v
+------------+                 +------------+
| Overview   |                 | Charts     |
| Stats Cards|                 | Bar/Scatter|
+------------+                 | Radar      |
                               +------------+
     |                              |
     v                              v
+------------+                 +------------+
| Student    |                 | Insights   |
| Table      |                 | Section    |
+------------+                 +------------+
                    |
                    v
           +-----------------+
           | Deployment:     |
           | Vercel Hosting  |
           +-----------------+



📁 Project Structure
student-dashboard-igebra
│
├── components           # Dashboard UI components
│   ├── OverviewStats.js
│   ├── BarChart.js
│   ├── ScatterChart.js
│   ├── RadarChart.js
│   ├── StudentTable.js
│   └── Insights.js
│
├── pages
│   └── index.js
│
├── public
│   └── students_processed.json
│
├── notebook              # Data analysis + ML notebook
│   └── Student_Performance_Analysis.ipynb
│
├── styles
├── docs/screenshots      # Add your screenshot images here
├── package.json
└── README.md

⚙️ How to Run Locally
# Clone the repository
git clone https://github.com/keertha2004/student-dashboard-igebra.git

cd student-dashboard-igebra

# Install dependencies
npm install

# Run the app
npm run dev


Open http://localhost:3000
 to view the dashboard.

🚀 Deployment

Deployed on Vercel

Live link: student-dashboard-igebra.vercel.app

Automatic redeploy whenever commits are pushed

📈 Key Findings

Students with higher attention tend to perform better

Retention positively correlates with engagement time

Some students show low comprehension, highlighting areas for intervention

🧩 Tech Stack

Frontend: Next.js, React, TailwindCSS

Charts: Recharts

Data Analysis: Python (Jupyter Notebook)

Deployment: Vercel

👩‍💻 Author

Keerthana Ranganath
